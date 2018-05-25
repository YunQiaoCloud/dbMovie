<template>
  <div>电影
    <a href="/pages/index/main">{{ test }}</a>
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
