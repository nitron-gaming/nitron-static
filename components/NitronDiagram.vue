<template>
	<section class="diagram-container">
		<div class="add-diagram">
			<div class="emotions-block">
				<div class="emotion-faces">
					<img src="pixel-art/very-angry-face.png" alt="Very Angry Face" />
					<img src="pixel-art/confused-face.png" alt="Confused Face" />
					<img src="pixel-art/shocked-face.png" alt="Shocked Face" />
					<img src="pixel-art/sad-face.png" alt="Sad Face" />
				</div>
				<h6>Emotions</h6>
			</div>
			<div class="add-image">
				<img src="add.svg" alt="Arrow" />
			</div>
			<div class="interactions-block">
				<div class="interaction-avatars">
					<img class="interaction-bad-guy" src="pixel-art/bad-guy.png" alt="Bad Guy" />
					<img class="interaction-main-avatar" src="pixel-art/shocked.png" alt="Shocked Character" />
				</div>
				<h6>Interactions</h6>
			</div>
		</div>
		<div class="equals-diagram">
			<img src="equal.svg" alt="Equals" />
			<div class="behaviour-block">
				<h6>Dynamic NPC Behaviour!</h6>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
	.diagram-container {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: row;
	}
	.add-diagram {
		display: flex;
		align-items: stretch;
		justify-content: center;
		margin: 2rem;
		max-width: 80rem;
		margin-right: 0;
	}
	.emotions-block {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		background-color: var(--color-secondary);
		padding: 1rem;
		border-radius: 2rem;
		h6 {
			color: white;
			font-size: 2rem;
			margin: 0;
		}
	}
	.emotion-faces {
		// 2x2 square of images:
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		grid-gap: 1rem;
		img {
			max-width: 7rem;
			max-height: 7rem;
			margin: 0.3rem;
		}
	}
	.add-image {
		display: flex;
		align-items: center;
		justify-content: center;
		img {
			width: 4rem;
			height: 4rem;
		}
	}
	.interactions-block {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		background-color: var(--color-primary);
		padding: 1rem;
		border-radius: 2rem;
		h6 {
			color: white;
			font-size: 2rem;
			margin: 0;
		}
	}
	.interaction-avatars {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		img {
			margin: 0.3rem;
		}
	}
	.interaction-bad-guy {
		max-width: 8rem;
	}	
	.interaction-main-avatar {
		max-width: 7rem;
	}
	.equals-diagram {
		display: flex;
		align-items: center;
		justify-content: center;
		max-width: 80rem;
		margin: 2rem;
	}
	.behaviour-block {
		background-color: white;
		padding: 1rem;
		margin-left: 2rem;
		border-radius: 2rem;
		h6 {
			font-size: 2rem;
			margin: 0;
		}
	}
	@media screen and (max-width: 80rem) {
		.diagram-container {
			flex-direction: column;
		}
		.add-diagram {
			margin-bottom: 0;
			margin-right: 2rem;
		}
	}
	@media screen and (max-width: 42rem) {
		.add-diagram {
			flex-direction: column;
			margin-bottom: 0;
		}
		.equals-diagram {
			flex-direction: column;
			margin-top: 0;
		}
		.behaviour-block {
			margin-left: 0;
		}
	}
</style>

<script lang="ts">
</script>