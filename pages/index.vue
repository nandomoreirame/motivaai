<template>
  <div class="hero-body">
    <Phrase />
  </div>
</template>

<script>
import { randonPhrase } from '@/utils'

export default {
  name: 'Home',
  components: {
    Phrase: () => import('@/components/phrase.vue')
  },
  fetch ({ $axios, store }) {
    store.commit('toggleLoading', true)

    $axios.$get('/v1')
      .then(({ data }) => {
        // console.log(data)
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
