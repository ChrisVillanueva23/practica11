<template>
  <div class="container">
    <div class="carousel">
    <img :src="images[currentIndex]" alt="Imagen del carrusel">
    
    <button @click="prev" class="btn-prev">❮</button>
    <button @click="next" class="btn-next">❯</button>
    
    <div class="dots">
      <span 
        v-for="(img, index) in images" 
        :key="index"
        :class="{ active: index === currentIndex }"
        @click="currentIndex = index"
      ></span>
    </div>
  </div>
    <div class="anuncios">
      <a href="https://www.mined.gob.sv/avanzo/"><img :src="require('@/assets/logoAvanzo.png')" alt=""></a>
      <a href="https://www.mined.gob.sv/avisosydenuncias/web.php"><img :src="require('@/assets/aviso_denuncia.png')" alt=""></a>
    </div>
    <div class="aviso">
      <a href="https://www.mined.gob.sv/category/avisos/"><img id="aviso-img" :src="require('@/assets/avisos.svg')" alt="">AVISOS</a>
    </div>
    <div class="cuerpo-aviso">
      <a href="https://www.mined.gob.sv/2023/03/10/sentencia-corte-interamericana-de-derechos-humanos-caso-manuela/"><img :src="require('@/assets/aviso1.jpg')" alt=""></a>
      <a href="https://www.mined.gob.sv/2025/10/22/subasta-inversa-no-134-2025-mineducyt-goes/"><img :src="require('@/assets/avisos2.jpg')" alt=""></a>
      <a href="https://www.mined.gob.sv/2025/10/22/lc-no-1-2026-mineducyt-goes/"><img :src="require('@/assets/avisos3.jpg')" alt=""></a>
    </div>
    <div class="aviso">
      <a href="https://www.mined.gob.sv/#"><img id="aviso-img" :src="require('@/assets/noticias.svg')" alt="">NOTICIAS</a>
    </div>
    <div class="cuerpo-aviso">
      <a href="https://www.mined.gob.sv/2025/08/13/lineamientos-proveedores-mype-2026/"><img :src="require('@/assets/aviso1.jpg')" alt=""></a>
      <a href="https://www.mined.gob.sv/2025/01/13/acuerdo-no-15-2315/"><img :src="require('@/assets/avisos2.jpg')" alt=""></a>
      <a href="https://www.mined.gob.sv/2025/01/13/documentos-circular-no-1-2025/"><img :src="require('@/assets/avisos3.jpg')" alt=""></a>
    </div>
    <div class="funciones-extra">
      <a href="https://www.mined.gob.sv/2023/06/12/estadisticas-educativas/"><img :src="require('@/assets/estadistica.svg')" alt=""><br>Estadisticas Educativas</a>
      <a href="https://www.mined.gob.sv/descargas/"><img :src="require('@/assets/descargas.svg')" alt=""><br>Descargas</a>
      <a href="https://www.mined.gob.sv/preguntas-frecuentes/"><img :src="require('@/assets/preguntas.svg')" alt=""><br>Preguntas Frecuentes</a>
      <a href="https://www.mined.gob.sv/guia-de-programas/"><img :src="require('@/assets/programa.svg')" alt=""><br>Programas</a>
      <a href="https://www.mined.gob.sv/category/avisos/"><img :src="require('@/assets/avisos_2.svg')" alt=""><br>Avisos</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      images: [
        'https://www.mined.gob.sv/wp-content/uploads/2025/09/banner_juego-1.png',
        'https://www.mined.gob.sv/wp-content/uploads/2025/08/banner.jpg',
        'https://www.mined.gob.sv/wp-content/uploads/2025/07/bannerAntisoborno.png'
      ]
    }
  },
  methods: {
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prev() {
      this.currentIndex = this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.anuncios {
  width: 100%;
  background-color: #dfdfdf;
  display: flex;
  justify-content: space-evenly;

}
.anuncios img {
  width: 300px;
  margin: 20px;
  max-width: 100%;
  height: auto;
}

.anuncios a:hover{
  opacity: 0.8;
}

.cuerpo-aviso {
  width: 97.2%;
  display: flex;
  justify-content: center; 
  align-items: center;     
  gap: 10px;               
  padding: 20px;
  background-color: #e5e5e5;
}

.cuerpo-aviso a {
  display: block;
  flex: 0 0 auto;          
  border-radius: 8px;
  overflow: hidden;
  transition: transform .25s ease, box-shadow .25s ease;
  text-decoration: none;
}

.cuerpo-aviso img {
  width: 460px;
  max-width: 100%;
  height: 100%;
  display: block;
  filter: brightness(0.9); /* Oscurece la imagen; 0.3 es 30% de brillo (muy oscuro). Ajusta el valor. */
}

.cuerpo-aviso a:hover{
  transform: translateY(-6px) scale(1.03);
  box-shadow: 0 12px 24px rgba(0,0,0,0.15);
  outline: none;
}

.aviso {
  background-color: #303845;
  margin: auto;
}

.aviso a {
  color: white;
  text-decoration: none;
  font-size: 24px;
  padding: 30px 20px;
  display: inline-block;
}

.aviso a:hover {
  text-decoration: underline;
  transform: translateY(-6px) scale(1.03);
}

#aviso-img {
  width: 60px;
  height: 60px;
  vertical-align: middle;
  margin-right: 10px;
}

.funciones-extra {
  display: flex;
  justify-content: space-evenly;
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

.funciones-extra a:hover {
  transform: translateY(-6px) scale(1.03);
}


.carousel {
  position: relative;
  width: 100%;
  height: 300px;
  margin: 0 auto;
}

.carousel img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  font-size: 24px;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background: rgba(0, 0, 0, 0.8);
}

.btn-prev {
  left: 10px;
}

.btn-next {
  right: 10px;
}

.dots {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

.dots span {
  width: 12px;
  height: 12px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  cursor: pointer;
}

.dots span.active {
  background: white;
}
</style>