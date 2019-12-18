import { randonBackground } from '@/utils'

export default async ({ $axios, store, params, redirect }) => {
  store.commit('toggleLoading', true)
  store.commit('changeBackground', randonBackground())

  const { id } = params
  let { phrases } = store.state
  let phrase = {}

  if (!phrases.length) {
    phrases = await $axios.$get('/phrases')
    store.commit('changePhrases', phrases)
  }

  const radomId = Math.floor(Math.random() * phrases.length)
  phrase = phrases[id || radomId]

  if (typeof phrase === 'undefined') {
    phrase = await $axios.$get(`/phrase/${radomId}`)
  }

  store.commit('toggleLoading', false)
  store.commit('changePhrase', phrase)

  return { phrase, phrases }
}
