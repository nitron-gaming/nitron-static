<template>
	<main v-if="!accountLoaded">
		<h2>Loading...</h2>
	</main>
	<main v-else-if="isAuthenticated">
		<AccountNamedHeader />
		<AccountProfile />
		<AccountSignOut />
	</main>
	<main v-else>
		<SignUp />
	</main>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import Vue from "vue";

export default Vue.extend({
    name: "DemoPage",
    head() {
        return {
            title: "Nitron - Account",
            meta: [
                {
                    name: "description",
                    content: "Get info on your Nitron Account",
                },
                { charset: "utf-8" },
                { name: "viewport", content: "width=device-width, initial-scale=1" },
            ],
        };
    },
    computed: {
        ...mapGetters(["isAuthenticated", "account", "accountLoaded"]),
    },
    methods: {
        async logout() {
            await this.$store.dispatch("logout");
            this.$router.push("/");
        },
    },
});
</script>

<style lang="scss" scoped>
main {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
