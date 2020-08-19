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
    title: 'Postchild • 一个免费好看的API请求构建工具',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'keywords',
        content:
          'postchild, postman, api, request, tool, 接口测试工具, API测试, 类似postman, postman代替',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Postchild • 一个免费好看的API请求构建工具',
      },
      {
        name: 'X-UA-Compatible',
        content: 'IE=edge, chrome=1',
      },
      { name: 'baidu-site-verification', content: 'yHZaLQtn7p' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: ['~/assets/font/font.scss', '~/assets/v-tooltip.scss'],
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
    '@nuxtjs/gtm',
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
    publicPath: 'https://cdn.jsdelivr.net/gh/OLIVERgZzy/postchild@gh-pages',
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
    continuous: true,
  },

  generate: {
    dir: 'dist',
    subFolders: false,
  },

  googleAnalytics: {
    id: 'UA-170910994-2',
  },

  gtm: {
    id: 'GTM-P7ZTKBC',
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
