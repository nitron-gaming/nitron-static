<template>
	<div>
		<slot />
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
			opacity: 0.8;
		}
	}
</style>

<script lang="ts">
</script>