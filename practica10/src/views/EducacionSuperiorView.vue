<template>
  <div class="edu-superior">

    <section class="banner">
      <div class="banner-logo">
        <img src="https://www.mined.gob.sv/wp-content/uploads/2021/logo_mined.png" alt="Ministerio de Educación" />
      </div>
    </section>

    <div class="container">
      <!-- Encabezado -->
      <header class="page-header">
        <h1>Educación superior</h1>
      </header>

      <!-- Documentos -->
      <section class="block">
        <h2 class="block-title">Documentos</h2>

        <div class="doc-grid">
          <!-- Columna 1 -->
          <div class="doc-col">
            <article class="doc-item">
              <div class="icon-circle">
                <!-- Imagen/icono opcional dentro -->
                <img src="..\assets\descargas.jpg" alt="descargas">
              </div>
              <h3 class="doc-link">Fortalecimiento de capacidades para la implementación de la Educación Dual en las Instituciones de Educación Superior en El Salvador (DUALELS)</h3>
            </article>

            <article class="doc-item">
              <div class="icon-circle">
              <img src="..\assets\estadistica.jpg" alt="">
              </div>
              <h3 class="doc-link">Estadísticas de Educación Superior</h3>
            </article>

            <article class="doc-item">
              <div class="icon-circle">
                 <img src="..\assets\solicitud.jpg" alt="descargas">
              </div>
              <h3 class="doc-link">
                Solicitud para asignación de especialidad curricular a profesionales no docentes
              </h3>
            </article>
          </div>

          <!-- Columna 2 -->
          <div class="doc-col">
            <article class="doc-item">
              <div class="icon-circle">
                <img src="..\assets\descargas.jpg" alt="descargas">
              </div>
              <h3 class="doc-link">
                Caracterización de la atención educativa de estudiantes con discapacidad en las Instituciones de Educación Superior-IES de El Salvador
              </h3>
            </article>

            <article class="doc-item">
              <div class="icon-circle">
                <img src="..\assets\descargas.jpg" alt="descargas">
              </div>
              <h3 class="doc-link">Becas y Financiamiento</h3>
            </article>
          </div>

          <!-- Columna 3 -->
          <div class="doc-col">
            <article class="doc-item">
              <div class="icon-circle">
                <img src="..\assets\publicaciones.jpg" alt="descargas">
              </div>
              <h3 class="doc-link">Publicaciones</h3>
            </article>

            <article class="doc-item">
              <div class="icon-circle">
                <img src="..\assets\descargas.jpg" alt="descargas">
              </div>
              <h3 class="doc-link">Becas y Financiamiento</h3>
            </article>
          </div>
        </div>
      </section>

      <hr class="divider" />

      <!-- Servicios (en línea) -->
      <section class="block">
        <h2 class="block-title">Servicios</h2>

        <nav class="services-line">
          <a class="service-link">GUÍA PARA INCORPORACIÓN DE TÍTULOS DE EDUCACIÓN SUPERIOR</a>
          <span class="dot" aria-hidden="true">•</span>
          <a class="service-link">
            PROCESO DE ATENCIÓN AL USUARIO GERENCIA REGISTRO - DNES AGOSTO 2020
          </a>
          <span class="dot" aria-hidden="true">•</span>
          <a class="service-link">
            SOLICITUD VIRTUAL PARA ASIGNACIÓN DE ESPECIALIDAD CURRICULAR A PROFESIONALES NO DOCENTES
          </a>
        </nav>
      </section>

      <!-- Íconos circulares grandes -->
      <section class="round-grid">
        <div
          class="round-card"
          style='background-image: url("https://www.mined.gob.sv/images/carreras01.jpg");'
          title="Servicio 1"
        ></div>

        <div
          class="round-card"
          style='background-image: url("https://www.mined.gob.sv/images/universidad02.jpg");'
          title="Servicio 2"
        ></div>

        <div
          class="round-card"
          style='background-image: url("https://www.mined.gob.sv/images/interes03.jpg");'
          title="Servicio 3"
        ></div>

        <div
          class="round-card"
          style='background-image: url("https://www.mined.gob.sv/images/servicios04.jpg");'
          title="Servicio 4"
        ></div>
      </section>

      <!-- Carreras Autorizadas -->
      <section class="block">
        <h2 class="block-title">Carreras Autorizadas</h2>
        <ul class="bullets">
          <li>
            <a class="doc-link">Listado de carreras autorizadas octubre 2024</a>
          </li>
        </ul>
      </section>

    </div>

    <div class="funciones-extra">
      <a href="https://www.mined.gob.sv/2023/06/12/estadisticas-educativas/"><img class="Est-Pre-img" :src="require('@/assets/estadistica.svg')" alt=""><br>Estadisticas Educativas</a>
      <a href="https://www.mined.gob.sv/descargas/"><img class="Des-Pro-img" :src="require('@/assets/descargas.svg')" alt=""><br>Descargas</a>
      <a href="https://www.mined.gob.sv/preguntas-frecuentes/"><img class="Est-Pre-img" :src="require('@/assets/preguntas.svg')" alt=""><br>Preguntas Frecuentes</a>
      <a href="https://www.mined.gob.sv/guia-de-programas/"><img class="Des-Pro-img" :src="require('@/assets/programa.svg')" alt=""><br>Programas</a>
      <a href="https://www.mined.gob.sv/category/avisos/"><img :src="require('@/assets/avisos_2.svg')" alt=""><br>Avisos</a>
    </div>

  </div>
