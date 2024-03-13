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
//import { wcJsSourceFilesStore } from "$lib/stores/wcSourceFilesStore.server";
import { wcJsProductionFilesStore } from "./wcProductionFilesStore.server";

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
interface DocumentationLibrary {
	[key: string]: ComponentDocumentation;
}
interface ComponentDocumentation {
	[key: string]: VersionDocumentation;
}
interface VersionDocumentation {
	attributes: Attributes;
	attributeNames: string[];
	name: string;
	exampleHTML: string;
	description: string;
	innerTemplate: string;
	builtIn: boolean;
	builtInExampleTag: string;
	published: boolean;
	notes: string[];
	isPrivate: boolean;
	requires: string[];
	slug: string;
	slotExampleContent?: string;
}

// utils
import slugify from "$utils/slugify";

export const wcDocumentationStore = derived(
	wcJsProductionFilesStore,
	($filesStore) => {
		const documentationLibrary: DocumentationLibrary = {};

		// iterate over each component
		for (const componentName in $filesStore) {
			const componentVersions = $filesStore[componentName];
			const componentDocumentation: ComponentDocumentation = {};

			// iterate over each version of the component
			for (const versionNumber in componentVersions) {
				const file = componentVersions[versionNumber].max;
				const documentation: VersionDocumentation = buildDocumentationFromFile(
					componentName,
					file,
				);
				componentDocumentation[versionNumber] = documentation;
			}

			documentationLibrary[componentName] = componentDocumentation;
		}

		return documentationLibrary;
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
			?.match(/<(?:.)+?="container"(?:.|\n)+?>(?:\n| )*?(?=`)/)?.[0]
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
function getNotes(file: string) {
	return (
		file?.match(/@note(?:.)*?\n/g)?.map((v) => v.replace(/@note/, "").trim()) ??
		[]
	);
}
function isBuiltIn(file: string): boolean {
	const match = file?.match(/@extends(?:.)*?\n/)?.[0] ?? "";
	const isBuiltIn = match.includes("HTMLElement") ? false : true;
	return isBuiltIn;
}
function getBuiltInExampleTag(file: string): string {
	const match = file?.match(/@extends(?:.)*?\n/)?.[0] ?? "";
	const tag = match.split("|")[1]?.trim() ?? "";
	return tag;
}
function getSlotExampleContent(file: string) {
	const match = file?.match(/@slot(?:.)*?\n/)?.[0] ?? "";
	const slots = [...file.matchAll(/@slot(?:.)*?\n/g)]?.map(
		(v) => v[0].split("|")[2]?.trim() ?? "",
	);
	const content = match.split("|")[2]?.trim() ?? "";
	return slots;
}
function buildDocumentationFromFile(componentName: string, file: string) {
	const attributes = getAttributes(file);
	const attributeNames = Object.keys(attributes) ?? [];
	const builtIn = isBuiltIn(file);
	const builtInExampleTag = getBuiltInExampleTag(file);
	const name = titleCase(deslugify(componentName));
	const description = getDescription(file);
	const innerTemplate = getInnerTemplate(file);
	const published = getPublicationStatus(file);
	const notes = getNotes(file);
	const isPrivate = getPrivacyStatus(file);
	const requires = getDependencies(file);
	const slotExampleContent = getSlotExampleContent(file);

	// slug
	const slug = slugify(componentName);
	const exampleHTML =
		buildExampleHTML(slug, attributes, builtInExampleTag, slotExampleContent) ??
		"";

	return {
		attributes,
		attributeNames,
		builtIn,
		builtInExampleTag,
		description,
		exampleHTML,
		innerTemplate,
		name,
		notes,
		published,
		isPrivate,
		requires,
		slotExampleContent,
		slug,
	};
}
