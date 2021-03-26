import { createApp } from 'vue';
import App from './App.vue';

import {createRouter, createWebHistory} from 'vue-router';
import SuperPerfil from './components/SuperPerfil.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", component: SuperPerfil}
    ]
});

const app = createApp(App)
app.use(router);
app.mount('#app')
