export function scrubTemplates(str: string): string {
	// match style tags
	const templateMatch = str.match(
		/(?:<(?:span|div){1}[^<>\n]*?(?:id="container")>){1}(?:.|\n)*<\/(?:span|div){1}>/gi,
	);

	// iterate through style tags and replace with scrubbed text
	if (templateMatch) {
		for (const match of templateMatch) {
			const styleScrubbed = match

				.replaceAll(new RegExp(String.raw`\\t+?`, "g"), "")
				//!! problem in next line
				//.replaceAll(/(?:\n|\\n)+?/g, "") // remove newlines
				.replaceAll(/(?:\t|\\t)+?/g, " "); // remove tabs
			//!! problem in next line
			//.replaceAll(/(?:\s){2,}/g, " "); // remove double+ spaces
			str = str.replace(match, styleScrubbed);
		}
	}

	return str;
}

export default scrubTemplates;
