import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Experience | GD",
	description: "Experience page of portfolio page",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <section>{children}</section>;
}
