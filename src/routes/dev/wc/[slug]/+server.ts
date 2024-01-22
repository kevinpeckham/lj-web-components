// serverless Functions
/** @type {import('@sveltejs/adapter-vercel').Config} */
export const config = {
	runtime: "edge",
};

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

	// pull in component store
	const store = utils.get(content.workingFilesStore);

	// get web component
	const component = store.find((f) => slug.includes(f.name));

	// get file
	const file: string | undefined = component?.value;

	// throw error if no file
	if (!file) throw error(404, "No file found");

	// set headers
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
