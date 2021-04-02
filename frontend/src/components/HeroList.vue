<template>
    <div class="container-postagem" v-for="(sup,index) in superData" :key="index">
        <div class="postagem-img">
            <img :src="sup.picture" alt="">
        </div>

        <div class="postagem-titulo">
            <div class="postagem-foto-user">
                <div class="agrupamento-titulo">
                    <img :src="require(`../../public/img/${sup.user}.png`)" alt="">
                    <p class="user">{{sup.user}}</p>                       
                    <p class="title">{{sup.title}}</p>
                </div>
            </div>
            <div class="postagem-titulo-user">
                <div class="comentarios">
                    <div class="icons" >
                        <i class="like">
                            <a href="" @mouseover="active = true" @mouseleave="active = false">
                                <img src="../../public/icons/coracao-normal.png" alt="">
                            </a>
                            <span>{{countLikesPost[index]}}</span>
                        </i>
                        <i class="comment" >
                            <img src="../../public/icons/comentario.png" alt="">
                            <span>{{countCommentsPost[index]}}</span>
                        </i>
                    </div>

                    <div v-if="active" >
                        <div                         
                            :class="{'box-nome-herois-curtidas': active}"
                            id="herois-curtidas"
                        >
                            <div>
                                {{nomesHeroisLikes[index]}}
                            </div>
                        </div>
                    </div>
                    

                    <div class="comentarios-da-postagem" v-for="(heroi,index) in comments" :key="index">
                        <div v-if="heroi.postId == sup.id" class="agrupamento-comentario">
                            <img :src="require(`../../public/img/${heroi.user}.png`)" alt="">
                            <p class="nome-heroi-comentario">{{heroi.user}}</p>
                            <p class="heroi-comentario">{{heroi.comment}}</p>
                        </div>
                    </div>

                    <div class="input-comentario">
                        <form action="">
                            <input type="text" value="" placeholder="Comentar...">
                        </form>
                    </div>
                </div>
            </div>
        </div>    
    </div>
</template>

<script>
import { getPosts, getLikes, getComments } from '../service/movinstagram-service.js';
export default {
    data(){
        return{
            comments: [],
            superData: [],
            countCommentsPost: [],
            countLikesPost: [],
            nomesHeroisLikes: [],
            nomesPorPostagem: [],
            active: false
        }
    },
    mounted(){
        //postagens
        getPosts().then(resp => {
            this.superData = resp;
        });

        //likes
        getLikes().then(resp => {
            this.likes = resp;
            
            //likes por post
            this.superData.map((value)=>{
                let count = 0;
                let user = [];
                this.likes.map((obj) => {
                    if(value.id == obj.postId){
                        count++; 
                        user.push(obj.user.toString());                
                    }  
                });            
                this.nomesHeroisLikes.push(user.join('\n'));
                this.countLikesPost.push(count);
            });
            
            /** --> map utilizado anterior para fazer o que o user.push do map anterior
             *      esta fazendo. Jogar os nomes listados, transformando em strings e depois
             *      quebrando linha.
                this.nomesHeroisLikes.map((value) => {
                    let nomes = [];
                    value.map((nome) => { 
                        nomes.push(nome.toString());
                    });
                    this.nomesPorPostagem.push(nomes.join('\n'));
                });
             */
            
        });
        

        //comentarios
        getComments().then(resp => {
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
        mouseover: function(){
            this.active = true;
        },
        mouseleave: function(){
            this.active = false;
        }
    }
}
</script>

<style scoped>
.container-postagem{
    display: flex;
    width: 90%;
    border: 1px solid lightgray;
    padding: 15px 20px;
    margin-top: 10px;
    margin-left: 30px;
    border-radius: 5px;
}

.postagem-img{
    flex: 1 1 0;
    width: 40%;
}

.postagem-titulo{
    flex: 1 1 0;
    width: 50%;
}

.postagem-foto-user img{
    border-radius: 50%;
    width: 50px;
    height: 50px;
}

.agrupamento-titulo{
    display: flex;
}

.user{
    font-weight: bold;
    margin-right: 10px;
    margin-left: 10px;
}

.title{
    font-size: 14px;
}
/*icones - likes e comments*/
.icons{
    display: flex;
}

.comment{
    flex: 1 1 0;
    width: 20%;
    margin-right: 80%;
    margin-top: 10px;
}

.like{
    flex: 1 1 0;
    width: 30%;
}
.comment img{
    margin-left: 15px;
    width: 20px;
    height: 20px;
}

.comment span{
    position:relative;
    font-size: 12px;
    margin-left: 2px;
    top: -5px;
}

.like img{
    width: 40px;
    height: 40px;
}

.like span{
    position:relative;
    font-size: 12px;
    top: -15px;    
}

/*comentarios das postagens*/
.agrupamento-comentario{
    display: flex;
    border: 1px solid lightgray;
    border-radius: 5px;
    height: 50px;
    padding: 5px;
    margin-bottom: 5px;
    align-items: center;
}

.comentarios-da-postagem img{
    border-radius: 50%;
    width: 30px;
    height: 30px;
}

.nome-heroi-comentario{
    font-weight: bold;
    margin-left: 10px;
    margin-right: 30px;
}

.heroi-comentario{
    position: relative;
    text-align: left;
    font-size: 16px;
}

.input-comentario input{
    margin-top: 20px;
    border:none;
    border-bottom: 1px solid lightgray;
    width: 100%;
    font-size: 16px;
    padding: 15px;
}

/*nomes de quem curtiu a postagem*/
.box-nome-herois-curtidas{
  position: absolute;
  color: white;
  width: 98px;
  padding: 8px;
  background-color: #1C1C1C;
  z-index: 9999;
}
</style>