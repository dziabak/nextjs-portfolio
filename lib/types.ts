export type ProjectCardsProps = {
	id?: string;
	title: string;
	description: string;
	icon: string;
	alt: string;
	link: string;
	isRouterLink?: boolean;
};

export type ExperienceCardProps = {
	id?: string;
	company: string;
	date: string;
	description: string[];
	isListItem: boolean;
};
