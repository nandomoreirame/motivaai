<template>
  <div class="hero-body">
    <Phrase />
  </div>
</template>

<script>
export default {
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },
  components: {
    Phrase: () => import('@/components/phrase.vue')
  },
  fetch ({ $axios, store, params }) {
    const { id } = params
    const { phrases } = store.state

    store.commit('toggleLoading', true)

    if (phrases.length > 0) {
      store.commit('toggleLoading', false)
      return store.commit('changePhrase', phrases[id])
    }

    return $axios.$get('/v1')
      .then(({ data }) => {
        // console.log(data)
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
