<!--
@component
Here's some documentation for this component.
-->

<script lang="ts">
	// import { getContext } from "svelte";
	import { writable, type Writable } from "svelte/store";

	// props
	export let id = Date.now().toString();
	export let contentEditable = false;
	export let contentStore = writable("");

	// refs
	let textarea: HTMLTextAreaElement;

	$: if (textarea && textarea.style) {
		const height = (($contentStore.match(/\n/g)?.length ?? 0) + 1) * 1.5;
		textarea.style.height = `${height}em`;
		textarea.style.resize = "none";
	}

	function onKeydown(event: KeyboardEvent) {
		const target = event.target as HTMLTextAreaElement;

		if (event.key === "Tab") {
			// prevent default
			event.preventDefault();

			// get cursor position
			const position = target.selectionStart;

			// instert two spaces at cursor position
			const inserted =
				target.value.slice(0, position) + "  " + target.value.slice(position);

			// update text area value
			target.value = inserted;

			// reset cursor position
			target.selectionEnd = target.selectionStart = position + 2;
		}
	}
</script>

<template lang="pug">
	div(
		class=`
			bg-black/20
			grid
			grid-cols-[minmax(0,_1fr)_auto]
			items-start
			justify-between
			overflow-hidden
			pl-4
			pr-2
			py-2
			relative
			rounded-md
			text-[.9em]
			w-full
			focus-within:ring-2`)
		pre.w-full.h-full.flex.items-center.overflow-hidden
			//- prettier-ignore
			//- +if('contentEditable')
			code.w-full.h-full
				textarea(
					class=`
						flex-auto
						bg-transparent
						ring-0
						outline-none
						text-blue-200
						w-full`,
					bind:this!="{ textarea }",
					bind:value!="{ $contentStore }",
					id!="{ id }",
					on:keydown!="{ onKeydown }",
					readonly!="{ !contentEditable }")

		copy-button.flex-none(
			color-accent="#ebf92f",
			message-textContent="copied",
			target-selector!="#{id}",
			title-textContent="copy")

	|</template>
