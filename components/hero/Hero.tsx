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
				Hey, I’m Grzegorz.
			</h1>
			<p className="mb-8 text-3xl font-bold">
				Frontend developer, game designer and QA engineer.
			</p>
			<div className="space-y-4 text-xl opacity-75">
				<p>
					I’ve worked as Game Designer at Jujubee and FQA Lead and Project
					Manager at Keywords Studios - now taking my experiences into Frontend
					Development.
				</p>
				<p>Currently diving deeper into Next.js 14 and learning C# with Unity.</p>
				<p>
					I love telling stories and sometimes I publish my games on{" "}
					<a
						href="https://gdd.itch.io/"
						target="_blank"
						rel="noopener"
						className="text-c-violet hover:text-white">
						itch.io
					</a>
					.
				</p>
			</div>
		</section>
	);
};

export default Hero;
