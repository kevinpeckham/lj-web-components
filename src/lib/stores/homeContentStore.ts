import { writable, derived, type Readable } from "svelte/store";

// import raw data from homeContent.json
import { default as rawContent } from "$data/home.json";

// types
import type { Link } from "$types/types";

// the raw types for the raw data store
interface HomeRawContent {
	[key: string]: unknown;
	body: {
		headline: string;
		text: string;
		cta: Link;
	};
	brands: {
		name: string;
		logo: string;
		url: string;
	}[];
	meta: {
		description: string;
		title: string;
	};
}

// the processed / safe types coming out of the derived store
interface HomeContent {
	[key: string]: unknown;
	meta: {
		[key: string]: string;
		title: string;
		description: string;
	};
	brands: Link[];
	body: {
		[key: string]: unknown;
		cta: Link;
		headline: string;
		text: string;
	};
}

// raw data store
export const homeContentRawStore = writable(rawContent as HomeRawContent);

// derived store
export const homeContentStore = derived(
	homeContentRawStore,
	($homeContentRawStore) => {
		// already type safe
		const { body, meta } = $homeContentRawStore;

		// process brands data
		const rawBrandsData = $homeContentRawStore.brands;
		const brands = rawBrandsData.map((brand) => {
			return {
				label: brand.name,
				href: brand.url,
				rel: "external",
				target: "_self",
				title: `visit ${brand.name} website`,
			} as Link;
		});

		// return processed data
		return {
			body,
			brands,
			meta,
		} as HomeContent;
	},
);

// export data store type
export type HomeContentStore = Readable<HomeContent>;
