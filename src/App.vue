<template>
  <!-- Ez a te fő elrendezésed, ami tartalmazza a fix fejlécet, sidebart és a szponzorokat -->
  <SidebarLayout />
</template>

<script setup>
// Beimportáljuk a te fő elrendezésedet a komponensek közül
// Figyelj a pontos elérési útra (ha külön 'layout' mappába tetted, akkor: ./components/layout/SidebarLayout.vue)
import SidebarLayout from './components//layout/SidebarLayout.vue'
</script>

<style>
/* Globális alapbeállítások (Reset) */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* A legfontosabb rész: az ablak rögzítése, hogy ne görgessen az egész oldal */
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f8fafc;
  color: #1e293b;
  height: 100vh;
  overflow: hidden;
}
</style>
