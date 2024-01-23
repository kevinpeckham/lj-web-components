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

// derived files store
export const wcProductionFilesStore = derived(
	wcSourceFilesStore,
	($sourceFiles) => {
		const scrubbed = $sourceFiles.map((sourceFile) => {
			const name = sourceFile.name;
			const sourceText = sourceFile.value;

			// scrub the styles inside the source text
			const stylesScrubbed = scrubStyles(sourceText);

			// replace tabs with double spaces
			const tabsReplaced = stylesScrubbed.replaceAll(/(?:\t|\\t)+?/g, "  ");

			// minify the text
			const minText = minify_sync(tabsReplaced, options);

			return { name: name, min: minText?.code ?? "", max: sourceText };
		});

		return scrubbed;
	},
);

// beta store

export default wcProductionFilesStore;
export type WcProductionFilesStore = typeof wcProductionFilesStore;
