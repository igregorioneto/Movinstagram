import { createApp } from 'vue';
import App from './App.vue';

import {createRouter, createWebHistory} from 'vue-router';

import BatPerfil from './components/BatPerfil.vue';
import WomanPerfil from './components/WomanPerfil.vue';

import HeroiPerfil from './components/HeroiPerfil.vue';
import VisualizarHero from './components/VisualizarHero.vue';
import HeroList from './components/HeroList.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", name: "superman", component: HeroList},
        {path: "/batman",name: "batman", component: BatPerfil},
        {path: "/wonderWoman",name: "wonderWoman", component: WomanPerfil}
    ]
});

const app = createApp(App);
app.use(router);
app.component("HeroiPerfil", HeroiPerfil);
app.component("VisualizarHero",VisualizarHero);
app.component("HeroList",HeroList);
app.mount('#app')
