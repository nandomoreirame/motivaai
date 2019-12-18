<template lang="html">
  <div class="container">
    <h2 v-if="isLoading">
      Aguarde, carregando citação...
    </h2>
    <quote v-else :phrase="phrase" />
    <button @click="changeQuote" class="button is-success is-rounded">
      Motiva aí!
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { slugAuthor } from '@/utils'

export default {
  name: 'Phrase',
  components: {
    Quote: () => import('@/components/quote.vue')
  },
  props: {
    phrase: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState({
      isLoading: ({ isLoading }) => isLoading,
      phrases: ({ phrases }) => phrases
    })
  },
  methods: {
    async changeQuote () {
      let phrases = this.phrases
      this.$store.commit('toggleLoading', true)

      if (!phrases.length) {
        phrases = await this.$axios.$get('/phrases')
        this.$store.commit('changePhrases', phrases)
      }

      const radomPhraseId = Math.floor(Math.random() * phrases.length)
      const phrase = phrases[radomPhraseId]

      return this.$router.push(`/${radomPhraseId}/${slugAuthor(phrase.author)}`)
    }
  }
}
</script>

<style lang="css">
.button {
  margin: 10px 0 0 80px;
}
</style>
