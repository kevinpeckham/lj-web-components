// ?? trying to get this to work
// global.HTMLElement = class {};

// types
import type { PageServerLoad } from "./$types";

// get dev environment
import { dev } from "$app/environment";

export const load: PageServerLoad = async function ({ locals, params }) {
	// get slug
	const slug = params.slug as string;

	// unpack locals
	const { content, utils } = locals;

	// get documentation store
	const documentationStore = utils.get(content.wcDocumentationStore);

	// get documentation
	const component = documentationStore[slug];

	// !! come back to this for public/private/published components
	// get latest published version number
	const latestVersionNumber = Object.keys(component).sort().reverse()[0];
	const documentation = component[latestVersionNumber];

	// web component script
	// by default load the minified script
	const webComponentScript = dev
		? `/e/wc/${slug}.min.js`
		: `/e/wc/${slug}.min.js`;

	// from documentation
	const attributes = documentation?.attributes ?? {};
	const attributeNames = documentation?.attributeNames ?? [];
	const description = documentation?.description ?? "";
	const innerTemplate = documentation?.innerTemplate ?? "";
	const exampleHTML = documentation?.exampleHTML ?? "";
	const name = documentation?.name ?? "";
	const notes = documentation?.notes ?? [];
	const published = documentation?.published ?? false;
	const requires = documentation?.requires ?? [];
	const version = latestVersionNumber;

	// if no documentation found,
	// or not published and not in dev mode
	// return 404
	if (!documentation || (!published && !dev)) utils.error(404, "No file found");

	// set page metadata
	const metaDescription = documentation?.description ?? "";
	const metaTitle = name;
	const metaNoIndex = true;

	// return data
	return {
		attributes,
		attributeNames,
		dev,
		description,
		exampleHTML,
		innerTemplate,
		metaTitle,
		metaDescription,
		metaNoIndex,
		name,
		notes,
		webComponentScript,
		requires,
		slug,
		version,
	};
};
