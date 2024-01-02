// INTERNAL IMPORTS
import { ProjectCardsProps } from "@/app/lib/types";

const ProjectCard = ({ title, description, icon, link }: ProjectCardsProps) => {
	return (
		<a
			href={link}
			target="_blank"
			rel="noopener"
			className="flex items-center w-full px-8 py-6 transition rounded-2xl bg-c-dark-blue hover:bg-c-violet/20">
			<div className="w-32 h-24 mr-8 rounded-lg bg-c-violet">{icon}</div>
			<div className="space-y-2">
				<p className="text-2xl font-bold">{title}</p>
				<p className="opacity-75">{description}</p>
			</div>
		</a>
	);
};

export default ProjectCard;
