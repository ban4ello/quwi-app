import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    token: '',
    projectsList: [],
  },

  mutations: {
    updateState (state, { key, value }) {
      state[key] = value;
    },
  },
});

export default store