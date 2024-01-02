import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				main: ["Kumbh Sans", "sans-serif"],
			},
			colors: {
				"c-violet": "#939bf4",
				"c-dark-blue": "#19202d",
				"c-midnight": "#121721",
			},
			container: {
				center: true,
				padding: {
					DEFAULT: "1rem",
					sm: "6rem",
					lg: "14rem",
					xl: "22rem",
					"2xl": "30rem",
				},
			},
		},
	},
	plugins: [],
};
export default config;
