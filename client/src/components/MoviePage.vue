<template>
  <div class="movie-details">    
    <movie v-bind:movie="movie"></movie>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import Movie from './Movie'

export default {
  name: 'MoviePage',
  components: {
      Movie 
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      id: 0,
      movie: undefined
    }
  },
  methods: {
    async getMovies () {
      const response = await this.$apollo.query({
        query: gql`
            query GetMovieDetails($id: String!) {
                movie(id: $id) {
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
        `, 
        variables: {
          id: this.id 
        }
      })
      console.log(response.data)
      this.movie = response.data.movie
    }
  },
  async created () {
    this.id = this.$route.params.id;
    this.getMovies()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>