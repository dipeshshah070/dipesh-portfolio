// Prints resume/resume.html to public/assets/Dipesh_Shah_Resume.pdf with a locally installed Chrome or Edge.
// Set CHROME_PATH to override the browser location.
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const candidates = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean);
const browser = candidates.find((p) => existsSync(p));
if (!browser) throw new Error('No Chrome/Edge found — set CHROME_PATH.');

const out = resolve('public/assets/Dipesh_Shah_Resume.pdf');
execFileSync(browser, [
  '--headless=new',
  '--disable-gpu',
  '--no-pdf-header-footer',
  `--print-to-pdf=${out}`,
  pathToFileURL(resolve('resume/resume.html')).href,
], { stdio: 'inherit' });
console.log(`resume written to ${out}`);
