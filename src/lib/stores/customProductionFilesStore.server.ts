/** A store of web components for the endpoints to pull from  */

// import store functions and types
import { writable, derived } from "svelte/store";

// import minify function
import { minify_sync } from "terser";

// import MinifyOptions type
import type { MinifyOptions } from "terser";

const options: MinifyOptions = {
	ecma: 2020,
	module: true,
	compress: {
		drop_console: true,
		keep_classnames: true,
		passes: 1,
	},
	mangle: {
		keep_classnames: true,
		keep_fnames: true,
	},
	format: {
		comments: false,
		indent_level: 2,
	},
	keep_classnames: true,
};

// import wcSourceFilesStore
import {
	customCssSourceFilesStore,
	customJsonSourceFilesStore,
	customJsSourceFilesStore,
} from "$stores/customSourceFilesStore.server";

// import functions
import scrubStyles from "$utils/scrubStyles";
import scrubTemplates from "$utils/scrubTemplates";

// css production files store
export const customCssProductionFilesStore = derived(
	customCssSourceFilesStore,
	($sourceFiles) => {
		interface File {
			name: string;
			min: string;
			max: string;
			version: string;
		}
		const files: File[] = $sourceFiles.map((sourceFile) => {
			const name = sourceFile.name;
			const version = sourceFile.version;
			const sourceText = sourceFile.value;

			// scrub the styles inside the source text
			const stylesScrubbed = scrubStyles(sourceText, true);

			const min = stylesScrubbed ?? "";

			const obj = { name: name, min: min, max: sourceText, version };
			return obj;
		});

		interface ComponentVersion {
			min: string;
			max: string;
		}
		interface Component {
			[key: string]: ComponentVersion;
		}
		interface ComponentLibrary {
			[key: string]: Component;
		}

		// take files and nest versions under names
		let acc: ComponentLibrary = {};
		const nestedFiles = files.reduce((acc, file) => {
			const name = file.name;
			const min = file.min;
			const max = file.max;
			const version = file.version;
			acc[name] = acc[name] ?? {};
			acc[name][version] = {
				min: file.min,
				max: file.max,
			};
			return acc;
		}, {} as ComponentLibrary);

		// layer in latest data point for each component
		// for (const component in nestedFiles) {
		// 	const versions = nestedFiles[component];
		// 	const latestVersion = Object.keys(versions).sort().reverse()[0];
		// 	const latest = versions[latestVersion];
		// 	nestedFiles[component] = { ...nestedFiles[component], latest };
		// }
		// console.log(nestedFiles);
		return nestedFiles;
	},
);

// js production files store
export const customJsonProductionFilesStore = derived(
	customJsonSourceFilesStore,
	($sourceFiles) => {
		interface File {
			name: string;
			min: string;
			max: string;
			version: string;
		}
		const files: File[] = $sourceFiles.map((sourceFile) => {
			const name = sourceFile.name;
			const version = sourceFile.version;
			const sourceText = sourceFile.value;

			// !! come back and refactor this later
			// replace tabs with single spaces
			const tabsReplaced = sourceText.replaceAll(/(?:\t|\\t)+?/g, " ");

			// replace line breaks
			const lineBreaksReplaced = tabsReplaced.replaceAll(/(?:\n|\\n)+?/g, " ");

			// replace multiple spaces with single spaces
			const spacesReplaced = lineBreaksReplaced.replaceAll(/(?: ){2,}/g, " ");

			// replace spaces between open curly braces
			const openCurlySpacesReplaced = spacesReplaced.replaceAll(/{\s{/g, "{{");
			const closeCurlySpacesReplaced = openCurlySpacesReplaced.replaceAll(
				/}\s}/g,
				"}}",
			);

			// replace spaces between open bracket and open curly brace
			const openBracketOpenCurlySpacesReplaced =
				closeCurlySpacesReplaced.replaceAll(/\[\s{/g, "[{");
			const closeBracketCloseCurlySpacesReplaced =
				openBracketOpenCurlySpacesReplaced.replaceAll(/}\s]/g, "}]");

			const min = closeBracketCloseCurlySpacesReplaced ?? "";

			const obj = { name: name, min: min, max: sourceText, version };
			return obj;
		});

		interface Version {
			min: string;
			max: string;
		}
		interface Component {
			[key: string]: Version;
		}
		interface ComponentLibrary {
			[key: string]: Component;
		}

		// take files and nest versions under names
		let acc: ComponentLibrary = {};
		const nestedFiles = files.reduce((acc, file) => {
			const name = file.name;
			const min = file.min;
			const max = file.max;
			const version = file.version;
			acc[name] = acc[name] ?? {};
			acc[name][version] = {
				min: file.min,
				max: file.max,
			};
			return acc;
		}, {} as ComponentLibrary);

		return nestedFiles;
	},
);

