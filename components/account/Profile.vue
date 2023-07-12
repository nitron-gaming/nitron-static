
<template>
	<section class="profile-section">
		<img :src="account.photoURL" alt="User Icon" />
		<div>
			<h4>{{ account.displayName }}</h4>
			<h4>{{ account.email }}</h4>
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
import { mapGetters } from 'vuex';

export default {
	computed: mapGetters(['account'])
}
</script>