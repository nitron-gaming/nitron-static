<template>
  <main v-if="authenticated">
	<AccountNamedHeader />
	<AccountProfile />
	<AccountSignOut />
  </main>
  <main v-else>
	<SignUp />
  </main>
</template>

<script lang="ts">
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
        user() {
            return this.$store.state.authUser;
        },
        authenticated() {
            return this.$store.state.authUser != null;
        },
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
