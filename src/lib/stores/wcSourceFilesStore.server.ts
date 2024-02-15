/**
 * Web Component Source Files Store
 * A store of source .js web component files
 * for real time previews during development
 * */

// import store functions and types
import { readable, derived } from "svelte/store";

const filesStore = readable(
	import.meta.glob(["/src/lib/web-components/**/v*.js", "!**/*.min.js"], {
		as: "raw",
		eager: true,
	}),
);

export const wcSourceFilesStore = derived(filesStore, ($filesStore) => {
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

export default wcSourceFilesStore;
export type WcSourceFilesStore = typeof wcSourceFilesStore;
