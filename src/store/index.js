import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: null,
  },
  mutations: {
    addData(state, payload) {
      state.data = payload;
    },
  },
  actions: {
    setLessData(context) {
      // set loading
      fetch('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
        .then((response) => response.json())
        .then((res) => context.commit('addData', res));
      // .then(() => unset loading)
    },
    setMoreData(context) {
      // set loading
      fetch('http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
        .then((response) => response.json())
        .then((res) => context.commit('addData', res));
      // .then(() => unset loading)
    },
  },
});
