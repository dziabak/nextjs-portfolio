// INTERNAL IMPORTS
import ProjectCard from "./ProjectCard";

const ProjectCardsGrid = ({ data }) => {
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
