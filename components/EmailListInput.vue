
<template>
	<section>
		<div v-if="!isLoggedIn" class="sign-up-buttons">
			<button class="github-button" @click="signUpWithGithub">
				<p>Sign Up with Github</p>
				<img src="/github-mark-white.svg" alt="Github logo" />
			</button>
		</div>
		<div v-else>
			<p>Signed Up!</p>
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
	p {
		color: black;
		font-size: 2rem;
		width: 100%;
		text-align: center;
	}
</style>

<script lang="ts">
import { auth, db } from '~/plugins/firebase'
import { GithubAuthProvider, signInWithPopup } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { sendEmailVerification } from "firebase/auth";
import { mapState } from 'vuex';

export default {
	computed: mapState({
		isLoggedIn: (state: any) => state.authUser !== null
	}),
  methods: {
    async signUpWithGithub() {
      const provider = new GithubAuthProvider();
	  provider.addScope('read:user')
      try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user as any;
        await setDoc(doc(db, 'users', user.uid), {
          displayName: user.displayName,
          email: user.email,
		  photoURL: user.photoURL,
		  githubAccessToken: user.accessToken
        });
		if (auth.currentUser) await sendEmailVerification(auth.currentUser);
        // Update the Vuex store
        // this.$store.dispatch('', {
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