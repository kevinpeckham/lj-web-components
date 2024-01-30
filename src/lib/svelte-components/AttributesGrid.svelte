<!--
@component
Here's some documentation for this component.
-->

<script lang="ts">
	// store types
	import type { Writable } from "svelte/store";

	// context api
	import { getContext } from "svelte";

	$: data = getContext("data") as { [key: string]: unknown };
	$: attributes = data?.attributes ?? null;
	$: attributeNames = data?.attributeNames ?? [];

	// columns
	const columns = ["name", "default", "description"];
</script>

<template lang="pug">
	div(
		class=`
			font-mono
			text-15
			grid
			grid-cols-[minmax(16ch,auto)_minmax(16ch,auto)_minmax(20ch,1fr)]
			outline
			outline-1
			overflow-hidden
			pb-2
			rounded-xl
					w-full`)
		//- labels
		+each('columns as label')
			div(
				class="bg-black/20 px-4 py-2 text-12 uppercase") { label }

		//- attributes
		+each('attributeNames as attributeName')
			+each('columns as column')
				div.w-full.text-14(
					class=`
						px-4
						py-1
						text-blue-100
						text-[13.5px]
						truncate`)
					+if('column === "name"')
						div { attributeName }
					+if('column === "default"')
						div { data.attributes?.[attributeName]?.default ?? "" }
					+if('column === "description"')
						div { data.attributes?.[attributeName]?.description ?? "" }

	|</template>
