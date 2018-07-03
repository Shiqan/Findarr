<template>
  <div class="wrapper">
      <section v-if="loaded">
        <v-parallax :src="headerImage" height="600">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <h1 class="white--text mb-2 display-1 text-xs-center"> {{ movie.title }} </h1>
            <div class="subheading mb-3 text-xs-center"> {{ movie.tagline }} </div>
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
              <h2 class="headline">Movie Details</h2>
              <span class="subheading">
                {{ movie.overview }}
              </span>
            </div>
          </v-flex>
        </v-layout>
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
            <v-flex xs12 md4>
              <v-card class="elevation-0 transparent">
                <v-card-text class="text-xs-center">
                  <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                </v-card-text>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline text-xs-center">Material Design</div>
                </v-card-title>
                <v-card-text>
                  Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                  Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 md4>
              <v-card class="elevation-0 transparent">
                <v-card-text class="text-xs-center">
                  <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                </v-card-text>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Fast development</div>
                </v-card-title>
                <v-card-text>
                  Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                  Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 md4>
              <v-card class="elevation-0 transparent">
                <v-card-text class="text-xs-center">
                  <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                </v-card-text>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline text-xs-center">Completely Open Sourced</div>
                </v-card-title>
                <v-card-text>
                  Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                  Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </section>
 </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'MovieDetails',
  data () {
    return {
      id: 0,
      movie: undefined,
      headerImage: undefined,
      loaded: false
    }
  },
  methods: {
    async getMovie () {
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
      this.setHeaderImage()
      this.loaded = true
    },

    setHeaderImage () {
      console.log(this.$store.state.imagePath)
      this.headerImage = this.$store.state.imagePath + 'original' + this.movie.backdrop_path
    }
  },
  async created () {
    this.id = this.$route.params.id;
    await this.$store.dispatch('getImageSettings')
    this.getMovie()
  }
}
</script>

<style scoped>

</style>
