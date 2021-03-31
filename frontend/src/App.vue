<template>
  <div class="container">
    <h1 class="title">Movinstagram</h1>

    <div class="container-perfil">
      <!--Perfil-->
      <heroi-perfil
         :countPost="countPost"
         :countLikes="countLikes"
         :countComments="countComments"
         :rotaSelecionada="rotaSelecionada"
      />
        
      <!--Visualizador do timeline-->
      <div class="box-timeline">
        <h4>Visualizar timeline com:</h4>
        <div class="box-heroi">
          <div @click="getRouter('batman')" class="span-heroi">
            <div class="img-span-heroi">
              <img src="../public/img/batman.png" alt="">
            </div>
            <div class="name-span-heroi">
              <p>batman</p>
            </div>
          </div>
          <div @click="getRouter('superman')" class="span-heroi">
            <div class="img-span-heroi">
              <img src="../public/img/superman.png" alt="">
            </div>
            <div class="name-span-heroi">
              <p>superman</p>
            </div>
          </div>
          <div @click="getRouter('wonderWoman')" class="span-heroi">
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
    
    <super-perfil 
      :comments="comments"
      :superData="superData"
      :countCommentsPost="countCommentsPost"
      :countLikesPost="countLikesPost"
    />
  </div>
</template>

<script>
import { getPosts, getLikes, getComments } from './service/movinstagram-service.js';
export default {
  name: 'Movinstagram',
  data(){
    return{
      countPost: 0,
      countLikes: 0,
      countComments: 0,
      comments: [],
      superData: [],
      countCommentsPost: [],
      countLikesPost: [],
      rotaSelecionada: 'superman',
    }
  },
  components: {
  },
  mounted(){
    getPosts().then(resp => {
      this.superData = resp;
      this.countPost = resp.length;
    });

    getLikes().then(resp => {
      this.countLikes = resp.length;
      this.likes = resp;
      //likes por post
      this.superData.map((value)=>{
        let count = 0;
        this.likes.map((obj) => {
          if(value.id == obj.postId){
            count++;
          }
        });
        this.countLikesPost.push(count);
      });
    });

    getComments().then(resp => {
      this.countComments = resp.length;
      this.comments = resp;  
      //comments por post
      this.superData.map((value) =>{
        let count = 0;
        this.comments.map(obj =>{
          if(value.id == obj.postId){        
            count++;
          }
        });
        this.countCommentsPost.push(count);
      });
    });
  },
  methods:{
    getRouter(rota){
      this.$router.push({name: rota});
     // let routeAtual = this.$router.options.routes;
     // const heroirota = routeAtual.filter(value => value.path == rota);
     // console.log(heroirota);
     this.rotaSelecionada = rota;
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
  margin-right: 200px;
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
