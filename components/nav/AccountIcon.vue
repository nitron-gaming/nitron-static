
<template>
	<div>
		<no-ssr>
			<img :src="photoURL" alt="User Icon" />
			<img src="/account.svg" alt="..." slot="placeholder"/>
		</no-ssr>
	</div>
</template>


<style lang="scss" scoped>
	div {
		height: 3rem;
		width: 3rem;
		cursor: pointer;
		line-height: 3rem;
		text-align: center;
		font-size: 1.5rem;
	}
	img {
		width: 100%;
		height: 100%;
	}
</style>

<script lang="ts">
import { mapState } from 'vuex';
export default {
	computed: mapState({
		displayName: (state: any) => state.authUser?.displayName ?? 'Guest',
		authenticated: (state: any) => state.authUser !== null,
		photoURL: (state: any) => state.authUser?.photoURL ?? '/account.svg',
	})
}
</script>