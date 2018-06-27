<template>
    <v-flex xs12 sm2>
      <v-card>
        <v-card-media
          :src="'https://image.tmdb.org/t/p/w342/' + movie.poster_path"
          height="300px"
          contain="true"
        >
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <div class="headline">{{ movie.title }}</div>
            <span class="grey--text">{{ movie.release_date }}</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat @click.stop="trailerdialog = true">Watch trailer</v-btn>
          <v-btn flat color="purple">Add to Radarr</v-btn>
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

      <v-dialog v-model="trailerdialog" max-width="500px">
        <v-card>
          <v-card-title>
            <span> {{ movie.videos[0].source }} </span>
            <!-- TODO: vue-youtube-embed -->
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-actions>
            <v-btn color="primary" flat @click.stop="trailerdialog=false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-flex>
</template>

<script>
  export default {
    props: ['movie'],
    data () {
      return {
        show: false,
        trailerdialog: false
      }
    }
  }
</script>

<style scoped>

</style>