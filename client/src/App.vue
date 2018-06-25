<template>
  <div id="app">
    <v-app light>
      <v-toolbar class="white">
        <v-toolbar-title v-text="title"></v-toolbar-title>
      </v-toolbar>
      
      <v-content>
        <router-view/>

        <v-footer class="blue darken-2">
          <v-layout row wrap align-center>
            <v-flex xs12>
              <div class="white--text ml-3"> Made with <v-icon class="red--text">favorite</v-icon> by <a class="white--text" href="https://vuetifyjs.com" target="_blank">Vuetify</a> and <a class="white--text" href="https://github.com/vwxyzjn">Costa Huang</a></div>
            </v-flex>
          </v-layout>
        </v-footer>
      </v-content>  
    </v-app>
  </div>
</template>

<script>
export default {
  name: "app",
  data () {
    return {
      title: 'Welcome to Your Vue.js App'
    }
  },
};
</script>

<style>

</style>