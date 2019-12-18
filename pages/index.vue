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
  name: 'Home',
  components: {
    Phrase: () => import('@/components/phrase.vue'),
    SEO: () => import('@/components/seo.vue')
  },
  async asyncData ({ $axios, store }) {
    store.commit('toggleLoading', true)
    store.commit('changeBackground', randonBackground())
    let { phrases } = store.state

    if (!phrases.length) {
      phrases = await $axios.$get('/phrases')
      store.commit('changePhrases', phrases)
    }

    const radomPhraseId = Math.floor(Math.random() * phrases.length)
    const phrase = phrases[radomPhraseId]

    if (Object.keys(phrase).length) {
      store.commit('toggleLoading', false)
      store.commit('changePhrase', phrase)
      return { phrase }
    }
  }
}
</script>
