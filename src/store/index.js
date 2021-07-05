import { createStore, createLogger } from 'vuex';
import card from './modules/card';
import ticTacToe from './modules/tic-tac-toe';
import game2048 from './modules/2048';

const debug = process.env.NODE_ENV !== 'production';

export default createStore({
  modules: {
    card,
    ticTacToe,
    game2048,
  },
  // strict: debug,
  plugins: debug ? [createLogger()] : [],
});