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

	// pull in js component store
	// const jsStore = utils.get(content.wcJsProductionFilesStore);
	// const cssStore = utils.get(content.wcCssProductionFilesStore);
	const store = utils.get(content.customProductionFilesStore);

	// get component name
	const componentName = slug.split(".")[0].split("@")[0]; // my-component

	// lookup component
	const component = store[componentName];

	// throw error if no component
	if (!component) throw error(404, "Component file not found");

	// look for no-cache flag
	const noCache = slug.includes("@@no-cache");

	// look for requested version number
	const rvn = slug.match(/((?:\d\.)+\d)(?:\.min)?\.(?:js|json|css)/)?.[1] ?? ""; // 1.0.0

	// test if requested version number is valid
	// is valid if it has at least 3 digits separated by dots
	const rvnIsValid = rvn && rvn.match(/(\d+\.){2,}\d+/) ? true : false;

	// throw error if rvn exists, but is invalid
	if (rvn && !rvnIsValid) throw error(404, "Invalid version number");

	// get requested version of component
	const requested = rvn ? component[rvn] ?? null : null; // v1.0.0

	// if rvn is valid, but requested version is not found, throw error
	if (rvn && !requested) throw error(404, "Requested version not found");

	// get latest version number
	const lvn = Object.keys(component).sort().reverse()[0];

	// serve correct component version
	// if there is a requested version serve it
	// if specific version was not requested, serve latest
	const selected = requested ? requested : component[lvn] ?? null;
	if (!selected) throw error(404, "Requested file is unavailable");

	let file = "";
	let type = "text/plain";
	const isCss = slug.includes(".css");
	const isJs = slug.includes(".js") && !slug.includes(".json");
	const isJson = slug.includes(".json");
	const isMin = slug.includes(".min");

	if (isCss) {
		file = isMin ? selected?.css?.min ?? "" : selected?.css?.max ?? "";
		type = "text/css";
	} else if (isJs) {
		file = isMin ? selected?.js?.min ?? "" : selected?.js?.max ?? "";
		type = "text/javascript";
	} else if (isJson) {
		type = "application/json";
		file = isMin ? selected?.json?.min ?? "" : selected?.json?.max ?? "";
	}

	// throw error if no file
	if (!file) throw error(404, "No file found");

	let cache = "public, max-age=86400, stale-while-revalidate=604800";
	if (noCache) {
		cache = "no-cache";
	}

	// set headers
	const headers: { [key: string]: string } = {
		"Content-Type": `${type}`,
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "GET",
		"Cache-Control": `${cache}`,
		"Referrer-Policy": "strict-origin-when-cross-origin",
	};

	// return response
	return new Response(file, {
		headers,
	});
};
