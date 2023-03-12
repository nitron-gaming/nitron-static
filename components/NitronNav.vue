
<template>
	<nav>
		<NitronNameLogo class="logo"/>
		<div class="nav-items">
			<NitronNavItem name="Goal" link="#goal" />
			<NitronNavItem name="Team" link="#team" />
			<NitronNavItem name="Contact" link="#contact" />
		</div>
	</nav>
</template>

<style lang="scss" scoped>
	nav {
		.logo {
			width: 12rem;
		}
		background-color: white;
		display: flex;
		div {
			display: flex;
			justify-content: space-evenly;
			width: 100%;
		}
	}
	@media screen and (max-width: 30rem) {
		.nav-items {
			display: none;
		}
	}
</style>

<script lang="ts">

</script>