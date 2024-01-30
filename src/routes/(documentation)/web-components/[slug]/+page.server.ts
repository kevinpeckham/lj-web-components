// ?? trying to get this to work
// global.HTMLElement = class {};

// types
import type { PageServerLoad } from "./$types";

interface Attribute {
	[key: string]: string;
	default: string;
	example: string;
	description: string;
}
interface Attributes {
	[key: string]: Attribute;
}

// import util
import buildExampleHTML from "$utils/wcDoc_buildExampleHTML";

// get dev environment
import { dev } from "$app/environment";

export const load: PageServerLoad = async function ({ locals, params }) {
	// get slug
	const slug = params.slug as string;

	// unpack locals
	const { content, utils } = locals;

	// get component store
	const store = utils.get(content.wcProductionFilesStore);

	// get web component
	const component = store.find((f) => slug.includes(f.name));

	// get file
	const file: string | undefined = component?.max;

	// if no documentation, return 404
	if (!component || !file) utils.error(404, "No file found");

	// name
	const name = utils.title_case(slug.replace(/-/g, " ")) ?? "";

	// set page metadata
	const metaDescription = "";
	const metaTitle = name;
	const metaNoIndex = true;

	// web component script
	// by default load the minified script
	const webComponentScript = dev
		? `/e/wc/${slug}.min.js`
		: `/e/wc/${slug}.min.js`;

	// description
	const description =
		file
			?.match(/@classdesc(?:.)*?\n/)?.[0]
			?.replace(/@classdesc/, "")
			?.trim() ?? "";

	// get attributes from JSDoc comments
	const attributesArray =
		// prettier-ignore
		file
			?.match(/@attribute(?:.)*?\n/g)
			// prettier-ignore
			?.map((v) => v.replace(/@attribute/, "").trim())
			// prettier-ignore
			?.map((v: string) => {
				const scrubbed = v.replace(/-{2}/g, "");
				const split = scrubbed.split("|");
				return {
					name: split[0]?.trim(),
					default: split[1]?.trim(),
					example: split[2]?.trim(),
					description: split[3]?.trim(),
				}}) ?? [];

	// convert attributesArray to obj with name as key
	const attributes = attributesArray.reduce((acc: Attributes, cur) => {
		acc[cur.name] = cur;
		return acc;
	}, {});

	// attribute names
	const attributeNames = Object.keys(attributes) ?? [];

	// example html
	const exampleHTML = buildExampleHTML(slug, attributes) ?? "";

	// inner template
	const innerTemplate =
		file
			?.match(/<(?:.)+?id="container"(?:.|\n)+?>(?:\n| )*?(?=`)/)?.[0]
			?.trim() ?? "";

	// dependencies
	const requires =
		file
			?.match(/@requires(?:.)*?\n/g)
			?.map((v) => v.replace(/@requires/, "").trim())
			?.map((v) => utils.camelToKebab(v))
			?.map((v) => (v[0] === "-" ? v.substring(1) : v)) ?? [];

	// return data
	return {
		attributes,
		attributeNames,
		dev,
		description,
		exampleHTML,
		innerTemplate,
		file,
		metaTitle,
		metaDescription,
		metaNoIndex,
		name,
		webComponentScript,
		requires,
		slug,
	};
};
