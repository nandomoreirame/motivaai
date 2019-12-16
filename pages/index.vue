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
import { mapState } from 'vuex'
import { randonPhrase, randonBackground } from '@/utils'

export default {
  name: 'Home',
  components: {
    Phrase: () => import('@/components/phrase.vue'),
    SEO: () => import('@/components/seo.vue')
  },
  computed: {
    ...mapState({
      phrase: ({ phrase }) => phrase
    })
  },
  async asyncData ({ $axios, store }) {
    store.commit('toggleLoading', true)
    store.commit('changeBackground', randonBackground())

    const { phrases } = store.state

    if (phrases.length > 0) {
      store.commit('toggleLoading', false)
      store.commit('changePhrase', randonPhrase(phrases)[0])
      store.commit('changePhrases', phrases)
      return { data: phrases }
    }

    const { data } = await $axios.$get('/v1')

    if (data.length > 0) {
      store.commit('toggleLoading', false)
      store.commit('changePhrase', randonPhrase(data)[0])
      store.commit('changePhrases', data)
    }

    return { data }
  }
}
</script>
