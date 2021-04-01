<template>
  <div class="container">
    <h1 class="title">Movinstagram</h1>

    <div class="container-perfil">
      <!--Perfil-->
      <heroi-perfil />
        
      <!--Visualizador do timeline-->
      <visualizar-hero />
    </div>

    <div class="separacao"></div>
    
    <hero-list />
  </div>
</template>

<script>
export default {
  name: 'Movinstagram',
  data(){
    return{
    }
  },
  components: {
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin: 0px auto;
}
.container{
  margin: 0px 50px;
}

.title{
  text-align: center;
}

/*Configurações básicas do perfil*/
/*Perfil*/
.container-perfil{
  display: flex;
  margin: 15px 20px;
}

/*Postagens*/
.separacao{
   border-bottom: 1px solid lightgray;
   margin-bottom: 30px;
}


</style>
