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
			<div className="space-y-2">
				{description.map((item) => (
					<p className="opacity-75" key={item}>
						{item}
					</p>
				))}
			</div>
		</div>
	);
};

export default ExperienceCard;
