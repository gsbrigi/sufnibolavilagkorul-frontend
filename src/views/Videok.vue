<template>
  <div class="videok-page">
    <h2 class="page-title">🎥 Összes Videós Beszámoló</h2>
    <p class="page-subtitle">Nézd végig a teljes folyamatot a sufnitól az országútig közvetlenül az oldalon!</p>

    <!-- VIDEÓ RÁCS (GRID) -->
    <div class="videos-grid">
      <!-- v-for-ral végigmegyünk a videók listáján -->
      <div v-for="video in videoList" :key="video.id" class="video-card">
        
        <!-- Reszponzív YouTube beágyazás -->
        <div class="video-wrapper">
          <iframe 
            :src="`https://youtube.com{video.youtubeId}`" 
            :title="video.title" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
          </iframe>
        </div>

        <!-- Videó adatai -->
        <div class="video-info">
          <span class="video-date">{{ video.date }}</span>
          <h3 class="video-card-title">{{ video.title }}</h3>
          <p class="video-text">{{ video.description }}</p>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// A videóid adatbázisa. Ha új videót töltesz fel YT-ra, csak ide kell beszúrnod egy új sorozatot!
const videoList = ref([
  {
    id: 1,
    date: '2026. Augusztus',
    title: 'Elkészült a blokk! – Első indítás a sufniban',
    description: 'Hosszú hetek munkája, rengeteg takarítás és alkatrész-vadászat után elérkezett a pillanat: vajon beindul a gép?',
    youtubeId: 'dQw4w9WgXcQ' // Ide másold a te YouTube videód ID-ját (a link végén lévő kódot)
  },
  {
    id: 2,
    date: '2026. Szeptember',
    title: 'A váz homokfúvása és festése',
    description: 'Ebben a részben teljesen darabokra szedjük a vázat, és elvisszük a homokfúvóhoz, hogy megszabaduljunk a harminc év rozsdájától.',
    youtubeId: 'dQw4w9WgXcQ' // Csak minta, cseréld majd ki a sajátodra!
  },
  {
    id: 3,
    date: '2026. Október',
    title: 'Első tesztút az autópályán',
    description: 'Végre összeállt a gép! Irány az országút, hogy kiderüljön, hogyan viselkedik a motor hosszabb távon és nagyobb sebességnél.',
    youtubeId: 'dQw4w9WgXcQ'
  }
])
</script>

<style scoped>
.videok-page {
    padding-bottom: 40px;
}
.page-title {
    font-size: 2rem;
    margin-bottom: 4px;
}
.page-subtitle {
    color: #64748b;
    margin-bottom: 40px;
}

/* Kétoszlopos rács asztali gépen, egyoszlopos mobilon */
.videos-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;
}
@media (min-width: 768px) {
    .videos-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Videó kártya design */
.video-card {
    background-color: #ffffff;
    border-radius: 14px;
    overflow: hidden;
    border: 1px solid #e2e8f0;
    box-shadow: 0 4px 6px rgba(0,0,0,0.02);
}
.video-wrapper {
    position: relative;
    padding-bottom: 56.25%; /* 16:9-es képarány rögzítése */
    height: 0;
}
.video-wrapper iframe {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
}
.video-info {
    padding: 20px;
}
.video-date {
    font-size: 0.8rem;
    font-weight: bold;
    color: #f59e0b;
    text-transform: uppercase;
}
.video-card-title {
    font-size: 1.25rem;
    margin-top: 6px;
    margin-bottom: 10px;
    color: #0f172a;
}
.video-text {
    color: #475569;
    font-size: 0.9rem;
    line-height: 1.5;
}
</style>
