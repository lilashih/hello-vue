import Home from '@/views/Home.vue';
import Card from '@/views/Card.vue';
import TicTacToe from '@/views/TicTacToe.vue';
import Game2048 from '@/views/Game2048.vue';

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/card', component: Card, name: 'card' },
  { path: '/tic-tac-toe', component: TicTacToe, name: 'tic-tac-toe' },
  { path: '/2048', component: Game2048, name: '2048' },
];

export default routes;