import './assets/css/tailwind.css';

import { createApp } from 'vue';

import App from './App.vue';
import axios from './axios';
import router from './router';

const app = createApp(App);
// set app router
app.use(router);
// provide $axios (for Composition or Options API), use inject
app.provide('$axios', axios);
// global axios config (for Options API)
app.config.globalProperties.$axios = axios;

app.mount('#app');
