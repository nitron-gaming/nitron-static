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
		transition: background-color 0.5s;
		&:hover {
			background-color: var(--color-primary);
		}
		height: 3rem;
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