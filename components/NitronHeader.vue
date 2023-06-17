
<template>
	<header>
		<section class="words">
			<h3 class="emotion-word">Emotion.</h3>
			<h3 class="interaction-word">Interaction.</h3>
			<h3 class="realism-word">Realism.</h3>
		</section>
		<section class="slogan">
			<h4>We are unlocking the Authenticity of Emotion to bring Virtual Worlds to life</h4>
		</section>
		<section class="call-to-action">
			<button
				@click="goToDemo"
			>Get a Demo</button>
		</section>
	</header>
</template>

<style lang="scss" scoped>
	section {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.words {
		padding: 4rem 1rem 2rem;
		h3 {
			font-size: 6rem;
			color: black;
			text-align: center;
			font-weight: 900;
			margin: 0 1rem;
  			-webkit-text-fill-color: transparent;
		}
		.emotion-word {
			background: -webkit-linear-gradient(0deg, #CE84FF, #7200BE);
			-webkit-background-clip: text;
			background-clip: text;
		}
		.interaction-word {
			background: -webkit-linear-gradient(0deg, #92FFF3, #04AA98);
			-webkit-background-clip: text;
			background-clip: text;
		}
		.realism-word {
			background: -webkit-linear-gradient(0deg, rgb(99, 177, 255), #1281DF);
			-webkit-background-clip: text;
			background-clip: text;
		}
	}
	.slogan {
		padding: 2rem;
		h4 {
			font-size: 3rem;
			color: black;
			text-align: center;
			width: 55rem;
		}
	}
	.call-to-action {
		padding: 2rem;
		button {
			background-color: #1281DF;
			color: white;
			font-size: 2rem;
			padding: 1rem 2rem;
			border-radius: 1rem;
			border: none;
			cursor: pointer;
			&:hover {
				opacity: 0.8;
			}
		}
	}

	@media screen and (max-width: 85rem) {
		.words {
			flex-direction: column;
		}
	}
</style>

<script lang="ts">
export default {
	methods: {
		goToDemo() {
			this.$router.push('/demo')
		}
	}
}
</script>