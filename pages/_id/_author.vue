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
import asyncData from '@/services/phrases'

export default {
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },
  components: {
    Phrase: () => import('@/components/phrase.vue'),
    SEO: () => import('@/components/seo.vue')
  },
  asyncData
}
</script>
