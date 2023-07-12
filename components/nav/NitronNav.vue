
<template>
	<nav>
		<section class="visual-nav">
			<NitronNameLogo class="logo"/>
			<div 
				class="menu-button"
				@click="toggleMenu"
			>
				<span 
					class="material-symbols-outlined menu-icon" 
				>menu</span>
			</div>
			<div class="nav-items">
				<NavLinkItem name="Demo" link="/demo" />
				<NavLinkItem name="Docs" link="/docs" />
				<NavLinkItem name="API" link="/api" />
				<NavLinkItem name="Contact" link="/contact" />
			</div>
			<div class="mobile-nav-items" v-if="menuOpen">
				<NavLinkItem name="Demo" link="/demo" />
				<NavLinkItem name="Docs" link="/docs" />
				<NavLinkItem name="API" link="/api" />
				<NavLinkItem name="Contact" link="/contact" />
			</div>
			<a href="/account">
				<AccountIcon />
			</a>
		</section>
		<section class="block-nav">
		</section>
	</nav>
</template>


<style lang="scss" scoped>
	.visual-nav, .block-nav {
		width: 100%;
		height: 3rem;
	}
	.visual-nav {
		position: fixed;
		width: 100%;
		height: 3rem;
		.logo {
			width: 16rem;
		}
		background-color: white;
		display: flex;
	}
	.nav-items {
		display: flex;
		justify-content: space-evenly;
		width: 100%;
	}
	.mobile-nav-items {
		position: absolute;
		right: 0;
		display: none;
		flex-direction: column;
		justify-content: space-evenly;
		width: 100%;
		top: 3rem;
	}
	.menu-button {
		display: none;
		background-color: var(--color-secondary);
		width: 4rem;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		&:hover {
			opacity: 0.8;
		}
	}
	@media screen and (max-width: 40rem) {
		.logo {
			flex-grow: 1;
		}
		.nav-items {
			display: none;
		}
		.mobile-nav-items, .menu-button {
			display: flex;
		}
	}
</style>

<script lang="ts">
import { ref } from 'vue';

export default {
	setup() {
		const menuOpen = ref(false);
		const toggleMenu = () => {
			menuOpen.value = !menuOpen.value;
		}
		return {
			menuOpen,
			toggleMenu,
		}
	}
}
</script>