import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Projects | GD",
	description: "Projects page of portfolio page",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <section>{children}</section>;
}
