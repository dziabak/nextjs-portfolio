// BUILT-IN IMPORTS
import Link from "next/link";

const NavigationLink = ({ href, text }: { href: string; text: string }) => {
	return (
		<Link
			href={href}
			className="px-2 transition-opacity opacity-75 hover:opacity-100">
			{text}
		</Link>
	);
};

export default NavigationLink;
