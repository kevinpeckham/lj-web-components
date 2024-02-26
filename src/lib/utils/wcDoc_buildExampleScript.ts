/* global ComponentDocumentation */
export function buildExampleWcScript(slug: string, version?: string) {
	const v = version ? `${version}.` : "";
	const url = `https://cdn.lj.dev/e/wc/${slug}@${v}min.js`;
	return `<link href="${url}" rel="modulepreload" />\n<script async type="module" src="https://cdn.lj.dev/e/wc/${slug}@${v}min.js"></script>`;
}

export default buildExampleWcScript;
