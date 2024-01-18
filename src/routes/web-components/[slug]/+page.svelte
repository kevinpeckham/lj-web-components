<!--
@component
Here's some documentation for this component.
-->

<script lang="ts">
	// types
	import type { PageData } from "./$types";

	// data
	export let data: PageData;

	interface ScrollingStatProps {
		duration?: string;
		number_start?: string;
		number_end: string;
		text?: string;
		unit?: string;
	}
</script>

<template lang="pug">
	main.page-x-padding.main-y-padding(
		class="min-h-[200vh]")
		svelte:element(
			duration="800",
			number_end="-40",
			number_start=undefined,
			text="splunges per widget",
			this!="{ data.slug }",
			unit="k")

	|</template>
