/* global ComponentDocumentation */
export function buildExampleWcScript(slug: string) {
	const url = `https://cdn.lj.dev/e/wc/${slug}.min.js`;
	return `<link href="${url}" rel="modulepreload" />\n<script async type="module" src="https://cdn.lj.dev/e/wc/${slug}.min.js"></script>`;
}

export default buildExampleWcScript;
