// import type
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async function ({ locals }) {
	// get locals
	const { content, utils } = locals;

	// get web components store
	const { webComponentsStore } = content;
	const web_components = utils.get(webComponentsStore);

	console.log(web_components);

	// set page metadata
	const metaDescription = "";
	const metaTitle = "Web Components";
	const metaNoIndex = true;

	// return data
	return {
		metaTitle,
		metaDescription,
		metaNoIndex,
	};
};
