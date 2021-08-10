import { createRouter, createWebHistory } from 'vue-router';

const routes = [{ path: '/', component: () => import('../views/index.vue') }];

export default createRouter({
  history: createWebHistory(),
  routes,
});
