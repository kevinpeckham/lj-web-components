// we're going to use app.d.ts to provide types for the data we're importing
// these global types will be available in all of our files
// and take the place of having to import types in every file

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types

// import types
import type { Readable, Writable } from "svelte/store";
import type { WcDocumentationStore } from "$stores/wcDocumentationStore.server";
import type { WcJsSourceFilesStore, WcCssSourceFilesStore, WcJsonSourceFilesStore } from "$stores/wcSourceFilesStore.server";
import type { WcCssProductionFilesStore, WcJsProductionFilesStore, WcProductionFilesStore } from "$stores/wcProductionFilesStore.server";
import type { WcDocumentation as _WcDocumentation } from "$types/WcDocumentation";
import { ComponentAttribute as _ComponentAttribute } from "$types/ComponentAttribute";
import type { CustomProductionFilesStore } from "$stores/customProductionFilesStore.server";

// import utils
import { error } from "@sveltejs/kit";
import { redirect } from "@sveltejs/kit";
import type Redirects from "$settings/redirects.json";
import type { TitleCase } from "$utils/titleCase";
import type { Deslugify } from "$utils/deslugify";

// content
interface Content {
	[key: string]: unknown;
	wcDocumentationStore: WcDocumentationStore;
	wcCssProductionFilesStore: WcCssProductionFilesStore;
	wcCssSourceFilesStore: WcCssSourceFilesStore;
	wcJsSourceFilesStore: WcJsSourceFilesStore;
	wcJsProductionFilesStore: WcJsProductionFilesStore;
	wcJsonSourceFilesStore: WcJsonSourceFilesStore;
	wcProductionFilesStore: WcProductionFilesStore;
	customProductionFilesStore: CustomProductionFilesStore;
}

// utils
interface Utils {
	[key: string]: unknown;
	camelToKebab: (str: string) => string;
	error: typeof error;
	get: <T>(store: Readable<T>) => T;
	redirect: typeof redirect;
	title_case: TitleCase;
	deslugify: Deslugify;
	kebabToCamel: (str: string) => string;
}

interface Settings {
	[ key: string ]: unknown;
	redirects: Redirects;
}

declare global {
	interface WcDocumentation extends _WcDocumentation {}
	class ComponentAttribute extends _ComponentAttribute {}
	declare namespace App {
		interface Locals {
			content: Content;
			settings: Settings;
			utils: Utils;
		}

	// interface PageData {}
	// interface Error {}
	// interface Platform {}
	}
}

export {}