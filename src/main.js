import 'animate.css';
import '@/css/index.scss';
import FontAwesomeIcon from '@/plugins/fontAwesome';
import Vue3TouchEvents from 'vue3-touch-events';
import jquery from 'jquery';
import { createApp } from 'vue';
import App from '@/App.vue';
import route from '@/router';
import store from '@/store';

window.$ = jquery;

createApp(App)
  .component('Fa', FontAwesomeIcon)
  .use(store)
  .use(route)
  .use(Vue3TouchEvents)
  .mount('#app');