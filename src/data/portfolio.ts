/**
 * Central portfolio data — generated from Dipesh's resume (Dipesh-Resume-2026.pdf),
 * plus the Goldman Sachs role that started in April 2026.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Dipesh Bikram Shah',
  displayName: 'Dipesh Shah',
  firstName: 'DIPESH',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A SHAH ORIGINAL',
  role: 'Full Stack Java Engineer',
  tagline: ['Full Stack Java', 'Cloud', 'Microservices'],
  /** Shown as a short badge in the hero meta row. */
  badge: 'JAVA',
  yearsExperience: '3+',
  careerStart: '2023',
  intro:
    'Full Stack Java Engineer at Goldman Sachs with 3+ years building enterprise applications — Spring Boot microservices and APIs on the backend, Angular on the front end, shipped cloud-native on AWS with CDK, Fargate, API Gateway, Lambda and event-driven messaging.',
  location: 'Dallas, Texas',
  country: 'United States',
  email: 'shah.dipesh201@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/shahdipesh201/',
    github: 'https://github.com/dipeshshah070',
  },
  resumePdf: '/assets/Dipesh_Shah_Resume.pdf',
  resumeFileName: 'Dipesh_Shah_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Dipesh Shah',
  },
  interests: ['Cloud-Native Architecture', 'Event-Driven Systems', 'Cloud Security'],
};

export const education = [
  {
    school: 'Louisiana Tech University',
    place: 'Ruston, Louisiana',
    degree: 'Bachelor of Science — Computer Science',
    period: '',
    score: 'CGPA 3.72',
  },
];

