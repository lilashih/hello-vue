import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import routes from '@/router/pages';

const router = createRouter({
  base: process.env.NODE_ENV === 'production' ? '/hello-world/' : '/',
  // createWebHashHistory for github page
  history: process.env.NODE_ENV === 'production' ? createWebHashHistory() : createWebHistory(),
  routes,
});

export default router;