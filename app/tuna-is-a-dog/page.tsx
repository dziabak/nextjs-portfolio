import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Tuna is a Dog | GD",
	description:
		"Page for Tunda is a Dog studio",
};

const Page = () => {
	return (
		<main>
			<div className="space-y-4 text-center">
				<h1 className="text-3xl font-bold">We are <span className="italic">Tuna is a Dog</span> game studio and we're hard at work on our first game!</h1>
				<p className="text-lg opacity-75">
					More information coming soon...
				</p>
			</div>
		</main>
	);
};

export default Page;