export const experience = [
  {
    company: 'Goldman Sachs',
    role: 'Full Stack Java Engineer',
    place: '',
    period: 'April 2026 – Present',
    points: [
      'Built a Spring Boot microservice in Java and designed its REST APIs, exposed through Amazon API Gateway.',
      'Secured the service and its APIs with PingFederate (PingFed) authentication.',
      'Defined AWS infrastructure as code with AWS CDK, creating and managing the service stacks.',
      'Deployed the service on AWS Fargate with event-driven integrations using EventBridge, Lambda, SQS, SNS and S3.',
      'Monitored the service with CloudWatch and PagerDuty alerting; managed secrets with AWS Secrets Manager.',
    ],
  },
  {
    company: 'PNC Bank',
    role: 'Full Stack Java Developer',
    place: 'Dallas, Texas',
    period: 'September 2023 – March 2026',
    points: [
      'Engineered and maintained microservices using Java 17, leveraging records, sealed classes and enhanced switch expressions for cleaner, more maintainable code.',
      'Utilized Apache Kafka for asynchronous, event-driven communication between microservices.',
      'Implemented Spring Batch jobs for XML file ingestion, scheduled email notifications and large-scale data workflows.',
      'Deployed workloads into AWS EKS/Kubernetes, leveraging ConfigMaps, secrets and autoscaling policies.',
      'Integrated AWS services such as S3, EC2, RDS, Lambda and CloudWatch to build cloud-native, scalable solutions.',
      'Developed modular UI features in Angular 16 using RxJS, lazy loading and best-practice state management.',
      'Optimized MongoDB queries using indexes and aggregation frameworks for high-volume data operations.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  /** Leave empty when there are no numbers to show — the impact block is hidden. */
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

/**
 * The Originals. For now these are the career "productions" (one per role);
 * personal projects can be added here later and will appear alongside them.
 */
export const projects: Project[] = [
  {
    id: 'goldman-sachs',
    title: 'Goldman Sachs',
    year: '2026 –',
    genre: 'Java Microservices • AWS • Event-Driven',
    logline: 'A Spring Boot microservice with its own APIs behind API Gateway, secured with PingFederate and deployed on AWS Fargate — infrastructure defined in AWS CDK.',
    stack: ['Java', 'Spring Boot', 'REST APIs', 'API Gateway', 'PingFederate', 'AWS CDK', 'Fargate', 'EventBridge', 'Lambda', 'SQS', 'SNS', 'S3', 'CloudWatch', 'Secrets Manager', 'PagerDuty'],
    build: [
      'Built a Spring Boot microservice in Java and designed its REST APIs, exposed through Amazon API Gateway.',
      'Secured the service and its APIs with PingFederate (PingFed) authentication.',
      'Defined AWS infrastructure as code with AWS CDK, creating and managing the service stacks.',
      'Deployed the service on AWS Fargate with event-driven integrations using EventBridge, Lambda, SQS, SNS and S3.',
      'Monitored the service with CloudWatch and PagerDuty alerting; managed secrets with AWS Secrets Manager.',
    ],
    features: [
      'Spring Boot microservice with custom REST APIs',
      'APIs exposed through Amazon API Gateway',
      'PingFederate (PingFed) authentication',
      'Infrastructure as code with AWS CDK stacks',
      'Serverless containers on AWS Fargate',
      'Event-driven: EventBridge, Lambda, SQS & SNS',
      'CloudWatch monitoring & PagerDuty alerting',
      'AWS Secrets Manager for credentials',
    ],
    metrics: [
      { value: 'Apr 2026', label: 'joined' },
      { value: 'CDK', label: 'infrastructure as code' },
      { value: 'Fargate', label: 'serverless container runtime' },
    ],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
  {
    id: 'pnc-bank',
    title: 'PNC Bank',
    year: '2023 – 2026',
    genre: 'Banking • Microservices • AWS',
    logline: 'Java 17 microservices, Kafka event streams and Spring Batch workflows, deployed to AWS EKS.',
    stack: ['Java 17', 'Spring Boot', 'Kafka', 'Angular 16', 'Oracle', 'MongoDB', 'AWS EKS', 'Docker'],
    build: [
      'Engineered and maintained microservices using Java 17, leveraging records, sealed classes and enhanced switch expressions.',
      'Utilized Apache Kafka for asynchronous, event-driven communication between microservices.',
      'Implemented Spring Batch jobs for XML file ingestion, scheduled email notifications and large-scale data workflows.',
      'Built and optimized persistence layers with Spring Data JPA and Hibernate against Oracle; optimized MongoDB with indexes and aggregations.',
      'Deployed workloads into AWS EKS/Kubernetes with ConfigMaps, secrets and autoscaling; integrated S3, EC2, RDS, Lambda and CloudWatch.',
      'Developed modular UI features in Angular 16 using RxJS and lazy loading.',
    ],
    features: [
      'Event-driven microservices with Kafka',
      'Spring Batch data workflows',
      'Spring AOP for logging, metrics & transactions',
      'Containerized with Docker, deployed on AWS EKS',
      'JUnit & Mockito unit and integration tests',
    ],
    metrics: [
      { value: 'Java 17', label: 'records, sealed classes, switch expressions' },
      { value: '5', label: 'AWS services integrated (S3, EC2, RDS, Lambda, CloudWatch)' },
      { value: '2.5 yrs', label: 'Sep 2023 – Mar 2026' },
    ],
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

/** Awards & recognitions. Leave empty to hide the laurel cards — certifications still show. */
export const achievements: Achievement[] = [];

/** `link` is optional — add a Credly / verification URL to make the card clickable. */
export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'CompTIA', name: 'CompTIA Security+', link: 'https://www.credly.com/badges/a3b35006-6137-4680-a5ae-24dfc56aba6e/public_url' },
  { issuer: 'CompTIA', name: 'CompTIA Network+', link: 'https://www.credly.com/badges/e3fe7eca-f8cc-4ed6-b5bc-bdfacb932210/public_url' },
  { issuer: 'ThinkCloudly', name: 'SOC Bootcamp Certificate' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Java is the primary language',
    skills: [
      { name: 'Java', mono: 'Jv', note: '8 / 11 / 17 / 21' },
      { name: 'Python', mono: 'Py' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'TypeScript', mono: 'Ts' },
      { name: 'SQL', mono: 'Sq' },
      { name: 'PL/SQL', mono: 'Pl' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Spring ecosystem & messaging',
    skills: [
      { name: 'Spring Boot', mono: 'Sb' },
      { name: 'Spring MVC', mono: 'Mv' },
      { name: 'Spring Security', mono: 'Ss' },
      { name: 'Spring Batch', mono: 'Bt' },
      { name: 'Spring AOP', mono: 'Ao' },
      { name: 'Hibernate / JPA', mono: 'Hb' },
      { name: 'Kafka', mono: 'Kf' },
      { name: 'JMS', mono: 'Jm' },
      { name: 'OAuth', mono: 'Oa' },
      { name: 'Microservices', mono: 'Ms' },
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'SOAP / JAX-WS', mono: 'Sp' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Interfaces & the web platform',
    skills: [
      { name: 'Angular', mono: 'Ng' },
      { name: 'React', mono: 'Re' },
      { name: 'RxJS', mono: 'Rx' },
      { name: 'Angular Material', mono: 'Am' },
      { name: 'HTML5', mono: 'Ht' },
      { name: 'CSS3', mono: 'Cs' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    subtitle: 'Cloud-native delivery',
    skills: [
      { name: 'AWS', mono: 'Aw', note: 'Fargate • EKS • EC2 • S3 • RDS' },
      { name: 'AWS CDK', mono: 'Cd' },
      { name: 'AWS Fargate', mono: 'Fg' },
      { name: 'API Gateway', mono: 'Ag' },
      { name: 'AWS Lambda', mono: 'La' },
      { name: 'EventBridge', mono: 'Eb' },
      { name: 'SQS / SNS', mono: 'Sq' },
      { name: 'Amazon S3', mono: 'S3' },
      { name: 'CloudWatch', mono: 'Cw' },
      { name: 'Docker', mono: 'Dk' },
      { name: 'Kubernetes', mono: 'K8' },
      { name: 'Helm', mono: 'Hm' },
      { name: 'Terraform', mono: 'Tf' },
      { name: 'CloudFormation', mono: 'Cf' },
      { name: 'Jenkins', mono: 'Jk' },
      { name: 'CI/CD', mono: 'Ci' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Relational & NoSQL',
    skills: [
      { name: 'Oracle', mono: 'Or' },
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'MySQL', mono: 'My' },
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'Cassandra', mono: 'Ca' },
    ],
  },
  {
    id: 'testing',
    title: 'Testing',
    subtitle: 'Test-driven development',
    skills: [
      { name: 'JUnit', mono: 'Ju' },
      { name: 'Mockito', mono: 'Mk' },
      { name: 'PowerMock', mono: 'Pm' },
      { name: 'TestNG', mono: 'Tn' },
      { name: 'Cucumber', mono: 'Cu' },
      { name: 'Selenium', mono: 'Se' },
    ],
  },
  {
    id: 'security',
    title: 'Security',
    subtitle: 'Security & compliance controls',
    skills: [
      { name: 'PingFederate', mono: 'Pf' },
      { name: 'Secrets Manager', mono: 'Sm' },
      { name: 'AWS Security Hub', mono: 'Sh' },
      { name: 'AWS Inspector', mono: 'In' },
      { name: 'IAM', mono: 'Ia' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    subtitle: 'Build, observe & collaborate',
    skills: [
      { name: 'PagerDuty', mono: 'Pd' },
      { name: 'Maven', mono: 'Mn' },
      { name: 'Gradle', mono: 'Gr' },
      { name: 'Git / Bitbucket', mono: 'Gt' },
      { name: 'Splunk', mono: 'Sk' },
      { name: 'Grafana', mono: 'Gf' },
      { name: 'DataDog', mono: 'Dd' },
      { name: 'Log4j', mono: 'L4' },
      { name: 'JIRA', mono: 'Ji' },
      { name: 'IntelliJ', mono: 'Ij' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the roles and certifications on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Java: ['Goldman Sachs — Spring Boot microservice', 'PNC Bank (Java 17)'],
  'API Gateway': ['Goldman Sachs — exposes the service APIs'],
  'Amazon S3': ['Goldman Sachs', 'PNC Bank'],
  CloudWatch: ['Goldman Sachs — monitoring', 'PNC Bank'],
  'AWS CDK': ['Goldman Sachs — infrastructure stacks'],
  'AWS Fargate': ['Goldman Sachs'],
  'AWS Lambda': ['Goldman Sachs', 'PNC Bank'],
  EventBridge: ['Goldman Sachs'],
  'SQS / SNS': ['Goldman Sachs'],
  PingFederate: ['Goldman Sachs — API authentication'],
  'Secrets Manager': ['Goldman Sachs'],
  PagerDuty: ['Goldman Sachs — alerting'],
  TypeScript: ['PNC Bank (Angular 16)'],
  'Spring Boot': ['Goldman Sachs', 'PNC Bank'],
  'Spring MVC': ['PNC Bank'],
  'Spring Batch': ['PNC Bank — XML ingestion & scheduled workflows'],
  'Spring AOP': ['PNC Bank — logging, metrics & transactions'],
  'Hibernate / JPA': ['PNC Bank — Spring Data JPA with Oracle'],
  Kafka: ['PNC Bank — event-driven microservices'],
  Microservices: ['Goldman Sachs', 'PNC Bank'],
  Angular: ['PNC Bank — Angular 16'],
  RxJS: ['PNC Bank — Angular 16'],
  AWS: ['Goldman Sachs — Fargate, API Gateway, Lambda, EventBridge, SQS, SNS, S3, CloudWatch', 'PNC Bank — EKS, S3, EC2, RDS, Lambda, CloudWatch'],
  Docker: ['PNC Bank'],
  Kubernetes: ['PNC Bank — AWS EKS'],
  Oracle: ['PNC Bank'],
  MongoDB: ['PNC Bank — indexes & aggregations'],
  JUnit: ['PNC Bank'],
  Mockito: ['PNC Bank'],
  'AWS Security Hub': ['CompTIA Security+'],
  IAM: ['CompTIA Security+'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: 'Louisiana Tech',
    synopsis: 'Bachelor of Science in Computer Science at Louisiana Tech University.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Computer Scientist',
        description: 'B.S. in Computer Science at Louisiana Tech University — graduating with a CGPA of 3.72.',
        tags: ['B.S. Computer Science', 'CGPA 3.72'],
        runtime: 'Undergraduate',
        palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'Banking on Java',
    period: '2023 – 2026',
    synopsis: 'Full Stack Java Developer at PNC Bank, Dallas, Texas.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Modernizer',
        description: 'Microservices on Java 17 — records, sealed classes and enhanced switch expressions — with Spring Data JPA and Hibernate on Oracle.',
        tags: ['Java 17', 'Spring Boot', 'JPA', 'Oracle'],
        runtime: 'Sep 2023 – Mar 2026',
        palette: amber,
      },
      {
        code: 'S02 E02',
        title: 'The Event Architect',
        description: 'Asynchronous, event-driven communication with Kafka and Spring Batch jobs for XML ingestion and large-scale data workflows.',
        tags: ['Kafka', 'Spring Batch', 'Event-driven'],
        runtime: 'PNC Bank',
        palette: jade,
      },
      {
        code: 'S02 E03',
        title: 'The Cloud Deployer',
        description: 'Containerized Spring services with Docker and deployed to AWS EKS, integrating S3, EC2, RDS, Lambda and CloudWatch.',
        tags: ['Docker', 'AWS EKS', 'Kubernetes'],
        runtime: 'PNC Bank',
        palette: ocean,
      },
    ],
  },
  {
    number: 3,
    title: 'Enter: Goldman Sachs',
    period: '2026 – Present',
    synopsis: 'Full Stack Java Engineer at Goldman Sachs — a Spring Boot microservice on AWS, end to end.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Service Builder',
        description: 'Built a Spring Boot microservice and its REST APIs behind Amazon API Gateway, secured with PingFederate authentication.',
        tags: ['Spring Boot', 'API Gateway', 'PingFederate'],
        runtime: 'Apr 2026 – Present',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'The Stack Builder',
        description: 'Defined the AWS infrastructure as code with CDK stacks and runs the service on AWS Fargate.',
        tags: ['AWS CDK', 'Fargate', 'Secrets Manager'],
        runtime: 'Goldman Sachs',
        palette: violet,
      },
      {
        code: 'S03 E03',
        title: 'The Event Wrangler',
        description: 'Event-driven integrations with EventBridge, Lambda, SQS, SNS and S3, monitored with CloudWatch and PagerDuty.',
        tags: ['EventBridge', 'Lambda', 'SQS', 'SNS', 'CloudWatch'],
        runtime: 'Now streaming',
        palette: jade,
      },
    ],
  },
  {
    number: 4,
    title: "What's Next",
    period: 'In production',
    synopsis: 'The next arc of the story.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Next Chapter',
        description: 'Going deeper on cloud-native architecture, event-driven systems and cloud security.',
        tags: ['Cloud-Native', 'Event-Driven', 'Security'],
        runtime: 'In production',
        palette: crimson,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Now streaming', title: 'Goldman Sachs', detail: 'Full Stack Java Engineer • since Apr 2026', palette: ocean },
  { label: 'Primary language', title: 'Java', detail: 'Java 8 / 11 / 17 / 21', palette: amber },
  { label: 'In the industry', title: '3+ Years', detail: 'Enterprise engineering since 2023', palette: crimson },
  { label: 'Banking season', title: 'PNC Bank', detail: 'Java 17 microservices • 2023 – 2026', palette: jade },
  { label: 'Frontend', title: 'Angular 16', detail: 'RxJS • lazy loading • state management', palette: violet },
  { label: 'Backbone', title: 'Spring Boot', detail: 'Microservices, Batch, AOP, Security', palette: amber },
  { label: 'Event-driven', title: 'Kafka', detail: 'Real-time analytics & async microservices', palette: crimson },
  { label: 'Cloud', title: 'AWS', detail: 'Fargate • API Gateway • Lambda • EventBridge • SQS • SNS', palette: ocean },
  { label: 'Infrastructure as code', title: 'AWS CDK', detail: 'Stacks for Fargate, Lambda, EventBridge & more', palette: jade },
  { label: 'Security credential', title: 'Security+', detail: 'CompTIA Security+ & Network+', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Now streaming',
    title: 'Goldman Sachs',
    lines: ['Full Stack Java Engineer · April 2026 – Present', 'Spring Boot microservice · API Gateway · PingFederate auth', 'AWS CDK · Fargate · EventBridge · Lambda · SQS · SNS · S3'],
  },
  {
    kicker: 'Skills',
    title: 'Java first.',
    lines: ['Spring Boot · Microservices · Kafka · Hibernate / JPA', 'Angular · React · TypeScript · Oracle · MongoDB'],
    chips: ['Java', 'Spring Boot', 'Kafka', 'Angular', 'React', 'AWS'],
  },
  {
    kicker: 'Season 2',
    title: 'PNC Bank',
    lines: ['Full Stack Java Developer · 2023 – 2026', 'Java 17 microservices · Kafka · Spring Batch · AWS EKS'],
  },
  {
    kicker: 'Cloud',
    title: 'Cloud-native',
    lines: ['AWS · Docker · Kubernetes · Helm · Terraform', 'Jenkins CI/CD · DataDog · Splunk · Grafana'],
  },
  {
    kicker: 'Certified',
    title: `${certifications.length} Credentials`,
    lines: ['CompTIA Security+ · CompTIA Network+', 'ThinkCloudly SOC Bootcamp'],
  },
  {
    kicker: 'Education',
    title: 'B.S. Computer Science',
    lines: ['Louisiana Tech University'],
    chips: ['CGPA 3.72'],
  },
];

export type ProfileId = 'dipesh' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'dipesh',
    name: 'Dipesh',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, experience & skills first',
    color: '#4cc9ff',
    order: ['story', 'originals', 'skills', 'moments', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Work, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & experience', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Work', meta: `${projects.length} Originals • ${profile.careerStart} – Now`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: {
    nav: achievements.length ? 'Moments' : 'Certified',
    card: achievements.length ? 'My Achievements' : 'Certifications',
    meta: [achievements.length && `${achievements.length} Moments`, `${certifications.length} Certifications`].filter(Boolean).join(' • '),
    palette: crimson,
  },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
