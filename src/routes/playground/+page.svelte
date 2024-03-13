<!--
@component
Here's some documentation for this component.
-->

<script lang="ts">
	// modules
	// import SiteHeader from "/src/lib/web-components/site-header/v0.1.1.js";
	// import ComponentUtils from "/src/lib/web-components/component-utils/v0.1.1.js";
</script>

<template lang="pug">
	svelte:head
	//- css
	link(
		as="style",
		href="/e/custom/tca.min.css",
		rel="preload")
	link(
		href="/e/custom/tca.min.css",
		rel="stylesheet")

	//- module preloaders
	link(
		href="e/wc/site-header@0.1.1.min.js",
		rel="modulepreload")
	link(
		href="e/wc/component-utils@0.1.1.min.js",
		rel="modulepreload")

	//- modules
	//- script(
	//- 	async,
	//- 	src="e/wc/component-utils@0.1.1.min.js",
	//- 	type="module")
	//- script(
	//- 	async,
	//- 	src="e/wc/site-header@0.1.1.min.js",
	//- 	type="module")
	|</template>
