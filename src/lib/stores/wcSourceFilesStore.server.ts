/**
 * Web Component Source Files Store
 * A store of source .js web component files
 * for real time previews during development
 * */

// import store functions and types
import { readable, derived } from "svelte/store";

const filesStore = readable(
	import.meta.glob(["/src/lib/web-components/**/*.js", "!**/*.min.js"], {
		as: "raw",
		eager: true,
	}),
);

export const wcSourceFilesStore = derived(filesStore, ($filesStore) => {
	const folderPath = `src/lib/web-components/`;
	const fileEntries = Object.entries($filesStore).map(([path, file]) => {
		const name = path.replace(folderPath, "").split("/")[1];
		return {
			name: name,
			value: file,
		};
	});
	return fileEntries;
});

export default wcSourceFilesStore;
export type WcSourceFilesStore = typeof wcSourceFilesStore;
