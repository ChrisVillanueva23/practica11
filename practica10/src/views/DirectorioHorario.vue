<template>
  <div class="directorio-container">
    <header class="encabezado">
      <img src="../assets/directorio.jpg" alt="Encabezado Directorio" class="imagen-encabezado" />
    </header>

    <section class="seccion-info">
      <h2 class="titulo-seccion">Directorio</h2>
      <article class="tarjeta-info">
        <h3 class="cargo">Ministra de Educación, Ciencia y Tecnología</h3>
        <p class="nombre">Karla Edith Trigueros</p>
        <p class="direccion">
          Alameda Juan Pablo II y calle Guadalupe, Centro de Gobierno, Plan Maestro, 
          edificio A-2, tercer nivel, San Salvador, El Salvador.
        </p>
      </article>
    </section>

    <div class="imagen-opciones">
      <img src="../assets/horarios.png" alt="Opciones Directorio" class="imagen-horizontal" />
    </div>

    <section class="seccion-info">
      <h2 class="titulo-seccion">Horario de Atención</h2>
      <article class="tarjeta-info">
        <p class="texto-normal">Nuestros horarios de atención:</p>
        <p class="texto-horario">De lunes a viernes de 7:30 a.m. a 3:30 p.m.</p>
      </article>
    </section>
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
:root {
  --azul-oscuro: #0c1f3f;
  --azul-claro: #1f4e79;
  --gris-fondo: #f5f7fa;
  --gris-texto: #2c3e50;
  --sombra-suave: rgba(0, 0, 0, 0.08);
}


* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  overflow-x: hidden; 
}


.directorio-container {
  font-family: 'Segoe UI', 'Roboto', sans-serif;
  color: var(--gris-texto);
  background-color: var(--gris-fondo);
  width: 100%;
}


.encabezado .imagen-encabezado {
  width: 100%;
  height: auto;
  display: block;
}


.seccion-info {
  width: 100%;
  margin: 2rem 0;
}


.titulo-seccion {
  font-size: 2.2rem;
  font-weight: 800;
  color: var(--azul-oscuro);
  border-left: 8px solid var(--azul-claro);
  padding-left: 1rem;
  margin-bottom: 1.2rem;
  text-transform: uppercase;
}


.tarjeta-info {
  background-color: #fff;
  width: 100%;
  padding: 1.8rem;
  border-radius: 0;
  border: 1px solid #e3e8ef;
  box-shadow: 0 2px 8px var(--sombra-suave);
}


.cargo {
  font-weight: 700;
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  color: var(--azul-oscuro);
}

.nombre {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: var(--azul-claro);
}

.direccion,
.texto-normal {
  line-height: 1.8;
  font-size: 1.1rem;
  color: var(--gris-texto);
}

.texto-horario {
  font-weight: 700;
  color: var(--azul-oscuro);
  font-size: 1.2rem;
  margin-top: 0.6rem;
}


.imagen-opciones .imagen-horizontal,
.pie-pagina .imagen-inferior {
  width: 100%;
  max-width: 100%;
  display: block;
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
</style>
