<template>
    <v-flex xs12 sm2>
      <v-card>
        <v-card-media
          :src="'https://image.tmdb.org/t/p/w342/' + movie.poster_path" 
          height="300px"
          contain
        >
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <div class="headline">{{ movie.title }}</div>
            <span class="grey--text">{{ movie.release_date }}</span>
          </div>
          <div v-if="error">{{error}}</div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat @click="trailerdialog=true">Watch trailer</v-btn>
          <v-btn flat color="purple" @click="addToRadarr">Add to Radarr</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
          <v-card-text v-show="show">
            {{ movie.overview }}
          </v-card-text>
        </v-slide-y-transition>
      </v-card>

      <v-dialog v-model="trailerdialog" max-width="992px">
        <v-card>
          <v-card-title>
            <youtube :player-width="960" :player-height="585" :video-id="movie.videos[0].source"></youtube>
          </v-card-title>
          <v-card-actions>
            <v-btn color="primary" flat @click="trailerdialog=false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-flex>
</template>

<script>
  // :player-vars="{ autoplay: 1 }"
  import gql from 'graphql-tag'

  export default {
    props: ['movie'],
    data () {
      return {
        show: false,
        error: "",
        trailerdialog: false,
        image: "" // TODO
      }
    },
    methods: {
      async addToRadarr () {
        const response = await this.$apollo.mutate({
          mutation: gql`
            mutation AddMovie($id: Int!, $profileId: Int!) {
              add_movie(id: $id, profileId: $profileId) {
                title
              }
            }
          `,
          variables: {
            "id": this.movie.id,
            "profileId": 6 // TODO
          }
        }).catch(error => {
          console.error(error);
          this.error = `There has been a problem adding ${this.movie.title}`;
        });
      }
    },
  }

</script>

<style scoped>

</style>