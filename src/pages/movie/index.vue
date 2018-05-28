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

      <div class="" v-for="movie in movies">
        <div class="movie-poster">
          <a href="#">
            <!-- <div class="" v-bind:style="{ background-image: url({ movie.images.small }) } ">

          </div> -->
        </a>
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
    movie() {
      console.log(this.$store.state.movie.list, '电影列表')
      return this.$store.state.movie.list
    }
  },
  async created() {
    this.$store.dispatch('getMovies')
  }
}
</script>
