import { createStore, createLogger } from 'vuex';
import card from './modules/card';
import ticTacToe from './modules/tic-tac-toe';

const debug = process.env.NODE_ENV !== 'production';

export default createStore({
  modules: {
    card,
    ticTacToe,
  },
  // strict: debug,
  plugins: debug ? [createLogger()] : [],
});