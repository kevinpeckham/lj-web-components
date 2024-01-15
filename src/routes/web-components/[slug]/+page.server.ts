// import type
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async function ({ locals, params }) {
	const slug = params.slug as string;

	// utils
	const { deslugify, get, title_case } = locals.utils;

	// set page metadata
	const metaDescription = "";
	const metaTitle = title_case(deslugify(slug));
	const metaNoIndex = true;

	// web component script
	const webComponentScript = `/wc/${slug}.min.js`;

	// return data
	return {
		metaTitle,
		metaDescription,
		metaNoIndex,
		webComponentScript,
		slug,
	};
};
