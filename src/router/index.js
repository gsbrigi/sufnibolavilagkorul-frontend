import { createRouter, createWebHistory } from 'vue-router'

// 1. Beimportáljuk a te aloldalaidat (views/pages)
// Figyelj a pontos fájlnevekre és kiterjesztésekre!
import HomeView from '../views/HomeView.vue' 
import Motorfelujitas from '../views/Motorfelujitas.vue'
import Turak from '../views/Turak.vue'
import Motorrol from '../views/Motorrol.vue'

// Ideiglenes megoldás a Rólunk oldalra, hogy ne akadjon ki a router, ha még nincs kész a fájl
const RolunkPlaceholder = { template: '<div><h2>👤 Rólunk</h2><p>Hamarosan...</p></div>' }

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/motorfelujitas',
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
    {
      path: '/rolunk', // ✨ HOZZÁADVA: így a sidebarban a Rólunk gomb is működni fog!
      name: 'rolunk',
      component: RolunkPlaceholder, // Ha megvan a fájl, írd át simán Rolunk-ra!
    },
    // Később ide jön majd a videok.vue, rolunk.vue stb. ugyanígy!
  ],
})

export default router
