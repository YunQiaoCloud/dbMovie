import Vue from 'vue'
import Vuex from 'vuex'
import movie from './movie'
import search from './search'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    movie,
    search
  }
})
