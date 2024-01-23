export function scrubStyles(str: string): string {
	// match style tags
	const styleTagMatch = str.match(/(?:<style>)(?:.|\n)*(?:<\/style>)/gi);

	// iterate through style tags and replace with scrubbed text
	if (styleTagMatch) {
		for (const match of styleTagMatch) {
			const styleScrubbed = match
				.replaceAll(new RegExp(String.raw`\\t+?`, "g"), "")
				.replaceAll(/(?:\n|\\n)+?/g, "") // remove newlines
				.replaceAll(/(?:\t|\\t)+?/g, " ") // replace tabs with spaces
				.replaceAll(/(?:\s){2,}/g, " ") // remove double+ spaces
				.replaceAll(/(?:([;:{}>])\s)+?/g, "$1") // remove single space after [;:{}>]
				.replaceAll(/(?:;})/g, "}"); // remove single semicolon before closing bracket
			str = str.replace(match, styleScrubbed);
		}
	}

	// match inline styles
	const matchInlineStylesRegex =
		/style="(?:.|\n)*?"(?=>|\s)|style='(?:.|\n)*?'(?=>|\s)|style=`(?:.|\n)*?`(?=>|\s)/gi;
	const inlineStyleMatches = str.match(matchInlineStylesRegex);

	// iterate through inline styles and replace with scrubbed text
	if (inlineStyleMatches) {
		for (const match of inlineStyleMatches) {
			const styleScrubbed = match
				.replaceAll(/(?:\n|\\n)+?/g, "") // remove newlines
				.replaceAll(/(?:\t|\\t)+?/g, " ") // replace tabs with spaces
				.replaceAll(/(?:\s){2,}/g, " ") // remove double+ spaces with singles space
				.replaceAll(/(?:([;:{}>])\s)+?/g, "$1") // remove single space after [;:{}>]
				.replaceAll(/(?:;(["'`]))/g, "$1"); // remove single semicolon before closing doublequote
			str = str.replace(match, styleScrubbed);
		}
	}

	return str;
}

export default scrubStyles;
