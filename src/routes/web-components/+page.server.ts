// import type
import type { PageServerLoad } from "./$types";

// get dev environment
import { dev } from "$app/environment";

export const load: PageServerLoad = async function ({ locals }) {
	// get locals
	const { content, utils } = locals;

	// get web components store
	const { documentationStore } = content;
	const documentation = utils.get(documentationStore);

	// set page metadata
	const metaDescription = "";
	const metaTitle = "Web Components";
	const metaNoIndex = true;

	// return data
	return {
		dev,
		documentation,
		metaTitle,
		metaDescription,
		metaNoIndex,
	};
};
