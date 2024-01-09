// INTERNAL IMPORTS
import Logo from "./Logo";
import NavigationLink from "./NavigationLink";

const Navigation = () => {
	return (
		<nav className="flex items-center justify-between py-8 mb-16">
			<div>
				<Logo />
			</div>
			<div className="space-x-2">
				<NavigationLink href="/projects" text="Projects" />
				<NavigationLink href="/experience" text="Experience" />
				{/* <NavigationLink href="/contact" text="Contact" /> */}
			</div>
		</nav>
	);
};

export default Navigation;
