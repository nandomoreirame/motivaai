<template>
  <div class="hero-body">
    <SEO
      :title="`${phrase.quote} ⏤ ${phrase.author}`"
      :url="$route.path"
    />
    <Phrase />
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
  fetch ({ $axios, store }) {
    store.commit('toggleLoading', true)
    store.commit('changeBackground', randonBackground())

    $axios.$get('/v1')
      .then(({ data }) => {
        store.commit('toggleLoading', false)
        store.commit('changePhrases', data)
        store.commit('changePhrase', randonPhrase(data)[0])
      })
      .catch((error) => {
        store.commit('toggleLoading', false)
        console.error(error) // eslint-disable-line
      })
  }
}
</script>
