/**
 * Working Files Store
 * A store of working .js web component files
 * for real time previews during development
 * */

// import store functions and types
import { readable, derived } from "svelte/store";

import type { ComponentDocumentation } from "$types/ComponentDocumentation";

const filesStore = readable(
	import.meta.glob(["/src/lib/web-components/**/documentation.json"], {
		as: "raw",
		eager: true,
	}),
);

export const documentationStore = derived(filesStore, ($filesStore) => {
	const json = Object.values($filesStore).map((file) => {
		return JSON.parse(file) as ComponentDocumentation;
	});
	return json;
});

export default documentationStore;
export type DocumentationStore = typeof documentationStore;
