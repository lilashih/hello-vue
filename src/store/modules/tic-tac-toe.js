import _, { isNumber, isString } from 'lodash';

const state = {
  players: [
    {
      icon: ['far', 'circle'],
      value: 'o',
      role: '', // me or computer
      lock: false,
    },
    {
      icon: 'times',
      value: 'x',
      role: '',
      lock: false,
    },
  ],
  rules: [],
  squares: [],
};

// getters
const getters = {
  me: (state) => state.players.find((element) => element.role === 'me'),
  computer: (state) => state.players.find((element) => element.role === 'computer'),
  hasRole: (state, getters) => !_.isEmpty(getters.me),
  winner: (state, getters) => {
    for (let i = 0; i < state.rules.length; i += 1) {
      const match = state.rules[i].every((v) => v === state.rules[i][0]);
      if (match) {
        return getters[state.rules[i][0]];
      }
    }
    return {};
  },
};

// actions
const actions = {
  chooseRole({ commit }, { index }) {
    commit('updatePlayerRole', { index, role: 'me' });
    commit('updatePlayerRole', {
      index: Math.abs(index - 1),
      role: 'computer',
    });
    commit('initGame');
  },
  clickSquare({ commit, getters }, { index }) {
    commit('clickSquare', {
      index,
      icon: getters.me.icon,
    });
    commit('calculateRule', {
      index,
      replace: getters.me.role,
    });
    // computer
    const num = [];
    for (let i = 0; i < state.rules.length; i += 1) {
      num[i] = state.rules[i].every((v) => isString(v)) ? -3 : 3;
      if (num[i] !== -3) {
        for (let j = 0; j < state.rules[i].length; j += 1) {
          if (state.rules[i][j] === getters.me.role) {
            num[i] -= 1;
          }
        }
        if (num[i] === 1) {
          num[i] = 4;
        }
      }
    }
    const max = num.indexOf(Math.max(...num));
    const position = state.rules[max].find((element) => isNumber(element));
    commit('clickSquare', {
      index: position,
      icon: getters.computer.icon,
    });
    commit('calculateRule', {
      index: position,
      replace: getters.computer.role,
    });
  },
};

// mutations
const mutations = {
  updatePlayerRole(state, { index, role }) {
    state.players[index].role = role;
  },
  initGame(state) {
    state.squares = ['', '', '', '', '', '', '', '', ''];
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
  calculateRule(state, { index, replace }) {
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