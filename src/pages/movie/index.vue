<template>
  <div class="movie-homepage">
    <div class="movie-search">
      <a href="/pages/search/main">
        <input type="text" placeholder="搜索">
      </a>
    </div>
    <!-- 正在上映 -->
    <div class="movie-class-name">
      <h3>正在上映</h3>
      <span>更多 ></span>
    </div>

    <div class="movie-class">
      <div class="list-box">
        <div class="movie-list" v-for="recentMovie in recentMovies" :key="recentMovie.id">
          <div class="movie-poster">
            <a :href="'/pages/details/main/' + recentMovie.id">
              <img class="poster" :src="recentMovie.images.small">
            </a>
          </div>
          <div class="movie-name">
            <h4>{{ recentMovie.title }}</h4>
          </div>
          <div class="movie-mark">
            <i>{{ recentMovie.rating.average }}</i>
          </div>
        </div>
      </div>
    </div>
    <!-- 即将上映 -->
    <div class="movie-class-name">
      <h3>即将上映</h3>
      <span>更多 ></span>
    </div>

    <div class="movie-class">
      <div class="list-box">
        <div class="movie-list" v-for="comingMovie in comingMovies" :key="comingMovie.id">
          <div class="movie-poster">
            <a href="#">
              <img class="poster" :src="comingMovie.images.small">
            </a>
          </div>
          <div class="movie-name">
            <h4>{{ comingMovie.title }}</h4>
          </div>
          <div class="movie-mark">
            <i>{{ comingMovie.year }}</i>
          </div>
        </div>
      </div>
    </div>
    <!-- Top250 -->
    <div class="movie-class-name">
      <h3>Top250</h3>
      <span>更多 ></span>
    </div>

    <div class="movie-class">
      <div class="list-box">
        <div class="movie-list" v-for="top250Movie in top250Movies" :key="top250Movie.id">
          <div class="movie-poster">
            <a href="#">
              <img class="poster" :src="top250Movie.images.small">
            </a>
          </div>
          <div class="movie-name">
            <h4>{{ top250Movie.title }}</h4>
          </div>
          <div class="movie-mark">
            <i>{{ top250Movie.rating.average }}</i>
          </div>
        </div>
      </div>
    </div>
    <!-- 北美票房榜 -->
    <div class="movie-class-name">
      <h3>北美票房榜</h3>
      <span>更多 ></span>
    </div>

    <div class="movie-class">
      <div class="list-box">
        <div class="movie-list" v-for="USMovie in USMovies" :key="USMovie.id">
          <div class="movie-poster">
            <a href="#">
              <img class="poster" :src="USMovie.images.small">
            </a>
          </div>
          <div class="movie-name">
            <h4>{{ USMovie.title }}</h4>
          </div>
          <div class="movie-mark">
            <i>{{ USMovie.rating.average }}</i>
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
    }
  },
  computed: {
    recentMovies() {
      return this.$store.getters.recentMovies
    },
    comingMovies() {
      return this.$store.getters.comingMovies
    },
    top250Movies() {
      return this.$store.getters.top250Movies
    },
    USMovies() {
      return this.$store.getters.USMovies
    }
  },
  async created() {
    this.$store.dispatch('getRecentMovies')
    this.$store.dispatch('getComingMovies')
    this.$store.dispatch('getTop250Movies')
    this.$store.dispatch('getUSMovies')
  }
}
</script>

<style lang="scss">
  .movie-homepage {
    width: 100%;
    height: auto;
  }

  .movie-search {
    padding: 10px;
    background-color: #44bb57;

    input {
      width: 100%;
      height: 20px;
      background-color: #fff;
      text-align: center;
    }
  }

  .movie-class-name {
    overflow: hidden;
    border-left: 5px solid #44bb57;
    padding-left: 10px;
    margin-top: 15px;
    font-size: 16px;

    h3 {
      font-weight: bold;
      float: left;
    }

    span {
      float: right;
      color: #44bb57;
      margin-right: 15px;
    }
  }

  .movie-class {
    width: 100%;
    margin-top: 10px;
    margin-left: 10px;
    overflow: hidden;
    overflow-x: auto;

    .list-box {
      width: 800vw;
    }
  }

  .movie-list {
    width: 30vw;
    height: 200px;
    margin: 0 5px;
    float: left;
  }

  .movie-poster {
    width: 100%;
    height: 150px;

    navigator {
      width: 100%;
      height: 100%;
    }

    .poster {
      width: 100%;
      height: 100%;
    }
  }

  .movie-name {

    h4 {
      font-size: 14px;
      font-weight: bold;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
  }

  .movie-mark {
    color: red;
    font-style: oblique;
  }
</style>
