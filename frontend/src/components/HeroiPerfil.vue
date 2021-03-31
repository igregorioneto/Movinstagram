<template>
    <div class="box-perfil">
        <!--Imagem perfil / Informações perfil-->
        <div class="box-dentro-perfil">
          <div class="perfil-imagem">
            <img :src="require(`../../public/img/${rotaSelecionada}.png`)" alt="">
          </div>
          <div class="perfil-info">
            <h5>{{rotaSelecionada}}</h5>
            <div class="conteudo-info">
              <p>{{countPost}} posts</p>
              <p>{{countLikes}} curtidas</p>
              <p>{{countComments}} comentários</p>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        countPost: Number,
        countLikes: Number,
        countComments: Number,
        rotaSelecionada: String
    }
}
</script>

<style scoped>
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
</style>