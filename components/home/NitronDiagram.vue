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
				<img src="add.svg" alt="Plus" />
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
			<div class="equal-image">
				<img src="equal.svg" alt="Equals" />
			</div>
			<div class="diagram-block behaviour-block">
				<div class="behaviour-avatars">
					<img class="interaction-shocked-avatar" src="pixel-art/scared-right.png" alt="Scared Character" />
					<img class="interaction-bad-guy-avatar" src="pixel-art/angry-bad-guy.png" alt="Angry Bad Character" />
					<img class="very-happy-avatar" src="pixel-art/very-happy.png" alt="Scared Character" />
					<img class="woman-blushing-avatar" src="pixel-art/woman-blushing.png" alt="Angry Bad Character" />
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
		margin: 1rem 2rem;
	}
	.add-diagram {
		display: flex;
		align-items: stretch;
		justify-content: center;
		max-width: 40rem;
		width: 100%;
	}
	.diagram-block {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		padding: 1rem;
		border-radius: 2rem;
		max-height: 16rem;
		h6 {
			color: white;
			font-size: 2rem;
		}
	}
	.emotions-block {
		background-color: var(--color-secondary);
	}
	.emotion-faces {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 4%;
		margin: 0 4%;
		img {
			max-width: 100%;
			max-height: 100%;
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
			margin: 2%;
		}
		.interaction-bad-guy {
			width: 100%;
		}	
		.interaction-main-avatar {
			width: 90%;
		}
	}
	.equal-image {
		margin: 1rem;
	}
	.equals-diagram {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		max-width: 40rem;
		// margin: 2rem;
	}
	.behaviour-block {
		width: 100%;
		background-color: var(--color-tertiary);
		h6 {
			text-align: center;
		}
	}
	.behaviour-avatars {
		display: flex;
		width: 100%;
		justify-content: center;
		align-items: flex-end;
	}
	.interaction-shocked-avatar {
		width: 75%;
		margin-right: 4%;
	}
	.interaction-bad-guy-avatar {
		width: 100%;
		margin-right: 8%;
	}
	.very-happy-avatar {
		width: 90%;
		margin-right: 4%;
	}
	.woman-blushing-avatar {
		width: 80%;
	}
	@media screen and (max-width: 65rem) {
		.diagram-container {
			flex-direction: column;
		}
		.add-diagram {
			margin-bottom: 5vw;
		}
		.diagram-block {
			padding: 4%;
			border-radius: 4vw;
		}
		.equal-image {
			margin: 4vw;
			img {
				width: 8vw;
				height: 8vw;
			}
		}
		.add-image {
			img {
				width: 8vw;
				height: 8vw;
			}
		}
	}
	@media screen and (max-width: 45rem) {
		.diagram-block {
			h6 {
				font-size: 5vw;
			}
		}
	}
</style>

<script lang="ts">
</script>