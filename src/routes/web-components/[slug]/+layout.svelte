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
			script(
				async="true",
				src!="/dev/wc/copy-button",
				type="module")

	slot
	|</template>
