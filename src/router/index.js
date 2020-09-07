import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DetailsSurah from '../views/DetailsSurah.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/surah/:number',
    name: 'surah',
    component: DetailsSurah,
    props:true
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
