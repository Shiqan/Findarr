<template>
  <div class="wrapper">
      <section v-if="loaded">
        <v-parallax :src="'https://image.tmdb.org/t/p/original/' + movie_highlighted.backdrop_path" height="600">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <h1 class="white--text mb-2 display-1 text-xs-center"> {{ movie_highlighted.title }} </h1>
            <div class="subheading mb-3 text-xs-center"> {{ movie_highlighted.tagline }} </div>
             <div class="mt-5">
              <v-btn large color="primary" href="/">Watch trailer</v-btn>
              <v-btn large dark color="purple" href="/">Add to Radarr</v-btn>
            </div>
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
              <h2 class="headline">Popular Movies</h2>
              <!-- <span class="subheading">
                Cras facilisis mi vitae nunc 
              </span> -->
              
            <v-select
              :items="this.$store.state.qualityProfiles"
              label="Radarr Quality Profile"
              item-text="name"
              item-value="id"
              v-model="this.$store.state.defaultQualityProfileId"
            ></v-select>
            </div>
          </v-flex>

          <v-flex xs12>
            <v-container fluid grid-list-xl>
              <v-layout row wrap>
                  <movie v-bind:movie="movie" v-for="(movie, index) in movies" :key="movie.id" v-bind:class="{ active: index == 0 }"></movie>
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
      loaded: false,
      movie_highlighted: undefined,
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
      this.movie_highlighted = this.movies[0]
      this.loaded = true
    },
  },
  async created () {
    this.getMovies()
    await this.$store.dispatch('getDefaultQualityProfile')
    await this.$store.dispatch('getQualityProfiles')
  }
}
</script>

<style scoped>

</style>