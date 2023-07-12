
<template>
	<section>
		<button @click="signOut" class="sign-out-button">
			<p>Sign Out</p>
			<img src="/logout.svg" alt="Github logo" />
		</button>
	</section>
</template>

<style lang="scss" scoped>
.sign-out-button {
	background-color: #24292e;
	color: white;
	border: none;
	padding: 10px 20px;
	border-radius: 5px;
	font-size: 16px;
	cursor: pointer;
	display: flex;
	align-items: center;
	&:hover {
		background-color:rgb(74, 82, 90);
	}
	p {
		color: white;
		font-size: 1.5rem;
	}
	img {
		width: 2rem;
		height: 2rem;
		margin-left: 1rem;
	}
}
</style>

<script lang="ts">
import { auth } from '~/plugins/firebase'

export default {
  	methods: {
    	async signOut() {
			await auth.signOut();
			// this.$router.push('/');
		}
    }
}
</script>