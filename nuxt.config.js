import axios from 'axios'
import { slugAuthor } from './utils'

const baseURL = 'https://api-motivaai.nandomoreira.dev'
const siteUrl = `https://motivaai.nandomoreira.me`
const title = `💪🏼 Motiva Aí`
const description = process.env.npm_package_description

export default {
  mode: 'universal',
  env: {
    siteUrl,
    title,
    description
  },
  generate: {
    fallback: true,
    routes () {
      axios.defaults.baseURL = baseURL
      return axios.get(`v1`)
        .then(({ data }) =>
          data.data.map((phrase, id) =>
            `/${id}/${slugAuthor(phrase.author)}`))
    }
  },
  head: {
    htmlAttrs: {
      dir: 'ltr',
      lang: 'pt-br'
    },
    titleTemplate: `%s | ${title}`,
    title: description,
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
      { property: 'og:site_name', content: 'MotivaAi' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: `${siteUrl}/share.png` },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@oseunando' },
      { name: 'twitter:image', content: `${siteUrl}/share.png` }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5c775ca87636f474', charset: 'utf-8' }
    ]
  },
  loading: false,
  server: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0'
  },
  buildModules: [
    '@nuxtjs/eslint-module',
    ['@nuxtjs/google-analytics', {
      id: process.env.GOOGLE_ANALYTICS || 'UA-000000000-1'
    }]
  ],
  modules: [
    '@nuxtjs/netlify-files',
    'nuxt-buefy',
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  axios: {
    baseURL
  }
}