// js production files store
export const customJsProductionFilesStore = derived(
	customJsSourceFilesStore,
	($sourceFiles) => {
		interface File {
			name: string;
			min: string;
			max: string;
			version: string;
		}
		const files: File[] = $sourceFiles.map((sourceFile) => {
			const name = sourceFile.name;
			const version = sourceFile.version;
			const sourceText = sourceFile.value;

			// scrub the styles inside the source text
			const stylesScrubbed = scrubStyles(sourceText);

			// get requires
			//const requires = getRequires(stylesScrubbed);

			// scrub the templates inside the source text
			const templatesScrubbed = scrubTemplates(stylesScrubbed);

			// replace tabs with single spaces
			const tabsReplaced = templatesScrubbed.replaceAll(/(?:\t|\\t)+?/g, " ");

			// replace multiple spaces with single spaces
			const spacesReplaced = tabsReplaced.replaceAll(/(?: ){2,}/g, " ");

			// minify the text
			const minText = minify_sync(spacesReplaced, options);

			const min = minText?.code ?? "";

			const obj = { name: name, min: min, max: sourceText, version };
			return obj;
		});

		interface Version {
			min: string;
			max: string;
		}
		interface Component {
			[key: string]: Version;
		}
		interface ComponentLibrary {
			[key: string]: Component;
		}

		// take files and nest versions under names
		let acc: ComponentLibrary = {};
		const nestedFiles = files.reduce((acc, file) => {
			const name = file.name;
			const min = file.min;
			const max = file.max;
			const version = file.version;
			acc[name] = acc[name] ?? {};
			acc[name][version] = {
				min: file.min,
				max: file.max,
			};
			return acc;
		}, {} as ComponentLibrary);

		// layer in latest data point for each component
		// for (const component in nestedFiles) {
		// 	const versions = nestedFiles[component];
		// 	const latestVersion = Object.keys(versions).sort().reverse()[0];
		// 	const latest = versions[latestVersion];
		// 	nestedFiles[component] = { ...nestedFiles[component], latest };
		// }

		return nestedFiles;
	},
);

// merge production files stores
export const customProductionFilesStore = derived(
	[
		customJsProductionFilesStore,
		customCssProductionFilesStore,
		customJsonProductionFilesStore,
	],
	([$js, $css, $json]) => {
		interface ComponentLibrary {
			[key: string]: Component;
		}
		interface Component {
			// e.g. "site-header": { "1.0.0": { js: { min: "", max: "" }, css: { min: "", max: "" } } }
			[key: string]: ComponentVersions;
		}
		interface ComponentVersions {
			// e.g. "1.0.0": { js: { min: "", max: "" }, css: { min: "", max: "" } }
			[key: string]: ComponentVersion;
		}
		interface ComponentVersion {
			// e.g. { js: { min: "", max: "" }, css: { min: "", max: "" } }
			js?: FileVariations;
			json?: FileVariations;
			css?: FileVariations;
		}
		interface FileVariations {
			// e.g. { min: "", max: "" }
			min: string;
			max: string;
		}
		// merge stores
		const componentNamesJs = Object.keys($js);
		const componentNamesCss = Object.keys($css);
		const componentNamesJson = Object.keys($json);
		const componentNames = [
			...new Set([
				...componentNamesJs,
				...componentNamesCss,
				...componentNamesJson,
			]),
		];

		const merged = componentNames.reduce((acc, name) => {
			// get versions
			const versionsJs = Object.keys($js[name] ?? []);
			const versionsCss = Object.keys($css[name] ?? []);
			const versionsJson = Object.keys($json[name] ?? []);
			const versions = [
				...new Set([...versionsJs, ...versionsCss, ...versionsJson]),
			];

			const obj = {} as ComponentVersions;

			//iterate through versions
			versions.forEach((version) => {
				obj[version] = {};
				if ($js[name] && $js[name][version]) {
					obj[version].js = $js[name][version];
				}
				if ($css[name] && $css[name][version]) {
					obj[version].css = $css[name][version];
				}
				if ($json[name] && $json[name][version]) {
					obj[version].json = $json[name][version];
				}
			});

			acc[name] = obj;

			return acc;
		}, {} as Component);
		return merged;
	},
);

// beta store

export type CustomProductionFilesStore = typeof customProductionFilesStore;
export type CustomJsProductionFilesStore = typeof customJsProductionFilesStore;
export type CustomCssProductionFilesStore =
	typeof customCssProductionFilesStore;

function getRequires(text: string): string[] {
	const requires = text.match(/@require(?:.)*?\n/g);
	return (
		requires?.map((require) => require?.replace("@requires", "").trim()) ?? []
	);
}
