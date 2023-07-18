
<template>
	<section>
        <div v-if="!accountLoaded">
            <p>Loading...</p>
        </div>
		<div v-else-if="!isAuthenticated" class="sign-up-buttons">
			<button class="github-button" @click="signUpWithGithub">
				<img src="/github-mark-white.svg" alt="Github logo" />
				<p>Sign Up with Github</p>
			</button>
			<button class="google-button" @click="signUpWithGoogle">
				<img src="/google-icon.svg" alt="Google logo" />
				<p>Sign Up with Google</p>
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
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 2rem;
		button {
			margin: 1rem 0;
			max-width: 20rem;
			border: none;
			// height: 3rem;
			border-radius: 5px;
			cursor: pointer;
			display: flex;
			align-items: center;
			img {
				margin-right: 1rem;
			}
			p {
				color: white;
				font-size: 1.5rem;
			}
		}
	}
	.github-button {
		background-color: #24292e;
		padding: 0.6rem 1rem;
		&:hover {
			background-color:rgb(74, 82, 90);
		}
		img {
			width: 2rem;
			height: 2rem;
		}
	}
	.google-button {
		background-color: #4285F4;
		padding: 0.2rem;
		&:hover {
			background-color:#2d69cb;
		}
		img {
			background-color: white;
			padding: 0.5rem;
			height: 1.5rem;
			width: 1.5rem;
		}
		p {
			margin-right: 1rem;
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
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { sendEmailVerification } from "firebase/auth";
import { mapGetters } from 'vuex';

export default {
	computed:{
		...mapGetters(['account', 'isAuthenticated', 'accountLoaded']),
	},
  	methods: {
    async signUpWithGithub() {
        const provider = new GithubAuthProvider();
	    provider.addScope('read:user')
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user as any;

			const docRef = doc(db, 'users', user.uid);
			const docSnap = await getDoc(docRef);
			if (!docSnap.exists()) {
				if (auth.currentUser) await sendEmailVerification(auth.currentUser);
			}

            await setDoc(doc(db, 'users', user.uid), {
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                githubAccessToken: user.accessToken
            });

            // Update the Vuex store
            // this.$store.dispatch('', {
            //   displayName: user.displayName,
            //   email: user.email
            // });
            } catch (error) {
                console.error("Error signing up with Github: ", error);
            }
        },
		async signUpWithGoogle() {
		  const provider = new GoogleAuthProvider()
		  try {
			const result = await signInWithPopup(auth, provider)
			const user = result.user as any
			const docRef = doc(db, 'users', user.uid);
			const docSnap = await getDoc(docRef);
			if (!docSnap.exists()) {
				if (auth.currentUser) await sendEmailVerification(auth.currentUser);
			}

			await setDoc(doc(db, 'users', user.uid), {
			  displayName: user.displayName,
			  email: user.email,
			  photoURL: user.photoURL,
			  googleAccessToken: user.accessToken,
			})
			// Update the Vuex store
			// this.$store.dispatch('', {
			//   displayName: user.displayName,
			//   email: user.email
			// });
		  } catch (error) {
			console.error('Error signing up with Google:', error)
		  }
		},
    },
}
</script>