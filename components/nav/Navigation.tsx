// INTERNAL IMPORTS
import Logo from "./Logo";
import NavigationLink from "./NavigationLink";

const Navigation = () => {
	return (
		<nav className="flex items-center justify-between py-8 mb-2 md:mb-12">
			<div>
				<Logo />
			</div>
			<div className="flex items-center justify-between space-x-2">
				{/* <NavigationLink href="/gamedev" text="Game Design and QA" /> */}
				<NavigationLink
					href="/gamedev"
					text={
						<span>
							<span className="md:hidden">Game Design/QA</span>
							<span className="hidden md:inline">Game Design and QA</span>
						</span>
					}
				/>
				<NavigationLink href="/software" text="Software" />
				<NavigationLink href="/projects" text="Projects" />
				<NavigationLink href="/experience" text="Experience" />
			</div>
		</nav>
	);
};

export default Navigation;
