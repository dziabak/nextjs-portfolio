import { HERO_SECTIONS_DATA } from "@/lib/data";
import Header from "@/components/shared/Header";
import CategoryCardsGrid from "./CategoryCardsGrid";

const HomePageCategoryLayout = () => {
	return (
		<div>
			<Header text="" />
			<CategoryCardsGrid data={HERO_SECTIONS_DATA} />
		</div>
	);
};

export default HomePageCategoryLayout;
