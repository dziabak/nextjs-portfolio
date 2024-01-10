import { Metadata } from "next";

import Image from "next/image";
import Header from "@/components/shared/Header";
import Subheader from "@/components/shared/Subheader";
import Title from "@/components/shared/Title";

import ts19_01 from "@/assets/ts19/ts19-01.webp";
import ts19_02 from "@/assets/ts19/ts19-02.webp";
import ts19_04 from "@/assets/ts19/ts19-04.webp";
import ts19_05 from "@/assets/ts19/ts19-05.jpg";

export const metadata: Metadata = {
	title: "Truck Simulation 19 | GD",
	description: "Projects page of portfolio page",
};

const Page = () => {
	return (
		<div>
			<Title text="Truck Simulation 19" />
			<p className="text-lg">
				I joined the team when the game was already halfway through its
				production, with many different features and functionalities already
				established, however many of them still in need of iteration and
				redesign. Most of my work on the project was realized during that
				process and usually I had to work in the already established boundaries,
				always needing to take into the account how I can use the existing
				functionalities and improve upon them.
			</p>

			<div className="space-y-8">
				<Header text="Game Design" />
				<Image src={ts19_01} alt="Video game screenshot showing a truck attaching a cargo trailer" />
				<div className="space-y-2">
					<Subheader text="Deliveries system" />

					<p>
						One of the biggest features I was working on was the deliveries
						system, tightly connected to the game balancing and the overall game
						progression.
					</p>
					<p>
						In the process of designing the feature I was responsible for
						setting up the prefabs of different trailers for the deliveries as
						well as coming up with the ideas for the cargo. Some of them were
						made into special models.
					</p>
					<p>
						This system was connected to the game progression system and was
						taking into the account several factors, such as player level, truck
						level, rarity and quality of the cargo, size of the cargo and
						distances between the cities. Some deliveries had special modifiers
						influencing the way the player had to handle the cargo (fragile
						cargo, illegal cargo, oversized cargo) and of course the faster the
						player would complete the delivery, the better the reward.
					</p>
					<p>
						This way the player was always presented with a breadth of choices,
						each with their own pros and cons. Some of the deliveries had
						special modifiers and could be easily damaged while some jobs
						required to travel over great distances or some required special
						truck upgrades.
					</p>
				</div>

				<div className="space-y-2">
					<Subheader text="Tutorial Flow Redesign" />
					<p>
						In the later stages of the development I was tasked with redesigning
						the tutorial flow, explaining all of the essential details to the
						new players. I expanded on the original idea by adding new steps and
						taking into the account the more advanced and complex
						functionalities that the target audience of the simulators would
						look for and made them a part of the flow. Even though the
						introduction to the game had to have a structure of the classic
						tutorial, it was actually presented as the “technical check” of the
						truck, already putting the player into the shoes of the truck driver
						from the first minutes of the game. All dialogue for the tutorial
						was also written and prepared by me.
					</p>
				</div>
				<div className="space-y-2">
					<Subheader text="Meta game" />

					<p>
						Apart from the core gameplay loop focusing on the players driving
						and completing the jobs, the game also introduced the meta game in
						the form of the player owned company. The goal of the player was to
						build their own trucking empire by hiring new drivers and building
						depots in the cities visited by the players.
					</p>
					<p>
						Players would send their drivers on the selected jobs and wait in
						the real time for them to be completed. This would provide the
						player with the passive income, encouraging further play and
						frequent revisiting of the game.
					</p>
					<p>
						This system was mostly based on the player delivery system, however
						it was redesigned in terms of values to provide the players with
						visible profits and purpose of maintaining their own company in the
						mode.
					</p>
				</div>
			</div>

			<div className="space-y-8">
				<Header text="UI/UX Design" />
				<Image src={ts19_05} alt="Video game screenshot showing an interior of a truck shop with an UI" />
				<div className="space-y-2">
				<Subheader text="UI/UX tasks & responsibilities" />
					<p>
						In the project I was the main person responsible for the UI design.
						From the moment I&apos;ve started working on the project up until
						its release I was solely responsible for the game UI setup and
						maintaining its functionalities. This process involved:
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
				<div className="space-y-2">
					<Subheader text="UI redesign" />
					<p>
						At one point in the project the publisher requested a complete UI
						redesign so it would be more in line with the other simulation games
						they have published in the past. This required some serious changes
						in the overall look, design and navigation of the UI. During this
						process I was closely working with the UI artist and UI programmer
						in order to deliver on the vision requested by the publisher.
					</p>
				</div>
			</div>

			<div className="space-y-8">
				<Header text="Narrative Design" />
				<Image src={ts19_02} alt="Video game screenshot showing a story dialogue during a delivery mission" />
				<div className="space-y-2">
					<Subheader text="Mission system" />
					<p>
						One of the most interesting additions to the game were the story
						missions. The game introduced an original and sprawling story,
						putting the player in the shoes of an estranged sibling of the
						legendary family of truckers, trying to rebuild their trucking
						company.
					</p>
					<p>
						The designing process of the mission started with planning out the
						route the player would have to take during the mission, taking into
						the account the progress of the player and the territories they
						would have access to. Another goal was to give the players an
						opportunity to visit interesting places on the map and familiarize
						them with the road network.
					</p>
					<p>
						All missions were constructed from the building blocks containing
						the custom made scripts and actions provided by the gameplay
						programmers. Those blocks would describe a set of terms and
						conditions that the player would need to fulfill or actions and
						triggers that would influence the gameplay during the missions.
					</p>
					<p>
						In the later stages of the project I was responsible for redesigning
						some of the missions to account for the changes in the world map or
						to tweak them in relation to the publisher&apos;s feedback. This
						required of me a great knowledge of all the functionalities and
						scripts (building blocks) used throughout all the missions.
					</p>
				</div>
			</div>

			<div className="space-y-8">
				<Header text="Level Design" />
				<Image src={ts19_04} alt="Video game screenshot showing a truck driving on a cloverleaf interchange" />
				<div className="space-y-2">
					<Subheader text="World map environment" />
					<p>
						Apart from the roads, the important aspect of how the game looked
						were the landscape surrounding the road network. During the creation
						of the landscapes I was responsible for painting the textures,
						placing the cities and buildings objects as well as generating tree
						lines. All of it was based on the spawn system relying on the
						players location in the world, which was also setup by me during the
						work on the feature.
					</p>
				</div>
				<div className="space-y-2">
					<Subheader text="Intersection system" />

					<p>
						The game involved a great number of various intersections of a
						varied degree of complexity. My job was to set up all of the
						intersections in the game with the appropriate road signs, city
						names and directions, exactly as the player would expect from seeing
						them on the real roads. In the end, all intersections were comprised
						of a couple of different prefabs. This had to be maintained all
						throughout the project and all later changes to the road network had
						to always be reflected in the intersections.
					</p>
				</div>
			</div>

			<div className="space-y-8">
				<Header text="Extra" />
				<div className="space-y-2">
					<Subheader text="Build deployment" />
					<p>
						During the final production stages and the post release support I
						was also in part responsible for the preparation of the releasable
						builds of the game and providing them to the publisher for the later
						build deployment. This covered all major patches as well as the
						minor fixes. During that process I was also responsible for
						providing the patch notes which would be later included on the store
						page.
					</p>
				</div>
				<div className="space-y-2">

					<Subheader text="Additional documentation" />
					<p>
						In the project I&apos;ve become known for keeping notes and
						documenting as much of the processes I was involved with as
						possible. In addition to the GDD I began collecting the data on many
						features in the game, so they can be easily found and referenced
						throughout the later development of the game.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Page;
