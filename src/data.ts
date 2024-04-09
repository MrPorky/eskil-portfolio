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
      'In my capacity as the lead front-end developer at Yara Marine, I have dedicated my skills to various projects such as Fleet Analytics and Route Pilot AI, harnessing my expertise to fuel innovative solutions for the company.',
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

export enum SkillLevel {
  Expert = 5,
  Intermediate = 4,
  Advanced = 3,
  Familiar = 2,
  Novice = 1,
}

type LevelsString = keyof typeof SkillLevel;

export type Skill = {
  name: string;
  description: string[];
  icon: string;
  skillLevel: LevelsString;
};

export const skills = [
  {
    name: 'JavaScript',
    description: [
      'I have extensive experience and knowledge of JavaScript. I am highly proficient in using it to create dynamic and interactive web content.',
    ],
    icon: icons.js,
    skillLevel: 'Expert',
  },
  {
    name: 'TypeScript',
    description: [
      'I am highly skilled in TypeScript, allowing me to write maintainable and scalable code for complex applications.',
    ],
    icon: icons.ts,
    skillLevel: 'Expert',
  },
  {
    name: 'React',
    description: [
      'I am well versed in React, which enables me to build user interfaces and single-page web applications with ease.',
    ],
    icon: icons.react,
    skillLevel: 'Expert',
  },
  {
    name: 'NextJS',
    description: [
      'While not a full expert, I am highly experienced in NextJS and can create server-side rendered React applications that load quickly and are easy to maintain.',
    ],
    icon: icons.next,
    skillLevel: 'Advanced',
  },
  {
    name: 'Svelte',
    description: [
      'I have a good understanding of Svelte and can use it to create efficient and lightweight user interfaces for web applications.',
    ],
    icon: icons.svelte,
    skillLevel: 'Intermediate',
  },
  {
    name: 'Sveltekit',
    description: [
      'I am knowledgeable in Sveltekit, allowing me to build modern web applications with server-side rendering and other advanced features.',
    ],
    icon: icons.svelte,
    skillLevel: 'Advanced',
  },
  {
    name: 'VueJS',
    description: [
      'I have a strong understanding of VueJS, which enables me to create highly reactive user interfaces for web applications.',
    ],
    icon: icons.vue,
    skillLevel: 'Advanced',
  },
  {
    name: 'Storybook',
    description: [
      'I am familiar with Storybook and can use it to build and document UI components in isolation for consistent user experiences across different platforms.',
    ],
    icon: icons.storybook,
    skillLevel: 'Intermediate',
  },
  {
    name: 'Cypress',
    description: [
      'I have a basic understanding of Cypress, which helps me automate end-to-end testing for web applications to ensure they function as expected.',
    ],
    icon: icons.cypress,
    skillLevel: 'Familiar',
  },
  {
    name: 'Jest',
    description: [
      'I am comfortable using Jest to write and run unit tests for JavaScript code, ensuring that the functionality of my applications is reliable and accurate.',
    ],
    icon: icons.jest,
    skillLevel: 'Intermediate',
  },
  {
    name: 'HTML5',
    description: [
      'I have extensive experience with HTML5, which allows me to structure content and create the foundation of web pages for various devices and platforms.',
    ],
    icon: icons.html,
    skillLevel: 'Expert',
  },
  {
    name: 'CSS3',
    description: [
      'I am highly proficient in CSS3, enabling me to style and layout web content with precision and creativity.',
    ],
    icon: icons.css,
    skillLevel: 'Expert',
  },
  {
    name: 'SQL',
    description: [
      'I have a strong understanding of SQL, which allows me to manage and manipulate data stored in relational databases for various applications.',
    ],
    icon: icons.sql,
    skillLevel: 'Advanced',
  },
  {
    name: 'Azure Devops',
    description: [
      'I am familiar with Azure DevOps and can use it to plan, track, and collaborate on software development projects within a team setting.',
    ],
    icon: icons.azure,
    skillLevel: 'Familiar',
  },
  {
    name: 'Unity',
    description: [
      'I have a solid understanding of Unity, which enables me to create interactive 3D experiences and games for various platforms.',
    ],
    icon: icons.unity,
    skillLevel: 'Advanced',
  },
  {
    name: 'NodeJs',
    description: [
      'I am highly experienced in NodeJS, allowing me to build scalable network applications using JavaScript on the server side.',
    ],
    icon: icons.nodejs,
    skillLevel: 'Expert',
  },
  {
    name: 'Express',
    description: [
      'I have a good understanding of Express and can use it to create web applications with RESTful APIs and middleware for handling requests.',
    ],
    icon: icons.express,
    skillLevel: 'Intermediate',
  },
  {
    name: 'D3.js',
    description: [
      'I am somewhat familiar with D3.js, which allows me to manipulate documents based on data using CSS selectors and the DOM API.',
    ],
    icon: icons.d3,
    skillLevel: 'Familiar',
  },
  {
    name: 'Github',
    description: [
      'I have a strong understanding of GitHub, which enables me to collaborate with others, manage version control, and contribute to open-source projects.',
    ],
    icon: icons.github,
    skillLevel: 'Advanced',
  },
  {
    name: 'AWS',
    description: [
      'I have limited experience with AWS, but I am familiar with some of the core services such as EC2 and S3 for hosting web applications',
    ],
    icon: icons.aws,
    skillLevel: 'Novice',
  },
  {
    name: 'Rust',
    description: [
      'I have a basic understanding of Rust, which allows me to write efficient and safe systems-level code for various applications.',
    ],
    icon: icons.rust,
    skillLevel: 'Familiar',
  },
  {
    name: 'Vite',
    description: [
      'I am highly proficient in Vite, which enables me to create fast and lightweight development environments for modern web projects.',
    ],
    icon: icons.vite,
    skillLevel: 'Advanced',
  },
  {
    name: 'Vitest',
    description: [
      'I have a basic understanding of Vitest, which allows me to write and run unit tests for JavaScript code with ease and efficiency.',
    ],
    icon: icons.vitest,
    skillLevel: 'Familiar',
  },
  {
    name: 'Playwright',
    description: [
      'I am somewhat familiar with Playwright, which helps me automate end-to-end testing for web applications across multiple browsers and environments.',
    ],
    icon: icons.playwright,
    skillLevel: 'Familiar',
  },
  {
    name: 'SolidJs',
    description: [
      'I have a basic understanding of SolidJs, which allows me to create reactive user interfaces for web applications with a focus on simplicity and performance.',
    ],
    icon: icons.solidjs,
    skillLevel: 'Familiar',
  },
  {
    name: 'React Native',
    description: [
      'I am highly experienced in React Native, which enables me to build mobile applications with the same codebase as their web counterparts using the React library. This allows for efficient development and consistent user experiences across different platforms.',
    ],
    icon: icons.react,
    skillLevel: 'Advanced',
  },
  {
    name: '.NET',
    description: [
      "I have a good understanding of .NET, which allows me to develop applications and services for various platforms using Microsoft's programming framework.",
    ],
    icon: icons.dotnet,
    skillLevel: 'Intermediate',
  },
  {
    name: 'Docker',
    description: [
      'I am familiar with Docker, which enables me to package applications into containers for easier deployment, scaling, and management across different environments.',
    ],
    icon: icons.docker,
    skillLevel: 'Familiar',
  },
  {
    name: 'Figma',
    description: [
      'I have a basic understanding of Figma, which allows me to design user interfaces and create interactive prototypes for web and mobile applications.',
    ],
    icon: icons.figma,
    skillLevel: 'Familiar',
  },
  {
    name: 'Gitlab',
    description: [
      'I have a strong understanding of GitLab, which enables me to manage code repositories, track issues, and collaborate with others on software development projects within a team setting.',
    ],
    icon: icons.gitlab,
    skillLevel: 'Advanced',
  },
  {
    name: 'Git',
    description: [
      'I am highly proficient in Git, which allows me to manage version control for my applications and collaborate with others using distributed revision control systems.',
    ],
    icon: icons.git,
    skillLevel: 'Advanced',
  },
] as const satisfies readonly Skill[];

type Technology = (typeof skills)[number]['name'];
