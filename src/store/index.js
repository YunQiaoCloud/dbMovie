import Vue from 'vue'
import Vuex from 'vuex'
import movie from './movie'
import details from './details'
import search from './search'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    movie,
    details,
    search
  }
})
