<template>
  <div class="container">
    <h1 class="title">Movinstagram</h1>

    <div class="container-perfil">
      <!--Perfil-->
      <heroi-perfil :nomeDoHero="nomeDoHero"/>
        
      <!--Visualizador do timeline-->
      <visualizar-hero  
        @nomeHero="nomeHero"/>
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
      nomeDoHero: 'superman'
    }
  },
  methods:{
    nomeHero(imgHero){
      this.nomeDoHero = imgHero;
    }
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

/*Loading*/
.loader {
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg);}
  100% { transform: rotate(100deg);}
}


</style>
