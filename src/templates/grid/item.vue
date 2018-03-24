<template>
	<div class="grid-item" :style="{
		'grid-row-start': rowStart,
		'grid-row-end': rowEnd,
		'grid-col-start': colStart,
		'grid-col-end': colEnd
	}">
		<slot></slot>
	</div>
</template>

<script>
export default {
	props: {
		"rowStart": { required: false, defaults: "auto" },
		"rowEnd": { required: false, defaults: "auto" },
		"colStart": { required: false, defaults: "auto" },
		"colEnd": { required: false, defaults: "auto" }
	}
}
</script>

<style>

</style>
