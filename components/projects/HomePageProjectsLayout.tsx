import { VIDEO_GAME_PROJECTS_DATA } from "@/lib/data";
import ProjectCardsGrid from "@/components/projects/ProjectCardsGrid";
import Header from "@/components/shared/Header";
import DetailsLink from "@/components/shared/DetailsLink";

const HomePageProjectsLayout = () => {
	return (
		<div>
			<Header text="Projects" />
			<ProjectCardsGrid data={VIDEO_GAME_PROJECTS_DATA} />
			<DetailsLink
				link="/projects"
				text="Check the full list of my projects →"
			/>
		</div>
	);
};

export default HomePageProjectsLayout;
