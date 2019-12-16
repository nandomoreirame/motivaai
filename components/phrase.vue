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
    changeQuote () {
      const phraseId = Math.floor(Math.random() * this.phrases.length)
      const phrase = this.phrases[phraseId]
      this.$router.push(`/${phraseId}/${slugAuthor(phrase.author)}`)
    }
  }
}
</script>

<style lang="css">
.button {
  margin: 10px 0 0 80px;
}
</style>
