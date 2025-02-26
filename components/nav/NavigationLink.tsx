// BUILT-IN IMPORTS
import Link from "next/link";

const NavigationLink = ({
	href,
	text,
}: {
	href: string;
	text: string | React.ReactNode;
}) => {
	return (
		<Link
			href={href}
			className="px-2 text-center transition-opacity opacity-75 text-xs md:text-base hover:opacity-100">
			{text}
		</Link>
	);
};

export default NavigationLink;
