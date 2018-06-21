<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'app',
  async created() {
    const response = await this.$apollo.query({
        query: gql`
            query GetPopularMovies {
                popular_movies {
                    id
                    title
                    backdrop_path
                    poster_path
                    overview
                    tagline
                    videos {
                        name
                        source
                    }
                }
            }
        `
    })
    console.log(response.data)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.link {
  margin: 0px 2px;
}
</style>