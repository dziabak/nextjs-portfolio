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
					I’ve worked as a game designer at Jujubee and QA Lead and Project
					Manager at Keywords Studios - now taking my experiences into Frontend
					Development and React.
				</p>
				<p>
					Throughout my career as a Game Developer, I’ve always been attracted
					to UI and UX and I was able to translate that into real projects and
					products.
				</p>
				<p>
					I love telling stories and I sometimes publish my games on itch.io.
				</p>
			</div>
		</section>
	);
};

export default Hero;
