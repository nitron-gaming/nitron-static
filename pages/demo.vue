<template>
  <main>
    <DemoEmailListPrompt/>
    <EmailListInput/>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: "DemoPage",
    head() {
        return {
            title: "Nitron - Demo",
            meta: [
                { name: "description", content: "See our AI behavioor engine in action with our demo NPC story game" },
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