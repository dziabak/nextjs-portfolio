// INTERNAL IMPORTS
import ProjectCard from "./ProjectCard";
import { ProjectCardsProps } from "@/lib/types";

const ProjectCardsGrid = ({ data }: { data: ProjectCardsProps[] }) => {
	return (
		<div className="flex flex-col mb-12 space-y-4">
			{data.map((item) => (
				<ProjectCard
					description={item.description}
					icon={item.icon}
					link={item.link}
					title={item.title}
					key={item.id}
				/>
			))}
		</div>
	);
};

export default ProjectCardsGrid;
