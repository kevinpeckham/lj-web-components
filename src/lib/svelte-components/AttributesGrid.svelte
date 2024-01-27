<!--
@component
Here's some documentation for this component.
-->

<script lang="ts">
	import type wcDocumentationStore from "$stores/wcDocumentationStore.server";
	import { getContext } from "svelte";

	/* global WcDocumentation */
	$: documentation = getContext("documentation") as WcDocumentation;

	// define attributes
	$: attributes = documentation.attributes ?? [];

	// columns
	const columns = ["Name", "Type", "Default", "Description"];
</script>

<template lang="pug">
	div(
		class=`
					font-mono
					text-15
					grid
					grid-cols-[minmax(16ch,auto)_10ch_minmax(16ch,auto)_minmax(20ch,1fr)]
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
		+each('attributes as attribute')
			+each('columns as column')
				+const('value = attribute[column.toLowerCase()]')
				div.w-full.text-14(
					class=`
						px-4
						py-1
						text-blue-100
						text-[13.5px]
						truncate
						{ value ? '' : 'opacity-40' }`)
					| { value ? value : "-" }
	|</template>
