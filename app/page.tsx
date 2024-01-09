import Header from "@/components/shared/Header";
import Hero from "@/components/hero/Hero";
import HomePageProjectsLayout from "@/components/projects/HomePageProjectsLayout";
import HomePageExperienceLayout from "@/components/experience/HomePageExperienceLayout";

export default function Home() {
	return (
		<main>
			<Hero />
			<HomePageProjectsLayout />
			<HomePageExperienceLayout />
			{/* <Header text="Contact" /> */}
		</main>
	);
}
