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
import { wcSourceFilesStore } from "$stores/wcSourceFilesStore.server";

// import functions
import scrubStyles from "$utils/scrubStyles";
import scrubTemplates from "$utils/scrubTemplates";

// derived files store
export const wcProductionFilesStore = derived(
	wcSourceFilesStore,
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
			const requires = getRequires(stylesScrubbed);

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

// beta store

export default wcProductionFilesStore;
export type WcProductionFilesStore = typeof wcProductionFilesStore;

function getRequires(text: string): string[] {
	const requires = text.match(/@require(?:.)*?\n/g);
	return (
		requires?.map((require) => require?.replace("@requires", "").trim()) ?? []
	);
}
