// INTERNAL IMPORTS
import ExperienceCard from "./ExperienceCard";
import { ExperienceCardProps } from "@/app/lib/types";

const ExperienceCardsGrid = ({ data }: { data: ExperienceCardProps[] }) => {
	return (
		<div className="mb-12 space-y-4">
			{data.map((item) => (
				<ExperienceCard
					company={item.company}
					date={item.date}
					description={item.description}
					key={item.id}
				/>
			))}
		</div>
	);
};

export default ExperienceCardsGrid;
