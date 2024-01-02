import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import "./globals.css";

import Navigation from "./ui/nav/Navigation";

const kumbh = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Hey, I'm Grzegorz",
	description: "Home page of portfolio page",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${kumbh.className} container bg-c-midnight text-white`}>
				<Navigation />
				{children}
			</body>
		</html>
	);
}
