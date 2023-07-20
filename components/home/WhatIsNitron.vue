<template>
	<section class="pitch-container">
		<h2 id="pitch">What is Nitron?</h2>
		<p class="pitch-description-p">
			<img class="avatar" src="pixel-art/very-happy.png" alt="Avatar" />
			{{pitch?.description}}
		</p>
	</section>
</template>

<script lang="ts">
	import { defineComponent } from "vue";
	interface Pitch {
		description: string;
	}

	export default defineComponent({
		async created() {
			const response = await this.$content("pitch").fetch();
			this.pitch = (Array.isArray(response) ? response[0] : response) as unknown as Pitch;
		},

		data(): { pitch: null | Pitch } {return {pitch: null}},
	});
</script>

<style lang="scss" scoped>
	.pitch-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	#pitch {
		color: white;
		font-size: 5vw;
		width: calc(100% - 2rem);
		padding: 1rem;
		align-self: flex-start;
		background-color: var(--color-primary);
	}
	.pitch-description-p {
		font-size: 2.5rem;
		max-width: 50rem;
		margin: 2rem;
		margin-bottom: 1rem;
	}
	.avatar {
		width: 12rem;
		margin: 0 1.5rem;
		float: right;
	}
	@media screen and (max-width: 60rem) {
		#pitch {
			font-size: 6.5vw;
		}
		.pitch-description-p {
			font-size: 2rem;
			max-width: 42rem;
		}
		.avatar {
			width: 10rem;
		}
	}
	@media screen and (max-width: 40rem) {
		#pitch {
			font-size: 8vw;
		}
		.pitch-description-p {
			font-size: 1.5rem;
			max-width: 35rem;
		}
		.avatar {
			width: 7rem;
		}
	}
</style>
