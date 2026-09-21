<template>
  <aside class="app-sponsor-bar">
    <div class="sponsor-sticky-container">
      <h4 class="sponsor-title">Támogatók</h4>

      <!-- Szponzor 1 -->
      <a
        href="https://mipacolor.hu/"
        target="_blank"
        rel="noopener noreferrer"
        class="sponsor-box banner-300x250"
      >
        <div class="ad-placeholder">
        <img src="/mipa.webp" alt="Mipa Color" class="sponsor-img"/>
        </div>
      </a>

      <!-- Szponzor 2 -->
      <a
        href="https://motoralkatresz.eu/"
        target="_blank"
        rel="noopener noreferrer"
        class="sponsor-box banner-300x250"
      >
        <div class="ad-placeholder">
        <img src="/motoralkatresz.png" alt="Motoralkatrészek" class="sponsor-img"/>
        </div>
      </a>
    </div>
  </aside>
</template>

<script setup>
// Fejlesztőként még menőbb, ha az adatokat kiszervezed reaktív változókba,
// így ha változik a link, csak itt a scriptben írod át!
const sponsor1 = {
  name: 'Mipa Color Kft.',
  link: 'https://mipacolor.hu/',
}

const sponsor2 = {
  name: 'Motoralkatrészek',
  link: 'https://motoralkatresz.eu/',
}
</script>

<style scoped>
/* Ide jön az a CSS rész, ami csak a szponzor sávra vonatkozik (scoped) */
.app-sponsor-bar {
  background-color: #ffffff;
  border-left: 1px solid #e2e8f0;
  padding: 24px;
  width: 300px; /* Fix szélesség az oldalsávnak, hogy a banner-300x250 kijöjjön */
}
.sponsor-title {
  font-size: 0.8rem;
  text-transform: uppercase;
  color: #94a3b8;
  text-align: center;
  margin-bottom: 20px;
}
.sponsor-box {
  display: block;
  margin-bottom: 20px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  text-decoration: none;
}
.ad-placeholder {
  background-color: #f1f5f9;
  color: #94a3b8;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}
.sponsor-img {
  width: 100%;
  height: 100%;
  /* contain: A logó teljes egészében látszódni fog, nem torzul el, legfeljebb alul-felül marad egy kis szürke háttér */
  object-fit: contain; 
  display: block;
}
</style>
