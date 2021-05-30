import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import routes from '@/router/pages';

const router = createRouter({
  base: process.env.NODE_ENV === 'production' ? '/hello-world/' : '/',
  history: createWebHashHistory(),
  routes,
});

export default router;