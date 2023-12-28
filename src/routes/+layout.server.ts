// set pages to prerender
// see https://kit.svelte.dev/docs#prerendering
export const prerender = true;

// types
import type { LayoutServerLoad } from "./$types";

// load function
export const load: LayoutServerLoad = async function ({ url, locals }) {
	// get pathname
	const { pathname } = url;

	// unpack settings & utils
	const { content, settings, utils } = locals;

	// process the redirects
	const { redirects } = settings;
	redirects.forEach((item: string[]) => {
		if (pathname == item[0] || pathname.slice(0, -1) == item[0]) {
			throw utils.redirect(301, item[1]);
		}
	});

	// unpack footer content store
	const footer = utils.get(content.footerContentStore);

	// we don't need to load anything for the layout
	return {
		footer,
	};
};
