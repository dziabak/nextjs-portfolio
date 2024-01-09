// INTERNAL IMPORTS
import { ProjectCardsProps } from "@/lib/types";
import ProjectCardRouterLink from "./ProjectCardRouterLink";
import ProjectCardAnchorLink from "./ProjectCardAnchorLink";

const ProjectCard = ({
	title,
	description,
	icon,
	link,
	alt,
	isRouterLink,
}: ProjectCardsProps) => {
	return !isRouterLink ? (
		<ProjectCardAnchorLink
			alt={alt}
			description={description}
			icon={icon}
			link={link}
			title={title}
		/>
	) : (
		<ProjectCardRouterLink
			alt={alt}
			description={description}
			icon={icon}
			link={link}
			title={title}
		/>
	);
};

export default ProjectCard;
