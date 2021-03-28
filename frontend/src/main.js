import { createApp } from 'vue';
import App from './App.vue';

import {createRouter, createWebHistory} from 'vue-router';
import SuperPerfil from './components/SuperPerfil.vue';
import BatPerfil from './components/BatPerfil.vue';
import WomanPerfil from './components/WomanPerfil.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", component: SuperPerfil},
        {path: "/batman", component: BatPerfil},
        {path: "/wonderWoman", component: WomanPerfil}
    ]
});

const app = createApp(App)
app.use(router);
app.mount('#app')
