<template>
  <div class="c-session-card">
    <Loader v-if="requestStatus === 'pending'"></Loader>
    <nuxt-link
        :to="{ path: `/film/`, query: { id: session.id } }"
        class="c-session-card__film-name headline-5"
        v-html="session.name"
    />
    <p class="c-session-card__film-session body-2" v-for="show of session.sessions">
     - {{ refactorDate(show.showdate) }}
      <span @click="getSeats(show)" class="c-session-card__film-session_seats body-2">Show seats</span>
    </p>
    <SeatsView @close="closeModal" v-if="seats.length" :sessionInfo="sessionInfo" :seats="seats"></SeatsView>
  </div>
</template>

<script>
import moment from "moment"
import Loader from "../Loader/Loader";
import { mapActions } from "vuex";
import SeatsView from "./SeatsView";
export default {
  name: "SessionCard",
  components: {SeatsView, Loader},
  props: {
    session: Object,
  },
  data() {
    return {
      seats: [],
      requestStatus: 'idle',
      sessionInfo: {}
    }
  },
  methods: {
    ...mapActions({
      getSeatsOfSession: 'shows/get_seats',
    }),
    refactorDate(date) {
      return moment(date).format('llll');
    },
    async getSeats(session) {
      this.requestStatus = 'pending';
      try {
        this.sessionInfo = { movie_id: this.session.id, ...session };
        this.seats = await this.getSeatsOfSession({ movie_id: this.session.id, ...session });
        document.body.classList.add('modal-open');
        this.requestStatus = 'success';
      } catch (err) {
        console.log(err);
        this.requestStatus = 'fail';
        throw err;
      }
    },
    closeModal() {
      this.seats = [];
      document.body.classList.remove('modal-open');
    }
  }
}
</script>

<style lang="scss">
.c-session-card {
  &__film {
    &-name {
      margin: 15px 0;
      display: inline-flex;
      border-bottom: 2px solid var(--white);
      padding-bottom: 2px;
      &:hover {
        border-bottom: 2px solid var(--orange);
      }
    }
    &-session {
      padding-left: 20px;
      position: relative;
      @media screen and (max-width: 455px) {
        padding-left: 10px;
      }
      &:hover .c-session-card__film-session_seats {
        display: block;
      }
      &_seats {
        position: absolute;
        display: none;
        top: 50%;
        right: 30%;
        transform: translate(-20%, -50%);
        color: var(--orange);
        cursor: pointer;
        @media screen and (max-width: 1280px) {
          right: 0;
        }
        @media screen and (max-width: 820px) {
          right: 30%;
          display: block;
        }
        @media screen and (max-width: 455px) {
          right: 0;
        }
      }
    }
  }
}
</style>
