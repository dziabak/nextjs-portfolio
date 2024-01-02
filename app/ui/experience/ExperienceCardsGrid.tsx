// INTERNAL IMPORTS
import ExperienceCard from "./ExperienceCard";

const ExperienceCardsGrid = ({ data }) => {
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
