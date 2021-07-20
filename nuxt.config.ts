const nuxtConfig = {
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
          'postchild, postman, api, request, tool, test tool, api test tool, similar postman, postman instead, 接口测试工具, API测试, 类似postman, postman代替, 好用的接口测试工具',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          '模仿 Postman，搭建了一个免费好看的 API 请求构建工具，帮助您更高效的开发和测试。',
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
  css: ['~/assets/font/font.scss'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '~/plugins/i18n.ts',
    '~/plugins/v-tooltip.ts',
    '~/plugins/v-clipboard.ts',
    { src: '~/plugins/ga.ts', mode: 'client' },
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
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/toast',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxtjs/google-analytics',
    '@nuxtjs/gtm',
    '@nuxtjs/eslint-module',
  ],
  router: {
    base: '/postchild/',
  },
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
    // vendor: ['vue-i18n'],
    extend(config: any) {
      config.module?.rules.push({
        test: /\.scss$/i,
        loader: 'sass-resources-loader',
        options: {
          resources: './assets/global.scss',
        },
      })
    },
  },

  typescript: {
    typeCheck: true,
    ignoreNotFoundWarnings: true,
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
    hostname: 'https://olivergzzy.github.io/postchild/',
  },

  robots: {
    UserAgent: '*',
    Disallow: '',
    Allow: '/',
    Sitemap: 'https://olivergzzy.github.io/postchild/sitemap.xml',
  },
}

export default nuxtConfig
