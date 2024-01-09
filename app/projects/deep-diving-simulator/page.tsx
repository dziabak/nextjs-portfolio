import { Metadata } from "next";
import Header from "@/components/shared/Header";

export const metadata: Metadata = {
	title: "Deep Diving Simulator | GD",
	description: "Projects page of portfolio page",
};

<p className="font-bold">Deliveries system</p>;

const Page = () => {
	return (
		<div>
			<Header text="Deep Diving Simulator" />

			<p>
				I joined the team right after the prototyping phase of the project and
				once it moved to the full-blown production. During the course of the
				project I had a chance to design many of the features, systems and level
				for the game and then iterate on and maintain them throughout the whole
				production process.
			</p>
			<Header text="Game Design" />

			{/* !https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e5604e84-8ace-4bbe-b5af-6b939e9832ce/ss_e1cade0ffa5e277ab5286077620beeb67d610c03.1920x1080.jpg */}

			<p>
				I have set up and maintained majority of the prefabs objects used
				throughout various systems present in the game. One of my main
				responsibilities was the set-up of the easy to use and re-usable prefabs
				for most of the interactive objects in the game:
			</p>

			<p className="font-bold">
				Collectible, Destructible and Interactive items
			</p>
			<p>
				Setting up the prefab objects using the logic and script provided by the
				gameplay programmers.
			</p>
			<p>
				Adjusting the objects and maintaining their variations across the
				different levels.
			</p>
			<p>
				Working on the solutions based on the nested prefabs system to ensure
				easy iteration process and fast and efficient changes of the
				implementation.
			</p>
			<p>Enemies and Hazards</p>
			<p>
				Adding new variations of the enemies and hazards based on the examples
				provided by the gameplay programmers.
			</p>
			<p className="font-bold">
				Balancing and fine-tuning the gameplay experience
			</p>

			<p>
				Given the underlying themes of the game and it's focus on the underwater
				exploration and presenting the sense of being underwater, one of my
				responsibilities was the fine tuning of all the different aspects of the
				player character movement controller, such as general speed, speed of
				ascension and descension as well as other aspects such as oxygen use and
				sprinting abilities limits. Many of those settings were manually set for
				each level, to account for various details in level design of particular
				maps (most importantly vertical and horizontal sizes), to enhance the
				overall gaming experience.
			</p>
			<Header text="Game Balance" />

			{/* !https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8ef6e622-a8e7-4dc2-9741-5f53a8f4fb46/ss_65f7d4a5830698c524645bdb6ea9c4bb62b7d243.1920x1080.jpg */}

			<p>
				The game involved a player progression system to both incentivize and
				reward the players for their exploration. With each level the player
				would receive a different upgrade to the general abilities (more oxygen,
				better decompression handling, faster sprinting) or obtain new and
				interesting mechanics to be used on the later levels (dynamite, pickaxe,
				drone).
			</p>

			<p>
				My responsibility was to design the player progression system and work
				on the balancing of the level thresholds and experience values, based on
				the couple of factors:
			</p>
			<p>
				The experience values for player actions (collecting items, destroying
				items, helping the wildlife).
			</p>
			<p>The number of interactive elements found on the levels.</p>
			<p>
				The number of tries the player will need to attempt to finish the level.
			</p>
			<p>
				Fine-tuning between the casual playthrough, not focusing on clearing all
				game objectives, and completionists looking to max out the game
				achievements, so that all players find the game progression system fair
				and rewarding.
			</p>
			<Header text="Level Design" />

			{/* ![One of the characteristic spots in the Dragon's Den level which I worked on was featured on the game's Steam page.](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/347f2af9-fb7e-45c4-bd37-a3d91ead9e82/ss_463a0da71d7542ea33008a667596ae02534133f6.1920x1080.jpg) */}

			{/* One of the characteristic spots in the Dragon's Den level which I worked on was featured on the game's Steam page. */}

			<p className="font-bold">
				I was involved in the prototyping, blocking out, finalizing and then
				maintaining several levels of the game.
			</p>

			<p>
				I was involved in the full creation of three levels: Pirate's Nest,
				Silent Cove and Dragon's Den. For those levels, I've started working on
				them right from the initial block out all the way up to their final
				stages for the releasable status. My main focus as a level designer was
				to guide the players through the levels, providing them with challenges
				and interesting locations to explore. On each level, the player would
				encounter some dangers and hazards in the forms of sharks, sea urchins,
				fishing nets or strong water currents as well as had a moment of
				peaceful exploration and collecting sea shells and sunken treasures.
			</p>
			<p>
				In the final stages of the production I was the also responsible for the
				fine-tuning and upkeep of majority of the levels of the game. My main
				duties were mainly, but not limited to:
			</p>
			<p>
				Ensuring that all functionalities are in order and the levels can be
				completed.
			</p>
			<p>
				All mechanics and features are implemented properly and in-line with the
				game design.
			</p>
			<p>
				The balance of the levels is maintained and the overall gameplay
				experience is enjoyable for any type of player.
			</p>
			<Header text="UI/UX Design" />

			{/* !https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4023b271-9f8c-4788-9646-114fe1f14d97/ss_10625e7af5dbf77d38b96a068cde71e3b1fee205.1920x1080.jpg */}

			<p>
				I was involved throughout the whole implementation stage of the UI and
				UX design of the game. As the UI designer for the project, my main
				responsibilities were:
			</p>

			<p>Implementing the flows and functionalities of the UI.</p>
			<p>
				Requesting, adjusting and working with the art provided by the UI
				artist.
			</p>
			<p>
				Implementing the solutions using the logic and scripts provided by the
				UI programmers.
			</p>
			<p>
				Working with the localization files, organizing them and verifying their
				proper implementation throughout the game.
			</p>
		</div>
	);
};

export default Page;
