<template>    
    <v-flex xs12 md4>
      <v-card class="elevation-0 transparent">
        <v-card-text class="text-xs-center">
          <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
        </v-card-text>
        <v-card-title primary-title class="layout justify-center">
          <div class="headline text-xs-center">{{ movie.title }}</div>
        </v-card-title>
        <v-card-text>
          {{ movie.overview }}
        </v-card-text>
      </v-card>
    </v-flex>
</template>

<script>
  export default {
    props: ['movie']
  }
</script>

<style scoped>

</style>