// Builds optimized portrait assets from the photo in the project root.
// pic1.jpeg = high-resolution source photo.
// Optional pic.png = background-removed cutout with the same framing. When present, its alpha mask is
// upscaled and applied to the high-res photo so the face stays sharp. When absent, the photo keeps its
// background and its edges are feathered so it blends into the dark page.
import sharp from 'sharp';
import { existsSync, mkdirSync } from 'node:fs';

const OUT = 'public/assets';
mkdirSync(OUT, { recursive: true });

const hi = sharp('pic1.jpeg').rotate();
const { width, height } = await hi.clone().metadata();
const rgb = await hi.clone().removeAlpha().raw().toBuffer();

let alpha;
if (existsSync('pic.png')) {
  alpha = await sharp('pic.png')
    .ensureAlpha()
    .extractChannel('alpha')
    .resize(width, height, { kernel: 'lanczos3' })
    .blur(0.8)
    .raw()
    .toBuffer();
} else {
  // Feather the left, right and top edges (the bottom is faded by CSS masks in the components).
  const side = width * 0.16;
  const top = height * 0.08;
  const ease = (t) => t * t * (3 - 2 * t);
  alpha = Buffer.alloc(width * height);
  for (let y = 0; y < height; y++) {
    const ay = ease(Math.min(1, y / top));
    for (let x = 0; x < width; x++) {
      const ax = ease(Math.min(1, x / side, (width - 1 - x) / side));
      alpha[y * width + x] = Math.round(255 * ax * ay);
    }
  }
}

const rgba = Buffer.alloc(width * height * 4);
for (let i = 0; i < width * height; i++) {
  rgba[i * 4] = rgb[i * 3];
  rgba[i * 4 + 1] = rgb[i * 3 + 1];
  rgba[i * 4 + 2] = rgb[i * 3 + 2];
  rgba[i * 4 + 3] = alpha[i];
}
const cutout = await sharp(rgba, { raw: { width, height, channels: 4 } }).png().toBuffer();

for (const w of [1100, 720, 420]) {
  await sharp(cutout).resize({ width: w }).webp({ quality: 86, alphaQuality: 90 }).toFile(`${OUT}/portrait-${w}.webp`);
}

// Social share image (1200x630) on a dark backdrop
const portrait = await sharp(cutout).resize({ height: 600 }).png().toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#07070a' } })
  .composite([
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <defs><radialGradient id="g" cx="78%" cy="45%" r="45%"><stop offset="0" stop-color="#e5132b" stop-opacity="0.45"/><stop offset="1" stop-color="#e5132b" stop-opacity="0"/></radialGradient></defs>
        <rect width="1200" height="630" fill="url(#g)"/>
      </svg>`),
    },
    { input: portrait, gravity: 'southeast' },
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <text x="72" y="300" font-family="Impact, 'Arial Narrow', sans-serif" font-size="128" fill="#f4f1ec" letter-spacing="4">DIPESH</text>
        <text x="78" y="352" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="26" fill="#ff3d5a" letter-spacing="16">THE SERIES</text>
        <text x="78" y="420" font-family="Helvetica, Arial, sans-serif" font-weight="600" font-size="18" fill="#a7a6ad" letter-spacing="5">FULL STACK JAVA • CLOUD • MICROSERVICES</text>
      </svg>`),
    },
  ])
  .jpeg({ quality: 85 })
  .toFile(`${OUT}/og-image.jpg`);
console.log('images built');
