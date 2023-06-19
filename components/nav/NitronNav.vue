
<template>
	<nav>
		<NitronNameLogo class="logo"/>
		<div class="nav-items">
			<NavLinkItem name="Demo" link="/demo" />
			<NavLinkItem name="Docs" link="/docs" />
			<NavLinkItem name="API" link="/api" />
			<NavLinkItem name="Contact" link="/contact" />
		</div>
	</nav>
</template>

<style lang="scss" scoped>
	nav {
		.logo {
			width: 16rem;
		}
		background-color: white;
		display: flex;
		div {
			display: flex;
			justify-content: space-evenly;
			width: 100%;
		}
	}
	@media screen and (max-width: 40rem) {
		.nav-items {
			display: none;
		}
	}
</style>

<script lang="ts">

</script>