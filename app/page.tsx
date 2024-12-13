import Header from "@/components/shared/Header";
import Hero from "@/components/hero/Hero";
import HomePageProjectsLayout from "@/components/projects/HomePageProjectsLayout";
import HomePageExperienceLayout from "@/components/experience/HomePageExperienceLayout";
import HomePageCategoryLayout from "@/components/hero/HomePageCategoryLayout";

export default function Home() {
	return (
		<main>
			<Hero />
			{/* <HomePageProjectsLayout /> */}
			<HomePageCategoryLayout />
			{/* <HomePageExperienceLayout /> */}
		</main>
	);
}
