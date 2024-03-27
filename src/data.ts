import icons from './icons';

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
  alt: string;
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
    technologies: ['TypeScript', 'React', 'Jest'],
    link: '/fleet-analytics',
    icon: icons.yara,
    iconOpacity: 0.9,
    year: 2023,
    content: [
      {
        title: 'The Product',
        img: '/assets/images/yara/1.webp',
        alt: 'Blueprint of a big vessel',
        content: [
          'Vessel Optimization solutions offer a unique combination of direct, real-time fuel optimization and data analysis over time, leading to improved operational efficiency.',
          'Vessel optimization is a combination of FuelOpt, Fleet Analytics and Route Pilot AI',
          'Vessel optimization helps ship-owneras and operators',
        ],
      },
      {
        title: 'My role',
        img: '/assets/images/yara/2.webp',
        alt: 'An ipad showing fleat analytics ui',
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
    technologies: ['JavaScript', 'React', 'Jest'],
    year: 2022,
    link: '/customer-connect',
    icon: icons.volvo,
    iconOpacity: 0.5,
    content: [
      {
        title: 'The Product',
        img: '/assets/images/volvo/1.webp',
        alt: 'Different devices showing the customer portal ui',
        content: [
          'Volvo Connect is a system for managing your bus fleet and your gateway to all Vehicle services.',
          'Here you will find everything from connected services to documentation and workshop services.',
          'With the system, you get detailed follow-ups on vehicle performance, maintenance planning, and actions that help you increase productivity.',
        ],
      },
      {
        title: 'My role',
        img: '/assets/images/volvo/2.webp',
        alt: 'A person working in customer connect',
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
    technologies: ['TypeScript', 'React', 'React Native'],
    year: 2021,
    link: '/osstell-connect',
    icon: icons.ostell,
    iconOpacity: 0.8,
    content: [
      {
        title: 'The Product',
        img: '/assets/images/osstell/1.webp',
        alt: 'A reprensentation of the layers used in osstell to present a mouth',
        content: [
          'OsstellConnect is a cloud-based solution offering a new way for clinicians to use data to enhance their dental implant treatments',
          'With the ConsultationTool in OsstellConnect you can easily describe the different steps of a proposed procedure in a science-based, easyto-understand way from surgery to final restoration with estimations of time between the different procedures',
        ],
      },
      {
        title: 'My role',
        img: '/assets/images/osstell/2.webp',
        alt: 'An ipad showing ostell connect ui',
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
    link: '/emerson',
    icon: icons.emerson,
    iconOpacity: 0.7,
    content: [
      {
        title: 'The Product',
        img: '/assets/images/emerson/1.webp',
        alt: 'Lights and a factory',
        content: [
          'Emerson is an IoT company that provides industrial automation solutions and industrial control systems for the energy industry.',
        ],
      },
      {
        title: 'My role',
        img: '/assets/images/emerson/2.webp',
        alt: 'Blurprints and gauges of pipes in a factory',
        content: ['My role at Emerson included:', 'Lead frontend developer'],
      },
    ],
    description:
      'Emerson is a large corporation and one area of focus is delivering an IoT system for a large industry. There is two development team, with an total amount of 20+ developers and tester and is a mixture of nationalities, experience and background. I had responsibilities throughout the entire stack with a primary focus on frontend development and test environment.',
  },
  {
    employment: 'QueensLab',
    company: 'Ericsson',
    name: 'Ericsson',
    technologies: ['.NET', 'React', 'JavaScript', 'TypeScript'],
    year: 2020,
    link: '/ericsson',
    icon: icons.ericsson,
    iconOpacity: 0.5,
    content: [
      {
        title: 'The Product',
        img: '/assets/images/ericsson/1.webp',
        alt: 'A woman working with a ericsson system on lots of screens',
        content: [
          'Ericsson is a global provider of telecommunications services and solutions.',
        ],
      },
      {
        title: 'My role',
        img: '/assets/images/ericsson/2.webp',
        alt: 'Ericsson building in borås',
        content: ['My role at Ericsson included:', 'Lead frontend developer'],
      },
    ],
    description:
      'At Ericsson I worked in a small team where we maintained and implemented new features in one of their products which is under Confidential information. At the time we were working on their old client I took lead in bringing up a new client built in react and using ericssons design system. During this i helpt and worked together with the backend.',
  },
  {
    employment: 'QueensLab',
    company: 'Happy Faces',
    name: 'Scan, Weigh, Record',
    technologies: ['React Native'],
    year: 2019,
    link: '/happy-faces',
    icon: '<img src="/assets/images/happy faces/logo.webp" loading="lazy" alt="Happy Faces logo"/>',
    iconOpacity: 0.5,
    content: [
      {
        title: 'The Product',
        img: '/assets/images/happy faces/1.webp',
        alt: 'Happy Faces text hanging on a wood wall',
        content: [
          'Happy Faces is a restaurant located in trysil.',
          'The application was designed in React Native and allows customers to scan QR codes and weigh their food items.',
        ],
      },
      {
        title: 'My role',
        img: '/assets/images/happy faces/2.webp',
        alt: 'An overview of the Happy Faces restaurant',
        content: [
          'My role at Happy Faces included:',
          'Lead frontend developer',
        ],
      },
    ],
    description:
      'I contributed to developing a React Native application for Happy Faces restaurant at QueensLab, focusing on QR/bar code functionality and collaborating closely with backend developers and UX designers to meet tight deadlines.',
  },
  {
    employment: 'QueensLab',
    company: 'Blue Mobile Systems',
    name: 'Guardtools',
    technologies: ['VueJS', 'JavaScript', 'Storybook', 'D3.js'],
    year: 2019,
    link: '/blue-mobile-systems',
    icon: icons.guardtools,
    iconOpacity: 0.9,
    content: [
      {
        title: 'The Product',
        img: '/assets/images/guardtools/1.webp',
        alt: 'A person sitting infront of a lot of screans showing data from guardtools',
        content: [
          'Guardtools is a system desigend as a solution for security officers',
          'The tool is used to manage alarms and set up complex and performance-demanding graphs to provide relevant insights from large amounts of data',
        ],
      },
      {
        title: 'My role',
        img: '/assets/images/guardtools/2.webp',
        alt: 'A graph from the ui in focus',
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
    icon: '<img src="/assets/images/grafokett/logo.webp"  loading="lazy" alt="Grafokett logo"/>',
    iconOpacity: 0.75,
    content: [
      {
        title: 'The Product',
        img: '/assets/images/grafokett/1.webp',
        alt: 'A cutout showing cloud label ui',
        content: [
          'Cloudlabel is a cloud-based label management software',
          'The software makes it easy to generate barcodes as well as design, manage, and print labels',
        ],
      },
      {
        title: 'My role',
        img: '/assets/images/grafokett/2.webp',
        alt: 'A person putting labels on packages in a warehouse',
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
    technologies: ['VueJS', 'JavaScript', 'HTML5', 'CSS3'],
    year: 2019,
    icon: '<img src="/assets/images/studio ekberg/logo.webp"  loading="lazy" alt="Studio Ekberg"/>',
    iconOpacity: 0.5,
    content: [],
    description:
      'I led the development of a web application in Vue.js, incorporating Marzipano for a 3D virtual tour showcasing planned apartments, in collaboration with our 3D designer, facilitating effective pre-construction marketing for the architecture firm.',
  },
  {
    employment: 'QueensLab',
    company: 'Zooma',
    name: 'Zooma',
    technologies: ['React', 'JavaScript', 'HTML5', 'CSS3'],
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
    technologies: ['Unity', 'VueJS', 'JavaScript', '.NET'],
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
    link: '/aareon',
    icon: icons.aareon,
    iconOpacity: 0.5,
    content: [
      {
        title: 'The Product',
        img: '/assets/images/aareon/1.webp',
        alt: 'Image of the UI of aareon xpand',
        content: ['The company was founded in 2015'],
      },
      {
        title: 'My role',
        img: '/assets/images/aareon/2.webp',
        alt: 'Parkinglot outside of the gothenburg aareon office',
        content: ['I was part of the core team working on the common modules'],
      },
    ],
    description:
      'I contributed to the core functionality of an application, collaborating closely with other teams and supporting departments to ensure smooth operation and timely issue resolution.',
  },
];

export type Skill = {
  name: string;
  description: string[];
  icon: string;
};

export const skills = [
  {
    name: 'JavaScript',
    description: ['I have great experience with JavaScript and its ecosystem'],
    icon: icons.js,
  },
  {
    name: 'TypeScript',
    description: ['I have great experience with TypeScript and its ecosystem'],
    icon: icons.ts,
  },
  {
    name: 'React',
    description: ['I have great experience with React and its ecosystem'],
    icon: icons.react,
  },
  {
    name: 'NextJS',
    description: ['I have great experience with NextJS and its ecosystem'],
    icon: icons.next,
  },
  {
    name: 'Svelte',
    description: ['I have great experience with Svelte and its ecosystem'],
    icon: icons.svelte,
  },
  {
    name: 'Sveltekit',
    description: ['I have great experience with Sveltekit and its ecosystem'],
    icon: icons.svelte,
  },
  {
    name: 'VueJS',
    description: ['I have great experience with VueJS and its ecosystem'],
    icon: icons.vue,
  },
  {
    name: 'Storybook',
    description: ['I have great experience with Storybook and its ecosystem'],
    icon: icons.storybook,
  },
  {
    name: 'Cypress',
    description: ['I have great experience with Cypress and its ecosystem'],
    icon: icons.cypress,
  },
  {
    name: 'Jest',
    description: ['I have great experience with Jest and its ecosystem'],
    icon: icons.jest,
  },
  {
    name: 'HTML5',
    description: ['I have great experience with HTML5 and its ecosystem'],
    icon: icons.html,
  },
  {
    name: 'CSS3',
    description: ['I have great experience with CSS3 and its ecosystem'],
    icon: icons.css,
  },
  {
    name: 'SQL',
    description: ['I have great experience with SQL and its ecosystem'],
    icon: icons.sql,
  },
  {
    name: 'Azure Devops',
    description: [
      'I have great experience with Azure Devops and its ecosystem',
    ],
    icon: icons.azure,
  },
  {
    name: 'Unity',
    description: ['I have great experience with Unity and its ecosystem'],
    icon: icons.unity,
  },
  {
    name: 'NodeJs',
    description: ['I have great experience with NodeJs and its ecosystem'],
    icon: icons.nodejs,
  },
  {
    name: 'Express',
    description: ['I have great experience with Express and its ecosystem'],
    icon: icons.express,
  },
  {
    name: 'D3.js',
    description: ['I have great experience with D3.js and its ecosystem'],
    icon: icons.d3,
  },
  {
    name: 'Github',
    description: ['I have great experience with Github and its ecosystem'],
    icon: icons.github,
  },
  {
    name: 'AWS',
    description: ['I have great experience with AWS and its ecosystem'],
    icon: icons.aws,
  },
  {
    name: 'Rust',
    description: ['I have great experience with Rust and its ecosystem'],
    icon: icons.rust,
  },
  {
    name: 'Vitest',
    description: ['I have great experience with Vitest and its ecosystem'],
    icon: icons.vitest,
  },
  {
    name: 'Playwright',
    description: ['I have great experience with Playwright and its ecosystem'],
    icon: icons.playwright,
  },
  {
    name: 'SolidJs',
    description: ['I have great experience with SolidJs and its ecosystem'],
    icon: icons.solidjs,
  },
  {
    name: 'React Native',
    description: [
      'I have great experience with React Native and its ecosystem',
    ],
    icon: icons.react,
  },
  {
    name: '.NET',
    description: ['I have great experience with .NET and its ecosystem'],
    icon: icons.dotnet,
  },
  {
    name: 'Docker',
    description: ['I have great experience with Docker and its ecosystem'],
    icon: icons.docker,
  },
  {
    name: 'Figma',
    description: ['I have great experience with Figma and its ecosystem'],
    icon: icons.figma,
  },
  {
    name: 'Gitlab',
    description: ['I have great experience with Gitlab and its ecosystem'],
    icon: icons.gitlab,
  },
  {
    name: 'Git',
    description: ['I have great experience with Git and its ecosystem'],
    icon: icons.git,
  },
] as const;

type Technology = (typeof skills)[number]['name'];
