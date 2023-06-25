<template>
	<section class="goal-container">
		<h2 id="goal">Our Goal</h2>
		<p class="goal-description-p">
			<img class="avatar" src="pixel-art/very-happy.png" alt="Avatar" />
			{{goal?.description}}
		</p>
	</section>
</template>

<script lang="ts">
	import { defineComponent } from "vue";
	interface Goal {
		description: string;
	}

	export default defineComponent({
		async created() {
			const response = await this.$content("goal").fetch();
			this.goal = (Array.isArray(response) ? response[0] : response) as unknown as Goal;
		},

		data(): { goal: null | Goal } {return {goal: null}},
	});
</script>

<style lang="scss" scoped>
	.goal-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	#goal {
		color: white;
		font-size: 5vw;
		width: calc(100% - 2rem);
		padding: 1rem;
		align-self: flex-start;
		background-color: var(--color-primary);
	}
	.goal-description-p {
		font-size: 2.5rem;
		max-width: 50rem;
		margin: 2rem;
	}
	.avatar {
		width: 12rem;
		margin: 0 1.5rem;
		float: right;
	}
	@media screen and (max-width: 60rem) {
		#goal {
			font-size: 6.5vw;
		}
		.goal-description-p {
			font-size: 2rem;
			max-width: 42rem;
		}
		.avatar {
			width: 10rem;
		}
	}
	@media screen and (max-width: 40rem) {
		#goal {
			font-size: 8vw;
		}
		.goal-description-p {
			font-size: 1.5rem;
			max-width: 35rem;
		}
		.avatar {
			width: 7rem;
		}
	}
</style>
