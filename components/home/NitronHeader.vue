
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
			<a href="/demo">
				<button>Get a Demo</button>
			</a>
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
			background: -webkit-linear-gradient(0deg, var(--color-primary-light), var(--color-primary));
			-webkit-background-clip: text;
			background-clip: text;
		}
		.interaction-word {
			background: -webkit-linear-gradient(0deg, var(--color-secondary-light), var(--color-secondary));
			-webkit-background-clip: text;
			background-clip: text;
		}
		.realism-word {
			background: -webkit-linear-gradient(0deg, var(--color-tertiary-light), var(--color-tertiary));
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
			background-color: var(--color-tertiary);
			color: white;
			font-size: 2rem;
			padding: 1rem 2rem;
			border-radius: 1rem;
			border: none;
			cursor: pointer;
			font-weight: 600;
			&:hover {
				opacity: 0.8;
			}
		}
	}

	@media screen and (max-width: 85rem) {
		.words {
			padding: 3rem 1rem 1rem;
			flex-direction: column;
		}
	}
	@media screen and (max-width: 40rem) {
		.words {
			padding: 2rem 1rem 0.5rem;
			h3 {
				font-size: 5rem;
			}
		}
	}
	@media screen and (max-width: 30rem) {
		.words {
			padding: 1rem 1rem 0rem;
			h3 {
				font-size: 4rem;
				margin: 0rem;
			}
		}
		.slogan>h4 {
			font-size: 2.5rem;
		}
	}
</style>

<script lang="ts">
</script>