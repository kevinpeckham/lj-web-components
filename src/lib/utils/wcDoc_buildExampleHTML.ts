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

export function buildExampleWcHTML(
	slug: string,
	attributes: AttributesData,
	builtInTag?: string,
	exampleSlotContent?: string,
) {
	if (!slug || typeof slug !== "string") return "";
	if (!attributes) return "";

	// get tag
	const tag = builtInTag ? builtInTag : slug;
	const is = builtInTag ? ` is="${slug}"` : "";
	const slotContent = exampleSlotContent ? `\n  ${exampleSlotContent}\n` : `\n`;

	const keys = Object.keys(attributes) ?? [];

	const attributesArray =
		keys.map((att) => {
			const name = att ?? "";
			const value = attributes[att]?.example ?? "";

			// is it JSON?
			const isJSON =
				value[0] === "{" ||
				(value[0] === "[" && value[value.length - 1] === "}") ||
				value[value.length - 1] === "]";

			// if it is JSON, make sure it's valid JSON, then put inside single quote
			const attribute = isJSON
				? `${name}='${JSON.parse(JSON.stringify(value))}'`
				: `${name}="${value}"`;

			return value ? `\n  ${attribute}` : "";
		}) ?? [];
	const attributesString = attributesArray?.join("") ?? "";
	const example = `<${tag}${is} ${attributesString}>${slotContent}</${tag}>`;
	return example;
}

export default buildExampleWcHTML;
