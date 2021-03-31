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
                            <img  @mouseenter="eventCurtidas" 
                            src="../../public/icons/coracao-normal.png" alt="">
                            <span>{{countLikesPost[index]}}</span>
                        </i>
                        <i class="comment" >
                            <img src="../../public/icons/comentario.png" alt="">
                            <span>{{countCommentsPost[index]}}</span>
                        </i>
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
export default {
    data(){
        return{
            posts: 0,
            quantComments: 0
        }
    }, 
    props:{
        comments: Array,
        superData: Array,
        countCommentsPost: Array,
        countLikesPost: Array
    },
    mounted(){
    },
    methods:{
        getCount(){
            this.quantComments++;
        },
        eventCurtidas(){
            console.log('event');
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

.box-event-curtidas{
    width: 50px;
    height: 150px;
    background: gray;
}

</style>