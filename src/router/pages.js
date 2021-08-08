import Home from '@/pages/Home/Index.vue';
import Card from '@/pages/Card/Index.vue';
import TicTacToe from '@/pages/TicTacToe/Index.vue';
import Game2048 from '@/pages/2048/Index.vue';
import Youtube from '@/pages/Youtube/Index.vue';

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/card', component: Card, name: 'card' },
  { path: '/tic-tac-toe', component: TicTacToe, name: 'tic-tac-toe' },
  { path: '/2048', component: Game2048, name: '2048' },
  { path: '/youtube', component: Youtube, name: 'youtube' },
];

export default routes;