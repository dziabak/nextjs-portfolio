const Hero = () => {
	return (
		<section id="hero">
			{/* <h1 className="mb-2 text-3xl font-bold text-c-violet">
				Hey, I’m Grzegorz.
			</h1>
			<h1 className="mb-2 text-3xl font-bold text-transparent bg-gradient-to-r from-sky-400 via-purple-500 to-fuchsia-500 bg-clip-text">
				Hey, I’m Grzegorz.
			</h1> */}
			<h1 className="mb-2 text-3xl font-bold text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text">
				Hey, I&apos;m Grzegorz.
			</h1>
			<p className="mb-8 text-3xl font-bold">
				Experienced Game Designer and seasoned QA Engineer.
			</p>
			<div className="space-y-4 text-xl opacity-75">
				<p>
					I&apos;ve worked as <span className="font-bold">Game Designer</span>{" "}
					at Planetary and Jujubee as well as{" "}
					<span className="font-bold">FQA Lead</span> and{" "}
					<span className="font-bold">Project Manager</span> at Keywords
					Studios.
				</p>
				<p>
					I&apos;m passionate about <span className="font-bold">UI</span> and{" "}
					<span className="font-bold">UX</span> and that&apos;s why I learned{" "}
					<span className="font-bold">React</span>.
				</p>
				<p>
					I&apos;m currently developing my first commercial game in{" "}
					<span className="font-bold">Unity</span> (it&apos;s about{" "}
					<span className="font-bold">nuclear trains</span>).
				</p>
				<p>
					I love telling stories and sometimes I publish my games on{" "}
					<a
						href="https://gdd.itch.io/"
						target="_blank"
						rel="noopener"
						className="font-bold text-c-violet hover:text-white">
						itch.io
					</a>
					.
				</p>
			</div>
		</section>
	);
};

export default Hero;
