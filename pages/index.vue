<template>
  <main>
    <NitronNav/>
    <NitronHeader/>
    <NitronGoal/>
    <NitronDiagram/>
    <NitronTeam/>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: "IndexPage",
    head() {
        return {
            title: "Nitron",
            meta: [
                { name: "description", content: "Unlocking the Authenticity of Emotion to bring Virtual Worlds to life" },
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