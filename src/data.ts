export const technologies = [
  'Javascript',
  'Typescript',
  'React',
  'NextJS',
  'Storybook',
  'NodeJs',
  'Express',
  'Svelte, Sveltekit',
  'Azure Devops',
  'Unity',
  'Cypress',
  'Rust',
  'SolidJs',
  'Vitest',
  'Playwright',
  'Jest',
  'HTML5',
  'CSS3',
  'VueJS',
  'React Native',
  '.NET',
  'Aws',
  'SQL',
  'D3.js',
  'Github',
] as const;

export type Technology = (typeof technologies)[number];
type Knowlage = 'Very good knowledge' | 'Good knowledge' | 'Basic knowledge';
export const knowlage: Record<Technology, Knowlage> = {
  'Azure Devops': 'Good knowledge',
  '.NET': 'Good knowledge',
  HTML5: 'Good knowledge',
  CSS3: 'Good knowledge',
  Javascript: 'Very good knowledge',
  Typescript: 'Very good knowledge',
  'React Native': 'Good knowledge',
  'Svelte, Sveltekit': 'Good knowledge',
  Aws: 'Basic knowledge',
  Cypress: 'Good knowledge',
  Express: 'Good knowledge',
  Jest: 'Good knowledge',
  NextJS: 'Good knowledge',
  NodeJs: 'Good knowledge',
  Playwright: 'Basic knowledge',
  React: 'Very good knowledge',
  Rust: 'Basic knowledge',
  SolidJs: 'Basic knowledge',
  SQL: 'Good knowledge',
  Unity: 'Good knowledge',
  Storybook: 'Good knowledge',
  Vitest: 'Basic knowledge',
  VueJS: 'Good knowledge',
  'D3.js': 'Basic knowledge',
  Github: 'Good knowledge',
};

import icons from './icons';

export const experience: Record<Technology, { knowlage: string; svg: string }> =
  {
    'Azure Devops': {
      svg: icons.azure,
      knowlage: '',
    },
    '.NET': {
      svg: icons.dotnet,
      knowlage: 'Im',
    },
    'D3.js': {
      svg: icons.d3,
      knowlage: '',
    },
    'React Native': {
      svg: icons.react,
      knowlage: '',
    },
    'Svelte, Sveltekit': {
      svg: icons.svelte,
      knowlage: '',
    },
    Aws: {
      svg: icons.aws,
      knowlage: '',
    },
    CSS3: {
      svg: icons.css,
      knowlage: '',
    },
    Cypress: {
      svg: icons.cypress,
      knowlage: '',
    },
    Express: {
      svg: icons.express,
      knowlage: '',
    },
    HTML5: {
      svg: icons.html,
      knowlage: '',
    },
    Javascript: {
      svg: icons.js,
      knowlage:
        'I possess adept proficiency in JavaScript, proficiently leveraging its capabilities to develop engaging and dynamic web applications, employing clean and efficient coding practices to ensure optimal performance and user experience.',
    },
    Jest: {
      svg: icons.jest,
      knowlage:
        'I have good experience with Jest, and I am comfortable using it in my projects.',
    },
    NextJS: {
      svg: icons.next,
      knowlage: '',
    },
    NodeJs: {
      svg: icons.nodejs,
      knowlage:
        'I exhibit proficiency in Node.js, leveraging its capabilities to develop scalable and efficient server-side applications, employing asynchronous programming techniques to handle concurrent requests and ensure seamless performance.',
    },
    Playwright: {
      svg: icons.playwright,
      knowlage:
        'I have used Playwright extensively in my hobby projects. I can use it to automate browser interactions and perform e2e testing and component testing.',
    },
    React: {
      svg: icons.react,
      knowlage:
        'I have good experience with React, and I am comfortable using it in my projects. I have used it extensively in lots of projects.',
    },
    Rust: {
      svg: icons.rust,
      knowlage:
        'I have a basic understanding of Rust understanding how it works, and I can use it in my projects.',
    },
    SolidJs: {
      svg: icons.solidjs,
      knowlage: '',
    },
    SQL: {
      svg: icons.sql,
      knowlage: '',
    },
    Storybook: {
      svg: icons.storybook,
      knowlage: '',
    },
    Typescript: {
      svg: icons.ts,
      knowlage: '',
    },
    Unity: {
      svg: icons.unity,
      knowlage: '',
    },
    Vitest: {
      svg: icons.vitest,
      knowlage: '',
    },
    VueJS: {
      svg: icons.vue,
      knowlage: '',
    },
    Github: {
      svg: icons.github,
      knowlage: '',
    },
  };

