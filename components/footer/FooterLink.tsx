const FooterLink = ({ link, text }: { link: string; text: string }) => {
	return (
		<a
			href={link}
			target="_blank"
			rel="noopener"
			className="transition-opacity opacity-75 hover:opacity-100">
			{text}
		</a>
	);
};

export default FooterLink;
