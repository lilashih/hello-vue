import { createApp } from 'vue';
import App from '@/App.vue';
import '@/css/index.css';
import FontAwesomeIcon from '@/plugins/font-awesome';
import store from './store';

createApp(App)
  .component('Fa', FontAwesomeIcon)
  .use(store)
  .mount('#app');