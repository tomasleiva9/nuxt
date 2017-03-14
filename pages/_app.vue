<template>
  <nuxt-container>
    <navbar></navbar>
    <nuxt class="view"/>
  </nuxt-container>
</template>

<script>
import Navbar from '~components/Header.vue'

export default {
  components: {
    Navbar
  },
  head: {
    title: 'Nuxt.js HN Clone',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', content: "Nuxt.js project" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
    ]
  }
}
</script>

<style src="~assets/main.styl" lang="styl"></style>
