<template>
  <main>
    <DocsEmailListPrompt/>
    <SignUp/>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: "DemoPage",
    head() {
        return {
            title: "Nitron - Docs",
            meta: [
                { name: "description", content: "Learn how to efficiently connect your application to our API" },
                { charset: "utf-8" },
                { name: "viewport", content: "width=device-width, initial-scale=1" },
            ],
        };
    },
})
</script>

<style lang="scss" scoped>
  main {
    height: 100%;
  }
</style>

<style lang="scss">
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
  }
</style>