import pkg from './package'

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: 'Sergey Panay – A Senior Front-end Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favs/favicon-16x16.png?v=JykkAYvaXn'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favs/favicon-32x32.png?v=JykkAYvaXn'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favs/apple-touch-icon.png?v=JykkAYvaXn'
      },
      { rel: 'manifest', href: '/favs/site.webmanifest?v=JykkAYvaXn' },
      { rel: 'shortcut icon', href: '/favs/favicon.ico?v=JykkAYvaXn' }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#f1c40f' },

  /*
   ** Global CSS
   */
  css: ['@/assets/styles/_normalize.scss', '@/assets/styles/main.scss'],
  layoutTransition: {
    name: 'mainpage'
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/svgicon'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    babel: {
      presets: ['@babel/preset-env'],
      plugins: [
        '@babel/transform-runtime',
        '@babel/plugin-syntax-dynamic-import'
      ]
    },
    postcss: {
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {
          browsers: ['last 2 versions', 'ie >= 9']
        }
      }
    },
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
