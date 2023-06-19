<template>
	<a :href="link">
		<div>
			<slot />
		</div>
	</a>
</template>

<style lang="scss" scoped>
	div, a {
		display: flex;
		flex-grow: 1;
		background-color: var(--color-secondary);
		justify-content: center;
		align-items: center;
		cursor: pointer;
		&:hover {
			opacity: 0.8;
		}
	}
</style>

<script lang="ts">
export default {
	props: {
		link: {
			type: String,
		},
	}
}
</script>