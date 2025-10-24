<template>
  <nav class="diseño">
    <img src="https://www.mined.gob.sv/wp-content/uploads/2021/logo_mined.png" alt="Logo">

    <ul>
    <li><router-link to="/">Inicio</router-link></li>
    <li><router-link to="/educacion">Institución</router-link></li>
    <li><router-link to="/directorio">Contactanos</router-link></li>
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
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
width: 100%;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.diseño img {
width: 300px;
margin: 1rem 0;
}

ul {
list-style: none;
 display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 30px;
margin: 0;
  padding: 1rem 0;
width: 100%;
background-color: #3f4757; 
  border-bottom: 5px solid #2b323e; 
}

li {
transition: transform 0.3s, background-color 0.3s;
border-radius: 5px;
padding: 0.4rem 0.8rem;
}

li:hover {
background-color: #4b5465;
}

a {
color: white;
text-decoration: none;
font-size: 1.1rem;
}


</style>
