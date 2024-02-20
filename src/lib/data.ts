const technologies = [
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
	'HTML5, CSS3',
	'VueJS',
	'React Native',
	'C#/.NET',
	'MVC',
	'Aws',
	'SQL',
	'D3.js'
] as const;

type Technology = (typeof technologies)[number];
type Knowlage = 'Very good knowledge' | 'Good knowledge' | 'Basic knowledge';
export const knowlage: Record<Technology, Knowlage> = {
	'Azure Devops': 'Good knowledge',
	'C#/.NET': 'Good knowledge',
	'HTML5, CSS3': 'Good knowledge',
	Javascript: 'Very good knowledge',
	Typescript: 'Very good knowledge',
	'React Native': 'Good knowledge',
	'Svelte, Sveltekit': 'Good knowledge',
	Aws: 'Basic knowledge',
	Cypress: 'Good knowledge',
	Express: 'Good knowledge',
	Jest: 'Good knowledge',
	MVC: 'Good knowledge',
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
	'D3.js': 'Basic knowledge'
};

type Interest = 'Very interested' | 'Interested' | '';
export const interests: Record<Technology, Interest> = {
	'Azure Devops': '',
	'C#/.NET': '',
	'HTML5, CSS3': 'Interested',
	Javascript: 'Very interested',
	Typescript: 'Very interested',
	'React Native': '',
	'Svelte, Sveltekit': 'Very interested',
	Aws: '',
	Cypress: '',
	Express: '',
	Jest: '',
	MVC: '',
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
	'D3.js': ''
};

export const employments = ['AAREON NORDIC', 'QueensLab', 'Yara Marine', 'Squeed '] as const;
type Employments = (typeof employments)[number];

export type Case = {
	name: string;
	employment: Employments;
	technologies: Technology[];
	description: string;
	year: number;
	link?: string;
};

