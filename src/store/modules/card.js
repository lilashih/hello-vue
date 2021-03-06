import { shuffle } from 'lodash';

const state = {
  faces: [
    {
      icon: 'candy-cane',
      backgroundColor: '#cadcee',
      color: '#dc2626',
    },
    {
      icon: 'bomb',
      backgroundColor: '#cccbcd',
      color: '#000000',
    },
    {
      icon: 'cat',
      backgroundColor: '#ebcfe1',
      color: '#b34801',
    },
    {
      icon: 'anchor',
      backgroundColor: '#fecaca',
      color: '#069bcc',
    },
    {
      icon: 'crown',
      backgroundColor: '#866fa4',
      color: '#eeff72',
    },
    {
      icon: 'grin-tongue-wink',
      backgroundColor: '#60739d',
      color: '#ffd700',
    },
    {
      icon: 'fish',
      backgroundColor: '#fbdcbb',
      color: '#528cd1',
    },
    {
      icon: 'guitar',
      backgroundColor: '#d5e4ce',
      color: '#9c6721',
    },
  ],
  cards: [], // ui
  openedCards: [], // the opened cards (2 elements at most)
};

const getters = {
  matchedCount: (state) => state.cards.filter((card) => card.matched === true).length,
};

const actions = {
  restart({ commit }) {
    commit('initOpenedCards');
    commit('initCards');
  },
  clickCard({ commit, dispatch }, payload) {
    if (state.cards[payload.index].matched === false) {
      commit('clickCard', payload);
      dispatch('checkOpenCardIsMatched');
    }
  },
  checkOpenCardIsMatched({ commit }) {
    if (state.openedCards.length === 2) {
      const first = state.openedCards[0];
      const second = state.openedCards[1];

      if (first.index === second.index) {
        commit('updateVisible', {
          index: first.index,
          visible: false,
        });
      } else if (first.icon === second.icon) {
        commit('updateMatched', {
          index: first.index,
          matched: true,
        });
        commit('updateMatched', {
          index: second.index,
          matched: true,
        });
      } else {
        setTimeout(() => {
          commit('updateVisible', {
            index: first.index,
            visible: false,
          });
          commit('updateVisible', {
            index: second.index,
            visible: false,
          });
        }, 1000);
      }
      commit('initOpenedCards');
    }
  },
};

const mutations = {
  clickCard(state, payload) {
    state.cards[payload.index].visible = true;
    state.openedCards.push(payload);
  },
  initCards(state) {
    state.cards = [];
    state.faces.forEach((item) => {
      state.cards.push({
        ...item,
        v: 1,
        visible: false,
        matched: false,
      });
      state.cards.push({
        ...item,
        v: 2,
        visible: false,
        matched: false,
      });
    });
    state.cards = shuffle(state.cards);
  },
  initOpenedCards(state) {
    state.openedCards.length = 0;
  },
  updateVisible(state, { index, visible }) {
    state.cards[index].visible = visible;
  },
  updateMatched(state, { index, matched }) {
    state.cards[index].matched = matched;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};