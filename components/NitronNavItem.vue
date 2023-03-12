<template>
	<div>
		<a :href="link">{{name}}</a>
	</div>
</template>

<style lang="scss" scoped>
	div {
		background-color: #04aa98;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		&:hover {
			opacity: 0.5;
		}
		a {
			text-decoration: none;
			color: white;
			font-size: 1.5rem;
			line-height: 1.5rem;
		}
	}
</style>

<script lang="ts">
export default {
	name: 'NitronNav',
	props: {
		name: {
			type: String,
		},
		link: {
			type: String,
		},
	},
}
</script>