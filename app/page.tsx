import { PROJECTS_DATA } from "./lib/data";
import { EXPERIENCE_DATA } from "./lib/data";
import Header from "./ui/shared/Header";
import DetailsLink from "./ui/shared/DetailsLink";
import Hero from "./ui/hero/Hero";
import ProjectCardsGrid from "./ui/projects/ProjectCardsGrid";
import ExperienceCardsGrid from "./ui/experience/ExperienceCardsGrid";
import Footer from "./ui/footer/Footer";

export default function Home() {
	return (
		<main>
			<Hero />
			<Header text="Projects" />
			<ProjectCardsGrid data={PROJECTS_DATA} />
			<DetailsLink link="/projects" text="Check the full list of my projects →" />
			<Header text="Experience" />
			<ExperienceCardsGrid data={EXPERIENCE_DATA} />
			<DetailsLink link="/experience" text="Check my full CV →" />
			<Header text="Contact" />
			<Footer />
		</main>
	);
}
