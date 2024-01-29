<!--
@component
Web component documentation page
-->

<script lang="ts">
	// context api
	import { setContext } from "svelte";

	// store api
	import { writable } from "svelte/store";

	// components
	import AttributesGrid from "$components/AttributesGrid.svelte";
	import CodeBlock from "$components/CodeBlock.svelte";

	// types
	/* global WcDocumentation */
	import type { PageData } from "./$types";

	// utils
	import buildExampleHTML from "$utils/wcDoc_buildExampleHTML";
	import buildExampleScript from "$utils/wcDoc_buildExampleScript";
	import sanitizeExampleHTML from "$utils/wcDoc_sanitizeExampleHTML";

	// data
	export let data: PageData;

	// refs
	let textarea: HTMLTextAreaElement;
	let wcContainer: HTMLDivElement;

	$: wc = wcContainer?.querySelector(`${slug}`);
	$: wcConstructor = wc?.constructor;
	$: wcTemplate =
		wcConstructor?.els
			// replace tabs and newlines before first start tag on each line
			.replace(/^[ \n\t]*?</gm, "<")
			// replace "content" keyword
			.replace(/ content/g, "") ?? "";
	// TODO indent inner tags...

	// variables
	$: documentation = data.documentation as WcDocumentation;
	$: attributes = documentation.attributes ?? [];
	$: attributeNames = attributes.map((v) => v.name) ?? [];
	$: slug = data.slug ?? "";
	$: exampleHTML = buildExampleHTML(documentation) ?? "";

	// put the documentation in context
	$: setContext("documentation", data.documentation);

	// create a store for the script content and put it in context
	$: scriptContentStore = writable(buildExampleScript(slug));
	$: setContext("scriptContentStore", scriptContentStore);

	// create a store for the html content and put it in context
	// prettier-ignore
	$: htmlContentStore = writable(exampleHTML);
	$: setContext("htmlContentStore", htmlContentStore);

	// initial display value is the example html
	$: sanitizedValue = exampleHTML;

	// when the html content store changes
	// sanitize the value and update the sanitized value
	$: {
		if ($htmlContentStore != exampleHTML) {
			const sanitized = sanitizeExampleHTML(
				$htmlContentStore,
				data.documentation,
			);
			if (sanitizedValue != sanitized) {
				sanitizedValue = sanitized ?? "";
			}
		}
	}
</script>

<template lang="pug">
	header.page-x-padding.pt-8
		h1.text-32 { data.documentation.name }
		p.opacity-85.max-w-lg { data.documentation.description }

	main.page-x-padding.main-y-padding.grid.grid-cols-1.gap-y-8(
		class="mb-[100svh]")
		//- script
		section
			div(
				class="flex gap-x-[.5em] items-baseline",
				_test="test")
				h2.mb-2 Script
				span(
					class="italic opacity-80 text-[.9em]") (add to page header)
			CodeBlock(
				contentEditable!="{ false }",
				contentStore!="{ scriptContentStore }",
				id="script-code")

		//- textarea
		section
			div(
				class="flex gap-x-[.5em] items-baseline")
				h2.mb-2 Example HTML
				span(
					class="italic opacity-80 text-[.9em]") ( editable - try it out! )
			CodeBlock(
				contentEditable="true",
				contentStore!="{ htmlContentStore }",
				id="html-code")

		//- web component
		section
			div.flex.gap-1
				h2.mb-2 Web Component Preview
				//-span (add to page header)
			div.p-3.rounded(
				class="bg-white/5",
				bind:this!="{ wcContainer }")
				+html('sanitizedValue')

		//- settings & attributes
		+if('documentation.attributes.length > 0')
			section
				div.flex.gap-1.px-2
					h2.mb-2 Settings &amp; Attributes
				AttributesGrid

		//- component inner template
		+if('data.documentation.innerTemplate')
		section
			div.flex.gap-1.px-2
				h2.mb-2 Web Component Inner Template
			pre(
				class="bg-black/20 p-4 rounded-xl text-14 h-auto")
				| { documentation.innerTemplate ?? wcTemplate }

	|</template>
