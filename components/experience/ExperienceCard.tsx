// INTERNAL IMPORTS
import { ExperienceCardProps } from "@/lib/types";

const ExperienceCard = ({
	company,
	date,
	description,
	isListItem,
}: ExperienceCardProps) => {
	return (
		<div>
			<p className="mb-4 text-2xl font-bold">
				{company}
				<span className="ml-2 text-lg font-normal opacity-75">{date}</span>
			</p>
			<div className="space-y-2">
				{!isListItem &&
					description.map((item) => (
						<p className="opacity-75" key={item}>
							{item}
						</p>
					))}
				{isListItem &&
					description.map((item) => (
						<li className="opacity-75" key={item}>
							{item}
						</li>
					))}
			</div>
		</div>
	);
};

export default ExperienceCard;
