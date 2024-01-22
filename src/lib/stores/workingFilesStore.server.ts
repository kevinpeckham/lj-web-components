/**
 * Working Files Store
 * A store of working .js web component files
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

export const workingFilesStore = derived(filesStore, ($filesStore) => {
	const folderPath = `src/lib/web-components/`;
	const fileEntries = Object.entries($filesStore).map(([path, file]) => {
		const name = path.replace(folderPath, "").split("/")[1];
		return {
			name: path.replace(folderPath, "").split("/")[1],
			value: file,
		};
	});
	return fileEntries;
});

export default workingFilesStore;
export type WorkingFilesStore = typeof workingFilesStore;
