import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    title: "hi!"
  },
  getters: {
    getTitle(state) {
      return state.title
    }
  },
  mutations: {},
  actions: {}
});
