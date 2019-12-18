<template>
  <div class="hero-body">
    <SEO
      :url="$route.path"
      title="Frases"
    />
    <div>
      <p>
        <nuxt-link :to="`/frases`" class="is-white">
          Total de <strong>{{ phrases.length }}</strong> frases
        </nuxt-link>
      </p>
      <ul>
        <li v-for="(phrase) in phrases" :key="phrase.id">
          <nuxt-link :to="`/${phrase.id}/${slug(phrase.author)}`">
            <Quote :phrase="phrase" />
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { slugAuthor } from '@/utils'
import asyncData from '@/services/phrases'

export default {
  name: 'Home',
  components: {
    Quote: () => import('@/components/quote.vue'),
    SEO: () => import('@/components/seo.vue')
  },
  asyncData,
  methods: {
    slug (author) {
      return slugAuthor(author)
    }
  }
}
</script>

<style lang="css" scoped>
p {
  display: block;
  text-align: center;
  padding: 15px;
  font-size: 1.375rem /* 22/16 */;
}
a {
  color: #fff;
}
</style>
