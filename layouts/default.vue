<template>
  <main class="hero is-medium is-primary is-bold is-fullheight">
    <section class="message-container">
      <nuxt />
    </section>
    <site-footer />
  </main>
</template>

<script>
export default {
  components: {
    SiteFooter: () => import('@/components/footer.vue')
  }
}
</script>
