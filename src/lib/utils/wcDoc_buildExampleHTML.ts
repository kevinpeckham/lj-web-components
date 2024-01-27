/* global WcDocumentation */
export function buildExampleWcHTML(documentation: WcDocumentation) {
	const { slug, attributes } = documentation;
	const attributesArray = attributes.map((att) => {
		const name = att.name;
		const value = att.example;
		const attribute = `${name}="${value}"`;
		return value ? `\n  ${attribute}` : "";
	});
	const attributesString = attributesArray.join("");
	const example = `<${slug} ${attributesString}>\n</${slug}>`;
	return example;
}

export default buildExampleWcHTML;
