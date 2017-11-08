<template>
	<div class="card card--user raise--6">
		<card-head :title="title" v-if="title" />
		<card-body>
			<slot></slot>
		</card-body>
	</div>
</template>

<script>
import cardHead from './card-head.vue';
import cardBody from './card-body.vue';

export default {
	components: {
		"card-head": cardHead,
		"card-body": cardBody
	},
	props: {
		"title": { required: false, default: null }
	}
}
</script>

<style>
.card {
	background-color: #F5F5F5;
	color: #212121;
}

.card--user {
	background: #FFEB3B;
	color: #000000;
}
</style>
