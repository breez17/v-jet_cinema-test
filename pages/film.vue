<template>
  <div class="v-film">
    <Loader v-if="requestStatus === 'pending'" />
    <div class="container">
      <nuxt-link class="v-film-navigation body-2" to="/">
        <img src="@/assets/icons/arrow-back.svg" alt="">
        <div class="v-film-navigation__title">
          Усі фільми
        </div>
      </nuxt-link>
      <div class="v-film__wrapper">
        <div class="v-film__wrapper-preview">
          <img class="v-film__wrapper-preview_item" :src="film.image" alt="">
        </div>
        <div class="v-film__wrapper-data">
          <h4 class="v-film__wrapper-data_title headline-4" v-html="film.name"></h4>
          <h6 class="v-film__wrapper-data_title headline-6" v-html="film.name"></h6>
          <div class="v-film__wrapper-data_tags" v-html="film.additional">
          </div>
          <h5 class="v-film__wrapper-data_description headline-5">
            Опис:
          </h5>
          <div v-html="film.description"></div>
          <!--    :TODO Add ability booking ticket on once film page      -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Loader from "@/components/Loader/Loader";
export default {
  name: "film",
  components: {
    Loader
  },
  data() {
    return {
      currentId: this.$route.query.id,
      requestStatus: 'idle',
      film: {},
    }
  },
  methods: {
    ...mapActions({
      getMovie: 'movies/get_movie'
    }),
    async getFilm() {
      this.requestStatus = 'pending';
      try {
        this.film = await this.getMovie(this.currentId);
        this.requestStatus = 'success';
      } catch (err) {
        console.log(err);
        this.requestStatus = 'fail';
        throw err;
      }
    }
  },
  created() {
    this.getFilm();
  }
}
</script>

<style lang="scss">
.v-film {
  padding: 20px;
  &-navigation {
    padding: 20px 0 20px 40px;
    display: inline-flex;
    @media screen and (max-width: 440px) {
      padding: 20px 0 10px 20px;
    }
    &__title {
      margin-left: 5px;
    }
  }
  &__wrapper {
    padding: 0 40px 20px 40px;
    display: flex;
    align-items: flex-start;
    @media screen and (max-width: 840px) {
      flex-direction: column;
      align-items: center;
    }
    @media screen and (max-width: 440px) {
      padding: 0 20px 10px 20px;
    }
    &-preview_item {
      width: 300px;
      @media screen and (max-width: 840px) {
        width: 100%;
      }
    }
    &-data {
      margin-left: 30px;
      @media screen and (max-width: 840px) {
        margin-left: 0;
        margin-top: 25px;
      }
      &_tags {
        margin-top: 25px;
      }
      &_description {
        margin-top: 40px;
      }
    }
  }
}
</style>
