// INTERNAL IMPORTS
import Link from "next/link";
import { CategoryCardProps } from "@/lib/types";

const CategoryCard = ({ title, description, link }: CategoryCardProps) => {
	return (
		<Link
			href={link}
			className="grid items-center w-full grid-cols-0 px-8 py-6 transition rounded-2xl bg-c-dark-blue hover:bg-c-violet/20">
			<div className="flex justify-center mr-8">
				{/* <img src={img} className="rounded-md" /> */}
			</div>
			<div className="col-span-3 space-y-0 text-right">
				<p className="text-2xl font-bold">{title}</p>
				<p className="opacity-60">{description}</p>
			</div>
		</Link>
	);
};

export default CategoryCard;
