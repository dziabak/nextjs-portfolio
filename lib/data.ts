export const FRONTEND_PROJECTS_DATA = [
	{
		id: "1",
		title: "Feedback Nexus",
		description:
			"Project management app with adding and editing feedback, advanced filtering and comments.",
		icon: "feedback-logo.svg",
		alt: "Feedback Nexus logo",
		link: "https://github.com/dziabak/product-feedback-app",
		isRouterLink: false,
	},
	{
		id: "2",
		title: "Devjobs Web App",
		description:
			"Jobs board application with search functionality. Built with React, TypeScript and Tailwind.",
		icon: "devjobs-logo.svg",
		alt: "Devjobs Web App logo",
		link: "https://github.com/dziabak/devjobs-web-app",
		isRouterLink: false,
	},
	{
		id: "3",
		title: "Entertainment App",
		description:
			"Lightweight Netflix clone with search and bookmarking functionalities.",
		icon: "entertainment-logo.svg",
		alt: "Entartainment App logo",
		link: "https://github.com/dziabak/entertainment-app-remake",
		isRouterLink: false,
	},
	{
		id: "4",
		title: "Photosnap Service Page",
		description:
			"Traditional multi-page marketing website for a photo-sharing app. Built with Next.js 14.",
		icon: "photosnap-logo.svg",
		alt: "Photosnap Service Page logo",
		link: "https://github.com/dziabak/nextjs-photosnap",
		isRouterLink: false,
	},
];

export const VIDEO_GAME_PROJECTS_DATA = [
	{
		id: "5",
		title: "Truck Simulation 19",
		description:
			"The biggest and the most complex project I've worked on spanning over 1.5 years of development.",
		icon: "ts19-logo.png",
		alt: "Truck Simulation 19 logo",
		link: "/projects/truck-simulation-19",
		isRouterLink: true,
	},
	{
		id: "6",
		title: "Deep Diving Simulator",
		description:
			"Slow and relaxing exploration game made in a small team, but with a demanding production schedule.",
		icon: "dds-logo.jpg",
		alt: "Deep Diving Simulator logo",
		link: "/projects/deep-diving-simulator",
		isRouterLink: true,
	},
	{
		id: "7",
		title: "Take Off - The Flight Simulator",
		description:
			"Complete conversion and redesign from mobile to PC achieved in a team of just two developers.",
		icon: "takeoff-logo.jpg",
		alt: "Take Off - The Flight Simulator logo",
		link: "/projects/take-off",
		isRouterLink: true,
	},
];

export const PERSONAL_PROJECTS_DATA = [
	{
		id: "8",
		title: "DESTINY ZERO",
		description:
			"Top-down shooter fan game set in Destiny universe amassing over 13 500 views on itch.io.",
		icon: "dzero-logo.png",
		alt: "DESTINY ZERO logo",
		link: "https://gdd.itch.io/destiny-zero",
		isRouterLink: false,
	},
	{
		id: "9",
		title: "TSUKUYOMI 19XX",
		description: `Small narrative game made for my favourite annual "A Game By Its Cover" game jam.`,
		icon: "tsukuyomi-logo.png",
		alt: "TSUKUYOMI 19XX logo",
		link: "https://gdd.itch.io/tsukuyomi-19xx",
		isRouterLink: false,
	},
];

export const EXPERIENCE_DATA = [
	{
		id: "1",
		company: "Keywords Studios",
		date: "(2019 - 2023)",
		description: [
			"Only a month after the FQA office was opened in Katowice, I joined the team of around 40 testers and throughout 4 years I’ve helped to build our location to become one of the largest FQA video game outsource studios in Europe.",
			"As an FQA Lead and Project Manager I've worked with our partners and clients to provide the best testing strategies for their games and execute them.",
			"I’ve worked on numerous high-profile projects, such as THE FINALS, Outriders: Worldslayer or The Medium",
		],
		isListItem: false,
	},
	{
		id: "2",
		company: "Jujubee S.A.",
		date: "(2017 - 2019)",
		description: [
			"During my time at the studio I’ve worked on three projects: Truck Simulation 19, Deep Diving Simulator and Take Off: The Flight Simulator.",
			"As a Game Designer I was able to work on variety of features and areas of the projects - from typical game design work, all the way until post-release support.",
			"As my standout role at the studio, I was working as a UI and UX designer on all of my projects. Working alongside UI artist and UI programmer, this was the epxerience which later turned into my love for frontend development."
		],
		isListItem: false,
	},
	{
		id: "3",
		company: "Interactive Entertainment Design - University Course",
		date: "(2012 - 2017)",
		description: [
			"I’ve finished the first Game Design course in Poland (Interactive Entertainment Design and Games and Software Localization at Uniwersytet Śląski w Katowicach) with a master’s degree.",
			"Extremely valuable experience, it gave me a handful of critical and creative thinking skills as well as design oriented approach to product development and technical knowledge necessary for working with video game engines, such as Unity and Unreal Engine 4.",
		],
		isListItem: false,
	},
];

