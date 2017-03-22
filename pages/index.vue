<template>
  <section class="container">
    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      Universal Vue.js Application Framework <br>
      carregado pelo {{name}}
    </h1>
    <nuxt-link class="button" to="/about">
      About page
    </nuxt-link>
  </section>
</template>
<script>
  export default {
    data ({ req }) {
      return {
        name: req ? 'server' : 'client'
      }
    },
    head () {
      return {
        title: `About Page (${this.name}-side)`
      }
    }
  }
</script>
<style scoped>
.title
{
  margin: 50px 0;
}
</style>
