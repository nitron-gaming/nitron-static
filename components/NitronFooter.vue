
<template>
	<footer>
		<h2 id="contact">Contact Us</h2>
		<p>Feel free to reach out to me: zac@nitron.ca</p>
	</footer>
</template>

<style lang="scss" scoped>
	footer {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		padding: 2rem;
		background-color: #7200BE;
	}
	h2 {
		font-size: 2rem;
		color: white;
		margin-right: 2rem;
	}
	p {
		font-size: 1.5rem;
		color: white;
	}
	@media screen and (max-width: 40rem) {
		footer {
			flex-direction: column;
			align-items: center;
			justify-content: center;
			text-align: center;
		}
	}
</style>

<script lang="ts">

</script>