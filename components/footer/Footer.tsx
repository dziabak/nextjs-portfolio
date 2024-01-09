// INTERNAL IMPORTS
import FooterLink from "./FooterLink";

const Footer = () => {
	return (
		<div className="flex flex-col space-y-1 pb-8">
			<FooterLink link="https://github.com/dziabak" text="GitHub" />
			<FooterLink
				link="https://www.linkedin.com/in/grzegorz-d%C4%85browski-7b78271b5/"
				text="LinkedIn"
			/>
			<FooterLink link="https://gdd.itch.io/" text="itch.io" />
		</div>
	);
};

export default Footer;
