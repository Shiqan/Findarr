<template>
  <div class="wrapper">
      <section>
        <v-parallax src="assets/hero.jpeg" height="600">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <img src="assets/vuetify.png" alt="Vuetify.js" height="200">
            <h1 class="white--text mb-2 display-1 text-xs-center">Parallax Template</h1>
            <div class="subheading mb-3 text-xs-center">Powered by Vuetify</div>
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              href="/pre-made-themes"
            >
              Get Started
            </v-btn>
          </v-layout>
        </v-parallax>
    </section>
    
    <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">The best way to start developing</h2>
              <span class="subheading">
                Cras facilisis mi vitae nunc 
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                  <movie v-bind:movie="movie" v-for="(movie, index) in movie_carousel" :key="movie.id" v-bind:class="{ active: index == 0 }"></movie>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
    </section>
 </div>
</template>

<script>
import gql from 'graphql-tag'
import Movie from './Movie'

export default {
  name: 'HelloWorld',
  components: {
      Movie
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      movies: [],
      movie_carousel: []
    }
  },
  methods: {
    async getMovies () {
      const response = await this.$apollo.query({
        query: gql`
            query GetPopularMovies {
                popular_movies {
                    id
                    title
                    backdrop_path
                    release_date
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
      
      this.movies = response.data.popular_movies
      this.movie_carousel = this.movies.slice(0, 3)
    }
  },
  async created () {
    this.getMovies()
  }
}
</script>

<style scoped>

</style>