type Interest = 'Very interested' | 'Interested' | '';
export const interests: Record<Technology, Interest> = {
  'Azure Devops': '',
  '.NET': '',
  HTML5: 'Interested',
  CSS3: 'Interested',
  Javascript: 'Very interested',
  Typescript: 'Very interested',
  'React Native': '',
  'Svelte, Sveltekit': 'Very interested',
  Aws: '',
  Cypress: '',
  Express: '',
  Jest: '',
  NextJS: '',
  NodeJs: 'Interested',
  Playwright: 'Interested',
  React: '',
  Rust: 'Very interested',
  SolidJs: '',
  SQL: '',
  Unity: '',
  Storybook: 'Interested',
  Vitest: '',
  VueJS: '',
  'D3.js': '',
  Github: '',
};

export const employments = [
  'Aareon Nordic',
  'QueensLab',
  'Yara Marine',
  'Squeed ',
] as const;
type Employments = (typeof employments)[number];

type Block = string | string[];

type Content = {
  title: string;
  img: string;
  content: Block[];
};

export type Case = {
  name: string;
  company: string;
  employment: Employments;
  technologies: Technology[];
  description: string;
  year: number;
  icon: string;
  iconOpacity: number;
  link?: string;
  content: Content[];
};

export const cases: Case[] = [
  {
    employment: 'Yara Marine',
    company: 'Yara Marine',
    name: 'Fleet Analytics',
    technologies: ['Typescript', 'React', 'Jest'],
    link: '/fleet-analytics',
    icon: icons.yara,
    iconOpacity: 0.9,
    year: 2023,
    content: [
      {
        title: 'The Product',
        img: '/assets/yara/1.webp',
        content: [
          'Vessel Optimization solutions offer a unique combination of direct, real-time fuel optimization and data analysis over time, leading to improved operational efficiency.',
          'Vessel optimization is a combination of FuelOpt, Fleet Analytics and Route Pilot AI',
          'Vessel optimization helps ship-owneras and operators',
        ],
      },
      {
        title: 'My role',
        img: '/assets/yara/2.webp',
        content: [
          'I worked on the Fleet Analytics platform as a lead front-end developer',
          'As lead i took on the responsibilities of building a design system built on Mui. I documented the design system in Storybook together with working exampels of components',
          'Our team used github as our sprint planning tool and issue tracker.',
          'My responsibilities included:',
          [
            'Storybook development',
            'Ui development for both Fleet Analytics and Route Pilot AI',
            'Unit testing',
          ],
        ],
      },
    ],
    description:
      'As the lead front-end developer at Yara Marine, I spearheaded projects in Fleet Analytics and Route Pilot AI, leveraging my expertise to drive innovative solutions.',
  },
  {
    employment: 'QueensLab',
    company: 'Volvo Group Connected Solutions',
    name: 'Customer portal',
    technologies: ['Javascript', 'React', 'Jest'],
    year: 2022,
    link: '/customer-connect',
    icon: icons.volvo,
    iconOpacity: 0.5,
    content: [
      {
        title: 'The Product',
        img: '/assets/volvo/1.webp',
        content: [
          'Volvo Connect is a system for managing your bus fleet and your gateway to all Vehicle services.',
          'Here you will find everything from connected services to documentation and workshop services.',
          'With the system, you get detailed follow-ups on vehicle performance, maintenance planning, and actions that help you increase productivity.',
        ],
      },
      {
        title: 'My role',
        img: '/assets/volvo/2.webp',
        content: [
          'I worked on the Customer portal admin page as a senior front-end developer',
          'I Implemented new features for the administration tool and mantained the codebase',
          'I worked togheter with designers and testers to improve the user experience',
          'My responsibilities included:',
          ['Comunication with the backend', 'Code refactoring', 'Unit testing'],
        ],
      },
    ],
    description:
      'While at Volvo Group Connected Solutions, I held the role of senior front-end developer for the Customer Portal. I led the development of the admin panel and played a key role in structuring the code and improving the user experience.',
  },
  {
    employment: 'QueensLab',
    company: 'Osstell',
    name: 'Osstell Connect',
    technologies: ['Typescript', 'React', 'React Native'],
    year: 2021,
    link: '/osstell-connect',
    icon: icons.ostell,
    iconOpacity: 0.8,
    content: [
      {
        title: 'The Product',
        img: '/assets/osstell/1.webp',
        content: [
          'OsstellConnect is a cloud-based solution offering a new way for clinicians to use data to enhance their dental implant treatments',
          'With the ConsultationTool in OsstellConnect you can easily describe the different steps of a proposed procedure in a science-based, easyto-understand way from surgery to final restoration with estimations of time between the different procedures',
        ],
      },
      {
        title: 'My role',
        img: '/assets/osstell/2.webp',
        content: [
          'At osstell I worked on the Osstell Connect mobile application as a front-end developer',
          'I also helped build an bluetooth implementation to the Osstell Beacon',
          'My responsibilities included:',
          [
            'Bluetooth implementation',
            'Canvas implementation',
            'Editing with history and undo',
            'Unit testing',
          ],
        ],
      },
    ],
    description:
      "I contributed to the development of a native application that enables Bluetooth communication and incorporates camera support for barcode scanning. Additionally, I play a role in advancing the development of Osstel's web application.",
  },
  {
    employment: 'QueensLab',
    company: 'Emerson',
    name: 'Emerson',
    technologies: ['VueJS', 'Azure Devops'],
    year: 2021,
    icon: icons.emerson,
    iconOpacity: 0.7,
    content: [],
    description:
      'Emerson is a large corporation and one area of focus is delivering an IoT system for a large industry. There is two development team, with an total amount of 20+ developers and tester and is a mixture of nationalities, experience and background. I had responsibilities throughout the entire stack with a primary focus on frontend development and test environment.',
  },
  {
    employment: 'QueensLab',
    company: 'Ericsson',
    name: 'Ericsson',
    technologies: ['.NET', 'React', 'Javascript', 'Typescript'],
    year: 2020,
    icon: icons.ericsson,
    iconOpacity: 0.5,
    content: [],
    description: 'Confidential programming information for Ericsson.',
  },
  {
    employment: 'QueensLab',
    company: 'Happy Faces',
    name: 'Scan, Weigh, Record',
    technologies: ['React Native'],
    year: 2019,
    icon: '<img src="/assets/happy faces/logo.webp" loading="lazy" alt="Happy Faces logo"/>',
    iconOpacity: 0.5,
    content: [],
    description:
      'I contributed to developing a React Native application for Happy Faces restaurant at QueensLab, focusing on QR/bar code functionality and collaborating closely with backend developers and UX designers to meet tight deadlines.',
  },
  {
    employment: 'QueensLab',
    company: 'Blue Mobile Systems',
    name: 'Guardtools',
    technologies: ['VueJS', 'Javascript', 'Storybook', 'D3.js'],
    year: 2019,
    link: '/blue-mobile-systems',
    icon: icons.guardtools,
    iconOpacity: 0.9,
    content: [
      {
        title: 'The Product',
        img: '/assets/guardtools/1.webp',
        content: [
          'Guardtools is a system desigend as a solution for security officers',
          'The tool is used to manage alarms and set up complex and performance-demanding graphs to provide relevant insights from large amounts of data',
        ],
      },
      {
        title: 'My role',
        img: '/assets/guardtools/2.webp',
        content: [
          'I had the role of lead frontend developer',
          'I built all components in isolation from the system in storybook',
          'In collaboration with both backend developers and UX designers to create a cohesive and user-friendly end product',
          'My responsibilities included:',
          [
            'Creating isolated components in storybook',
            'Backword compatibility to old browsers',
            'Responsive graphs',
          ],
        ],
      },
    ],
    description:
      'At Blue Mobile Systems, I led frontend development on guardtools, collaborating closely with backend developers and UX designers to ensure quality and timely delivery.',
  },
  {
    employment: 'QueensLab',
    company: 'Grafokett',
    name: 'Cloudlabel',
    technologies: ['VueJS', 'Storybook'],
    year: 2019,
    link: '/grafokett',
    icon: '<img src="/assets/grafokett/logo.webp"  loading="lazy" alt="Grafokett logo"/>',
    iconOpacity: 0.75,
    content: [
      {
        title: 'The Product',
        img: '/assets/grafokett/1.webp',
        content: [
          'Cloudlabel is a cloud-based label management software',
          'The software makes it easy to generate barcodes as well as design, manage, and print labels',
        ],
      },
      {
        title: 'My role',
        img: '/assets/grafokett/2.webp',
        content: [
          'I had the role of lead frontend developer',
          'I built all components in isolation from the system in storybook',
        ],
      },
    ],
    description:
      'In the Grafokett Online project, I led frontend development, leveraging Vue.js to create a versatile web application. I focused on component-based development, ensuring high reusability and conducting thorough unit testing using Mocha and Chai within Storybook.',
  },
  {
    employment: 'QueensLab',
    company: 'Raybased',
    name: 'Raybased',
    technologies: ['VueJS', '.NET', 'SQL', 'Azure Devops'],
    year: 2019,
    icon: icons.raybased,
    iconOpacity: 0.5,
    content: [],
    description:
      'I led the development of a customized component within a real-time monitoring system for smart buildings, enabling users to export data to Excel and toggle functionalities, with the backend built on .NET Core and the Progressive Web app developed using Vue.js.',
  },
  {
    employment: 'QueensLab',
    company: 'Studio Ekberg',
    name: 'Studio Ekberg',
    technologies: ['VueJS', 'Javascript', 'HTML5', 'CSS3'],
    year: 2019,
    icon: '<img src="/assets/studio ekberg/logo.webp"  loading="lazy" alt="Studio Ekberg"/>',
    iconOpacity: 0.5,
    content: [],
    description:
      'I led the development of a web application in Vue.js, incorporating Marzipano for a 3D virtual tour showcasing planned apartments, in collaboration with our 3D designer, facilitating effective pre-construction marketing for the architecture firm.',
  },
  {
    employment: 'QueensLab',
    company: 'Zooma',
    name: 'Zooma',
    technologies: ['React', 'Javascript', 'HTML5', 'CSS3'],
    year: 2019,
    icon: icons.zooma,
    iconOpacity: 0.5,
    content: [],
    description:
      'I collaborated with Zooma to develop an application for a global telecom company, presenting complex information material in an engaging manner at an international exhibition, meeting high aesthetic and brand compliance standards.',
  },
  {
    employment: 'QueensLab',
    company: 'QueensLab',
    name: 'QueensLab',
    technologies: ['Unity', 'VueJS', 'Javascript', '.NET'],
    year: 2018,
    icon: icons.queenslab,
    iconOpacity: 0.9,
    content: [],
    description:
      'I developed and implemented a game on our company website, utilizing real-time data from public transport and weather information to convey our message of bridging the gap between development and design, with close collaboration with the design team to optimize work efficiency.',
  },
  {
    employment: 'Aareon Nordic',
    company: 'Aareon Nordic',
    name: 'Aareon Nordic',
    technologies: ['.NET'],
    year: 2015,
    icon: icons.aareon,
    iconOpacity: 0.5,
    content: [],
    description:
      'I contributed to the core functionality of an application, collaborating closely with other teams and supporting departments to ensure smooth operation and timely issue resolution.',
  },
];
