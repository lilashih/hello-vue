import '@/css/index.css';
import FontAwesomeIcon from '@/plugins/fontAwesome';
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
  .mount('#app');