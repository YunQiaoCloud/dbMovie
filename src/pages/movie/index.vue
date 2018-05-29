<template>
  <div class="movie-homepage">
    <div class="movie-search">
      <a href="/pages/search/main">
        <input type="text" placeholder="搜索">
      </a>
    </div>

    <div class="recent-movie">
      <div class="movie-module">
        <h3>近期上映</h3>
        <span>更多></span>
      </div>

      <div class="movie-list" v-for="movie in movies" :key="movie.id">
        <div class="movie-poster">
          <a href="#">
            <img class="poster" :src="movie.images.small">
          </a>
        </div>
        <div class="movie-name">
          <h4>{{ movie.title }}</h4>
        </div>
        <div class="">
          <i>{{ movie.rating.average }}</i>
        </div>
      </div>
    </div>
  </div>

  </div>

</template>

<script>
export default {
  data() {
    return {
      test: '测试'
    }
  },
  computed: {
    movies() {
      console.log(this.$store.state.movie.list, '电影列表')
      return this.$store.state.movie.list
    }
  },
  async created() {
    this.$store.dispatch('getMovies')
  }
}
</script>

<style lang="scss">
  .recent-movie {
    padding-left: 20px;
  }

  .movie-list {
    width: 30vw;
    height: 200px;
    margin-right: 10px;
    float: left;
  }

  .movie-poster {
    width: 100%;
    height: 150px;

    a {
      width: 100%;
      height: 100%;
    }

    .poster {
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-position: center 15%;
      background-size: cover;
    }
  }
</style>
