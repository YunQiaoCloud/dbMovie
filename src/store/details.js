import { post } from '../utils/requestMethod.js'

const state = {
  currentMovie: {
    images: {
      small: ''
    }
  }
}

const mutations = {
  setCurrentMovie(state, currentMovie) {
    state.currentMovie = currentMovie
  }
}

const actions = {
  async getCurrentMovie({ commit }, movieId) {
    const res = await post(`subject/${movieId}`)
    commit('setCurrentMovie', res)
  }
}

export default {
  state,
  mutations,
  actions
}
