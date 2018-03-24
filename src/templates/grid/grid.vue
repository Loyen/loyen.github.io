<template>
	<div class="grid" :style="{'grid-template': template, 'grid-gap': gap}">
		<slot></slot>
	</div>
</template>

<script>
export default {
	props: {
		"template": { required: false, defaults: "none" },
		"gap": { required: false, defaults: "none" }
	}
}
</script>

<style>
.grid {
	display: grid;
}
</style>
