<template>
  <div class="home-page">
    
    <!-- HERO SZEKCIÓ -->
    <section class="hero-section">
        <div class="hero-grid">
            <div class="hero-text-side">
                <h2 class="hero-title">Motorfelújítás és Kalandok</h2>
                <p class="hero-text">Kövess minket a sufnitól egészen az országutak végéig! Képes beszámolók, videók és tippek.</p>
                <a href="#legfrissebb" class="hero-btn">Legutóbbi videónk</a>
            </div>
            <div class="hero-image-side">
                <!-- A képet tedd be a src/assets/ mappába, vagy használj egy online képet ideiglenesen -->
                <img src="https://unsplash.com" alt="Motorfelújítás" class="hero-img">
            </div>
        </div>
    </section>

    <!-- YOUTUBE ÉS CIKKEK SZEKCIÓ -->
    <section class="articles-section" id="legfrissebb">
        <article class="card">
            <div class="video-container">
                <iframe src="https://youtube.com" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
            </div>
            <div class="card-body">
                <span class="card-badge">Legutóbbi videó</span>
                <h3 class="card-title">Elkészült a blokk! – Első indítás</h3>
                <p class="card-text">Hosszú hetek munkája után elérkezett a pillanat: vajon beindul a gép?</p>
            </div>
        </article>
    </section>

  </div>
</template>

<style scoped>
/* Ide jönnek a kifejezetten a Főoldalra (Hero + Kártya) vonatkozó stílusok */
.hero-section {
    background-color: #0f172a;
    color: #ffffff;
    padding: 40px;
    border-radius: 16px;
    margin-bottom: 32px;
}
.hero-grid {
    display: flex;
    flex-direction: column;
    gap: 24px;
}
@media (min-width: 768px) {
    .hero-grid { flex-direction: row; align-items: center; }
    .hero-text-side { flex: 1.2; }
    .hero-image-side { flex: 0.8; }
}
.hero-title { font-size: 2rem; margin-bottom: 12px; }
.hero-text { color: #cbd5e1; margin-bottom: 20px; }
.hero-btn {
    display: inline-block;
    background-color: #f59e0b;
    color: #0f172a;
    padding: 12px 20px;
    text-decoration: none;
    font-weight: bold;
    border-radius: 6px;
}
.hero-img { max-width: 100%; height: auto; border-radius: 8px; }

/* Kártya és videó stílusok */
.card {
    background: #ffffff;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid #e2e8f0;
}
.video-container { position: relative; padding-bottom: 56.25%; height: 0; }
.video-container iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
.card-body { padding: 20px; }
.card-badge {
    background-color: #fef3c7; color: #b45309;
    font-size: 0.75rem; font-weight: bold;
    padding: 4px 8px; border-radius: 4px;
}
.card-title { margin-top: 8px; font-size: 1.4rem; }
</style>
