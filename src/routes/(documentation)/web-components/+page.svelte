<!--
@component
Here's some documentation for this component.
-->

<script lang="ts">
	// type
	import type { PageData } from "./$types";

	const version = "0.1.1";

	// data
	export let data: PageData;
	$: documentation = data?.documentation ?? {};
	// console.log(documentation);
</script>

<template lang="pug">
	header.page-x-padding.pt-8
		h1(
			class="text-[2em]") Web Components
		p.opacity-85 Documentation for the web components available in this project.
	main.page-x-padding.main-y-padding.grid.grid-cols-1.gap-8
		div.grid.grid-cols-1.gap-4
			div.text-blue-200 Available Components
			+each('Object.values(documentation) as component')
				+const('latestVersion = Object.keys(component).sort().reverse()[0]')
				+const('item = component[latestVersion]')
				+if('item.published && !item.isPrivate')
					a.block(
						class="underline underline-offset-4 hover:text-accent",
						href="/web-components/{item.slug}",
						title="view documentation and example for {item.name}") { item.name }

		// under development
		div.grid.grid-cols-1.gap-4
			div.text-blue-200 { data.dev ? "Under Development" : "" }
			+each('Object.values(documentation) as component')
				+const('latestVersion = Object.keys(component).sort().reverse()[0]')
				+const('item = component[latestVersion]')
				+if('data.dev && !item.published')
					a.block(
						class="underline underline-offset-4 hover:text-accent",
						href="/web-components/{item.slug}",
						title="view documentation and example for {item.name}") { item.name }

	|</template>