export const EXPERIENCE_TECHNICAL_SKILLS_DATA = [
	{
		id: "1",
		company: "TECHNICAL SKILLS",
		date: "",
		description: [
			"React, TypeScript, Tailwind, Next.js, Firebase, SQL, HTML, CSS, JavaScript",
			"JIRA, Redmine, Mantis, TestRail, Xcode, Sourcetree, GitHub, Figma, Confluence, Trello, Notion",
			"Unity (with C#), Game Maker Studio 2, Unreal Engine 4",
		],
		isListItem: true,
	},
];

export const EXPERIENCE_WORK_KWS_DATA = [
	{
		id: "2",
		company: "QA Project Manager / Keywords Studios",
		date: "(July 2022 - July 2023)",
		description: [
			"Reworked data-gathering workflow and cut down the smoke testing and walkthrough times during a vertical slice phase of the project",
			"Line-managed a team of 3 leads and 5 senior testers to accommodate 4 different concurrent projects",
			"Working closely with developers to prepare and execute testing plans, high-level client communication and project scheduling, overlooking and assisting multiple testing teams and projects, preparing quotes, spend reports, invoices and business reports",
		],
		isListItem: true,
	},
	{
		id: "3",
		company: "FQA Lead / Keywords Studios",
		date: "(July 2019 - December 2019)",
		description: [
			"Won a pilot with a team of 3 testers, ultimately growing it to a team of 40+ and released a game to favorable reviews (Outriders: Worlslayer)",
			"Worked with Team17 publisher QA to release Ageless and perform live QA on Golf with Your Friends while transitioning to remote testing and WFH model",
			"Leading Functional QA projects on all major platforms, coordinating and mentoring teams, providing clients with project reports and other project-related documentation, communicating with clients and answering clients’ queries, preparing long-term plans and schedules, preparing guidelines and internal project documentation",
			"Administrative tasks: scheduling for the upcoming and ongoing projects, evaluating teams and individual performances, conducting job interviews",
		],
		isListItem: true,
	},
	{
		id: "4",
		company: "FQA Senior Tester / Keywords Studios",
		date: "(July 2019 - December 2019)",
		description: [
			"Prepared a testing strategy for certification testing for a brand new mobile gaming platform for a team of 30+ testers working on two shifts",
			"Vetting, monitoring and ensuring the standard of the reported issues, working with issue databases, creating test cases and preparing test plans, coordinating teams on a daily basis and preparing daily tasks",
		],
		isListItem: true,
	},
];

export const EXPERIENCE_WORK_JUJUBEE_DATA = [
	{
		id: "5",
		company: "Game Designer / Jujubee S.A.",
		date: "(April 2017 - June 2019)",
		description: [
			"Truck Simulation 19 (Unity; iOS, Android): Level and game design, UI and UX design, game balance and monetization scheme, working with localization files; working closely with the publisher’s QA Team and outsourced QA Teams to submit, track and resolve issues; preparing, certifying and deploying development and release versions; preparing updates and patch notes",
			"Take Off: The Flight Simulator (Unity; PC): Full conversion development from mobile platforms to PC, UI and UX redesign, rebalancing, additional game design, quality, functionality and localization testing",
			"Deep Diving Simulator (Unity; PC): Level and game design, UI and UX design, game balance, working with localization files",
		],
		isListItem: true,
	},
];

export const EXPERIENCE_EDUCATION_DATA = [
	{
		id: "6",
		company: "Uniwersytet Śląski w Katowicach",
		date: "(October 2012 - November 2017)",
		description: [
			"Specialization: Interactive Entertainment Design and Games and Software Localization",
			"Field: English Studies",
			"Degree: Master’s degree",
		],
		isListItem: true,
	},
];
