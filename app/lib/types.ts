export type ProjectData = {
	title: string;
	description: string;
	icon: string;
	link: string;
}[];

export type ProjectCardsProps = {
	id?: string;
	title: string;
	description: string;
	icon: string;
	link: string;
};

export type ExperienceCardProps = {
	id?: string;
	company: string;
	date: string;
	description: string;
};