</template>

<style scoped>
/* ---- Layout base ---- */
.edu-superior {
  --bg: #2c3540;
  --card: #323b47;
  --text: #e8eef6;
  --muted: #b8c2ce;
  --accent: #9ad0ff;
  --accent-2: #ff6b6b;
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans",
    "Apple Color Emoji", "Segoe UI Emoji";
}

.banner {
  background-color: #17323f;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner-logo img {
  max-width: 480px;
  width: 90%;
  height: auto;
  display: block;
  margin: 0 auto;
}

.container {
  width: min(1200px, 92vw);
  margin-inline: auto;
  padding: 32px 0 56px;
}

.page-header h1 {
  font-weight: 700;
  letter-spacing: 0.5px;
  font-size: clamp(22px, 3.2vw, 34px);
  margin: 8px 0 28px;
  text-align: left;
}

/* ---- Secciones ---- */
.block {
  margin: 24px 0 16px;
  text-align: left;
}

.block-title {
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 1.6px;
  color: var(--muted);
  margin-bottom: 12px;
}

.divider {
  border: none;
  height: 1px;
  background: linear-gradient(to right, transparent, #415066 20%, #415066 80%, transparent);
  margin: 18px 0 6px;
}

/* ---- Documentos ---- */
.doc-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(16px, 2vw, 28px);
}

.doc-col {
  display: grid;
  gap: 18px;
}

.doc-item {
  display: grid;
  place-items: center;
  text-align: center;
  gap: 10px;
  padding: 18px 12px;
  background: color-mix(in srgb, var(--card) 92%, transparent);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.doc-item:hover {
  transform: translateY(-2px);
  border-color: rgba(154, 208, 255, 0.35);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.25);
}

.icon-circle {
  width: 52px;
  height: 52px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  background: radial-gradient(80% 80% at 30% 30%, #445368, #2e3743);
  outline: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
}

.icon-circle img {
  width: 100%;
  height: 100%;
  object-fit: cover;      /* ajusta la imagen sin deformarla */
  border-radius: 50%;     /* recorta la imagen en forma circular */
  display: block;
  filter: drop-shadow(0 1px 0 rgba(0, 0, 0, 0.3));
}

.doc-link {
  font-size: 14px;
  line-height: 1.35;
  font-weight: 500;
  color: var(--text);
  cursor: pointer;
}

.doc-link:hover {
  color: var(--accent);
  text-decoration: underline;
  text-underline-offset: 3px;
}

/* ---- Servicios en línea ---- */
.services-line {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px 18px;
  padding: 10px 0 2px;
  border-top: 1px dashed rgba(255, 255, 255, 0.1);
  border-bottom: 1px dashed rgba(255, 255, 255, 0.1);
}

.service-link {
  color: var(--text);
  font-size: 13.5px;
  line-height: 1.4;
  cursor: pointer;
  white-space: nowrap;
}

.service-link:hover {
  color: var(--accent);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.dot {
  color: var(--accent-2);
  margin: 0 4px;
}

/* ---- Tarjetas redondas ---- */
.round-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: clamp(18px, 3vw, 32px);
  justify-items: center;
  padding: 22px 0 10px;
}

.round-card {
  width: clamp(98px, 11vw, 132px);
  aspect-ratio: 1 / 1;
  border-radius: 999px;
  background-size: cover;
  background-position: center;
  background-color: #2b323c; /* color de reserva */
  border: 2px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}

.round-card:hover {
  transform: translateY(-3px) scale(1.02);
  border-color: rgba(154, 208, 255, 0.5);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.45);
}

.funciones-extra {
  display: flex;
  justify-content: space-evenly;
  gap: 20px;
  padding: 30px 0px;
  background-color: #29303c;
}
 
.funciones-extra a {
  color: white;
  text-decoration: none;
  font-size: 20px;
}
 
.funciones-extra img {
  width: 60px;
  height: 60px;
}
 
.Est-Pre-img {
  margin-left: 70px;
}
 
.Des-Pro-img {
  margin-left: 15px;
}
 
.funciones-extra a:hover {
  transform: translateY(-6px) scale(1.03);
}

/* ---- Lista simple ---- */
.bullets {
  margin: 10px 0 0 18px;
  padding: 0;
  list-style: disc;
  color: var(--muted);
}

.bullets li {
  margin: 6px 0;
}

.bullets .doc-link {
  font-size: 14px;
}

/* ---- Responsivo ---- */
@media (max-width: 1024px) {
  .doc-grid {
    grid-template-columns: 1fr 1fr;
  }
  .round-grid {
    grid-template-columns: repeat(4, minmax(80px, 1fr));
  }
}

@media (max-width: 680px) {
  .doc-grid {
    grid-template-columns: 1fr;
  }
  .services-line {
    gap: 8px 12px;
  }
  .round-grid {
    grid-template-columns: repeat(2, minmax(90px, 1fr));
  }
}
</style>
