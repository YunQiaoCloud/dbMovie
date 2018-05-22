import axios from 'axios'

const state = {
  list: []
}

const mutations = {
  setMovies(state, movieList) {
    state.list = movieList
    console.log(state.list)
  }
}

const actions = {
  async getMovies({ commit }) {
    const res = await axios.get('https://douban.uieee.com/v2/movie/in_theaters')
    const movieList = res.data.subjects
    commit('setMovies', movieList)
  }
}

export default {
  state,
  mutations,
  actions
}
