// we're going to use app.d.ts to provide types for the data we're importing
// these global types will be available in all of our files
// and take the place of having to import types in every file

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types

// import types
import type { Readable, Writable } from "svelte/store";
import type { WebComponentsStore } from "$wc/webComponentsStore";

// import utils
import { error } from "@sveltejs/kit";
import { redirect } from "@sveltejs/kit";
import type Redirects from "$settings/redirects.json";
import type { TitleCase } from "$utils/title_case";
import type { Deslugify } from "$utils/deslugify";

// content
interface Content {
	[key: string]: unknown;
	webComponentsStore: WebComponentsStore;
}

// utils
interface Utils {
	[key: string]: unknown;
	error: typeof error;
	get: <T>(store: Readable<T>) => T;
	redirect: typeof redirect;
	title_case: TitleCase;
	deslugify: Deslugify;
}

interface Settings {
	[ key: string ]: unknown;
	redirects: Redirects;
}

declare global {
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