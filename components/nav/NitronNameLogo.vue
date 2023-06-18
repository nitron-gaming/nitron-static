<template>
	<div 
		@click="$router.push('/')"
	>
		<img src="images/nitron-logo.png" alt="Nitron Logo" />
		<h1>Nitron</h1>
	</div>
</template>

<style lang="scss" scoped>
	div {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0.5rem 5rem;
		cursor: pointer;
		&:hover {
			opacity: 0.8;
		}
		img {
			width: 2rem;
			height: 2rem;
		}
		h1 {
			font-size: 2rem;
			margin-left: 0.6rem;
			color: var(--color-primary);
		}
	}
</style>