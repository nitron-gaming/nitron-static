export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nitron-static',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/static/styles/global.scss",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      '~/components/nav'
    ] 
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/firebase'
  ],
  firebase: {
    config: {
      apiKey: "AIzaSyDqp4agIU9onsAQNTt_f0wOHZXsgR1gA2g",
      authDomain: "nitron-website.firebaseapp.com",
      projectId: "nitron-website",
      storageBucket: "nitron-website.appspot.com",
      messagingSenderId: "554340564132",
      appId: "1:554340564132:web:a789a824f18d84a3fd3a31",
      measurementId: "G-7B3BK11DBQ"
    },
    services: {
      auth: {
        persistence: 'local', 
        initialize: {
          onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
        },
        ssr: true,
      },
      firestore: true,
      analytics: true,
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
