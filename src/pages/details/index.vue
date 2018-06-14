<template>
  <div class="movie-details">
    <div class="">
      <p>{{ movieDetails.title }}</p>
      <img :src="movieDetails.images.small">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: {
        small: ''
      }
    }
  },
  computed: {
    movieDetails() {
      console.log(this.$store.getters.currentMovie)
      console.log(this.$store.getters.currentMovie.images.small)
      return this.$store.getters.currentMovie
    }
  },
  async mounted() {
    const movieId = this.$root.$mp.query
    this.$store.dispatch('getCurrentMovie', movieId.id)
  }
}
</script>

<style lang="css">
</style>
