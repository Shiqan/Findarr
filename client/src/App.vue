<template>
  <div id="app">
    <v-app light>
      <v-toolbar class="white">
        <v-toolbar-title v-text="title"></v-toolbar-title>
      </v-toolbar>
      
      <v-content>
        <router-view/>

        <v-footer class="blue darken-2 text-xs-center">
          <v-layout row wrap align-center>
            <v-flex xs12>
              <div class="white--text ml-3"> Licensed under <a class="white--text" target="_blank" href="https://github.com/Shiqan/Findarr#license" title="MIT License">MIT License</a></div>
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
      title: 'Findarr'
    }
  },
};
</script>

<style>

</style>