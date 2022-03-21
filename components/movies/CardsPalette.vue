<template>
  <div class="c-cards">
    <div class="container">
      <div class="c-cards__palette">
        <FilmCard
            v-for="film of movies"
            :key="film.id"
            :film="film"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FilmCard from "./FilmCard";
import { mapState } from "vuex";
export default {
  name: "CardsPalette",
  components: {
    FilmCard
  },
  computed: {
    ...mapState('movies', [
      'movies'
    ]),

  },
}
</script>

<style lang="scss">
.c-cards {
  &__palette {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 25px 15px;
    padding: 10px;
    @media screen and (max-width: 1440px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
