import { post } from '../utils/requestMethod.js'

const state = {
  recentMovielist: [],
  comingMovieList: [],
  top250MovieList: [],
  USMovieList: []
}

const mutations = {
  setRecentMovies(state, recentMovieList) {
    state.recentMovielist = recentMovieList
    console.log(state.recentMovielist)
  },
  setComingMovies(state, comingMovieList) {
    state.comingMovieList = comingMovieList
    console.log(state.comingMovieList)
  },
  setTop250Movies(state, top250MovieList) {
    state.top250MovieList = top250MovieList
    console.log(state.top250MovieList)
  },
  setUSMovies(state, USMovieList) {
    state.USMovieList = USMovieList
    console.log(state.USMovieList)
  }
}

const actions = {
  async getRecentMovies({ commit }) {
    const res = await post('in_theaters')
    console.log(res)
    const recentMovieList = res.subjects
    commit('setRecentMovies', recentMovieList)
  },
  async getComingMovies({ commit }) {
    const res = await post('coming_soon')
    console.log(res)
    const comingMovieList = res.subjects
    commit('setComingMovies', comingMovieList)
  },
  async getTop250Movies({ commit }) {
    const res = await post('top250')
    console.log(res)
    const top250MovieList = res.subjects
    commit('setTop250Movies', top250MovieList)
  },
  async getUSMovies({ commit }) {
    const res = await post('us_box')
    console.log(res)
    const USMovieList = res.subjects
    commit('setUSMovies', USMovieList)
  }
}

export default {
  state,
  mutations,
  actions
}
