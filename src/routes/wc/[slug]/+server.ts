// serverless Functions
/** @type {import('@sveltejs/adapter-vercel').Config} */
export const config = {
	runtime: "nodejs18.x",
};

import type { RequestHandler } from "./$types";

// handle request
export const GET: RequestHandler = async ({ params, locals }) => {
	// get slug
	const slug = params.slug;

	// get locals
	const { content, utils } = locals;

	// get web components store
	const { webComponentsStore } = content;
	const store = utils.get(webComponentsStore);

	// get web component
	const wc = store.find((f) => slug.includes(f.name));

	// get file
	let file: string = wc?.file ?? "";

	// if no slug or no web component, throw error
	if (!file) throw utils.error(404, "No file found");

	const headers: { [key: string]: string } = {
		"Content-Type": "text/javascript",
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "GET",
		"Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
		"Referrer-Policy": "strict-origin-when-cross-origin",
	};

	// return response
	return new Response(file, {
		headers,
	});
};
