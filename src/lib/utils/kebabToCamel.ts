export function kebabToCamel(str: string) {
	return str.replace(/-([a-z])/gi, (g) => g[1].toUpperCase());
}
export default kebabToCamel;
