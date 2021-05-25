import CardPage from '@/components/Card/Page.vue';
import TicTacToePage from '@/components/TicTacToe/Page.vue';

const routes = [
  { path: '/card', component: CardPage },
  { path: '/tic-tac-toe', component: TicTacToePage },
];

export default routes;