// types
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async function ({ locals }) {
	// get content and utils from locals
	const { content, utils } = locals;

	// use get util to unpack home content store
	const home = utils.get(content.homeContentStore);
	// unpack home content buckets
	const { body, brands, meta } = home;

	// set page metadata
	// passing it here will set it in the head of the page -- see +layout.svelte
	const metaDescription = meta.description;
	const metaTitle = meta.title;

	// whether or not to show the prefooter
	const showPrefooter = true;

	return {
		body,
		brands,
		metaDescription,
		metaTitle,
		showPrefooter,
	};
};
