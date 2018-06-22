import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from './components/HelloWorld'
import MoviePage from './components/MoviePage'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
      path: '/movie/:id',
      name: 'MoviePage',
      component: MoviePage
  }
  ]
})