// INTERNAL IMPORTS
import { ProjectCardsProps } from "@/lib/types";

const ProjectCard = ({
	title,
	description,
	icon,
	link,
	alt,
}: ProjectCardsProps) => {
	return (
		<a
			href={link}
			target="_blank"
			rel="noopener"
			className="grid items-center w-full grid-cols-4 px-8 py-6 transition rounded-2xl bg-c-dark-blue hover:bg-c-violet/20">
			<div className="flex justify-center mr-8">
				<img src={icon} alt={alt} />
			</div>
			<div className="col-span-3 space-y-2">
				<p className="text-2xl font-bold">{title}</p>
				<p className="opacity-75">{description}</p>
			</div>
		</a>
	);
};

export default ProjectCard;
