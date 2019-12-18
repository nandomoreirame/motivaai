<template>
  <div class="hero-body">
    <SEO
      :title="`${phrase.quote} ⏤ ${phrase.author}`"
      :url="$route.path"
    />
    <Phrase :phrase="phrase" />
  </div>
</template>

<script>
import { randonBackground } from '@/utils'

export default {
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },
  components: {
    Phrase: () => import('@/components/phrase.vue'),
    SEO: () => import('@/components/seo.vue')
  },
  async asyncData ({ $axios, store, params }) {
    const { id } = params
    let { phrase } = store.state

    store.commit('toggleLoading', true)
    store.commit('changeBackground', randonBackground())

    if (Object.keys(phrase).length && phrase.id === id) {
      store.commit('toggleLoading', false)
      store.commit('changePhrase', phrase)
      return { phrase }
    }

    phrase = await $axios.$get(`/phrase/${id}`)

    if (Object.keys(phrase).length) {
      store.commit('toggleLoading', false)
      store.commit('changePhrase', phrase)
    }

    return { phrase }
  }
}
</script>
