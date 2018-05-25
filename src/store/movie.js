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
    console.log(res.subjects)
    const movieList = res.subjects
    commit('setMovies', movieList)
  }
}

export default {
  state,
  mutations,
  actions
}
