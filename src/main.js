import { createApp } from 'vue';
import App from '@/App.vue';
import '@/css/index.css';
import FontAwesomeIcon from '@/plugins/font-awesome';
import store from './store';
import jquery from 'jquery';

window.$ = jquery;

createApp(App)
  .component('Fa', FontAwesomeIcon)
  .use(store)
  .mount('#app');