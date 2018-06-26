<template>
    <v-flex xs12 sm4>
      <v-card>
        <v-card-media
          :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path"
          height="300px"
        >
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <div class="headline">{{ movie.title }}</div>
            <span class="grey--text">{{ movie.release_date }}</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat>Watch trailer</v-btn>
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
    </v-flex>
</template>

<script>
  export default {
    props: ['movie'],
    data () {
      return {
        show: false
      }
    }
  }
</script>

<style scoped>

</style>