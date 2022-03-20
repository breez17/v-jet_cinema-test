<template>
  <div class="v-film">
    <Loader v-if="requestStatus === 'pending'" />
    <div class="container">
      <div class="v-film__wrapper">
        <div class="v-film__wrapper-preview">
          <img :src="film.image" alt="">
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
  components: {Loader},
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

</style>
