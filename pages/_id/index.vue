<template>
  <span v-if="false" />
</template>

<script>
import { slugAuthor, randonBackground } from '@/utils'

export default {
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },
  async fetch ({ $axios, redirect, store, params }) {
    const { id } = params
    const { phrases } = store.state

    let phrase = {}

    store.commit('toggleLoading', true)
    store.commit('changeBackground', randonBackground())

    if (phrases.length > 0) {
      store.commit('toggleLoading', false)
      phrase = phrases[id]
    } else {
      phrase = await $axios.$get('/v1')
        .then(({ data }) => {
          store.commit('toggleLoading', false)
          store.commit('changePhrases', data)
          store.commit('changePhrase', data[id])
          return data[id]
        })
        .catch((error) => {
          store.commit('toggleLoading', false)
          console.error(error) // eslint-disable-line
          return {}
        })
    }

    redirect(`/${id}/${slugAuthor(phrase.author)}`)
  }
}
</script>
