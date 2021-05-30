import HomePage from '@/components/Home/Page.vue';
import CardPage from '@/components/Card/Page.vue';
import TicTacToePage from '@/components/TicTacToe/Page.vue';

const routes = [
  { path: '/', component: HomePage, name: 'home' },
  { path: '/card', component: CardPage, name: 'card' },
  { path: '/tic-tac-toe', component: TicTacToePage, name: 'tic-tac-toe' },
];

export default routes;