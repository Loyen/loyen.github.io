<template>
	<a class="button" :class="[ 'button--'+size ]" :href="href">
		<c-icon v-if="icon" :name="icon" />
		<span>{{ value }}</span>
	</a>
</template>

<script>
import icon from '../icon/icon.vue';

export default {
	components: {
		"c-icon": icon
	},
	props: {
		"title": { required: true },
		"href": { required: true },
		"icon": { required: false },
		"size": { required: false, default: "m" },
		"value": { required: false }
	}
}
</script>

<style>
.button {
	display: inline-block;
}

.button--xxxl {
	font-size: 4em;
}

.button--xxl {
	font-size: 2em;
}

.button--xl {
	font-size: 1.5em;
}

.button--l {
	font-size: 1.17em;
}

.button--s {
	font-size: 0.83em;
}
</style>
