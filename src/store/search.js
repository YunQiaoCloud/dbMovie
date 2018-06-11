import { get } from '../utils/requestMethod.js'

const state = {
  searchResult: []
}

const mutations = {
  setSearchMovies(state, searchResult) {
    state.searchResult = searchResult.subjects
  }
}

const actions = {
  async getSearchMovie({ commit }, searchValue) {
    const res = await get(`search?q=${searchValue}&count=50`)
    commit('setSearchMovies', res)
  }
}

export default {
  state,
  mutations,
  actions
}
