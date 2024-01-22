export function scrubMinifiedJS(str: string) {
	return str
		.replaceAll(/\\n(?: )*/g, "") // remove newlines
		.replaceAll(/(?:\\t)+/gi, " ") // replace tabs with spaces
		.replaceAll(/(?: ){2}/gi, " ") // remove double spaces
		.replaceAll(/(?:; )/g, ";") // remove single space after semicolon
		.replaceAll(/(?:;})/g, "}") // remove semicolons before closing bracket
		.replaceAll(/(?:{ )/g, "{") // remove single space after opening curly braces
		.replaceAll(/(?:} )/g, "}") // remove single space after closing curly braces
		.replaceAll(/(?:\) )/g, "){"); // remove single space after closing parenthesis
}
