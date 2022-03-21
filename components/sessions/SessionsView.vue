<template>
  <div class="c-sessions-view">
    <h4 class="c-sessions-view__title headline-4">Сеанси:</h4>
    <div class="c-sessions-view__palette">
      <SessionCard
          v-for="session of sessions"
          :key="session.id"
          :session="session"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import SessionCard from "./SessionCard";
export default {
  name: "SessionsView",
  components: {
    SessionCard
  },
  data() {
    return {
      sessions: []
    }
  },
  computed: {
    ...mapState('shows', ['shows']),
    ...mapState('movies', ['movies']),
  },
  created() {
    Object.keys(this.shows).map(movieId => {
      const film = this.movies.find(film => film.id === +movieId);
      film.sessions = this.shows[movieId];
      this.sessions.push(film);
    })
  }
}
</script>

<style lang="scss">
.c-sessions-view {
  margin-top: 20px;
  padding: 20px 30px;
  @media screen and (max-width: 480px) {
    padding: 20px;
  }
  &__palette {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
    @media screen and (max-width: 1280px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 820px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
