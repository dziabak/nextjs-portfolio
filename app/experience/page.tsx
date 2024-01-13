import React from "react";
import type { Metadata } from "next";

import {
	EXPERIENCE_TECHNICAL_SKILLS_DATA,
	EXPERIENCE_WORK_KWS_DATA,
	EXPERIENCE_WORK_JUJUBEE_DATA,
	EXPERIENCE_EDUCATION_DATA,
} from "@/lib/data";
import Header from "@/components/shared/Header";
import ExperienceCardsGrid from "@/components/experience/ExperienceCardsGrid";

export const metadata: Metadata = {
	title: "Experience | GD",
	description: "Experience page of portfolio page",
};

const Page = () => {
	return (
		<div>
			{/* <Header text="TECHNICAL SKILLS" /> */}
			<ExperienceCardsGrid data={EXPERIENCE_TECHNICAL_SKILLS_DATA} />
			<Header text="EXPERIENCE" />
			<ExperienceCardsGrid data={EXPERIENCE_WORK_KWS_DATA} />
			<ExperienceCardsGrid data={EXPERIENCE_WORK_JUJUBEE_DATA} />
			<Header text="EDUCATION" />
			<ExperienceCardsGrid data={EXPERIENCE_EDUCATION_DATA} />
		</div>
	);
};

export default Page;
