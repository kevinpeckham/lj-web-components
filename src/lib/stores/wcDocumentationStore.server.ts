/**
 * Working Files Store
 * A store of working .js web component files
 * for real time previews during development
 * */

// import store functions and types
import { readable, derived } from "svelte/store";

// other utils
import buildExampleHTML from "$utils/wcDoc_buildExampleHTML";
import { camelToKebab } from "$utils/camelToKebab";
import titleCase from "$utils/titleCase";
import deslugify from "$utils/deslugify";

// import source file store
import { wcSourceFilesStore } from "$lib/stores/wcSourceFilesStore.server";

interface Attribute {
	[key: string]: string;
	name: string;
	default: string;
	example: string;
	description: string;
}
interface Attributes {
	[key: string]: Attribute;
}
interface ComponentDocumentation {
	attributes: Attributes;
	attributeNames: string[];
	name: string;
	exampleHTML: string;
	description: string;
	innerTemplate: string;
	published: boolean;
	isPrivate: boolean;
	requires: string[];
	slug: string;
}

// utils
import slugify from "$utils/slugify";

export const wcDocumentationStore = derived(
	wcSourceFilesStore,
	($filesStore) => {
		const allDocumentation: ComponentDocumentation[] = Object.values(
			$filesStore,
		).map((file) => {
			const attributes = getAttributes(file.value);
			const attributeNames = Object.keys(attributes) ?? [];
			const name = titleCase(deslugify(file.name));
			const description = getDescription(file.value);
			const innerTemplate = getInnerTemplate(file.value);
			const published = getPublicationStatus(file.value);
			const isPrivate = getPrivacyStatus(file.value);
			const requires = getDependencies(file.value);

			// slug
			const slug = slugify(file.name);
			const exampleHTML = buildExampleHTML(slug, attributes) ?? "";

			return {
				attributes,
				attributeNames,
				description,
				exampleHTML,
				innerTemplate,
				name,
				published,
				isPrivate,
				requires,
				slug,
			};
		});
		return allDocumentation;
	},
);

export default wcDocumentationStore;
export type WcDocumentationStore = typeof wcDocumentationStore;

// functions

function getAttributesArray(file: string) {
	// attributes array
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

	return attributesArray;
}
function getAttributes(file: string) {
	const attributesArray = getAttributesArray(file);
	const attributes = attributesArray.reduce((acc: Attributes, cur) => {
		acc[cur.name] = cur;
		return acc;
	}, {});

	return attributes;
}
function getDescription(file: string) {
	return (
		file
			?.match(/@classdesc(?:.)*?\n/)?.[0]
			?.replace(/@classdesc/, "")
			?.trim() ?? ""
	);
}
function getPublicationStatus(file: string) {
	return file?.match(/@published(?:.)*?\n/)?.[0] ? true : false;
}
function getInnerTemplate(file: string) {
	return (
		file
			?.match(/<(?:.)+?id="container"(?:.|\n)+?>(?:\n| )*?(?=`)/)?.[0]
			?.trim() ?? ""
	);
}
function getDependencies(file: string) {
	return (
		file
			?.match(/@requires(?:.)*?\n/g)
			?.map((v) => v.replace(/@requires/, "").trim())
			?.map((v) => camelToKebab(v))
			?.map((v) => (v[0] === "-" ? v.substring(1) : v)) ?? []
	);
}
function getPrivacyStatus(file: string) {
	return file?.match(/@private(?:.)*?\n/)?.[0] ? true : false;
}
