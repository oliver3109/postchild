export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'spa',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    titleTemplate: '%s',
    title: 'Postchild • A free,simaple API request builder',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'keywords',
        content:
          'postchild, postchild chrome, postchild online, postchild for mac, postchild app, postchild for windows, postchild google chrome, postchild chrome app, get postchild, postchild web, postchild android, postchild app for chrome, postchild mobile app, postchild web app, api, request, testing, tool, rest',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Children of postman and postwoman, just a kidding. Mainly learn and imitate postman and postwoman.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: ['~/static/font/font.css', '~/assets/v-tooltip.scss'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '~/plugins/i18n.js',
    '~/plugins/v-tooltip.js',
    '~/plugins/v-clipboard.js',
    { src: '~/plugins/ga.js', mode: 'client' },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/toast',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxtjs/google-analytics',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    vendor: ['vue-i18n'],
    extend(config, { isDev, isClient }) {
      config.module.rules.push({
        test: /\.scss$/i,
        loader: 'sass-resources-loader',
        options: {
          resources: './assets/variables.scss',
        },
      })
    },
  },

  toast: {
    position: 'bottom-center',
  },

  loading: {
    color: '#ebff33',
    height: '3px',
  },

  generate: {
    dir: 'dist',
    subFolders: false,
  },

  googleAnalytics: {
    id: 'UA-170910994-2',
  },

  sitemap: {
    hostname: 'http://postchild.io',
  },

  robots: {
    UserAgent: '*',
    Disallow: '',
    Allow: '/',
    Sitemap: 'http://postchild.io/sitemap.xml',
  },
}
