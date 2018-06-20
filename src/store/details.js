import { post } from '../utils/requestMethod.js'

const state = {
  currentMovie: {
    images: {
      small: ''
    },
    rating: {
      average: ''
    }
  }
}

const getters = {
  currentMovie(state) {
    return state.currentMovie
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
  getters,
  mutations,
  actions
}
