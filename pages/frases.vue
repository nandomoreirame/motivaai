<template>
  <div class="hero-body">
    <SEO
      :url="$route.path"
      title="Frases"
    />
    <ul>
      <li v-for="(phrase, i) in data" :key="i">
        <nuxt-link :to="`/${i}/${slug(phrase.author)}`">
          <Quote :phrase="phrase" />
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { randonBackground, slugAuthor } from '@/utils'

export default {
  name: 'Home',
  components: {
    Quote: () => import('@/components/quote.vue'),
    SEO: () => import('@/components/seo.vue')
  },
  async asyncData ({ $axios, store }) {
    store.commit('toggleLoading', true)
    store.commit('changeBackground', randonBackground())

    const { phrases } = store.state

    if (phrases.length > 0) {
      store.commit('toggleLoading', false)
      store.commit('changePhrases', phrases)
      return { data: phrases }
    }

    const { data } = await $axios.$get('/v1')

    if (data.length > 0) {
      store.commit('toggleLoading', false)
      store.commit('changePhrases', data)
    }

    return { data }
  },
  methods: {
    slug (author) {
      return slugAuthor(author)
    }
  }
}
</script>
