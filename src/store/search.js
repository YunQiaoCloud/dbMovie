import { post } from '../utils/requestMethod.js'

const state = {
  searchResult: []
}

const mutations = {
  setSearchMovies(state, searchResult) {
    state.searchResult = searchResult.subjects
    console.log(state.searchResult)
  }
}

const actions = {
  async getSearchMovie({ commit }, searchValue) {
    const res = await post(`search?q=${searchValue}`)
    commit('setSearchMovies', res.data)
    console.log(res)
  }
}

export default {
  state,
  mutations,
  actions
}
