<template>
  <main>
    <NitronNav/>
    <ApiEmailListPrompt/>
    <EmailListInput/>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: "DemoPage",
    head() {
        return {
            title: "Nitron - API",
            meta: [
                { name: "description", content: "Connect your application to the Nitron API" },
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