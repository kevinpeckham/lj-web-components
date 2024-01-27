/* global WcDocumentation */
export function wcDoc_sanitizeExampleHTML(
	html: string,
	documentation: WcDocumentation,
) {
	// unpack documentation
	const { slug, attributes } = documentation;

	// // create container to hold web component
	const container = document.createElement("div");
	// const containerId = "container";

	// // get attribute names from documentation
	const attributeNames = attributes.map((v) => v.name) ?? [];

	// // insert html into container
	container.insertAdjacentHTML("beforeend", html);

	// // find web component
	const el = container.querySelector(slug);

	// default attributeNames allowed
	const defaultAttributeNames = ["aria-hidden", "id", "style", "class"];

	// define approved attributes
	const approvedAttributes = [
		...(attributeNames ?? []),
		...defaultAttributeNames,
	].toSorted();

	// build attributes array
	const attributesArray = approvedAttributes.map((att) =>
		el?.hasAttribute(att) ? `\n  ${att}="${el.getAttribute(att)}"` : "",
	);

	// filter empty strings
	const attributesFiltered = attributesArray.filter((v) => v !== "");

	// build attributes string from array
	const attributesString = attributesFiltered.join("");

	// is web component self closing?
	const isSelfClosing = documentation.selfClosing;

	// find web component textContent
	const elText = isSelfClosing ? "" : el?.textContent ?? "";

	const template = `<${slug} ${attributesString}>\n${elText}</${slug}>`;

	return template ?? "";
}
export default wcDoc_sanitizeExampleHTML;
