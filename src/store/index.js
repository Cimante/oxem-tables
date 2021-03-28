import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: [],
    dataCopy: [],
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
    addRecord(state, payload) {
      state.data.unshift(payload);
    },
    copyData(state) {
      state.dataCopy = state.data;
    },
    restoreData(state) {
      state.data = state.dataCopy;
    },
  },
  actions: {
    setData(context, url) {
      context.commit('toggleLoading', true);
      context.commit('clearChoosenItem');
      fetch(url)
        .then((response) => response.json())
        .then((res) => context.commit('addData', res))
        .then(() => context.commit('copyData'))
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
    addRecord(context, payload) {
      context.commit('addRecord', JSON.parse(JSON.stringify(payload)));
      context.commit('copyData');
    },
    applyFilter({ commit, state }, payload) {
      // Object.values(item).toString().includes(payload.toString())
      // key.map((deepkey) => deepkey.toString().includes(searchQuery)))));
      const searchQuery = payload.toString();
      const FilteredData = state.data.filter((item) => {
        let flag = false;
        Object.values(item).forEach((value) => {
          if (typeof value === 'object') {
            if (Object.values(value).toString().includes(searchQuery)) {
              flag = true;
            }
          } else if (value.toString().includes(searchQuery)) {
            flag = true;
          }
        });
        return flag;
      });
      commit('addData', FilteredData);
    },
    restoreData(context) {
      context.commit('restoreData');
    },
  },
});
