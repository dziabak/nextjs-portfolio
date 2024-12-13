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
					I am a detail-oriented professional with a strong foundation in
					quality assurance, UI/UX design and frontend development.
				</p>
				<p>
					With extensive experience in refining software quality through robust
					QA processes and collaborating with multidisciplinary teams, I have
					developed a deep understanding of delivering polished, user-friendly
					applications.
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
