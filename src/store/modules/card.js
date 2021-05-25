import _ from 'lodash';

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
      backgroundColor: '#ef4444',
      color: '#f3f4f6',
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
      backgroundColor: '#797171',
      color: '#ffd700',
    },
    {
      icon: 'fish',
      backgroundColor: '#528cd1',
      color: '#fbdcbb',
    },
    {
      icon: 'guitar',
      backgroundColor: '#d5e4ce',
      color: '#9c6721',
    },
  ],
  cards: [],
  openedCards: [], // 被打開的卡片 最多只會有2個element
};

const getters = {
  matchedCount: (state) => state.cards.filter((card) => card.matched === true).length,
};

const actions = {
  restart({ commit }) {
    commit('initOpenedCards');
    commit('initCards');
  },
  clickCard({ commit }, payload) {
    if (state.cards[payload.index].matched === false) {
      commit('clickCard', payload);
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
    state.cards = _.shuffle(state.cards);
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