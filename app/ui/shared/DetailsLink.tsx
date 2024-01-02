// BUILT-IN IMPORTS
import Link from "next/link";

const DetailsLink = ({ link, text }: { link: string; text: string }) => {
	return (
		<Link
			href={link}
			className="text-3xl font-bold transition-opacity text-c-violet hover:opacity-50">
			{text}
		</Link>
	);
};

export default DetailsLink;
