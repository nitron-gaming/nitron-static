
<template>
	<section>
		<div class="sign-up-buttons">
			<button class="github-button" @click="signUpWithGithub">
				<p>Sign Up with Github</p>
				<img src="/github-mark-white.svg" alt="Github logo" />
			</button>
		</div>
	</section>
</template>

<style lang="scss" scoped>
	section {
		padding: 2rem;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
	}
	.sign-up-buttons {
		display: flex;
		justify-content: center;
		margin-top: 2rem;
	}
	.github-button {
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

<script>
import { auth, db } from '~/plugins/firebase'
import { GithubAuthProvider, signInWithPopup } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'

export default {
  methods: {
    async signUpWithGithub() {
      const provider = new GithubAuthProvider();
      try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        await setDoc(doc(db, 'users', user.uid), {
          displayName: user.displayName,
          email: user.email
        });
        // // Update the Vuex store
        // this.$store.dispatch('setUser', {
        //   displayName: user.displayName,
        //   email: user.email
        // });
      } catch (error) {
        console.error("Error signing up with Github: ", error);
      }
    }
  }
}
</script>