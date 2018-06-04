<template>

    <div class="movie-search">
      <a href="/pages/movie/main">
        <input type="text" placeholder="搜索" v-model="searchValue">
      </a>
    </div>

</template>

<script>
export default {
  data() {
    return {
      searchValue: '测试'
    }
  },
  computed: {

  },
  async created() {
  }
}
</script>

<style lang="scss">

</style>
