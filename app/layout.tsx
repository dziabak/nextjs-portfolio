import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import "./globals.css";

import Navigation from "@/components/nav/Navigation";
import Footer from "@/components/footer/Footer";

const kumbh = Kumbh_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
	title: "Home | GD",
	description: "Home page of portfolio page",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${kumbh.className} container bg-c-midnight text-white`}>
				<Navigation />
				{children}
				<Footer />
			</body>
		</html>
	);
}
