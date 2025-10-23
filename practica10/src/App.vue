<template>

  <div id="app">

    <MenuApp/>

    <FooterApp></FooterApp>


  </div>

</template>

<script>
import FooterApp from './components/footerApp.vue';
import MenuApp from './components/menuApp.vue';

export default {
  components: { 
    MenuApp,
    FooterApp

   }
}


</script>


<style>
body{
margin: 0;
font-family: Arial, sans-serif;
background-color: #f5f5f5;
}

</style>
