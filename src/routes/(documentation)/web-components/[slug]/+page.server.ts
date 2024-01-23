// import type
import type { PageServerLoad } from "./$types";

// get dev environment
import { dev } from "$app/environment";

export const load: PageServerLoad = async function ({ locals, params }) {
	// get slug
	const slug = params.slug as string;

	// unpack locals
	const { content, utils } = locals;

	// get documentation store
	const wcDocumentation = utils.get(content.wcDocumentationStore);
	const documentation = wcDocumentation.find((d) => d.slug === slug);

	// if no documentation, return 404
	if (!documentation) utils.error(404, "No file found");

	// utils
	const { deslugify, get, title_case } = utils;

	// set page metadata
	const metaDescription = "";
	const metaTitle = title_case(deslugify(slug));
	const metaNoIndex = true;

	// web component script
	// by default load the minified script
	const webComponentScript = `/e/wc/${slug}.min.js`;

	// return data
	return {
		dev,
		documentation,
		metaTitle,
		metaDescription,
		metaNoIndex,
		webComponentScript,
		slug,
	};
};
