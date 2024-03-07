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
	'Github'
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
	Github: 'Good knowledge'
};

import icons from './icons';

export const experience: Record<Technology, { knowlage: string; svg: string }> = {
	'Azure Devops': {
		svg: icons.azure,
		knowlage: ''
	},
	'.NET': {
		svg: icons.dotnet,
		knowlage: 'Im'
	},
	'D3.js': {
		svg: icons.d3,
		knowlage: ''
	},
	'React Native': {
		svg: icons.react,
		knowlage: ''
	},
	'Svelte, Sveltekit': {
		svg: icons.svelte,
		knowlage: ''
	},
	Aws: {
		svg: icons.aws,
		knowlage: ''
	},
	CSS3: {
		svg: icons.css,
		knowlage: ''
	},
	Cypress: {
		svg: icons.cypress,
		knowlage: ''
	},
	Express: {
		svg: icons.express,
		knowlage: ''
	},
	HTML5: {
		svg: icons.html,
		knowlage: ''
	},
	Javascript: {
		svg: icons.js,
		knowlage:
			'I possess adept proficiency in JavaScript, proficiently leveraging its capabilities to develop engaging and dynamic web applications, employing clean and efficient coding practices to ensure optimal performance and user experience.'
	},
	Jest: {
		svg: icons.jest,
		knowlage: 'I have good experience with Jest, and I am comfortable using it in my projects.'
	},
	NextJS: {
		svg: icons.next,
		knowlage: ''
	},
	NodeJs: {
		svg: icons.nodejs,
		knowlage:
			'I exhibit proficiency in Node.js, leveraging its capabilities to develop scalable and efficient server-side applications, employing asynchronous programming techniques to handle concurrent requests and ensure seamless performance.'
	},
	Playwright: {
		svg: icons.playwright,
		knowlage:
			'I have used Playwright extensively in my hobby projects. I can use it to automate browser interactions and perform e2e testing and component testing.'
	},
	React: {
		svg: icons.react,
		knowlage:
			'I have good experience with React, and I am comfortable using it in my projects. I have used it extensively in lots of projects.'
	},
	Rust: {
		svg: icons.rust,
		knowlage:
			'I have a basic understanding of Rust understanding how it works, and I can use it in my projects.'
	},
	SolidJs: {
		svg: icons.solidjs,
		knowlage: ''
	},
	SQL: {
		svg: icons.sql,
		knowlage: ''
	},
	Storybook: {
		svg: icons.storybook,
		knowlage: ''
	},
	Typescript: {
		svg: icons.ts,
		knowlage: ''
	},
	Unity: {
		svg: icons.unity,
		knowlage: ''
	},
	Vitest: {
		svg: icons.vitest,
		knowlage: ''
	},
	VueJS: {
		svg: icons.vue,
		knowlage: ''
	},
	Github: {
		svg: icons.github,
		knowlage: ''
	}
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
	Github: ''
};

