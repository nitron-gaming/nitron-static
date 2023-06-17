<template>
	<NavItem>
		<a :href="link">{{ name }}</a>
	</NavItem>
</template>

<style lang="scss" scoped>
	a {
		text-decoration: none;
		color: white;
		font-size: 1.5rem;
		line-height: 1.5rem;
	}
</style>

<script lang="ts">
export default {
	props: {
		name: {
			type: String,
		},
		link: {
			type: String,
		},
	}
}
</script>