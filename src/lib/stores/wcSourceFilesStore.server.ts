/**
 * Web Component Source Files Store
 * A store of source .js web component files
 * for real time previews during development
 * */

// import store functions and types
import { readable, derived } from "svelte/store";

const jsFilesStore = readable(
	import.meta.glob(["/src/lib/web-components/**/v*.js", "!**/*.min.js"], {
		as: "raw",
		eager: true,
	}),
);

const cssFilesStore = readable(
	import.meta.glob(["/src/lib/web-components/**/v*.css", "!**/*.min.css"], {
		as: "raw",
		eager: true,
	}),
);

const jsonFilesStore = readable(
	import.meta.glob(["/src/lib/web-components/**/v*.json", "!**/*.min.json"], {
		as: "raw",
		eager: true,
	}),
);

export const wcJsSourceFilesStore = derived(jsFilesStore, ($filesStore) => {
	const folderPath = `src/lib/web-components/`;
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

export const wcCssSourceFilesStore = derived(cssFilesStore, ($filesStore) => {
	const folderPath = `src/lib/web-components/`;
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

export const wcJsonSourceFilesStore = derived(jsonFilesStore, ($filesStore) => {
	const folderPath = `src/lib/web-components/`;
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

export type WcJsSourceFilesStore = typeof wcJsSourceFilesStore;
export type WcCssSourceFilesStore = typeof wcCssSourceFilesStore;
export type WcJsonSourceFilesStore = typeof wcJsonSourceFilesStore;
