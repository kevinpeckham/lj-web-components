/* global WcDocumentation */
interface Attribute {
	[key: string]: string;
	example: string;
}

const attributesData: { [key: string]: Attribute } = {
	"border-color": {
		default: "currentColor",
		example: "#000000",
		description: "The color of the border",
	},
	"background-color": {
		default: "currentColor",
		example: "#000000",
		description: "The color of the border",
	},
};

type AttributesData = typeof attributesData;

export function buildExampleWcHTML(slug: string, attributes: AttributesData) {
	if (!slug || typeof slug !== "string") return "";
	if (!attributes) return "";

	const keys = Object.keys(attributes) ?? [];

	const attributesArray =
		keys.map((att) => {
			const name = att ?? "";
			const value = attributes[att]?.example ?? "";
			const attribute = `${name}="${value}"`;
			return value ? `\n  ${attribute}` : "";
		}) ?? [];
	const attributesString = attributesArray?.join("") ?? "";
	const example = `<${slug} ${attributesString}>\n</${slug}>`;
	return example;
}

export default buildExampleWcHTML;
