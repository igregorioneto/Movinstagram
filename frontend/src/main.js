import { createApp } from 'vue';
import App from './App.vue';

import {createRouter, createWebHistory} from 'vue-router';
import SuperPerfil from './components/SuperPerfil.vue';
import BatPerfil from './components/BatPerfil.vue';
import WomanPerfil from './components/WomanPerfil.vue';

import HeroiPerfil from './components/HeroiPerfil.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", name: "superman", component: SuperPerfil},
        {path: "/batman",name: "batman", component: BatPerfil},
        {path: "/wonderWoman",name: "wonderWoman", component: WomanPerfil}
    ]
});

const app = createApp(App);
app.use(router);
app.component("SuperPerfil",SuperPerfil);
app.component("HeroiPerfil", HeroiPerfil);
app.mount('#app')