export const cases: Case[] = [
	{
		employment: 'Yara Marine',
		name: 'Fleet Analytics',
		technologies: ['Typescript', 'React', 'Jest'],
		year: 2023,
		description:
			"I've been integral to the development of Fleet Analytics, spearheading the implementation of cutting-edge features while ensuring the seamless maintenance of the system. Additionally, I've assumed a leadership role in enhancing the overall design and ensuring consistency across the application, thus contributing to its usability and aesthetic appeal."
	},
	{
		employment: 'QueensLab',
		name: 'Volvo Group Connected Solutions, Customer Connect',
		technologies: ['Javascript', 'React', 'Jest'],
		year: 2022,
		description:
			"I've had the privilege of contributing to the Developer Portal team at VGCS, where I played a pivotal role in implementing innovative features for the Administration tool. My responsibilities included both the implementation of new functionalities and the meticulous maintenance of existing features within the Administration Tool. Throughout this journey, I've collaborated closely with backend developers, UX designers, and testers, fostering a dynamic and efficient workflow."
	},
	{
		employment: 'QueensLab',
		name: 'Osstell',
		technologies: ['Typescript', 'React', 'React Native'],
		year: 2021,
		description:
			"I contributed to the development of a native application that enables Bluetooth communication and incorporates camera support for barcode scanning. Additionally, I play a role in advancing the development of Osstel's web application."
	},
	{
		employment: 'QueensLab',
		name: 'Emersson',
		technologies: ['VueJS', 'Azure Devops'],
		year: 2021,
		description:
			"I collaborated within a team to spearhead the development of Emerson's innovative IoT platform. My primary focus was on front-end development, particularly in driving the migration towards Micro-front-end architecture to propel the project forward."
	},
	{
		employment: 'QueensLab',
		name: 'Ericsson',
		technologies: ['C#/.NET', 'React', 'Javascript', 'Typescript'],
		year: 2020,
		description: 'Confidential programming information for Ericsson.'
	},
	{
		employment: 'QueensLab',
		name: 'Scan, Weigh, Record',
		technologies: ['React Native'],
		year: 2019,
		description:
			"The Happy Faces restaurant approached QueensLab with the goal of automating their kitchen operations, streamlining warehousing, simplifying inventory management, and enabling recipe setup. As part of a QueensLab team, I contributed to the development of a React Native application tailored for daily use by restaurant staff. My responsibilities included implementing functionality for creating, reading, and printing QR/bar codes, which was a crucial aspect of the application. With the project's tight deadline, I collaborated closely with both backend developers and UX designers to ensure timely completion."
	},
	{
		employment: 'QueensLab',
		name: 'Blue Mobile Systems',
		technologies: ['VueJS', 'Javascript', 'Storybook', 'D3.js'],
		year: 2019,
		description:
			"I played a pivotal role in advancing Blue Mobile Systems' analysis tools, building upon my previous contributions to the project in 2019. With the system's inherent complexity, a new client request emerged, prompting the development of a reporting function. As a front-end developer, I meticulously crafted a responsive layout to present data in a user-friendly manner, all while meeting tight deadlines. Collaborating closely with backend developers, I swiftly integrated the new function. Additionally, I was a key member of a QueensLab team tasked with creating a novel product for Blue Mobile Systems. This product aimed to streamline security officers' workflow by providing access to and management of guards' work documentation, alongside real-time alarm notifications. Given the significant data involved, I engineered sophisticated and performance-optimized graphs to deliver actionable insights to the client. Managing frontend development, I ensured rigorous testing and performance profiling to meet stringent project requirements. I also adopted a modular approach, developing components separately to enhance scalability and efficiency across different products."
	},
	{
		employment: 'QueensLab',
		name: 'Grafokett',
		technologies: ['VueJS', 'Storybook'],
		year: 2019,
		description:
			"I was a vital member of the QueensLab team responsible for developing Grafokett Online, a groundbreaking enterprise service enabling global label printing. As the lead frontend developer, I employed the Vue.js framework to build a robust web application aligned with the project's goals. Embracing a component-based approach, I meticulously crafted components independently from the main system. These components were showcased in Storybook, where I utilized Mocha and Chai for comprehensive unit testing. This methodology facilitated loose coupling between components and the web application, promoting high reusability and scalability."
	},
	{
		employment: 'QueensLab',
		name: 'Raybased',
		technologies: ['VueJS', 'C#/.NET', 'SQL', 'Azure Devops'],
		year: 2019,
		description:
			"The task involved enhancing a product initially developed by QueensLab in 2018: a real-time monitoring system designed for smart buildings. This system enables comprehensive control and optimization of various electrical functions within a building, including heating, ventilation, lighting, and security systems. In response to the customer's requirements, which included the ability to export data to Excel for analysis and toggle functionalities for users, Eskil spearheaded the development of a customized component. This component allows users to select the type of data and export method they prefer. The backend was built using .NET Core to extract data from Azure SQL Server and assemble an Excel workbook for download. Within the Progressive Web app, developed using Vue.js, users interact with the API to select what data to export, facilitating seamless communication and data management."
	},
	{
		employment: 'QueensLab',
		name: 'Studio Ekberg',
		technologies: ['VueJS', 'Javascript', 'HTML5, CSS3'],
		year: 2019,
		description:
			'I led a project for an architecture firm aimed at showcasing their planned apartments through an immersive 3D experience—an online virtual tour featuring various home designs. Leveraging Vue.js, we developed a web application and utilized Marzipano for 3D image mapping. Collaborating closely with our 3D designer, I played a central role in crafting an appealing product that empowered the client to effectively market the apartments even prior to construction.'
	},
	{
		employment: 'QueensLab',
		name: 'Zooma',
		technologies: ['React', 'Javascript', 'HTML5, CSS3'],
		year: 2019,
		description:
			"This project was a collaboration with Zooma, commissioned by a global telecom company. The client required a visually engaging presentation of complex information materials for an international exhibition. Our team developed an application to showcase both still images and videos, meeting stringent aesthetic and brand guidelines. Eskil collaborated closely with Zooma's design team, exceeding the customer's expectations with a compelling and visually striking solution."
	},
	{
		employment: 'QueensLab',
		name: 'QueensLab',
		technologies: ['Unity', 'VueJS', 'Javascript', 'C#/.NET'],
		year: 2018,
		description:
			"The task was to develop and integrate a game onto the company website, serving as a playful representation of the company's message: 'bridge the gap between development and design.' The game utilized real-time data sourced from public transport and weather information in Gothenburg to offer users an immersive experience. Achieving online playability within web browsers required intricate optimization efforts. Eskil collaborated closely with the design team from inception, ensuring seamless cooperation to minimize work hours while meeting high standards of effectiveness."
	},
	{
		employment: 'AAREON NORDIC',
		name: 'AAREON NORDIC',
		technologies: ['C#/.NET'],
		year: 2015,
		description:
			'I was part of the core developer team responsible for the essential functionality of an application. My role involved working closely with other teams to ensure that our functions worked properly for their intended use. Additionally, I collaborated closely with the support and test department to ensure timely resolution of any issues that arose.'
	}
];
