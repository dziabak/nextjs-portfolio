import React from "react";
import type { Metadata } from "next";

import {
	FRONTEND_PROJECTS_DATA,
	VIDEO_GAME_PROJECTS_DATA,
	PERSONAL_PROJECTS_DATA,
	FQA_PROJECTS_DATA,
} from "@/lib/data";
import ProjectCardsGrid from "@/components/projects/ProjectCardsGrid";
import Header from "@/components/shared/Header";

import DetailsLink from "@/components/shared/DetailsLink";

export const metadata: Metadata = {
	title: "Projects | GD",
	description: "Projects page of portfolio page",
};

const Page = () => {
	return (
		<div>
			<Header text="Projects as Game Designer" />
			<ProjectCardsGrid data={VIDEO_GAME_PROJECTS_DATA} />
			<Header text="Projects as FQA Lead and Project Manager" />
			<ProjectCardsGrid data={FQA_PROJECTS_DATA} />
			<Header text="Personal Projects" />
			<ProjectCardsGrid data={PERSONAL_PROJECTS_DATA} />
			<DetailsLink
				link="https://gdd.itch.io/"
				text="Check my itch.io for all my games →"
			/>
			<Header text="Frontend Projects" />
			<ProjectCardsGrid data={FRONTEND_PROJECTS_DATA} />
		</div>
	);
};

export default Page;
