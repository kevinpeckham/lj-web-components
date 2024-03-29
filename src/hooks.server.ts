// serverless Functions
/** @type {import('@sveltejs/adapter-vercel').Config} */
export const config = {
	runtime: "nodejs18.x",
};

// svelte functions
import { sequence } from "@sveltejs/kit/hooks";

// SENTRY
//- import sentry
// import * as Sentry from "@sentry/sveltekit";
// import { handleErrorWithSentry } from "@sentry/sveltekit";

//- initialize sentry
// Sentry.init({
// 	dsn: "https://6cdeab3eee3845af9b0f2619c0b238e6@o4505247956860928.ingest.sentry.io/4506066892816384",
// 	// Performance Monitoring
// 	tracesSampleRate: building ? 1 : 0, // Capture 100% of the transactions when building
// });

//- handle errors with sentry
// export const handleError = handleErrorWithSentry();

// handle function
import type { Handle } from "@sveltejs/kit";

// import data stores
import wcDocumentationStore from "$stores/wcDocumentationStore.server";
import {
	wcCssSourceFilesStore,
	wcJsSourceFilesStore,
	wcJsonSourceFilesStore,
} from "$stores/wcSourceFilesStore.server";
import {
	wcCssProductionFilesStore,
	wcJsProductionFilesStore,
	wcProductionFilesStore,
} from "$stores/wcProductionFilesStore.server";
import { customProductionFilesStore } from "$stores/customProductionFilesStore.server";

// content
const content = {
	wcCssSourceFilesStore,
	wcCssProductionFilesStore,
	wcDocumentationStore,
	wcJsProductionFilesStore,
	wcJsSourceFilesStore,
	wcJsonSourceFilesStore,
	wcProductionFilesStore,
	customProductionFilesStore,
};

// utils
// we'll pass the utils object to locals in the handle function
// import { parseRichText } from "$utils/utils";
import { get } from "svelte/store";
import { redirect } from "@sveltejs/kit";
import { error } from "@sveltejs/kit";
import title_case from "$utils/titleCase";
import deslugify from "$utils/deslugify";
import kebabToCamel from "$utils/kebabToCamel";
import { camelToKebab } from "$utils/camelToKebab";
const utils = {
	camelToKebab,
	deslugify,
	error,
	get,
	kebabToCamel,
	redirect,
	title_case,
};

// settings
import { default as redirects } from "$settings/redirects.json";

const settings = {
	redirects,
};

export const handle: Handle = sequence(
	// sentry
	// Sentry.sentryHandle(),

	// locals
	async ({ event, resolve }) => {
		event.locals = {
			content,
			settings,
			utils,
		};

		const response = await resolve(event);
		return response;
	},
);
