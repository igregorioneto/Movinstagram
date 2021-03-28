<template>
  <div class="container">
    <h1 class="title">Movinstagram</h1>

    <div class="container-perfil">
      <!--Perfil-->
      <div class="box-perfil">
        <!--Imagem perfil / Informações perfil-->
        <div class="box-dentro-perfil">
          <div class="perfil-imagem">
            <img src="../public/img/superman.png" alt="">
          </div>
          <div class="perfil-info">
            <h5>superman</h5>
            <div class="conteudo-info">
              <p>{{countPost}} posts</p>
              <p>{{countLikes}} curtidas</p>
              <p>{{countComments}} comentários</p>
            </div>
          </div>
        </div>
        
      </div>
      <!--Visualizador do timeline-->
      <div class="box-timeline">
        <h4>Visualizar timeline com:</h4>
        <div class="box-heroi">
          <div @click="getRouter('/batman')" class="span-heroi">
            <div class="img-span-heroi">
              <img src="../public/img/batman.png" alt="">
            </div>
            <div class="name-span-heroi">
              <p>batman</p>
            </div>
          </div>
          <div @click="getRouter('/')" class="span-heroi">
            <div class="img-span-heroi">
              <img src="../public/img/superman.png" alt="">
            </div>
            <div class="name-span-heroi">
              <p>superman</p>
            </div>
          </div>
          <div @click="getRouter('/wonderWoman')" class="span-heroi">
            <div class="img-span-heroi">
              <img src="../public/img/wonderWoman.png" alt="">
            </div>
            <div class="name-span-heroi">
              <p>wonderWoman</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="separacao"></div>

    <div>
      

    </div>
    
    <router-view />
  </div>
</template>

<script>
import { getPosts, getLikes, getComments } from './service/movinstagram-service.js';
export default {
  name: 'Movinstagram',
  components: {
  },
  data(){
    return{
      countPost: 0,
      countLikes: 0,
      countComments: 0,
    }
  },
  methods:{
    getRouter(rota){
      this.$router.push({path: rota});
    },
  },
  mounted(){
    getPosts().then(resp => {
      this.countPost = resp.length;
      console.log(this.countPost);
    });

    getLikes().then(resp => {
      this.countLikes = resp.length;
      console.log(this.countLikes);
    });

    getComments().then(resp => {
      this.countComments = resp.length;
      console.log(this.countComments);
    });
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

.box-perfil{
  flex: 1 1 0;
  width: 35%;
}

.box-timeline{
  flex: 1 1 0;
  width: 65%;
  border: 1px solid lightgray;
  padding-left: 15px;
}

.box-dentro-perfil{
  display: flex;
}

.perfil-imagem img{
  border-radius: 50%;
  width: 120px;
}

.perfil-info{
  margin-left: 15px;
}

.conteudo-info{
  font-size: 12px;
  margin-top: -14px;
}

.perfil-info h5{
  font-size: 16px;
  font-weight: bold;
}
/*Configurações básicas do perfil*/
/*Visualizar Timeline*/
.box-timeline h4{
  font-size: 20px;
  text-align: left;
}
.img-span-heroi img{
  border-radius: 50%;
  width: 50px;
}
.box-heroi{
  display: flex;
  margin-right: 25px;
}
.span-heroi{
  display: flex;
  margin-right: 5px;
  padding: 6px;
  cursor: pointer;
}

.span-heroi:hover{
  border: 1px solid lightgray;
  background-color: lightgray;
}

.name-span-heroi{
  margin-left: 10px;
}
.span-heroi-active{
  display: flex;
  margin-right: 5px;
  padding: 6px;
  cursor: pointer;
  background-color: lightgray;
}

/*Postagens*/
.separacao{
   border-bottom: 1px solid lightgray;
   margin-bottom: 30px;
}


</style>
