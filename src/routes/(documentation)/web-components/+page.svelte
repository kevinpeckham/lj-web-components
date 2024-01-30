<!--
@component
Here's some documentation for this component.
-->

<script lang="ts">
	// type
	import type { PageData } from "./$types";

	// data
	export let data: PageData;
	$: documentation = data?.documentation ?? {};
</script>

<template lang="pug">
	header.page-x-padding.pt-8
		h1(
			class="text-[2em]") Web Components
		p.opacity-85 Documentation for the web components available in this project.
	main.page-x-padding.main-y-padding.grid.grid-cols-1.gap-8
		div.grid.grid-cols-1.gap-4
			div.text-blue-200 Available Components
			+each('documentation as item')
				+if('item.published')
					a.block(
						class="underline underline-offset-4 hover:text-accent",
						href="/web-components/{item.slug}",
						title="view documentation and example for {item.name}") { item.name }
		//- ?? Reminder we're forcing reload as a workaround
		div.grid.grid-cols-1.gap-4
			div.text-blue-200(
				data-sveltekit-reload) { data.dev ? "Under Development" : "" }
			+each('documentation as item')
				+if('data.dev && !item.published')
					a.block(
						class="underline underline-offset-4 hover:text-accent",
						href="/web-components/{item.slug}",
						title="view documentation and example for {item.name}") { item.name }

	|</template>
