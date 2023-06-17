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
		font-size: 4rem;
		width: calc(100% - 2rem);
		padding: 1rem;
		align-self: flex-start;
		background-color: #7900B3;
	}
	.goal-description-p {
		font-size: 2rem;
		max-width: 50rem;
		margin: 2rem;
	}
	.avatar {
		width: 10rem;
		margin: 1rem;
		float: right;
	}
	@media screen and (max-width: 40rem) {
		.goal-description-p {
			font-size: 1.5rem;
		}
		.avatar {
			width: 8rem;
		}
	}
	@media screen and (max-width: 30rem) {
		.goal-description-p {
			font-size: 1.2rem;
		}
		.avatar {
			width: 7rem;
		}
		#goal {
			font-size: 3rem;
		}
	}
</style>
