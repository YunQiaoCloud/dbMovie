<template>
  <div class="movie-details">
    <div class="">
      <p>{{ movieDetails.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {

  },
  computed: {
    movieDetails() {
      return this.$store.state.details.currentMovie
    }
  },
  async created() {
    const movieId = this.$root.$mp.query
    this.$store.dispatch('getCurrentMovie', movieId)
  }
}
</script>

<style lang="css">
</style>
