export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'MDRN. Training',
    meta: [ 
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, user-scalable=no, user-scalable=0, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0 user-scalable=0'
      },
      {
        hid: 'description',
        name: 'description',
        content: '' 
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: './favicon.ico'
      }
    ],
    // script: [
    //   {src: '../js/fb.js'},
    //   {src: '../js/snap.js'},
    // ]
  },


  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/scss/reset.scss',
    '@/assets/scss/fonts.scss',
    '@/assets/scss/animate.css'
    // '@/assets/scss/tiny-slider.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/animate.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  router: {
    base: '/mdrn-training/',
    mode: 'history',
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'error',
        path: '*',
        component: resolve(__dirname, 'pages/404.vue')
      })
    }
  },

  generate: {
    dir: './dist'
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    target: 'static'
    // target: 'server'
  }
}
