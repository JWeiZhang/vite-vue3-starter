import './assets/css/tailwind.css';

import { createApp } from 'vue';

import App from './App.vue';
import axios from './axios';
import router from './router';
import store from './store';

const app = createApp(App);
// set app router
app.use(router);
// set app stores
app.use(store);
// provide $axios (for Composition or Options API), use inject
app.provide('$axios', axios);
// global axios config (for Options API)
app.config.globalProperties.$axios = axios;

app.mount('#app');
