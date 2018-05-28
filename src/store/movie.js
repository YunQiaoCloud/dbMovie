import { post } from '../utils/requestMethod.js'

const state = {
  list: []
}

const mutations = {
  setMovies(state, movieList) {
    state.list = movieList
  }
}

const actions = {
  async getMovies({ commit }) {
    const res = await post('in_theaters')
    const movieList = res.subjects
    commit('setMovies', movieList)
  }
}

export default {
  state,
  mutations,
  actions
}
