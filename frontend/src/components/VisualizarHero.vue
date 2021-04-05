<template>
    <div class="box-timeline">
        <h4>Visualizar timeline com:</h4>
        <div class="box-heroi">
          <div @click="getRouter('batman')" class="span-heroi" id="batman">
            <div class="img-span-heroi">
              <img src="../../public/img/batman.png" alt="">
            </div>
            <div class="name-span-heroi">
              <p>batman</p>
            </div>
          </div>
          <div @click="getRouter('superman')" class="span-heroi-selected" id="superman">
            <div class="img-span-heroi">
              <img src="../../public/img/superman.png" alt="">
            </div>
            <div class="name-span-heroi">
              <p>superman</p>
            </div>
          </div>
          <div @click="getRouter('wonderWoman')" class="span-heroi" id="wonderWoman">
            <div class="img-span-heroi">
              <img src="../../public/img/wonderWoman.png" alt="">
            </div>
            <div class="name-span-heroi">
              <p>wonderWoman</p>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  data(){
    return{
      heroiSelecionado: "span-heroi",
      imgHero: ''
    }
  },
    methods:{
      getRouter(rota){
      this.$router.push({name: rota});
      // let routeAtual = this.$router.options.routes;
      // const heroirota = routeAtual.filter(value => value.path == rota);
      // console.log(heroirota);
      this.getHeroiAcitve(rota);
      this.$emit('nomeHero',this.imgHero);
    },
    getHeroiAcitve(rota){
      let classeWoman = document.getElementById('wonderWoman');
      let classeBat = document.getElementById('batman');
      let classeSup = document.getElementById('superman');

      if(rota === 'superman' || rota === ''){
        this.imgHero = 'superman';
        
        classeSup.classList.add('span-heroi-selected');

        classeBat.classList.remove('span-heroi-selected');
        classeBat.classList.add('span-heroi');
        classeWoman.classList.remove('span-heroi-selected');
        classeWoman.classList.add('span-heroi');
      }
      else if (rota === 'batman'){
        this.imgHero = 'batman';
        
        classeBat.classList.remove('span-heroi');
        classeBat.classList.add('span-heroi-selected');

        classeSup.classList.remove('span-heroi-selected');
        classeSup.classList.add('span-heroi');
        classeWoman.classList.remove('span-heroi-selected');
        classeWoman.classList.add('span-heroi');
      }else if(rota === 'wonderWoman'){
        this.imgHero = 'wonderWoman';
        classeWoman.classList.remove('span-heroi');
        classeWoman.classList.add('span-heroi-selected');

        classeSup.classList.remove('span-heroi-selected');
        classeSup.classList.add('span-heroi');
        classeBat.classList.remove('span-heroi-selected');
        classeBat.classList.add('span-heroi');
      }
    }
  }
}
</script>

<style scoped>
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

.span-heroi-selected{
  display: flex;
  margin-right: 5px;
  padding: 6px;
  cursor: pointer;
  border: 1px solid lightgray;
  background-color: lightgray;
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
</style>