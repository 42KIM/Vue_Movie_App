<template>
  <div
    class="main__item"
    @click="showDetails(movie.imdbID)">
    <div class="item__poster-wrapper">
      <img
        class="item__poster"
        alt="image load failed"
        :src="resizedPoster" />
    </div>
    <div class="item__info">
      <span class="info__year">{{ movie.Year }}</span>
      <span class="info__title">{{ movie.Title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  computed: {
    resizedPoster() {
      return this.movie.Poster !== 'N/A' ? this.movie.Poster.split('SX300.jpg').join('SX700.jpg') : 'https://via.placeholder.com/700x1000.png?text=No+Image+Found';
    }
  },
  methods: {
    showDetails(id) {
      this.$store.dispatch('searchMovie/getDetails', id);
    },
  }
};
</script>

<style lang="scss" scoped>
@import '~/scss/_mixins.scss';

.main__item {
  width: calc(20% - ($margin-item * 2));
  box-sizing: border-box;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: $margin-item;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, .5);
  cursor: pointer;
  @include media-items;
  &:hover {
    transform: rotate(2deg);
  }
  .item__poster-wrapper {
    position: relative;
    padding-top: 130%;
    width: 100%;
    overflow: hidden;
    .item__poster {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      // width: 100%;
      // height: 100%;
      object-fit: cover;
    }
  }
  .item__info {
    background-color: $color-main-theme;
    width: 100%;
    padding-top: 3%;
    padding-bottom: 3%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    .info__year {
      text-align: center;
      color: $color-main-font;
    }
    .info__title {
      width: 100%;
      text-align: center;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
}
</style>