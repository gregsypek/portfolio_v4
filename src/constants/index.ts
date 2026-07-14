import { ExperienceType, ProjectType } from '../types/types';

import { BsTwitterX } from 'react-icons/bs';
import { LuGithub } from 'react-icons/lu';
import { LuLinkedin } from 'react-icons/lu';

export const navSocialLinks = [
  {
    href: 'https://twitter.com/gregsypek',
    label: 'twitter',
    icon: BsTwitterX,
  },
  {
    href: 'https://www.linkedin.com/in/grzegorz-sypek/',
    label: 'linkedin',
    icon: LuLinkedin,
  },
  {
    href: 'https://github.com/gregsypek',
    label: 'github',
    icon: LuGithub,
  },
];

export const CONTACT_NUMBER = '+48 504522440';

export const navLinks = ['Home', 'About', 'Projects', 'Experience', 'Contact'];

export const skills = ['React', 'React Native', 'Node', 'Next', 'Typescript'];

export const aboutInfo = [
  {
    id: 1,
    content:
      'My coding journey started 8 years ago out of pure passion for technology. Today, with solid commercial experience gained through both team-based roles and independent freelance projects, I specialize in the React, Next.js, and TypeScript ecosystem. I build everything from mobile applications to scalable e-commerce platforms.',
    className:
      'md:col-start-5 md:col-span-6 md:row-start-1 md:row-span-1 about-paragraph',
  },
  {
    id: 2,
    content:
      'I focus on delivering real business value through clean code and smart architecture. Whether designing robust database schemas (Prisma, PostgreSQL) or building pixel-perfect UIs (Tailwind, SCSS), I always look at the bigger picture and value seamless team collaboration.',
    className:
      'md:col-start-6 md:col-span-5 md:row-start-3 md:row-span-1 about-paragraph ',
  },
  {
    id: 3,
    content:
      "Based in Mielec, Poland. When I'm not coding, my biggest passion is the stock market and financial analysis—an interest that directly inspired my full-stack SaaS project, InvestGuard. I also enjoy hiking mountain trails and am currently open to new career opportunities.",
    className:
      'md:col-start-6 md:col-span-5 md:row-start-5 md:row-span-1 about-paragraph',
  },
];

export const projects: ProjectType[] = [
  {
    id: 1,
    title: 'InvestGuard',
    images: [
      './projects/investGuard0.png',
      './projects/investGuard1.png',
      './projects/investGuard2.png',
      './projects/investGuard3.png',
      './projects/investGuard4.png',
      './projects/investGuard5.png',
      './projects/investGuard6.png',
      './projects/investGuard7.png',
      './projects/investGuard8.png',
      './projects/investGuard9.png',
      './projects/investGuard10.png',
      './projects/investGuard11.png',
    ],
    desc: 'Advanced SaaS platform for long-term investors. Architected a custom automated data parser for transaction reports (XTB, PKO BP) and a specialized engine for Polish government bonds with real-time interest tracking. Features include an interactive Historical Simulation Engine (Recharts), Multi-Portfolio Management, and a proprietary algorithm integrating Yahoo Finance and NBP APIs for dynamic multi-currency asset calculations.',
    tags: [
      'Next.js 15',
      'TypeScript',
      'Tailwind CSS',
      'Prisma',
      'PostgreSQL',
      'Recharts',
      '2025',
    ],
    live: 'https://invest-guard-blue.vercel.app/',
    github: 'https://github.com/gregsypek/InvestGuard.git',
  },
  {
    id: 2,
    title: 'BakeryStore E-commerce',
    images: [
      './projects/bakerystore1.png',
      './projects/bakerystore2.png',
      './projects/bakerystore3.png',
    ],
    desc: 'A production-ready Full-Stack E-commerce Platform built to handle real-world business logic. Architected with Next.js 15 (App Router) and React 19, utilizing Server Components and Server Actions. Features end-to-end type safety (TypeScript, Zod), robust database architecture (Prisma, PostgreSQL), secure payment webhooks (Stripe, PayPal), cloud storage, and a custom admin dashboard with advanced data visualization.',
    tags: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'Prisma',
      'Stripe & PayPal',
      'Zod',
      '2026',
    ],
    live: 'https://bakerystore-zeta.vercel.app',
    github: 'https://github.com/gregsypek/bakerystore',
  },

  {
    id: 3,
    title: 'Schody Zaliński',
    images: [
      './projects/schody1.png',
      './projects/schody2.png',
      './projects/schody3.png',
      './projects/schody4.png',
      './projects/schody5.png',
    ],
    fullView: './projects/schody_full.png',
    desc: 'Comprehensive end-to-end delivery of a modern business website for a manufacturer. Managed the entire project lifecycle, from initial UI/UX design and custom branding (logo) to custom WordPress theme development using PHP, MySQL, and SCSS. The platform is fully responsive, SEO-optimized, and features a scalable architecture designed to drive user engagement and business growth.',
    tags: ['Wordpress', 'PHP', 'MySQL', 'Scss', '2024'],
    live: 'https://schodyzalinski.pl',
    github: 'https://github.com/gregsypek/carpentry2',
  },
];

