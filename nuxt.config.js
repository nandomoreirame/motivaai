const siteUrl = `https://motivaai.nandomoreira.me`
const title = `💪🏼 Motiva Aí`

export default {
  mode: 'spa',
  generate: {
    fallback: true
  },
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      dir: 'ltr',
      lang: 'pt-br',
    },
    titleTemplate: `%s | ${process.env.npm_package_name}`,
    title: process.env.npm_package_description,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'frase, motivação, motivacional, gerador, gere, dia, frases, autor, autores' },
      { name: 'og:locale', content: 'pt_BR' },
      { 'http-equiv': `Content-Language`, content: 'pt-br' },
      { name: 'language', content: 'Portuguese' },
      { name: 'googlebot', content: 'index,follow' },
      { name: 'robots', content: 'index,follow,noodp' },
      { name: 'country', content: 'Brazil' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'generator', content: 'Visual Studio Code - Insiders' },
      { name: 'revisit-after', content: '10 days' },
      { rel: 'canonical', href: siteUrl },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { property: 'og:title', content: title },
      { property: 'og:site_name', content: 'MotivaAi' },
      { property: 'og:url', content: 'nononono' },
      { property: 'og:description', content: process.env.npm_package_description },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: `${siteUrl}/share.png` },
      { property: 'og:image:alt', content: process.env.npm_package_description },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@oseunando' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: process.env.npm_package_description },
      { name: 'twitter:image', content: `${siteUrl}/share.png` },
      { name: 'twitter:image:alt', content: process.env.npm_package_description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5c775ca87636f474', charset: 'utf-8' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: false,
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  server: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0'
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/netlify-files',
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: 'https://api-motivaai.nandomoreira.dev'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
