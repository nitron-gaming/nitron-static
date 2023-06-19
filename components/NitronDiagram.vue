<template>
	<section class="diagram-container">
		<div class="add-diagram">
			<div class="diagram-block emotions-block">
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
			<div class="diagram-block interactions-block">
				<div class="interaction-avatars">
					<img class="interaction-bad-guy" src="pixel-art/bad-guy.png" alt="Bad Guy" />
					<img class="interaction-main-avatar" src="pixel-art/shocked.png" alt="Shocked Character" />
				</div>
				<h6>Interactions</h6>
			</div>
		</div>
		<div class="equals-diagram">
			<img class="equal-image" src="equal.svg" alt="Equals" />
			<div class="diagram-block behaviour-block">
				<div class="behaviour-avatars">
					<div class="fight-avatars">
						<img class="interaction-shocked-avatar" src="pixel-art/scared-right.png" alt="Scared Character" />
						<img class="interaction-bad-guy-avatar" src="pixel-art/angry-bad-guy.png" alt="Angry Bad Character" />
					</div>
					<div class="love-avatars">
						<img class="very-happy-avatar" src="pixel-art/very-happy.png" alt="Scared Character" />
						<img class="woman-blushing-avatar" src="pixel-art/woman-blushing.png" alt="Angry Bad Character" />
					</div>
				</div>
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
	.diagram-block {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		padding: 1rem;
		height: 18rem;
		border-radius: 2rem;
		h6 {
			color: white;
			font-size: 2rem;
		}
	}
	.emotions-block {
		background-color: var(--color-secondary);
	}
	.emotion-faces {
		// 2x2 square of images:
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		grid-gap: 0.8rem;
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
		background-color: var(--color-primary);
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
	.equal-image {
		margin-right: 1rem;
	}
	.equals-diagram {
		display: flex;
		align-items: center;
		justify-content: center;
		max-width: 80rem;
		margin: 2rem;
	}
	.behaviour-block {
		background-color: var(--color-tertiary);
	}
	.behaviour-avatars {
		display: flex;
		justify-content: space-between;
	}
	.fight-avatars {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		max-width: 16rem;
		margin-right: 4rem;
	}
	.interaction-shocked-avatar {
		max-width: 6rem;
		margin-right: 1.5rem;
	}
	.interaction-bad-guy-avatar {
		max-width: 8rem;
	}
	.love-avatars {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		max-width: 16rem;
	}
	.very-happy-avatar {
		max-width: 7.5rem;
		margin-right: 1.5rem;
	}
	.woman-blushing-avatar {
		max-width: 6.6rem;
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
			height: 31rem;
		}
		.behaviour-avatars {
			flex-direction: column;
			align-items: center;
		}
		.fight-avatars {
			margin-right: 0;
			margin-bottom: 1.5rem;
		}
	}
</style>

<script lang="ts">
</script>