import type { Metadata } from "next";

import Header from "@/components/shared/Header";
import ProjectCardsGrid from "@/components/projects/ProjectCardsGrid";
import DetailsLink from "@/components/shared/DetailsLink";
import { FRONTEND_PROJECTS_DATA } from "@/lib/data";

export const metadata: Metadata = {
	title: "Frontend | GD",
	description: "Frontend page of portfolio page",
};

const Page = () => {
	return (
		<section id="hero">
			<h1 className="mb-8 text-3xl font-bold text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text">
				Frontend Developer and QA Engineer
			</h1>
			<div className="space-y-2 text-lg mb-8">
				<p>
					I am a versatile professional with a strong foundation in UI and UX in video games, quality assurance and frontend development.
				</p>
				<p>
					Drawing on over seven years of experience in creating engaging systems and intuitive UI for games, I bring a unique perspective to crafting polished, user-friendly applications.
				</p>
				<p>
					My recent focus has been on expanding my skills in{" "}
					<span className="font-bold">React</span> and frontend development,
					combining my QA expertise with a passion for crafting intuitive and
					responsive user interfaces.
				</p>
			</div>
			<DetailsLink link="/experience" text="Check my full CV →" />
			<Header text="Projects" />
			<ProjectCardsGrid data={FRONTEND_PROJECTS_DATA} />
		</section>
	);
};

export default Page;
