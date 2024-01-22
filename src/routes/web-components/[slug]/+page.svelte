<!--
@component
Here's some documentation for this component.
-->

<script lang="ts">
	// import copy button class
	// customElements.define("copy-button", CopyButton);

	// types
	import type { PageData } from "./$types";
	interface Attribute {
		[key: string]: unknown;
		name: string;
		description: string;
		type: string;
		optional: boolean;
		default: string;
		notes: string;
	}

	// data
	export let data: PageData;

	// refs
	let textarea: HTMLTextAreaElement;

	// variables
	$: attributes = data?.documentation?.attributes ?? [];
	$: attributeNames = attributes.map((v) => v.name) ?? [];
	$: slug = data.slug ?? ""; // same as wb tag name

	// settings
	$: sanitizeOptions = {
		tag: data.slug,
		singleElement: true,
		selfClosing: data?.documentation?.self_closing ?? false,
		approvedAttributes: attributeNames ?? [],
	};
	type SanitizeOptions = typeof sanitizeOptions;

	let textAreaValue: string = data.documentation?.example ?? "";
	let sanitizedValue = textAreaValue;
	$: specialMarks = textAreaValue.replace(/ /g, "•").replace(/[^•\n]/g, " ");
	$: textAreaHeight = textarea?.scrollHeight ?? 0;

	function scrubString(str: string) {
		// remove new lines
		str = str.replace(/\n/g, "");

		// remove double spaces
		str = str.replace(/\s{2,}?/g, " ");

		// remove characters not allowed in plain text plus common text formatting characters
		str = str.replace(/[^a-zA-Z0-9!@#$%^&*()_+\-[\]{};:\\|,./? ]/g, "");

		return str;
	}

	function sanitizeHTML(html: string, options: SanitizeOptions) {
		// create container to hold web component
		const container = document.createElement("div");

		// insert html into container
		container.insertAdjacentHTML("beforeend", html);

		// find web component
		const el = container.querySelector(options.tag);

		// find web component textContent
		const elText = el?.textContent ?? "";

		// define approved attributes
		const approvedAttributes = [
			...(options.approvedAttributes ?? []),
			"aria-hidden",
			"id",
			"style",
			"class",
		].toSorted();

		// is self closing
		const isSelfClosing = options.selfClosing ?? false;

		// open and close tag
		const openTag = `<${options.tag ?? ""}`;
		const closeTag = isSelfClosing ? " />" : `</${options.tag ?? ""}>`;

		// build attributes array
		const attributesArray = approvedAttributes.map((att) =>
			el?.hasAttribute(att) ? `\n  ${att}="${el.getAttribute(att)}"` : "",
		);

		// filter empty strings
		const attributesFiltered = attributesArray.filter((v) => v !== "");

		// build attributes string from array
		const attributesString = attributesFiltered.join("");

		// build template
		const template = `${openTag}${attributesString}${elText}${closeTag}`;

		return template ?? "";
	}
	// on change sanitize the text area value
	function onChange(event: InputEvent) {
		textarea.selectionStart = 0;
		const sanitized = sanitizeHTML(textAreaValue, sanitizeOptions);
		sanitizedValue = sanitized ? sanitized : textAreaValue;
	}
	// on blur reset the text area value to the sanitized value
	function onBlur(event: FocusEvent) {
		const sanitized = sanitizeHTML(textAreaValue, sanitizeOptions);
		textAreaValue = sanitized ? sanitized : textAreaValue;
	}
	// on focus select all text
	function onFocus(event: FocusEvent) {
		const target = event.target as HTMLTextAreaElement;
		target.select();
		// target.selectionStart = 0;
		// target.selectionEnd = target?.textContent?.length ?? 0;
	}

	// on key down prevent the tab key from moving focus
	function onKeyDown(event: KeyboardEvent) {
		if (event.key === "Tab") {
			// prevent default
			event.preventDefault();

			// get cursor position
			const position = textarea.selectionStart;

			// instert two spaces at cursor position
			const inserted =
				textAreaValue.slice(0, position) + "  " + textAreaValue.slice(position);

			// update text area value
			textarea.value = inserted;

			// reset cursor position
			textarea.selectionEnd = textarea.selectionStart = position + 2;

			textAreaValue = textarea.value;
		}
	}

	// on key up update sanitized value
	function onKeyUp(event: KeyboardEvent) {
		const sanitized = sanitizeHTML(textAreaValue, sanitizeOptions);
		sanitizedValue = sanitized ? sanitized : textAreaValue;
	}
</script>

<template lang="pug">
	header.page-x-padding.pt-8
		h1(
			class="text-[2em]") { data.documentation.name }
		p.opacity-85.max-w-lg { data.documentation.description }

	main.page-x-padding.main-y-padding.grid.grid-cols-1.gap-y-8(
		class="mb-[100svh]")
		//- script
		section
			div(
				class="flex gap-x-[.5em] items-baseline")
				h2.mb-2 Script
				span(
					class="italic opacity-80 text-[.9em]") (add to page header)
			div(
				class=`
					bg-black/20
					grid
					grid-cols-[minmax(0,_1fr)_auto]
					items-start
					justify-between
					pl-4
					pr-2
					py-2
					relative
					rounded-md
					text-[.9em]
					w-full
					focus-within:ring-2`)
				pre.w-full.h-full.flex.items-center
					code#script-code(
						class=`
							flex-auto
							bg-transparent
							text-blue-200
							w-full`,
						contenteditable="false")
						div &lt;script
						div &nbsp;async
						div &nbsp;type="module"
						div &nbsp;src="https://cdn.lj.dev/e/wc/{ slug }.min.js"&gt;
						div &lt;/script&gt;
				copy-button.flex-none(
					data-accent-color="#ebf92f",
					data-target-selector="#script-code",
					data-title="copy to clipboard")

		//- textarea
		section
			div(
				class="flex gap-x-[.5em] items-baseline")
				h2.mb-2 Code example
				span(
					class="italic opacity-80 text-[.9em]") ( editable )
			div(
				class=`
					bg-black/20
					grid
					grid-cols-[minmax(0,_1fr)_auto]
					items-start
					justify-between
					pl-4
					pr-2
					py-2
					relative
					rounded-md
					text-[.9em]
					w-full
					focus-within:ring-2`)
				pre.w-full.h-full.flex.items-center
					code(
						class=`
							flex-auto
							bg-transparent
							text-blue-200
							w-full`)
						//- prettier-ignore
						textarea#html-code(
							class=`
								bg-transparent
								block
								resize-none
								w-full
								outline-none`,
							bind:this!="{ textarea }",
							bind:value!="{ textAreaValue }",
							on:blur!="{ onBlur }",
							on:change!="{ onChange }",
							on:keydown!="{ onKeyDown }",
							on:keyup!="{ onKeyUp }",
							spellcheck="true",
							style="height: { textAreaHeight }px")
				copy-button.flex-none(
					data-accent-color="#ebf92f",
					data-target-selector="#html-code",
					data-title="copy to clipboard")
				//- punctuation layer
				//- textarea#html-code(
				//- 	class=`
				//- 		group
				//- 		bg-transparent
				//- 		absolute
				//- 		inset-0
				//- 		p-3
				//- 		pointer-events-none
				//- 		resize-none
				//- 		text-slate-100/10
				//- 		w-full`,
				//- 	bind:value!="{ specialMarks }",
				//- 	disabled="true")
				//- copy button

		//- web component
		section
			div.flex.gap-1
				h2.mb-2 Web Component Preview
				//-span (add to page header)
			div.p-3.rounded(
				class="bg-black/10")
				+html('sanitizedValue')
	|</template>
