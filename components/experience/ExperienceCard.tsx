// INTERNAL IMPORTS
import { ExperienceCardProps } from "@/lib/types";

const ExperienceCard = ({
	company,
	date,
	description,
}: ExperienceCardProps) => {
	return (
		<div>
			<p className="mb-4 text-2xl font-bold">
				{company}
				<span className="ml-2 text-lg font-normal opacity-75">{date}</span>
			</p>
			<p className="opacity-75">{description}</p>
		</div>
	);
};

export default ExperienceCard;
