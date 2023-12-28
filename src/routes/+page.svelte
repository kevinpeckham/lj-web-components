<script lang="ts">
	// set context api
	import { setContext } from "svelte";

	// components
	import ButtonLink from "$atoms/ButtonLink.svelte";
	import Logos from "$molecules/Logos.svelte";

	// types
	import type { PageData } from "./$types";

	// catch data from layout function in +layout.ts
	export let data: PageData;

	// pass brands content to Logos component via context api
	$: setContext("brands", data.brands);
</script>

<template lang="pug">
	//- outer container
	main(
		class=`
			gap-y-2
			grid
			grid-cols-1
			min-h-screen
			place-content-start
			justify-items-center
			text-center
			sm:text-left
			sm:pt-[4.5em]
			md:pt-24`)
		|

		//- inner container
		div(
			class=`
				p-[18px_36px_216px]
				sm:p-0
				sm:max-w-sm
				md:max-w-md
				`)
			|

			//- logos
			Logos

			//- headline
			h1 { data.body.headline }

			//- text
			p(
				class="leading-relaxed opacity-90 mb-8")
				//- use html to render rich text
				+html('data.body.text')

			//- button link
			ButtonLink(
				cta!="{ data.body.cta }")

	|</template>

<style lang="postcss">
	/* examples of how Tailwind may be used within the style section of a Svelte component */

	h1 {
		@apply font-semibold
			leading-snug
			mb-[.75ch]
			text-[1.425em]
			text-accent;
	}
</style>
