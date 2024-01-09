import { EXPERIENCE_DATA } from "@/lib/data";
import ExperienceCardsGrid from "@/components/experience/ExperienceCardsGrid";
import Header from "@/components/shared/Header";
import DetailsLink from "@/components/shared/DetailsLink";

const HomePageExperienceLayout = () => {
	return (
		<div>
			<Header text="Experience" />
			<ExperienceCardsGrid data={EXPERIENCE_DATA} />
			<DetailsLink link="/experience" text="Check my full CV →" />
		</div>
	);
};

export default HomePageExperienceLayout;
