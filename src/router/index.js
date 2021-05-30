import { createRouter, createWebHistory } from 'vue-router';
import routes from '@/router/pages';

const router = createRouter({
  base: process.env.NODE_ENV === 'production' ? '/hello-world' : '/',
  history: createWebHistory(),
  routes,
});

export default router;