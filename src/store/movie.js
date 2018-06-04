import { post } from '../utils/requestMethod.js'

const state = {
  recentMovielist: [],
  comingMovieList: [],
  top250MovieList: [],
  USMovieList: []
}

const getters = {
  recentMovies(state) {
    return state.recentMovielist
  },
  comingMovies(state) {
    return state.comingMovieList
  },
  top250Movies(state) {
    return state.top250MovieList
  },
  USMovies(state) {
    const listUSArray = state.USMovieList
    const listUS = []

    listUSArray.forEach((item) => {
      listUS.push(item.subject)
    })
    return listUS
  }
}

const mutations = {
  setRecentMovies(state, recentMovieList) {
    state.recentMovielist = recentMovieList
  },
  setComingMovies(state, comingMovieList) {
    state.comingMovieList = comingMovieList
  },
  setTop250Movies(state, top250MovieList) {
    state.top250MovieList = top250MovieList
  },
  setUSMovies(state, USMovieList) {
    state.USMovieList = USMovieList
  }
}

const actions = {
  async getRecentMovies({ commit }) {
    const res = await post('in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b')
    const recentMovieList = res.subjects
    commit('setRecentMovies', recentMovieList)
  },
  async getComingMovies({ commit }) {
    const res = await post('coming_soon?apikey=0b2bdeda43b5688921839c8ecb20399b')
    const comingMovieList = res.subjects
    commit('setComingMovies', comingMovieList)
  },
  async getTop250Movies({ commit }) {
    const res = await post('top250?apikey=0b2bdeda43b5688921839c8ecb20399b&count=100')
    const top250MovieList = res.subjects
    commit('setTop250Movies', top250MovieList)
  },
  async getUSMovies({ commit }) {
    const res = await post('us_box?apikey=0b2bdeda43b5688921839c8ecb20399b')
    const USMovieList = res.subjects
    commit('setUSMovies', USMovieList)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
