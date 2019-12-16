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
import { randonBackground } from '@/utils'

export default {
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },
  components: {
    Phrase: () => import('@/components/phrase.vue'),
    SEO: () => import('@/components/seo.vue')
  },
  computed: {
    ...mapState({
      phrase: ({ phrase }) => phrase
    })
  },
  fetch ({ $axios, store, params }) {
    const { id } = params
    const { phrases } = store.state

    store.commit('toggleLoading', true)
    store.commit('changeBackground', randonBackground())

    if (phrases.length > 0) {
      store.commit('toggleLoading', false)
      return store.commit('changePhrase', phrases[id])
    }

    return $axios.$get('/v1')
      .then(({ data }) => {
        store.commit('toggleLoading', false)
        store.commit('changePhrases', data)
        store.commit('changePhrase', data[id])
      })
      .catch((error) => {
        store.commit('toggleLoading', false)
        console.error(error) // eslint-disable-line
      })
  }
}
</script>
