import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact | GD",
	description: "Contact page of portfolio page",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <section>{children}</section>;
}
