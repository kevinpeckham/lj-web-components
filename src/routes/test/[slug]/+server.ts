// serverless Functions
/** @type {import('@sveltejs/adapter-vercel').Config} */
export const config = {
	runtime: "edge",
};

// pull in component store
import { get } from "svelte/store";
import { webComponentsStore } from "$wc/webComponentsStore";
const store = get(webComponentsStore);

import type { RequestHandler } from "./$types";

// handle request
export const GET: RequestHandler = async ({ params, locals }) => {
	// get slug
	const slug = params.slug;

	// unpack locals
	const { utils } = locals;

	// get error function from utils
	const error = utils.error;

	// get web component
	const component = store.find((f) => slug.includes(f.name));

	// get file
	let file: string = component?.file ?? "";

	// throw error if no file
	if (!file) throw error(404, "No file found");

	// set headers
	// note: vercel caching will automatically apply compression + compression headers
	const headers: { [key: string]: string } = {
		"Content-Type": "text/javascript",
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "GET",
		// "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
		"Cache-Control": "no-cache, no-store, must-revalidate",
		"Referrer-Policy": "strict-origin-when-cross-origin",
	};

	// return response
	return new Response(file, {
		headers,
	});
};
