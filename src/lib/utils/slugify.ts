export function slugify(string: string) {
	return string.replace(/\W/g, "-").replace(/--*/gi, "-").toLowerCase();
}

export default slugify;
