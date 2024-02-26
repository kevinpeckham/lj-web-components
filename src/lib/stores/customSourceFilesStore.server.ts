/**
 * Web Component Source Files Store
 * A store of source .js web component files
 * for real time previews during development
 * */

// import store functions and types
import { readable, derived } from "svelte/store";

const jsFilesStore = readable(
	import.meta.glob(["/src/lib/data/custom/**/*.js", "!**/*.min.js"], {
		as: "raw",
		eager: true,
	}),
);

const cssFilesStore = readable(
	import.meta.glob(["/src/lib/data/custom/**/*.css", "!**/*.min.css"], {
		as: "raw",
		eager: true,
	}),
);

const jsonFilesStore = readable(
	import.meta.glob(["/src/lib/data/custom/**/*.json", "!**/*.min.json"], {
		as: "raw",
		eager: true,
	}),
);

export const customJsSourceFilesStore = derived(jsFilesStore, ($filesStore) => {
	const folderPath = `src/lib/data/custom/`;
	const fileEntries = Object.entries($filesStore).map(([path, file]) => {
		const name = path.replace(folderPath, "").split("/")[1];
		const version = path.match(/\d.\d.\d/)?.[0] ?? "";
		return {
			name: name,
			value: file,
			version,
		};
	});
	return fileEntries;
});

export const customCssSourceFilesStore = derived(
	cssFilesStore,
	($filesStore) => {
		const folderPath = `src/lib/data/custom/`;
		const fileEntries = Object.entries($filesStore).map(([path, file]) => {
			const name = path.replace(folderPath, "").split("/")[1];
			const version = path.match(/\d.\d.\d/)?.[0] ?? "";
			return {
				name: name,
				value: file,
				version,
			};
		});
		return fileEntries;
	},
);

export const customJsonSourceFilesStore = derived(
	jsonFilesStore,
	($filesStore) => {
		const folderPath = `src/lib/data/custom/`;
		const fileEntries = Object.entries($filesStore).map(([path, file]) => {
			const name = path.replace(folderPath, "").split("/")[1];
			const version = path.match(/\d.\d.\d/)?.[0] ?? "";
			return {
				name: name,
				value: file,
				version,
			};
		});
		return fileEntries;
	},
);

export type WcJsSourceFilesStore = typeof customJsSourceFilesStore;
export type WcCssSourceFilesStore = typeof customCssSourceFilesStore;
export type WcJsonSourceFilesStore = typeof customJsonSourceFilesStore;
