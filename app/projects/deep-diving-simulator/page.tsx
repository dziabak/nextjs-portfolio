import { Metadata } from "next";

import Image from "next/image";
import Header from "@/components/shared/Header";
import Subheader from "@/components/shared/Subheader";
import Title from "@/components/shared/Title";

import dds_01 from "@/assets/dds/dds-01.jpg";
import dds_02 from "@/assets/dds/dds-02.jpg";
import dds_03 from "@/assets/dds/dds-03.jpg";
import dds_04 from "@/assets/dds/dds-04.jpg";

export const metadata: Metadata = {
	title: "Deep Diving Simulator | GD",
	description: "Projects page of portfolio page",
};

const Page = () => {
	return (
		<div>
			<Title text="Deep Diving Simulator" />
			<div className="space-y-8">
				<p className="text-lg">
					I joined the team right after the prototyping phase of the project and
					once it moved to the full-blown production. During the course of the
					project I had a chance to design many of the features, systems and
					level for the game and then iterate on and maintain them throughout
					the whole production process. As with all of the projects I was
					involved in, I was the person responsible for UI implementation.
				</p>

				<div className="space-y-4">
					<p className="text-lg font-bold">Here&apos;s an overview:</p>
					<div className="space-y-2">
						<p>
							<span className="font-bold">Prefab Design: </span> Created and
							maintained reusable prefabs for interactive objects, collectibles,
							enemies, and hazards, ensuring easy iteration across levels.
						</p>
						<p>
							<span className="font-bold"> Player Mechanics Tuning: </span>
							Fine-tuned player movement, speed, and oxygen use to enhance the
							underwater exploration experience, adjusting settings per level.
						</p>
						<p>
							<span className="font-bold">UI/UX Design: </span>Led UI
							implementation, working with artists and programmers to ensure
							smooth functionality and localization throughout the game.
						</p>
						<p>
							<span className="font-bold">Progression System: </span>Designed a
							balanced player progression system with upgrades and new
							mechanics, catering to both casual players and completionists.
						</p>
						<p>
							<span className="font-bold">Level Design: </span>Created and
							refined three full levels (Pirate's Nest, Silent Cove, Dragon's
							Den), balancing exploration, hazards, and challenges.
						</p>
						<p>
							<span className="font-bold">Level Maintenance and QA: </span>Ensured all
							levels were polished, functional, and enjoyable, aligning
							mechanics with overall game design and player experience as DevQA.
						</p>
					</div>
				</div>
			</div>

			<div className="space-y-8">
				<Header text="Game Design" />
				<Image
					src={dds_01}
					alt="Video game screenshot showing an underwater scene near coral reef full of fish"
				/>
				<p>
					I have set up and maintained majority of the prefabs objects used
					throughout various systems present in the game. One of my main
					responsibilities was the set-up of the easy to use and re-usable
					prefabs for most of the interactive objects in the game:
				</p>

				<div className="space-y-2">
					<Subheader text="Collectible, Destructible and Interactive items" />
					<li>
						Setting up the prefab objects using the logic and script provided by
						the gameplay programmers.
					</li>
					<li>
						Adjusting the objects and maintaining their variations across the
						different levels.
					</li>
					<li>
						Working on the solutions based on the nested prefabs system to
						ensure easy iteration process and fast and efficient changes of the
						implementation.
					</li>
				</div>
				<div className="space-y-2">
					<Subheader text="Enemies and Hazards" />
					<li>
						Adding new variations of the enemies and hazards based on the
						examples provided by the gameplay programmers.
					</li>
				</div>
				<div className="space-y-2">
					<Subheader text="Balancing and fine-tuning the gameplay experience" />
					<li>
						Given the underlying themes of the game and it&apos;s focus on the
						underwater exploration and presenting the sense of being underwater,
						one of my responsibilities was the fine tuning of all the different
						aspects of the player character movement controller, such as general
						speed, speed of ascension and descension as well as other aspects
						such as oxygen use and sprinting abilities limits. Many of those
						settings were manually set for each level, to account for various
						details in level design of particular maps (most importantly
						vertical and horizontal sizes), to enhance the overall gaming
						experience.
					</li>
				</div>
			</div>
			<div className="space-y-8">
				<Header text="UI/UX Design" />

				<Image
					src={dds_04}
					alt="Video game screenshot showing UI view from a deep-sea robot camera"
				/>

				<div className="space-y-2">
					<p>
						I was involved throughout the whole implementation stage of the UI
						and UX design of the game. As the UI designer for the project, my
						main responsibilities were:
					</p>
					<li>Implementing the flows and functionalities of the UI.</li>
					<li>
						Requesting, adjusting and working with the art provided by the UI
						artist.
					</li>
					<li>
						Implementing the solutions using the logic and scripts provided by
						the UI programmers.
					</li>
					<li>
						Working with the localization files, organizing them and verifying
						their proper implementation throughout the game.
					</li>
				</div>
			</div>
			<div className="space-y-8">
				<Header text="Game Balance" />

				<Image
					src={dds_02}
					alt="Video game screenshot showing an underwater mining"
				/>

				<p>
					The game involved a player progression system to both incentivize and
					reward the players for their exploration. With each level the player
					would receive a different upgrade to the general abilities (more
					oxygen, better decompression handling, faster sprinting) or obtain new
					and interesting mechanics to be used on the later levels (dynamite,
					pickaxe, drone).
				</p>

				<div className="space-y-2">
					<p>
						My responsibility was to design the player progression system and
						work on the balancing of the level thresholds and experience values,
						based on the couple of factors:
					</p>
					<li>
						The experience values for player actions (collecting items,
						destroying items, helping the wildlife).
					</li>
					<li>The number of interactive elements found on the levels.</li>
					<li>
						The number of tries the player will need to attempt to finish the
						level.
					</li>
					<li>
						Fine-tuning between the casual playthrough, not focusing on clearing
						all game objectives, and completionists looking to max out the game
						achievements, so that all players find the game progression system
						fair and rewarding.
					</li>
				</div>
			</div>
			<div className="space-y-8">
				<Header text="Level Design" />
				<div>
					<Image
						src={dds_03}
						alt="Video game screenshot showing a sunken underwater Japanese shrine"
						className="mb-4"
					/>
					<p className="text-sm opacity-75">
						One of the characteristic spots in the Dragon&apos;s Den level which
						I worked on was featured on the game&apos;s Steam page.
					</p>
				</div>
				<p>
					I was involved in the full creation of three levels: Pirate&apos;s
					Nest, Silent Cove and Dragon&apos;s Den. For those levels, I&apos;ve
					started working on them right from the initial block out all the way
					up to their final stages for the releasable status. My main focus as a
					level designer was to guide the players through the levels, providing
					them with challenges and interesting locations to explore. On each
					level, the player would encounter some dangers and hazards in the
					forms of sharks, sea urchins, fishing nets or strong water currents as
					well as had a moment of peaceful exploration and collecting sea shells
					and sunken treasures.
				</p>
				<div className="space-y-2">
					<p>
						In the final stages of the production I was the also responsible for
						the fine-tuning and upkeep of majority of the levels of the game. My
						main duties were mainly, but not limited to:
					</p>
					<li>
						Ensuring that all functionalities are in order and the levels can be
						completed.
					</li>
					<li>
						All mechanics and features are implemented properly and in-line with
						the game design.
					</li>
					<li>
						The balance of the levels is maintained and the overall gameplay
						experience is enjoyable for any type of player.
					</li>
				</div>
			</div>
		</div>
	);
};

export default Page;
