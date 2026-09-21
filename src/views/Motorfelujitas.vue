<template>
  <div class="motorfelujitas-page">
    <h2 class="page-title">🛠️ A Projekt Menete</h2>
    <p class="page-subtitle">
      A sufnitól a szalonállapotig. Így keltettük életre a gépet lépésről lépésre.
    </p>

    <!-- IDŐVONAL (TIMELINE) KONTÉNER -->
    <div class="timeline">
      <!-- 1. Fázis -->
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">1. Fázis - Szétszerelés</div>
        <div class="timeline-card">
          <h3>A kiindulási állapot és a bontás</h3>
          <p>
            Mindent dokumentáltunk, fotóztunk és felcímkéztünk. A blokk kikerült a vázból, a régi
            tömítések és a kosz pedig megadták a hétvégi alaphangulatot.
          </p>
        </div>
      </div>

      <!-- 2. Fázis -->
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">2. Fázis - Gépmunka</div>
        <div class="timeline-card">
          <h3>Hengerfúrás és homokfúvás</h3>
          <p>
            A váz és az elemek mentek a homokfúvóhoz, míg a henger és a hengerfej megkapta a
            precíziós gépmunkát. Új dugattyúk, új szelepek érkeztek.
          </p>
        </div>
      </div>

      <!-- 3. Fázis -->
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">3. Fázis - Összeszerelés</div>
        <div class="timeline-card">
          <h3>Az első indítás</h3>
          <p>
            Új csapágyak, szimmeringek és a gyári specifikáció szerinyi nyomatékok. A blokk
            összeállt és az első gombnyomásra életre kelt.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* A 'scoped' kulcsszó miatt ezek a stílusok CSAK ezen az oldalon fognak élni, 
   nem tudják elrontani a főoldalt vagy a sidebart! */
.page-title {
  font-size: 2rem;
  margin-bottom: 4px;
}
.page-subtitle {
  color: #64748b;
  margin-bottom: 40px;
}
.timeline {
  position: relative;
  border-left: 3px solid #cbd5e1;
  margin-left: 16px;
  padding-left: 32px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.timeline-item {
  position: relative;
}
.timeline-dot {
  position: absolute;
  left: -42.5px;
  top: 4px;
  width: 18px;
  height: 18px;
  background-color: #f59e0b;
  border: 4px solid #f8fafc;
  border-radius: 50%;
  box-shadow: 0 0 0 3px #cbd5e1;
}
.timeline-date {
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #f59e0b;
  margin-bottom: 8px;
  letter-spacing: 0.5px;
}
.timeline-card {
  background-color: #ffffff;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02);
}
.timeline-card h3 {
  font-size: 1.2rem;
  margin-bottom: 8px;
  color: #0f172a;
}
.timeline-card p {
  color: #475569;
  font-size: 0.95rem;
}
</style>
