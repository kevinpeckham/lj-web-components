/** A store of web components for the endpoints to pull from  */

// import store functions and types
import { writable, derived } from "svelte/store";

// import web_components.json
import { default as webComponentsData } from "$data/web_components.json";

// raw files store
const rawFilesStore = writable(webComponentsData);

// derived files store
export const webComponentsStore = derived(rawFilesStore, ($rawFilesStore) => {
	return $rawFilesStore;
});

export default webComponentsStore;
export type WebComponentsStore = typeof webComponentsStore;
