import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    keepAlive: [], //被缓存的组件name
  },
  mutations: {},
  actions: {},
  modules: {},
});