export const archivedProjects: ProjectType[] = [
  {
    id: 4,
    title: 'Pizzarella',
    images: [
      './projects/pizzarella1.png',
      './projects/pizzarella2.png',
      './projects/pizzarella3.png',
      './projects/pizzarella4.png',
      './projects/pizzarella5.png',
      './projects/pizzarella6.png',
    ],
    fullView: './projects/pizzarella_full.png',
    desc: 'React Application with React Router, Tailwind CSS and Redux. Menu load from an API. State is manage with Redux Toolkit. I use Redux Thunks, useFetcher, loaders and actions',
    tags: ['React', 'React Router', 'Tailwind', 'Redux', '2023'],
    live: 'https://pizzarella.netlify.app/',
    github: 'https://github.com/gregsypek/pizzarella',
  },
  {
    id: 5,
    title: 'Miodek_v4',
    images: [
      './projects/miodek1.png',
      './projects/miodek2.png',
      './projects/miodek3.png',
    ],
    fullView: './projects/miodek_full.png',

    desc: 'Full-stack React E-commerce application with integrated Stripe payment processing. Boasting a modern design and comprehensive functionality, it was built using Next.js and Sanity technologies. The Stripe integration facilitates online payments, and the entire application is styled using the Tailwind CSS library.',
    tags: ['React', 'Next', 'Tailwind', 'Stripe', 'Sanity', '2023'],
    live: 'https://miodek4.vercel.app/',
    github: 'https://github.com/gregsypek/miodek4',
  },
  {
    id: 6,
    title: 'MJurkowska',
    images: [
      './projects/mjurkowska1.png',
      './projects/mjurkowska2.png',
      './projects/mjurkowska3.png',
      './projects/mjurkowska4.png',
      './projects/mjurkowska5.png',
    ],
    fullView: './projects/mjurkowska_full.png',
    desc: 'Website made for fictional company. Fully responsive with an easy to manage CSS variables structure. Languages: HTML, Vanilia Js, CSS',
    tags: ['JavaScript', 'HTML', 'CSS', '2022'],
    live: 'https://gregsypek.github.io/MJurkowska/',
    github: 'https://github.com/gregsypek/MJurkowska',
  },
  {
    id: 7,
    title: 'Ursus',
    images: [
      './projects/ursus1.png',
      './projects/ursus2.png',
      './projects/ursus3.png',
      './projects/ursus4.png',
      './projects/ursus5.png',
      './projects/ursus6.png',
      './projects/ursus7.png',
      './projects/ursus8.png',
      './projects/ursus9.png',
    ],
    desc: 'Full Stack App with a login and register option created only for learning purposes and of course for fun. All pictures and information I copied from the original URSUS website. For authentication, I use JSON Web Tokens. The backend is built in Node.js with express and mongoose. Data is sent to my MongoDB account. I handle errors and display them by vuetify template v-error. App includes three roles: admin editor and user with different privilege. Languages: Vue, Node Express, MongoDB, Vuex, Bootstrap, Vuetify',
    tags: ['Vue', 'Node', 'Express', 'MongoDB', 'Bootstrap', 'Vuex', '2022'],
    live: 'https://ursus-api.onrender.com/',
    github: 'https://github.com/gregsypek/ursus2',
  },
];

export const experience: ExperienceType[] = [
  {
    id: 0,
    year: '2023',
    title: 'React Native Developer',
    name: 'SOLVE-NET',
    desc: 'I have experience working with technologies such as React, React Native, TypeScript, and Node.js. I enhanced an existing mobile app for the construction industry by adding features, optimizing functionality, and developing a Node.js program for language translation. My experience at SOLVE-NET enriched my skills in project development using tools like Redmine.',
    languages: ['React', 'React Native', 'Typescript', 'Node'],
  },
  {
    id: 1,
    year: '2022',
    title: 'Junior Application Developer',
    name: 'ZETO',
    desc: 'I enjoyed working on an extensive marketplace application using Vue.js and Next.js. I utilized project management tools like Azure DevOps and Redmine, collaborating in a team environment with both frontend and backend developers. Our primary focus was implementing fixes, optimizing, and expanding platform functionalities, significantly contributing to product improvement.',
    languages: ['React', 'Vue', 'Nuxt', 'Bootstrap', 'Scss'],
  },
  {
    id: 2,
    year: '2021',
    title: 'Fronted Developer',
    name: 'FREELANCE',
    desc: 'At the start of my freelance journey, I developed websites for my first clients, building the foundation for my web development skills.',
    languages: ['JavaScript', 'Scss', 'Php'],
  },
];

export const skillColors = [
  { background: 'transparent', color: '#e7e4e4', border: '#e7e4e4' },
  { background: '#18457C', color: '#D2D2D2', border: 'transparent' },
  { background: '#58324a', color: '#D2D2D2', border: 'transparent' },
  { background: 'transparent', color: '#e7e4e4', border: 'transparent' },
  { background: '#5b6067', color: 'black', border: 'transparent' },
  { background: '#9b8595', color: '#0A0C10', border: 'transparent' },
];
