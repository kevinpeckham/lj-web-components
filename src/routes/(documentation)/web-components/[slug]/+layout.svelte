<!--
@component
Here's some documentation for this component.
-->

<script lang="ts">
	// import child page data
	import { page } from "$app/stores";
</script>

<template lang="pug">
	//- head metadata
	svelte:head
		title { $page.data.metaTitle ?? "TITLE" }
		+if('$page.data.metaDescription')
			meta(
				content!="{ $page.data.metaDescription }",
				name="description")
		//- web component script
		+if('$page.data.webComponentScript')
			link(
				href!="{ $page.data.webComponentScript }",
				rel="modulepreload")
			script(
				async="true",
				src!="{ $page.data.webComponentScript }",
				type="module")
		+if('$page.data.slug !== "copy-button"')
			script(
				async="true",
				src!="/e/wc/copy-button.min.js",
				type="module")
		//- +each('$page.data.requires as req')
		//- 	script(
		//- 		async="true",
		//- 		src!="/e/wc/{req}.min.js",
		//- 		type="module")

	slot
	|</template>
