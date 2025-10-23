<template>
  <nav class="diseño">
    <img src="https://www.mined.gob.sv/wp-content/uploads/2021/logo_mined.png" alt="Logo">

    <ul>
    <li><router-link to="/">Inicio</router-link></li>
    <li><router-link to="/consultas">Institucion</router-link></li>
    <li><router-link to="/fecha">Contactanos</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "menuPrincipal"
}
</script>

<style scoped>
.diseño {
background-color: #303845; 
  color: white;
  padding: 1rem 0;
 display: flex;
 flex-direction: column;
  align-items: center;  text-align: center;
  width: 100%; 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.diseño img {
  width: 300px;
  margin-bottom: 0.5rem;
}

.diseño h2 {
  font-size: 1.4rem;
margin-bottom: 0.8rem;
  font-weight: bold;
}

ul {
  list-style: none;
display: flex;
  justify-content: center; 
  flex-wrap: wrap; 
gap: 30px;
  margin: 0;
padding: 0;
  width: 100%; 
}

li {
transition: transform 0.3s, background-color 0.3s;
  border-radius: 5px;
    padding: 0.4rem 0.8rem;
}


a {
  color: white;
 text-decoration: none;
  font-size: 1.1rem;
}


</style>
