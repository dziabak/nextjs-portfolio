import CategoryCard from "./CategoryCard";
import { CategoryCardProps } from "@/lib/types";

const CategoryCardsGrid = ({ data }: { data: CategoryCardProps[] }) => {
	return (
		<div className="flex flex-col mb-12 space-y-4">
			{data.map((item) => (
				<CategoryCard
					key={item.id}
					title={item.title}
					description={item.description}
					link={item.link}
				/>
			))}
		</div>
	);
};

export default CategoryCardsGrid;