export const employments = ['AAREON NORDIC', 'QueensLab', 'Yara Marine', 'Squeed '] as const;
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
				img: '/optimized/yara/1.webp',
				content: [
					'Vessel Optimization solutions offer a unique combination of direct, real-time fuel optimization and data analysis over time, leading to improved operational efficiency.',
					'Vessel optimization is a combination of FuelOpt, Fleet Analytics and Route Pilot AI',
					'Vessel optimization helps ship-owneras and operators'
				]
			},
			{
				title: 'My role',
				img: '/optimized/yara/2.webp',
				content: [
					'I worked on the Fleet Analytics platform as a lead front-end developer',
					'As lead i took on the responsibilities of building a design system built on Mui. I documented the design system in Storybook together with working exampels of components',
					'Our team used github as our sprint planning tool and issue tracker.',
					'My responsibilities included:',
					[
						'Storybook development',
						'Ui development for both Fleet Analytics and Route Pilot AI',
						'Unit testing'
					]
				]
			}
		],
		description:
			'As the lead front-end developer at Yara Marine, I spearheaded projects in Fleet Analytics and Route Pilot AI, leveraging my expertise to drive innovative solutions.'
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
				img: '/optimized/volvo/1.webp',
				content: [
					'Volvo Connect is a system for managing your bus fleet and your gateway to all Vehicle services.',
					'Here you will find everything from connected services to documentation and workshop services.',
					'With the system, you get detailed follow-ups on vehicle performance, maintenance planning, and actions that help you increase productivity.'
				]
			},
			{
				title: 'My role',
				img: '/optimized/volvo/2.webp',
				content: [
					'I worked on the Customer portal admin page as a senior front-end developer',
					'I Implemented new features for the administration tool and mantained the codebase',
					'I worked togheter with designers and testers to improve the user experience',
					'My responsibilities included:',
					['Comunication with the backend', 'Code refactoring', 'Unit testing']
				]
			}
		],
		description:
			'While at Volvo Group Connected Solutions, I held the role of senior front-end developer for the Customer Portal. I led the development of the admin panel and played a key role in structuring the code and improving the user experience.'
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
				img: '/optimized/osstell/1.webp',
				content: [
					'OsstellConnect is a cloud-based solution offering a new way for clinicians to use data to enhance their dental implant treatments',
					'With the ConsultationTool in OsstellConnect you can easily describe the different steps of a proposed procedure in a science-based, easyto-understand way from surgery to final restoration with estimations of time between the different procedures'
				]
			},
			{
				title: 'My role',
				img: '/optimized/osstell/2.webp',
				content: [
					'At osstell I worked on the Osstell Connect mobile application as a front-end developer',
					'I also helped build an bluetooth implementation to the Osstell Beacon',
					'My responsibilities included:',
					[
						'Bluetooth implementation',
						'Canvas implementation',
						'Editing with history and undo',
						'Unit testing'
					]
				]
			}
		],
		description:
			"I contributed to the development of a native application that enables Bluetooth communication and incorporates camera support for barcode scanning. Additionally, I play a role in advancing the development of Osstel's web application."
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
			'Emerson is a large corporation and one area of focus is delivering an IoT system for a large industry. There is two development team, with an total amount of 20+ developers and tester and is a mixture of nationalities, experience and background. I had responsibilities throughout the entire stack with a primary focus on frontend development and test environment.'
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
		description: 'Confidential programming information for Ericsson.'
	},
	{
		employment: 'QueensLab',
		company: 'Happy Faces',
		name: 'Scan, Weigh, Record',
		technologies: ['React Native'],
		year: 2019,
		icon: '',
		iconOpacity: 0.8,
		content: [],
		description:
			"The Happy Faces restaurant approached QueensLab with the goal of automating their kitchen operations, streamlining warehousing, simplifying inventory management, and enabling recipe setup. As part of a QueensLab team, I contributed to the development of a React Native application tailored for daily use by restaurant staff. My responsibilities included implementing functionality for creating, reading, and printing QR/bar codes, which was a crucial aspect of the application. With the project's tight deadline, I collaborated closely with both backend developers and UX designers to ensure timely completion."
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
				img: '/optimized/guardtools/1.webp',
				content: [
					'Guardtools is a system desigend as a solution for security officers',
					'The tool is used to manage alarms and set up complex and performance-demanding graphs to provide relevant insights from large amounts of data'
				]
			},
			{
				title: 'My role',
				img: '/optimized/guardtools/2.webp',
				content: [
					'I had the role of lead frontend developer',
					'I built all components in isolation from the system in storybook',
					'In collaboration with both backend developers and UX designers to create a cohesive and user-friendly end product',
					'My responsibilities included:',
					[
						'Creating isolated components in storybook',
						'Backword compatibility to old browsers',
						'Responsive graphs'
					]
				]
			}
		],
		description:
			'At Blue Mobile Systems, I led frontend development on guardtools, collaborating closely with backend developers and UX designers to ensure quality and timely delivery.'
	},
	{
		employment: 'QueensLab',
		company: 'Grafokett',
		name: 'Cloudlabel',
		technologies: ['VueJS', 'Storybook'],
		year: 2019,
		link: '/grafokett',
		icon: '<img src="/optimized/grafokett/logo.webp" />',
		iconOpacity: 0.75,
		content: [
			{
				title: 'The Product',
				img: '/optimized/grafokett/1.webp',
				content: []
			},
			{
				title: 'My role',
				img: '/optimized/grafokett/2.webp',
				content: []
			}
		],
		description:
			'In the Grafokett Online project, I led frontend development, leveraging Vue.js to create a versatile web application. I focused on component-based development, ensuring high reusability and conducting thorough unit testing using Mocha and Chai within Storybook.'
	},
	{
		employment: 'QueensLab',
		name: 'Raybased',
		technologies: ['VueJS', '.NET', 'SQL', 'Azure Devops'],
		year: 2019,
		description:
			"The task involved enhancing a product initially developed by QueensLab in 2018: a real-time monitoring system designed for smart buildings. This system enables comprehensive control and optimization of various electrical functions within a building, including heating, ventilation, lighting, and security systems. In response to the customer's requirements, which included the ability to export data to Excel for analysis and toggle functionalities for users, Eskil spearheaded the development of a customized component. This component allows users to select the type of data and export method they prefer. The backend was built using .NET Core to extract data from Azure SQL Server and assemble an Excel workbook for download. Within the Progressive Web app, developed using Vue.js, users interact with the API to select what data to export, facilitating seamless communication and data management."
	},
	{
		employment: 'QueensLab',
		name: 'Studio Ekberg',
		technologies: ['VueJS', 'Javascript', 'HTML5', 'CSS3'],
		year: 2019,
		description:
			'I led a project for an architecture firm aimed at showcasing their planned apartments through an immersive 3D experience—an online virtual tour featuring various home designs. Leveraging Vue.js, we developed a web application and utilized Marzipano for 3D image mapping. Collaborating closely with our 3D designer, I played a central role in crafting an appealing product that empowered the client to effectively market the apartments even prior to construction.'
	},
	{
		employment: 'QueensLab',
		name: 'Zooma',
		technologies: ['React', 'Javascript', 'HTML5', 'CSS3'],
		year: 2019,
		description:
			"This project was a collaboration with Zooma, commissioned by a global telecom company. The client required a visually engaging presentation of complex information materials for an international exhibition. Our team developed an application to showcase both still images and videos, meeting stringent aesthetic and brand guidelines. Eskil collaborated closely with Zooma's design team, exceeding the customer's expectations with a compelling and visually striking solution."
	},
	{
		employment: 'QueensLab',
		name: 'QueensLab',
		technologies: ['Unity', 'VueJS', 'Javascript', '.NET'],
		year: 2018,
		description:
			"The task was to develop and integrate a game onto the company website, serving as a playful representation of the company's message: 'bridge the gap between development and design.' The game utilized real-time data sourced from public transport and weather information in Gothenburg to offer users an immersive experience. Achieving online playability within web browsers required intricate optimization efforts. Eskil collaborated closely with the design team from inception, ensuring seamless cooperation to minimize work hours while meeting high standards of effectiveness."
	},
	{
		employment: 'AAREON NORDIC',
		name: 'AAREON NORDIC',
		technologies: ['.NET'],
		year: 2015,
		description:
			'I was part of the core developer team responsible for the essential functionality of an application. My role involved working closely with other teams to ensure that our functions worked properly for their intended use. Additionally, I collaborated closely with the support and test department to ensure timely resolution of any issues that arose.'
	}
];
