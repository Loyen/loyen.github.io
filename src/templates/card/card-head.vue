<template>
	<div class="card-head">
		{{ title }}
	</div> <!-- card-head -->
</template>

<script>
export default {
	props: {
		title: { required: true }
	}
}
</script>

<style>
.card-head {
	font-weight: bold;
	line-height: 1.5em;
}
</style>
