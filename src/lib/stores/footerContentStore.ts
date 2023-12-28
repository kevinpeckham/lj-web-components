import { writable, derived, type Readable } from "svelte/store";

// import raw data from footer.json
import { default as footerContentRaw } from "$data/footer.json";

// types
import type { Link } from "$types/types";
interface FooterContent {
	[key: string]: unknown;
	author: Link;
	org: Link;
	cta: Link;
}

// create raw data store
export const footerContentRawStore = writable(
	footerContentRaw as FooterContent,
);

// create derived store
export const footerContentStore: Readable<FooterContent> = derived(
	footerContentRawStore,
	($footerContentRawStore) => {
		// unpack raw data
		const { author, cta, org } = $footerContentRawStore;

		// if you need to process data, do it here

		// return processed data
		return {
			author,
			cta,
			org,
		};
	},
);

// export store type
export type FooterContentStore = Readable<FooterContent>;

export default footerContentStore;
