<template>
  <div class="movie-search">
    <div class="search-input">
      <input type="text" placeholder="请输入要搜索的电影" v-model="searchValue">
    </div>

    <div class="search-result"
         v-for="movie in searchResult"
         :key="movie.id">
      <div class="search-poster">
        <img :src="movie.images.small">
      </div>
      <div class="search-info">
        <div class="search-title">
          <p>{{ movie.title }}</p>
        </div>
        <div class="search-mark">
          <span>{{ movie.rating.average }}</span>
        </div>
        <div class="search-details">
          <a :href="'/pages/details/main?id=' + movie.id">
            <button type="button" name="button">点击查看</button>
          </a>
        </div>
      </div>
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
      this.$store.dispatch('getSearchMovie', value)
    }, 1000)
  }
}
</script>

<style lang="scss">
  .movie-search {
    background-color: #ebebeb;
  }

  .search-input {
    border-bottom: 5px solid #f5f5f5;

    input {
      width: 100%;
      padding: 5px 10px;
      background-color: #fff;
    }
  }

  .search-result {
    width: 90%;
    height: 90px;
    background-color: #fff;
    padding: 10px;
    margin: 15px auto;
    border-radius: 10px;
  }

  .search-poster {
    width: 20%;
    height: 100%;
    float: left;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .search-info {
    width: calc(80% - 20px);
    margin-left: 20px;
    float: left;
  }

  .search-title {
    width: 100%;
    font-size: 18px;
  }

  .search-mark {
    width: 100%;
    margin: 10px 0;
    font-size: 16px;
    color: #FF2E2E;
    font-style: oblique;
  }

  .search-details {
    width: 50%;

    button {
      width: 100%;
      height: 25px;
      font-size: 12px;
      line-height: 25px;
      color: #fff;
      background-color: #44bb57;
    }
  }
</style>
