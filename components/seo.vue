<template>
  <span v-if="false" />
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    }
  },
  head () {
    return {
      title: this.title || process.env.title,
      meta: [
        { hid: 'canonical', rel: 'canonical', href: this.url || process.env.siteUrl },
        { hid: 'description', name: 'description', content: this.description || process.env.description },
        { hid: 'og:title', property: 'og:title', content: this.title || process.env.title },
        { hid: 'og:url', property: 'og:url', content: this.url || process.env.siteUrl },
        { hid: 'og:description', property: 'og:description', content: this.description || process.env.description },
        { hid: 'og:image:alt', property: 'og:image:alt', content: this.title || process.env.title },
        { hid: 'twitter:title', name: 'twitter:title', content: this.title || process.env.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.description || process.env.description },
        { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: this.title || process.env.title }
      ]
    }
  }
}
</script>
