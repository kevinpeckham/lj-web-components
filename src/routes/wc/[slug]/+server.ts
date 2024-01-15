// serverless Functions
/** @type {import('@sveltejs/adapter-vercel').Config} */
export const config = {
	runtime: "nodejs18.x",
};

// import brotli
import { compress } from "brotli";

import type { RequestHandler } from "./$types";

// handle request
export const GET: RequestHandler = async ({ params, locals, request }) => {
	// get headers
	const requestHeaders = request.headers;
	const acceptEncoding = requestHeaders.get("accept-encoding");

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
	let file: string | Uint8Array = wc?.file ?? "";

	// check if client accepts gzip or brotli
	const acceptsBrotli = acceptEncoding?.includes("br");

	// if no slug or no web component, throw error
	if (!slug || !wc) throw utils.error(404, "No file found");

	const headers: { [key: string]: string } = {
		"Content-Type": "text/javascript",
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "GET",
		"Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
	};

	// if client accepts brotli, compress file
	if (acceptsBrotli) {
		const brotli = compress(Buffer.from(file));
		headers["Content-Encoding"] = "br";
		headers["Vary"] = "Accept-Encoding";
		file = brotli;
	}

	// return response
	return new Response(file, {
		headers,
	});
};
