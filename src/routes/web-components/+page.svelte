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
		+each('documentation as item')
			a.block(
				class="underline underline-offset-4 hover:text-accent",
				href="/web-components/{item.slug}",
				title="view documentation and example for {item.name}") { item.name }

	|</template>
