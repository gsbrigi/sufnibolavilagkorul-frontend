<template>
  <aside class="app-sponsor-bar">
    <div class="sponsor-sticky-container">
      <h4 class="sponsor-title">Támogatók</h4>

      <!-- DINAMIKUS VÁLTOZÓ BANNER -->
      <!-- Amikor a Vue észleli a 'to' vagy az 'img src' változását, azonnal frissíti a felületet -->
      <a
        :href="currentSponsor.link"
        target="_blank"
        rel="noopener noreferrer"
        class="sponsor-box banner-300x150"
      >
        <div class="ad-placeholder">
          <img 
            :src="currentSponsor.img" 
            :alt="currentSponsor.name" 
            class="sponsor-img"
          />
        </div>
      </a>
      
      <!-- Apró vizuális visszajelzés (pöttyök), ami mutatja, melyik reklám fut éppen -->
      <div class="sponsor-dots">
        <span 
          v-for="(sponsor, index) in sponsors" 
          :key="sponsor.id"
          class="dot"
          :class="{ active: index === currentIndex }"
        ></span>
      </div>

    </div>
  </aside>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// 1. Kiszerveztük az ÖSSZES szponzorodat egy közös, dinamikus listába (adatbázisba)
const sponsors = ref([
  {
    id: 1,
    name: 'Mipa Color Kft.',
    link: 'https://mipacolor.hu/',
    img: '/mipa.webp'
  },
  {
    id: 2,
    name: 'Motoralkatrészek',
    link: 'https://motoralkatresz.eu/',
    img: '/motoralkatresz.png'
  },
  {
    id: 3,
    name: 'Baur Pizza & food',
    link: 'https://baurgerking.hu/',
    img: '/baur.jpg'
  },
  {
    id: 4,
    name: 'Hulita Csapágy',
    link: 'https://hulita.hu/',
    img: '/hulita.jpg'
  }
])

// Éppen aktív szponzor indexe
const currentIndex = ref(0)

// Reaktív változó, ami mindig az épp aktuális szponzor objektumot tárolja
const currentSponsor = ref(sponsors.value[0])

let intervalId = null

// Amikor a komponens betöltődik a böngészőben (onMounted), elindítjuk a loop-ot
onMounted(() => {
  intervalId = setInterval(() => {
    // Körbe-körbe léptetjük az indexet 0-tól 3-ig (maradékos osztás / modulo trükkel)
    currentIndex.value = (currentIndex.value + 1) % sponsors.value.length
    // Frissítjük a látható szponzort
    currentSponsor.value = sponsors.value[currentIndex.value]
  }, 8000) // 8000 ezredmásodperc = 8 másodpercenként ugrik a következőre
})

// Fontos tesztelői takarítás: ha elhagyjuk az oldalt, lőjük le az időzítőt, ne egye a memóriát!
onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>

<style scoped>
.app-sponsor-bar {
  background-color: #ffffff;
  border-left: 1px solid #e2e8f0;
  padding: 24px;
  width: 340px; /* Megemeltem 340px-re, hogy a paddinggel együtt kényelmesen elférjen a 300px banner */
}
.sponsor-title {
  font-size: 0.8rem;
  text-transform: uppercase;
  color: #94a3b8;
  text-align: center;
  margin-bottom: 20px;
  letter-spacing: 1px;
}
.sponsor-box {
  display: block;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  text-decoration: none;
  box-shadow: 0 4px 6px rgba(0,0,0,0.02);
  transition: all 0.3s ease;
}
.sponsor-box:hover {
  border-color: #f59e0b;
  transform: scale(1.02); /* Finom pulzálás, ha ráviszik az egeret */
}
.ad-placeholder {
  background-color: #f1f5f9;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sponsor-img {
  width: 100%;
  height: 100%;
  object-fit: contain; 
  display: block;
  padding: 10px; /* Kis belső margó a logóknak, hogy elegánsabban mutassanak */
}

/* Kis navigációs pöttyök a banner alatt */
.sponsor-dots {
  display: flex;
  justify-content: center;
  gap: 6px;
  margin-top: 12px;
}
.dot {
  width: 6px;
  height: 6px;
  background-color: #cbd5e1;
  border-radius: 50%;
  transition: all 0.3s ease;
}
.dot.active {
  background-color: #f59e0b;
  width: 16px; /* Az aktív pötty oválissá nyúlik, nagyon modern hatás! */
  border-radius: 4px;
}
</style>
