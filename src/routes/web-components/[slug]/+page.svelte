<!--
@component
Here's some documentation for this component.
-->

<script lang="ts">
	// types
	import type { PageData } from "./$types";

	// data
	export let data: PageData;
	$: console.log(data);
</script>

<template lang="pug">
	main.page-x-padding.main-y-padding
		svelte:element(
			text="splunges per widget",
			this!="{ data.slug }",
			unit="k")

	|</template>
