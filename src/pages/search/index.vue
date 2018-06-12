<template>
  <div class="movie-search">
    <div class="search-input">
      <a href="/pages/movie/main">
        <input type="text" placeholder="搜索" v-model="searchValue">
      </a>
    </div>

    <div class="search-result"
         v-for="movie in searchResult"
         :key="movie.id">

      <p>{{ movie.title }}</p>
    </div>
  </div>



</template>

<script>
import _ from 'lodash'

export default {
  data() {
    return {
      searchValue: ''
    }
  },
  computed: {
    searchResult() {
      return this.$store.state.search.searchResult
    }
  },
  watch: {
    searchValue: _.debounce(function movieSearch(value) {
      if (!value) { return }
      this.$store.dispatch('getSearchMovie', value)
    }, 1000)
  }
}
</script>

<style lang="scss">

</style>
