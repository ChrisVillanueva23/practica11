<template>
  <footer class="footer">
    <div class="footer-container">

      
      <div class="footer-column left">
        <h3>Ministerio De Educación, Ciencia Y Tecnología</h3>

        <p>Alameda Juan Pablo II y calle Guadalupe, edificios A, San Salvador, El Salvador, Centro América</p>
        
        <div class="contact-section">

          <p><strong>Conmutador Edificios A1 y A2</strong><br>
          +(503) 2592-2000, 2592-2122</p>

          <p><strong>Conmutador Edificios A3 y A4</strong><br>
          2592-3117</p>

          <p><strong>Unidad de Acceso a la Información Pública</strong><br>
          2281-0274, 2222-2043, 2222-2008</p>
          <p><strong>Quejas, avisos o denuncias:</strong><br>
          2592-2009</p>
          <p>educacion@mined.gob.sv</p>
        </div>

      </div>

      <div class="footer-column center">
        <img src="data:image/png;base64,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" alt="Gobierno de El Salvador" class="logo">
        
        <p class="schedule"><strong>Horario de atención</strong><br>
        Lunes a Viernes de 7:30 a.m. a 3:30 p.m.</p>
        
        
      </div>

      <div class="footer-column right">
        <nav class="footer-nav">

        <a href="#">Mapa del Sitio</a>
      <a href="#">Política Web</a>
        <a href="#">Preguntas Frecuentes</a>
        <a href="#">Carta de Derecho</a>

          <a href="#">Avisos y Denuncias</a>
      </nav>

      </div>
    </div>
  </footer>
</template>

<style scoped>
* {
margin: 0;
padding: 0;
box-sizing: border-box;
}

.footer {
background-color: #303845;
color: white;
padding: 40px 20px 20px;
font-family: Arial, sans-serif;
font-size: 14px;
line-height: 1.6;
}

.footer-container {
max-width: 1200px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 40px;
}

.footer-column h3 {
font-size: 16px;
font-weight: bold;
margin-bottom: 15px;
line-height: 1.4;
}

.footer-column p {
 margin-bottom: 10px;
color: #e2e8f0;
}

.contact-section {
margin-top: 20px;
}

.contact-section p {
margin-bottom: 15px;
}

.contact-section strong {
color: white;
  display: block;
margin-bottom: 3px;
}

.center {
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
}

.logo {
 width: 140px;
height: auto;
margin-bottom: 20px;
}

.schedule {
margin: 20px 0;
font-size: 14px;
}

.social-media {
margin-top: 20px;
}

.social-media p {
margin-bottom: 15px;
font-weight: bold;
}


.footer-nav {
display: flex;
flex-direction: column;
gap: 15px;
}

.footer-nav a {
color: #e2e8f0;
text-decoration: none;
font-size: 15px;
 transition: color 0.2s;
}






</style>