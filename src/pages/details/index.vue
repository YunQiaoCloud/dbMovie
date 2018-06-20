<template>
  <div class="movie-details">
    <div class="movie-poster">
      <img :src="movieDetails.images.small">
    </div>
    <div class="movie-info">
      <div class="movie-title">
        <p>{{ movieDetails.title }}</p>
        <span>{{ movieDetails.rating.average }}</span>
      </div>
      <div class="movie-genres">
        <div v-for="genre in movieDetails.genres"
             :key="movieDetails.genres">
          {{ genre }}
        </div>
      </div>
      <div class="movie-introduction">
        <p>{{ movieDetails.summary }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {

  },
  computed: {
    movieDetails() {
      return this.$store.getters.currentMovie
    }
  },
  async mounted() {
    const movieId = this.$root.$mp.query
    this.$store.dispatch('getCurrentMovie', movieId.id)
  }
}
</script>

<style lang="scss">
  .movie-poster {
    width: 100%;
    height: 70vh;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .movie-info {
    padding: 15px;
  }

  .movie-title {
    height: 30px;
    margin-bottom: 10px;

    p {
      font-size: 22px;
      line-height: 30px;
      color: #333;
      font-weight: bold;
      float: left;
    }

    span {
      font-size: 14px;
      line-height: 35px;
      color: #FF2E2E;
      font-style: oblique;
      margin-left: 10px;
      float: left;
    }
  }

  .movie-genres {
    width: 100%;
    overflow: hidden;
    margin-bottom: 10px;

    div {
      width: 30px;
      height: 20px;
      border: 1px solid #f5f5f5;
      padding: 5px;
      line-height: 20px;
      margin-right: 10px;
      color: #44bb57;
      text-align: center;
      float: left;
    }
  }

  .movie-introduction {
    font-size: 12px;
    line-height: 20px;
    color: gray;
  }
</style>
