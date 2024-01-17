// import store functions and types
import { writable, derived, type Readable } from "svelte/store";

// import terser
// import { minify, type MinifyOptions } from "terser";
// import { default as terserOptions } from "/terser.json";

// import raw files from web components folder
const files = import.meta.glob("$wc/*.js", {
	as: "raw",
	eager: true,
});

// minify options
// const minifyOptions: MinifyOptions = {
// 	//https://socket.dev/npm/package/terser#compress-options
// 	ecma: 2020,
// 	compress: {
// 		drop_console: true,
// 		ecma: 2020,
// 		keep_classnames: true,
// 		module: false,
// 		passes: 1,
// 	},
// 	mangle: {
// 		keep_classnames: true,
// 		keep_fnames: true,
// 		module: false,
// 	},
// 	format: {
// 		comments: "some",
// 		ecma: 2020,
// 		indent_level: 2,
// 	},
// 	keep_classnames: true,
// };

// raw files store
const rawFilesStore = writable(files);

// derived files store
const webComponentsStore = derived(rawFilesStore, ($rawFilesStore) => {
	const keys = Object.keys($rawFilesStore);
	return keys.map((key) => {
		// get name
		const name: string = key.split("/").pop() ?? "";

		// get file
		const file = $rawFilesStore[key]
			.replaceAll(/\\n(?: )*/g, "")
			.replaceAll(/(?:\\t)+/gi, " ")
			.replaceAll(/(?: ){2}/gi, " ")
			.replaceAll(/(?:; )/g, ";")
			.replaceAll(/(?:;})/g, "}")
			.replaceAll(/(?:{ )/g, "{")
			.replaceAll(/(?:} )/g, "}")
			.replaceAll(/(?:\) {)/g, "){");

		return { name, file };
	});
});

export default webComponentsStore;
export type WebComponentsStore = typeof webComponentsStore;
