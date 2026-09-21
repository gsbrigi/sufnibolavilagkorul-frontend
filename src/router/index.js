import { createRouter, createWebHistory } from 'vue-router'

// 1. Beimportáljuk a te aloldalaidat (views/pages)
// Figyelj a pontos fájlnevekre és kiterjesztésekre!
import HomeView from '../views/HomeView.vue' 
import Motorfelujitas from '../views/Motorfelujitas.vue'
import Turak from '../views/Turak.vue'
import Motorrol from '../views/Motorrol.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/HomeView',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/Motorfelujitas',
      name: 'motorfelujitas',
      component: Motorfelujitas,
    },
    {
      path: '/turak',
      name: 'turak',
      component: Turak,
    },
        {
      path: '/motorrol',
      name: 'motorrol',
      component: Motorrol,
    },
    // Később ide jön majd a videok.vue, rolunk.vue stb. ugyanígy!
  ],
})

export default router
