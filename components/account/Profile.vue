
<template>
	<section class="profile-section">
		<no-ssr placeholder="Loading...">
			<img :src="user.photoURL" alt="User Icon" />
		</no-ssr>
		<div>
			<h4>{{ user.displayName }}</h4>
			<h4>{{ user.email }}</h4>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.profile-section {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	margin-bottom: 2rem;
	img {
		margin-right: 2rem;
	}
	h4 {
		font-size: 1.5rem;
	}
}
</style>

<script lang="ts">
import { mapState } from 'vuex';

export default {
	computed: mapState({
		user: (state: any) => state.authUser,
		authenticated: (state: any) => state.authUser !== null,
	})
}
</script>