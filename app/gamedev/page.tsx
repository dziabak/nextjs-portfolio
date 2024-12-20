import type { Metadata } from "next";

import Header from "@/components/shared/Header";
import ProjectCardsGrid from "@/components/projects/ProjectCardsGrid";
import DetailsLink from "@/components/shared/DetailsLink";
import { VIDEO_GAME_PROJECTS_DATA } from "@/lib/data";

export const metadata: Metadata = {
	title: "Gamedev | GD",
	description: "Gamedev page of portfolio page",
};

const Page = () => {
	return (
		<section id="hero">
			<h1 className="mb-8 text-3xl font-bold text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text">
				Game Designer and QA Specialist
			</h1>
			{/* <p className="mb-8 text-3xl font-bold">Game Designer & QA Specialist</p> */}
			{/* <Header text="Profile" /> */}
			<div className="space-y-2 text-lg mb-8">
				<p>
					I am a multi-disciplinary professional with expertise in game design,
					systems development and quality assurance.
				</p>
				<p>
					With over seven years of experience spanning indie and AAA projects, I
					specialize in crafting engaging gameplay systems, designing intuitive
					user interfaces and ensuring high product quality through robust QA
					processes.
				</p>
				<p>
					 My background includes lead QA roles where I implemented and optimized testing methodologies, and project management experience, coordinating multiple teams to deliver polished, high-quality products on time.
				</p>
				<p>
					My passion lies in building immersive experiences that resonate with
					players while maintaining a strong focus on efficiency and quality
					throughout development.
				</p>
			</div>
			<DetailsLink link="/experience" text="Check my full CV →" />
			<Header text="Projects" />
			<ProjectCardsGrid data={VIDEO_GAME_PROJECTS_DATA} />
			<Header text="Experience highlights" />
			<div className="space-y-2 text-lg">
				<p>
					I have contributed to a diverse range of projects, from indie titles
					to AAA games.
				</p>
				<p>
					At <span className="font-bold">Planetary</span>, I led the redesign of
					core gameplay systems and implemented innovative features for a mobile
					app blending virtual experiences, e-commerce and gamification, while also
					introducing robust QA methodologies to ensure a polished release.
				</p>
				<p>
					At <span className="font-bold">Keywords Studios</span>, I supported
					the growth of the Katowice FQA office into one of Europe&apos;s
					largest QA outsource studios and worked on high-profile titles such as{" "}
					<span className="font-bold">THE FINALS</span>,{" "}
					<span className="font-bold">Outriders: Worldslayer</span>, and{" "}
					<span className="font-bold">The Medium</span> as well as{" "}indie titles such as{" "}
					<span className="font-bold">Harold Halibut</span> and{" "}
					<span className="font-bold">Golf With Your Friends</span>.
				</p>
				<p>
					During my time at <span className="font-bold">Jujubee</span>, I
					contributed to the development of games like{" "}
					<span className="font-bold">Truck Simulation 19</span>,{" "}
					<span className="font-bold">Deep Diving Simulator</span> and{" "}
					<span className="font-bold">Take Off: The Flight Simulator</span>,
					focusing on gameplay systems, UI/UX design, and post-release support.
				</p>
			</div>
		</section>
	);
};

export default Page;
