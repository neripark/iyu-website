// const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'iyu',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'name', name: 'description', content: '都内で活動中の新宿系お散歩ポップバンド、iyuの公式Webサイトです。バンドに関するすべての情報を掲載しています。' },
      { hid: 'og_url', property: 'og:url', content: 'https://iyumusic.tokyo' },
      { hid: 'og_type', property: 'og:type', content: 'website' },
      { hid: 'og_title', property: 'og:title', content: 'iyu' },
      { hid: 'og_site_name', property: 'og:site_name', content: 'iyu' },
      { hid: 'og_description', property: 'og:description', content: '都内で活動中の新宿系お散歩ポップバンド、iyuの公式Webサイトです。バンドに関するすべての情報を掲載しています。' },
      // todo: 届いたら入れる
      // { hid: 'og_image', property: 'og:image', content: '' },
      // twitter
      // { hid: 'og_twitter_site', property: 'twitter:site', content: '@iyu_band' },
      // { hid: 'og_twitter_card', property: 'twitter:card', content: "summary_large_image" },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.jpg' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/scroll.js',
    {
      src: '~plugins/vue-carousel.js',
      ssr: false
    }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/style-resources'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  // ローカル環境でfunctionsのサーバーを立ち上げるときのCORS対策
  proxy: {
    '/.netlify': {
      target: 'http://localhost:9000',
      pathRewrite: {'^/.netlify/functions': ''},
    },
  },
  styleResources: {
    sass: [
      '~assets/scss/**/*.scss'
    ]
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
