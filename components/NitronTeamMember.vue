<template>
	<div class="member-container" >
		<img class="member-headshot" :src="headshot" alt="Headshot" />
		<div class="member-info" >
			<h3>{{name}}</h3>
			<h3>{{position}}</h3>
			<!-- <img :src="action_image" alt="Action Image" /> -->
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.member-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		background-color: var(--color-primary);
		margin: 1rem;
		border-radius: 2rem;
		overflow: hidden;
		// max-width: 20rem;
		// max-height: 25rem;
	}
	.member-headshot {
		width: 100%;
		aspect-ratio: 1/1;
	}
	.member-info {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		h3 {
			color: white;
			font-size: 2rem;
			margin: 0;
			text-align: center;
		}
	}
</style>

<script lang="ts">
export default {
	name: 'NitronTeamMember',
	props: {
		name: {type: String},
		position: {type: String},
		headshot: {type: String},
		description: {type: String},
		action_image: {type: String},
	},
}
</script>