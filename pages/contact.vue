<template>
  <main>
    <NitronNav/>
    <p>Contact</p>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: "DemoPage",
    head() {
        return {
            title: "Nitron - Contact",
            meta: [
                { name: "description", content: "Get in contact with the Nitron Development and Customer Service teams" },
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
  @import "/static/styles/fonts.scss";
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
  }
</style>