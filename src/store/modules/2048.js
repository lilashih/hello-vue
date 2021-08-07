import {
  chunks, matchedIndex,
} from '@/helpers/helper';
import { shuffle, cloneDeep, isEmpty } from 'lodash';

const state = {
  colors: [
    {
      backgroundColor: '#e6ddd4',
      color: '#72695f',
    },
    {
      backgroundColor: '#e6ddd4',
      color: '#72695f',
    },
    {
      backgroundColor: '#eaab75',
      color: '#ffffff',
    },
    {
      backgroundColor: '#ed9060',
      color: '#ffffff',
    },
    {
      backgroundColor: '#ee785c',
      color: '#ffffff',
    },
    {
      backgroundColor: '#f15f4b',
      color: '#ffffff',
    },
    {
      backgroundColor: '#ead365',
      color: '#ffffff',
    },
    {
      backgroundColor: '#ebc25c',
      color: '#ffffff',
    },
    {
      backgroundColor: '#e0bb30',
      color: '#ffffff',
    },
    {
      backgroundColor: '#e7bf3d',
      color: '#ffffff',
    },
    {
      backgroundColor: '#e5bc2a',
      color: '#ffffff',
    },
  ],
  baseNumber: 2,
  squareSize: 4,
  win: 2048,
  squares: [], // one dim array
  squareFeatures: [], // ui
};

const getters = {
  score: (state) => Math.max(...state.squares),
  style: (state) => (value) => {
    if (value === 0) {
      return {};
    }
    const k = (Math.log(value) / Math.log(state.baseNumber)) - 1;
    return state.colors[k];
  },
  win: (state, getters) => getters.score === state.win,
  lose: (state, getters) => (state.squares.find((element) => element === 0) === undefined) && !getters.win,
};

const actions = {
  restart({ commit, dispatch }) {
    commit('initSquare');
    dispatch('moveByComputer');
    dispatch('moveByComputer');
  },
  moveByComputer({ commit }) {
    const positions = matchedIndex(state.squares, 0);
    const key = shuffle(positions)[0];
    commit('updateSquare', { key, value: state.baseNumber });
    commit('updateSquareFeatures', {
      key,
      afterValue: state.baseNumber,
      byComputer: true,
    });
  },
  /**
   * @param {Array} rows
   * @param {function} getKey
   */
  moveSquare({ commit }, { rows, getKey }) {
    rows.forEach((row, index) => {
      const cells = row.filter((val) => val !== 0);
      const cellIndex = row.map((element, i) => ((element !== 0) ? i : undefined)).filter((x) => x !== undefined);

      let beforeKey = null;
      let beforeIndex = null;
      for (let i = 0; i < state.squareSize; i += 1) {
        const key = getKey(state.squareSize, index, i);
        let current = (i >= cells.length) ? 0 : cells[i];

        if ((current > 0) && (current === cells[i + 1])) {
          current *= state.baseNumber;
          cells.splice(i + 1, 1);
          beforeIndex = cellIndex.splice(0, 1);
          beforeKey = getKey(state.squareSize, index, beforeKey);
        }

        commit('updateSquare', { key, value: current });

        commit('updateSquareFeatures', {
          key,
          beforeKey,
          beforeValue: isEmpty(beforeIndex) ? null : row[beforeIndex],
          afterValue: current,
        });
      }
    });
  },
  moveLeft({ dispatch }) {
    const rows = [...chunks(state.squares, state.squareSize)];
    const getKey = (size, index, i) => size * index + i;
    const oldSquare = cloneDeep(state.squares);
    dispatch('moveSquare', { rows, getKey });
    dispatch('moveIfComputerCanMove', { oldSquare });
  },
  moveRight({ dispatch }) {
    let rows = [...chunks(state.squares, state.squareSize)];
    rows = rows.map((value) => value.reverse());
    const getKey = (size, index, i) => size * index + (size - i - 1);
    const oldSquare = cloneDeep(state.squares);
    dispatch('moveSquare', { rows, getKey });
    dispatch('moveIfComputerCanMove', { oldSquare });
  },
  moveDown({ dispatch }) {
    const rows = [];
    for (let i = 0; i < state.squareSize; i += 1) {
      rows[i] = state.squares.filter((value, index) => index % state.squareSize === i).reverse();
    }
    const getKey = (size, index, i) => size * (size - 1 - i) + index;
    const oldSquare = cloneDeep(state.squares);
    dispatch('moveSquare', { rows, getKey });
    dispatch('moveIfComputerCanMove', { oldSquare });
  },
  moveUp({ dispatch }) {
    const rows = [];
    for (let i = 0; i < state.squareSize; i += 1) {
      rows[i] = state.squares.filter((value, index) => index % state.squareSize === i);
    }
    const getKey = (size, index, i) => size * i + index;
    const oldSquare = cloneDeep(state.squares);
    dispatch('moveSquare', { rows, getKey });
    dispatch('moveIfComputerCanMove', { oldSquare });
  },
  moveIfComputerCanMove({ dispatch }, { oldSquare }) {
    if (JSON.stringify(oldSquare) !== JSON.stringify(state.squares)) {
      setTimeout(() => {
        dispatch('moveByComputer');
      }, 100);
    }
  },
};

const mutations = {
  initSquare(state, { baseNumber = 2, size = 4, win = 2048 } = {}) {
    state.baseNumber = baseNumber;
    state.squareSize = size;
    state.win = win;
    state.squareFeatures = [];
    state.squares = new Array(state.squareSize * state.squareSize).fill(0);
    state.squares.forEach(() => {
      state.squareFeatures.push({
        byComputer: false,
        beforeValue: 0,
        afterValue: 0,
        direction: '',
      });
    });
  },
  updateSquare(state, { key, value }) {
    state.squares[key] = value;
  },
  updateSquareFeatures(state, {
    key, afterValue, beforeValue = 0, beforeKey = 0, byComputer = false, direction = '',
  }) {
    state.squareFeatures[key] = {
      byComputer,
      beforeKey,
      beforeValue,
      afterValue,
      direction,
    };
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};