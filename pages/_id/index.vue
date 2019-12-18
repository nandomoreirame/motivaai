<template>
  <span v-if="false" />
</template>

<script>
import { slugAuthor } from '@/utils'
import asyncData from '@/services/phrases'

export default {
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },
  async fetch ({ $axios, redirect, store, params }) {
    const { phrase } = await asyncData({ $axios, store, params })
    redirect(`/${phrase.id}/${slugAuthor(phrase.author)}`)
  }
}
</script>
