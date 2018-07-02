import Vue from 'vue'
import VueRouter from 'vue-router'

import PopularMovies from './components/PopularMovies'
import MovieDetails from './components/MovieDetails'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
        path: '/',
        name: 'PopularMovies',
        component: PopularMovies
    },
    {
      path: '/movie/:id',
      name: 'MovieDetails',
      component: MovieDetails
  }
  ]
})