
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
import { mapGetters } from 'vuex';
import { StateType } from '~/types/state';
export default {
	computed: {
		...mapGetters(['account']),
		photoURL(state: StateType): string {
			return state.account?.photoURL ?? '/account.svg'
		}
	}
}
</script>