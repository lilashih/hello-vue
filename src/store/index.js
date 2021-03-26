import { createStore, createLogger } from 'vuex';
import ticTacToe from './modules/tic-tac-toe';

const debug = process.env.NODE_ENV !== 'production';

export default createStore({
  modules: {
    ticTacToe,
  },
  // strict: debug,
  plugins: debug ? [createLogger()] : [],
});