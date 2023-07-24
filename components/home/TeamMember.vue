<template>
	<div class="member-container" >
		<img class="member-headshot" :src="headshot" alt="Headshot" />
		<div class="member-info" >
			<h3 class="member-name">{{name}}</h3>
			<h3 class="member-position">{{position}}</h3>
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
		background-color: var(--color-tertiary);
		margin: 1rem;
		border-radius: 1.5rem;
		overflow: hidden;
	}
	.member-headshot {
		width: 100%;
		aspect-ratio: 1/1;
	}
	.member-info {
		display: flex;
		padding:0.25rem;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		h3 {
			color: white;
			margin: 0;
			text-align: center;
		}
	}
	.member-name {
		font-weight: bold;
		font-size: 1.5rem;
	}
	.member-position {
		color: var(--color-secondary);
		font-size: 1rem;
	}
</style>

<script lang="ts">
export default {
	props: {
		name: {type: String},
		position: {type: String},
		headshot: {type: String},
		description: {type: String},
		action_image: {type: String},
	},
}
</script>