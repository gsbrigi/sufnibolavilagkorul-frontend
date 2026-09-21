<template>
  <div class="app-layout">
    <!-- Fix Fejléc -->
    <header class="app-header">
      <div class="header-content">
        <h1 class="logo">Sufniból a világ körül</h1>
        <span class="sub-logo">Műhely & Országút</span>
      </div>
    </header>

    <!-- Fix Bal oldali Sidebar (az SVG ikonokkal) -->
    <aside class="app-sidebar">
      <nav class="sidebar-nav">
        <RouterLink to="/" class="nav-item">
          <svg class="nav-icon" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M19 5h-2V3c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v2H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM9 4h6v1H9V4zm10 13H5V7h14v10zm-4-5c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3z"
            />
            <path d="M12 11c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z" />
          </svg>
          Főoldal
        </RouterLink>

        <RouterLink to="/motorfelujitas" class="nav-item">
          <svg
            class="nav-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="18" y1="2" x2="22" y2="6"></line>
            <path d="M7.5 10.5L19 21a2.12 2.12 0 0 1-3 3L5.5 12.5M16 8.5L11.5 4M10 6L14 10"></path>
          </svg>
          Motorfelújítás
        </RouterLink>

        <RouterLink to="/turak" class="nav-item">
          <svg
            class="nav-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M8 3v18M16 3v18M8 6h8M8 12h8M8 18h8M4 9h4M16 9h4M4 15h4M16 15h4" />
          </svg>
          Túranapló
        </RouterLink>

        <a href="#" class="nav-item">
          <svg class="nav-icon" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M21.582 7.148a2.64 2.64 0 0 0-1.859-1.859C18.082 4.75 12 4.75 12 4.75s-6.082 0-7.723.439a2.64 2.64 0 0 0-1.859 1.859C2 8.789 2 12.25 2 12.25s0 3.461.418 5.102a2.64 2.64 0 0 0 1.859 1.859c1.641.439 7.723.439 7.723.439s6.082 0 7.723-.439a2.64 2.64 0 0 0 1.859-1.859C22 15.711 22 12.25 22 12.25s0-3.461-.418-5.102zM9.545 15.568V8.932L15.818 12.25l-6.273 3.318z"
            />
          </svg>
          Videók
        </a>

        <RouterLink to="/motorrol" class="nav-item">
          <svg
            class="nav-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
            />
          </svg>
          A Motorról
        </RouterLink>

        <RouterLink to="/rolunk" class="nav-item">
          <svg
            class="nav-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M12 2a5 5 0 0 0-5 5v3a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5z" />
            <path d="M12 14a10 10 0 0 0-10 10h20a10 10 0 0 0-10-10z" />
            <path d="M8 10V7M16 10V7" />
          </svg>
          Rólunk
        </RouterLink>
      </nav>
    </aside>

    <!-- GÖRDÜLHETŐ KÖZÉPSŐ TARTALOM -->
    <main class="app-main-content">
      <div class="content-wrapper">
        <RouterView />
      </div>
    </main>

    <!-- Fix Jobb oldali Szponzor sáv -->
    <SponsorSidebar />
  </div>
</template>

<script setup>
import SponsorSidebar from './SponsorSidebar.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<style>
/* CSS Grid elrendezés (Asztali gépen a 3 oszlop) */
@media (min-width: 1024px) {
  .app-layout {
    display: grid;
    grid-template-columns: 260px 1fr 340px;
    grid-template-rows: 70px 1fr;
    grid-template-areas:
      'header header header'
      'sidebar main sponsor';
  }
  .app-header {
    grid-area: header;
  }
  .app-sidebar {
    grid-area: sidebar;
  }
  .app-main-content {
    grid-area: main;
  }
  .app-sponsor-bar {
    grid-area: sponsor;
  }
}

/* Fix felső fejléc stílusai */
.app-header {
  background-color: #0f172a;
  color: #ffffff;
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  border-bottom: 1px solid #334155;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}
.header-content {
  display: flex;
  align-items: baseline;
  gap: 12px;
}
.logo {
  font-size: 1.3rem;
  font-weight: 800;
  text-transform: uppercase;
  color: #f59e0b;
  letter-spacing: 1px;
}
.sub-logo {
  font-size: 0.85rem;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 2px;
}

/* Fix bal oldali sidebar menü stílusai */
.app-sidebar {
  background-color: #1e293b;
  border-right: 1px solid #334155;
  padding: 24px 16px;
}
.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #94a3b8;
  text-decoration: none;
  padding: 12px 16px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.2s ease;
}
.nav-item:hover {
  background-color: #334155;
  color: #ffffff;
}

/* A Vue Router automatikusan ezt az osztályt teszi rá arra a linkre, amin épp állunk! */
.router-link-active {
  background-color: #f59e0b;
  color: #0f172a !important;
}

/* Új SVG ikonok stílusai */
.nav-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  transition: transform 0.2s ease;
}
.nav-item:hover .nav-icon {
  transform: scale(1.1);
}
.router-link-active .nav-icon {
  color: #0f172a;
}

/* Gördülhető középső rész */
.app-main-content {
  overflow-y: auto;
  padding: 32px;
}
.content-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

/* Mobil nézet elrejtései/beállításai */
@media (max-width: 1023px) {
  body {
    overflow: auto;
    height: auto;
  }
  .app-sidebar,
  .app-sponsor-bar {
    display: none;
  }
  .app-header {
    position: sticky;
    top: 0;
  }
}
</style>
