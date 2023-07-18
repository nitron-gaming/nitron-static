<template>
	<section class="diagram-container">
		<div class="add-diagram">
			<img src="pixel-art/add-diagram.svg" alt="Emotions + Interactions" />
		</div>
		<div class="equal-diagram">
			<img src="pixel-art/equal-diagram.svg" alt="Equals Dynamic NPC Behaviour" />
		</div>
	</section>
</template>

<style lang="scss" scoped>
	.diagram-container {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: row;
		margin: 1rem 2rem;
	}
	.add-diagram, .equal-diagram {
		display: flex;
		align-items: center;
		justify-content: center;
		max-width: 50rem;
		img {
			height: 100%;
			width: 100%;
		}
	}
	.equal-diagram {
		margin-left: 1rem;
	}
	@media screen and (max-width: 65rem) {
		.diagram-container {
			flex-direction: column;
		}
		.add-diagram {
			margin-bottom: 4vw;
		}
		.equal-diagram {
			margin-left: 0;
		}
	}
</style>

<script lang="ts">
</script>