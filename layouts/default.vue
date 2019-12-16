<template>
  <main :style="{ backgroundImage }" class="hero is-medium is-primary is-bold is-fullheight">
    <section class="message-container">
      <nuxt />
    </section>
    <site-footer />
  </main>
</template>

<script>
import { mapState } from 'vuex'

export default {
  components: {
    SiteFooter: () => import('@/components/footer.vue')
  },
  computed: {
    ...mapState({
      backgroundImage: ({ heroBackground }) => heroBackground
    })
  }
}
</script>
