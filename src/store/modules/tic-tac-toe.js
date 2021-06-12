import {
  isEmpty, isNumber, isString, shuffle,
} from 'lodash';
import {
  matchedIndex,
} from '@/helpers/helper';

const state = {
  players: [
    {
      icon: ['far', 'circle'],
      class: 'text-blue-500',
      value: 'o',
      role: '', // me or computer
    },
    {
      icon: 'times',
      class: 'text-red-400',
      value: 'x',
      role: '',
    },
  ],
  rules: [], // win lines
  squares: [], // ui
};

const getters = {
  me: (state) => state.players.find((element) => element.role === 'me'),
  computer: (state) => state.players.find((element) => element.role === 'computer'),
  hasRole: (state, getters) => !isEmpty(getters.me),
  winner: (state, getters) => {
    for (let i = 0; i < state.rules.length; i += 1) {
      const match = state.rules[i].every((v) => v === state.rules[i][0]);
      if (match) {
        return getters[state.rules[i][0]];
      }
    }
    return {};
  },
  hasWinner: (state, getters) => !isEmpty(getters.winner),
  tie: (state) => !isEmpty(state.squares) && !state.squares.includes(''),
};

const actions = {
  restart({ commit }) {
    commit('initSquare');
    commit('initPlayerRole');
  },
  chooseRole({ commit }, { index }) {
    commit('updatePlayerRole', { index, role: 'me' });
    commit('updatePlayerRole', {
      index: Math.abs(index - 1),
      role: 'computer',
    });
  },
  clickSquareByMe({ getters, dispatch }, { index }) {
    if (isEmpty(state.squares[index])) {
      dispatch('clickSquare', {
        index,
        icon: getters.me.icon,
        replace: getters.me.role,
      });

      if (isEmpty(getters.winner)) {
        dispatch('clickSquareByComputer');
      }
    }
  },
  clickSquareByComputer({ getters, dispatch }) {
    const num = [];
    for (let i = 0; i < state.rules.length; i += 1) {
      num[i] = state.rules[i].every((v) => isString(v)) ? -3 : 0;
      if (num[i] === 0) {
        for (let j = 0; j < state.rules[i].length; j += 1) {
          if (state.rules[i][j] === getters.me.role) {
            num[i] -= 1;
          }
          if (state.rules[i][j] === getters.computer.role) {
            num[i] += 1;
          }
        }
        num[i] = (num[i] === -2) ? 4 : num[i];
        num[i] = (num[i] === 2) ? 5 : num[i];
      }
    }
    const max = Math.max(...num);
    const lines = matchedIndex(num, max);

    // avoid being the same step every time
    const positions = [];
    lines.forEach((line) => {
      const position = state.rules[line].find((element) => isNumber(element));
      positions.push(position);
    });
    const position = shuffle(positions)[0];

    dispatch('clickSquare', {
      index: position,
      icon: getters.computer.icon,
      replace: getters.computer.role,
    });
  },
  clickSquare({ commit }, { index, icon, replace }) {
    commit('clickSquare', { index, icon });
    commit('updateRule', { index, replace });
  },
};

const mutations = {
  updatePlayerRole(state, { index, role }) {
    state.players[index].role = role;
  },
  initPlayerRole(state) {
    state.players[0].role = '';
    state.players[1].role = '';
  },
  initSquare(state, { size = 3 } = {}) {
    // set square for ui
    state.squares = new Array(size * size).fill('');
    // set the win lines
    state.rules = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  },
  clickSquare(state, { index, icon }) {
    state.squares[index] = icon;
  },
  updateRule(state, { index, replace }) {
    for (let i = 0; i < state.rules.length; i += 1) {
      for (let j = 0; j < state.rules[i].length; j += 1) {
        state.rules[i][j] = (state.rules[i][j] === index) ? replace : state.rules[i][j];
      }
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};