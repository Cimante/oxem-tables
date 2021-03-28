import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: null,
    choosenItem: null,
    loading: false,
  },
  mutations: {
    addData(state, payload) {
      state.data = payload;
    },
    toggleLoading(state, payload) {
      state.loading = payload;
    },
    setChoosenItem(state, payload) {
      state.choosenItem = payload;
    },
    clearChoosenItem(state) {
      state.choosenItem = null;
    },
  },
  actions: {
    setData(context, url) {
      context.commit('toggleLoading', true);
      context.commit('clearChoosenItem');
      fetch(url)
        .then((response) => response.json())
        .then((res) => context.commit('addData', res))
        .then(() => context.commit('toggleLoading', false));
    },
    sortData({ commit, state }, payload) {
      const [sortField, sortDirection] = [...payload];
      const tempData = state.data;
      tempData.sort((a, b) => (a[sortField] > b[sortField] ? sortDirection : -1 * sortDirection));
      commit('addData', tempData);
    },
    setChoosenItem(context, payload) {
      context.commit('setChoosenItem', payload);
    },
  },
});
