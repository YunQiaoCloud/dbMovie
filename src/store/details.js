import { post } from '../utils/requestMethod.js'

const state = {
  currentMovie: []
}

const mutations = {
  setCurrentMovie(state, currentMovie) {
    state.currentMovie = currentMovie.subjects
  }
}

const actions = {
  async getCurrentMovie({ commit }, movieId) {
    const res = await post(`subject/${movieId}&count=50`)
    commit('setCurrentMovie', res)
  }
}

export default {
  state,
  mutations,
  actions
}
