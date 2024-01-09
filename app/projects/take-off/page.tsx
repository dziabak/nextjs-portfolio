import { Metadata } from "next";
import Header from "@/components/shared/Header";

export const metadata: Metadata = {
	title: "Take Off - The Flight Simulator | GD",
	description: "Projects page of portfolio page",
};

const Page = () => {
	return (
		<div>
			<Header text="Take Off - The Flight Simulator" />
			<p>
				This was the first project I was responsible for immediately after
				joining the studio, where I had to show versatility and ability to learn
				quickly, as in a very short time I experienced many aspects of the game
				production process and was responsible for every feature available in
				the game.
			</p>
			<Header text="Game Design" />
			{/* !https://s3-us-west-2.amazonaws.com/secure.notion-static.com/40df5b38-1bbf-4f53-b25b-8e0a6520d74f/ss_50ce7dff14ccbb5cc2ad69221b658a08fe1de710.1920x1080.jpg */}
			<p className="font-bold">
				Complete conversion and redesign from mobile platform to PC
			</p>
			<p>
				Take Off was originally published as a mobile game, available on both
				Google Play and App Store. To ensure that the game plays well on the PC
				and can provide a similar experience, all of the existing features and
				functionalities had to be looked at and appropriately adjusted for the
				new platform. Almost all of the areas in the game, starting from the
				position of the cameras in the cockpit all the way to the improved game
				controls, had been at least tweaked to account for the more
				possibilities offered by the PC platform.
			</p>
			<Header text="Game Balance" />
			{/* !https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9cfbbf04-a809-4d40-8033-8da1381e675e/Screenshot_2.png */}
			<p className="font-bold">
				Redesigning from F2P game with in-app purchases to premium game
			</p>
			<p>
				The fundamental change in the game balance of the PC version of the game
				was the decision to completely remove in app purchase, as the game would
				be available in a premium model. This meant that the whole progression
				system had to be reworked and tailored more to the casual PC player.
			</p>
			<p>
				The platform change also meant the change in the target audience and
				different expectations and behavior patterns of the players. Instead of
				short, but frequent sessions from the mobile version of the game, the PC
				version had to offer and encourage longer play sessions. This was
				achieved by streamlining the progression system and allowing the players
				to complete the whole game without needing to replay missions or buy
				virtual currency. However, only the most skilled and persistent players
				could unlock all of the planes, skins and upgrades.
			</p>
			<Header text="Level Design" />
			<p>
				Because of the platform change, it was possible to enhance some of the
				features and functionalities of the game regarding the level design
				aspects. The conversion allowed to introduce post processing volumes
				improving the visuals of the game, increasing draw distances and
				adjusting the LODs for overall better quality. Some maps were
				additionally improved by adding more objects and textures of the higher
				quality.
			</p>
			<Header text="UI/UX Design" />
			{/* !https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a50f00e8-2a87-4ec3-951e-a2477395682a/Screenshot_1.png */}
			<p>
				With the switch from the touch controls to the more classic modes of
				navigation using the mouse and keyboard as well as the gamepad
				controller, some elements of the UI had to be changed and adjusted
				accordingly to support new controllers.
			</p>
			<p>
				From the design perspective, one of the main tasks was to properly setup
				all navigation flows between the individual buttons. Additionally, all
				buttons in the game were reworked to support highlighting as well as
				displaying the icons of using the game pad.
			</p>
		</div>
	);
};

export default Page;
