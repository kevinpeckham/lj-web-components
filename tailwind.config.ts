import type { Config } from "tailwindcss";
export type tailwindConfigType = Config;

// declaration
const fontSizePxClasses = buildFontSizePxClasses();
const fontWeightClasses = buildFontWeightClasses();

const config: Config = {
	content: ["./src/**/*.{html,pug,js,svelte,ts,json,json5}"],
	theme: {
		extend: {
			colors: {
				// custom rules for starter web page, remove these for your own project
				primary: "#142239",
				accent: "#ebf92f",
			},
			fontSize: {
				...fontSizePxClasses,
			},
			fontWeight: {
				...fontWeightClasses,
			},
		},
	},
};

export default config;

// helper functions for customizing tailwind config
function buildFontSizePxClasses(min?: number, max?: number, step?: number) {
	max = max ?? 51;
	min = min ?? 0;
	step = step ?? 1;
	const obj: { [key: string]: string } = {};
	for (let i = min; i < max; i += step) {
		const key = `${i}`;
		const value = `${i}px`;
		obj[key] = value;
	}
	return obj;
}
function buildFontWeightClasses() {
	const obj: { [key: string]: string } = {};
	for (let i = 100; i < 1000; i += 100) {
		const key = `${i}`;
		const value = `${i}`;
		obj[key] = value;
	}
	return obj;
}
