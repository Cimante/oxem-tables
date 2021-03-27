import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: null,
    loading: false,
  },
  mutations: {
    addData(state, payload) {
      state.data = payload;
    },
    toggleLoading(state, payload) {
      state.loading = payload;
    },
  },
  actions: {
    setData(context, url) {
      context.commit('toggleLoading', true);
      fetch(url)
        .then((response) => response.json())
        .then((res) => context.commit('addData', res))
        .then(() => context.commit('toggleLoading', false));
    },
  },
});
