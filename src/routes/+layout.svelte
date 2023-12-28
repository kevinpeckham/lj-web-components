<script lang="ts">
	import "../app.css";

	// import components
	import Footer from "$organisms/Footer.svelte";
	import PreFooter from "$components/organisms/PreFooter.svelte";

	// import child page data
	import { page } from "$app/stores";

	// import data type for layout data
	import type { LayoutData } from "./$types";

	// catch data
	export let data: LayoutData;
</script>

<template lang="pug">
	//- head metadata, insterted using data from +layout.ts
	svelte:head
		title { $page.data.metaTitle }
		+if('$page.data.metaDescription')
			meta(
				content!="{ $page.data.metaDescription }",
				name="description")

	slot

	//- conditionally show prefooter cta
	+if('$page.data.showPrefooter != false')
		PreFooter(
			cta!="{ data.footer.cta }")
	Footer(
		author!="{ data.footer.author }",
		org!="{ data.footer.org }")

	|</template>
