
<template>
	<div>
		<img :src="photoURL" alt="User Icon" />
	</div>
</template>


<style lang="scss" scoped>
	img {
		height: 3rem;
		width: 3rem;
		cursor: pointer;
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