import Home from '@/views/Home.vue';
import Card from '@/views/Card.vue';
import TicTacToe from '@/views/TicTacToe.vue';

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/card', component: Card, name: 'card' },
  { path: '/tic-tac-toe', component: TicTacToe, name: 'tic-tac-toe' },
];

export default routes;