import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import routes from '@/router/pages';

const router = createRouter({
  base: import.meta.env.BASE_URL,
  // createWebHashHistory for github page
  history: process.env.NODE_ENV === 'production' ? createWebHashHistory() : createWebHistory(),
  routes,
});

export default router;