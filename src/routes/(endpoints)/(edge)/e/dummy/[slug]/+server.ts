// serverless Functions
/** @type {import('@sveltejs/adapter-vercel').Config} */
export const config = {
	runtime: "edge",
};

import { default as nav } from "$lib/data/nav.json";

// type
import type { RequestHandler } from "./$types";

// handle request
export const GET: RequestHandler = async ({ params, locals }) => {
	// get slug
	const slug = params.slug;

	// unpack locals
	const { content, utils } = locals;

	// get error function from utils
	const error = utils.error;

	const file = JSON.stringify(nav);

	// throw error if no file
	if (!file) throw error(404, "No file found");

	// set headers
	const headers: { [key: string]: string } = {
		"Content-Type": "application/json",
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
