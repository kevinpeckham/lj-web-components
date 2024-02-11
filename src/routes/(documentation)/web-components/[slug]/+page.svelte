<!--
@component
Web component documentation page
-->

<script lang="ts">
	// !! move to types
	interface Attribute {
		[key: string]: string;
		example: string;
	}

	// context api
	import { setContext } from "svelte";

	// store api
	import { writable } from "svelte/store";

	// components
	import AttributesGrid from "$components/AttributesGrid.svelte";
	import CodeBlock from "$components/CodeBlock.svelte";

	// types
	import type { PageData } from "./$types";

	// utils
	import buildExampleScript from "$utils/wcDoc_buildExampleScript";
	import sanitizeExampleHTML from "$utils/wcDoc_sanitizeExampleHTML";

	// refs
	let textarea: HTMLTextAreaElement;
	let wcContainer: HTMLDivElement;

	// data
	export let data: PageData;

	// $: console.log(data.attributes);

	// put data in context
	$: setContext("data", data);

	// create a store for the script content and put it in context
	$: scriptContentStore = writable(buildExampleScript(data.slug));
	$: setContext("scriptContentStore", scriptContentStore);

	// create a store for the html content and put it in context
	// prettier-ignore
	$: htmlContentStore = writable(data.exampleHTML);
	$: setContext("htmlContentStore", htmlContentStore);

	// initial display value is the example html
	$: sanitizedValue = data.exampleHTML;

	// when the html content store changes
	// sanitize the value and update the sanitized value
	$: {
		if ($htmlContentStore != data.exampleHTML) {
			const sanitized = sanitizeExampleHTML(
				$htmlContentStore,
				data.slug,
				data.attributeNames,
			);
			if (sanitizedValue != sanitized) {
				sanitizedValue = sanitized ?? "";
			}
		}
	}
</script>

<template lang="pug">
	header.page-x-padding.pt-8
		div(
			class=`
				mb-4
				text-13
				text-currentColor`)
			span.opacity-70 /&nbsp;
			a(
				class=`
					inline-block
					decoration-slate-100/30
					underline
					underline-offset-4
					opacity-70
					lg:hover:opacity-100
					lg:hover:text-accent
					lg:hover:decoration-current`,
				href="/web-components") web-components
			span.opacity-70 &nbsp;/&nbsp;
			span.opacity-70 { data.slug ?? "" }
		h1.text-32 { data.name ?? "" }
		p.opacity-85.max-w-lg { data.description ?? "" }

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
				+html('$htmlContentStore')
				//- +html('sanitizedValue')

		//- settings & attributes
		+if('data.attributeNames?.length > 0')
			section
				div.flex.gap-1.px-2.mb-4
					h2.leading-none Settings &amp; Attributes
				AttributesGrid

		//- notes
		+if('data.attributeNames?.length > 0')
			section
				div.flex.gap-1.px-2.mb-4
					h2.leading-none Notes
				pre.w-full(
					class="bg-black/20 p-4 rounded-xl text-14 h-auto whitespace-pre-wrap")
					+each('data.notes as note')
						p.opacity-85 { note }

		//- component inner template
		section
			div.flex.gap-1.px-2.align-baseline.mb-4
				h2.leading-none Web Component Inner Template
				span(
					class="italic leading-none opacity-80 text-[.9em]") (for reference)
			pre.w-full(
				class="bg-black/20 p-4 rounded-xl text-14 h-auto whitespace-pre-wrap")
				| { data.innerTemplate }

	|</template>
