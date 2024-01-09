// INTERNAL IMPORTS
import FooterLink from "./FooterLink";

const Footer = () => {
	return (
		<div className="flex flex-col pb-8 mt-16 space-y-1">
			<FooterLink link="https://github.com/dziabak" text="GitHub" />
			<FooterLink
				link="https://www.linkedin.com/in/grzegorz-dabrowski-dev"
				text="LinkedIn"
			/>
			<FooterLink link="https://gdd.itch.io/" text="itch.io" />
		</div>
	);
};

export default Footer;
