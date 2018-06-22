<template>
  <div class="movie">
    <h1 class="title">{{ movie.title }}</h1>
    <span> {{ movie.overview }} </span>
    <router-link :to="{ name: 'MoviePage', params: { 'id': movie.id } }"> more info </router-link>
  </div>
</template>

<script>
  export default {
    props: ['movie']
  }
</script>

<style scoped>
  a {
    color: #42b983;
  }
</style>