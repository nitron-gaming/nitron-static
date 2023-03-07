<template>
  <Home/>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  head() {
    return {
      title: 'Nitron',
      meta: [
        { name: 'description', content: 'Unlocking the Authenticity of Emotion to bring Virtual Worlds to life' },
      ],
    }
  },
})
</script>
