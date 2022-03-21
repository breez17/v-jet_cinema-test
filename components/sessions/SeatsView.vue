<template>
  <transition name="c-seats-modal">
    <div class="c-seats-modal-mask">
      <Loader v-if="statusBooking === 'pending'" />
      <div class="c-seats-modal-wrapper">
        <div class="c-seats-modal-holder">
          <div class="c-seats-modal-container">

            <div class="c-seats-modal-header">
            </div>
            <p class="c-seats-modal-header__title body-2">Екран</p>

            <div class="c-seats-modal-body">
              <div class="c-seats-modal-body__rows" :key="row[0].row" v-for="row of seats">
                <div class="c-seats-modal-body__seats">
                  <span
                      v-for="seat of row[1]"
                      :key="seat.seat"
                      @click="setSeat(row[0].row, seat.seat)"
                      class="c-seats-modal-body__seats-item"
                      :class="[
                          { 'c-seats-modal-body__seats-item--close': !seat.is_free || bookSeat.seat === seat.seat && bookSeat.row === row[0].row },
                          { 'c-seats-modal-body__seats-item--open': seat.is_free || bookSeat.seat != seat.seat && bookSeat.row != row[0].row }
                      ]"
                  >
                  </span>
                </div>
              </div>
            </div>

            <div class="c-seats-modal-footer">
              <Button
                  @click="$emit('close')"
                  background="orange"
                  size="sm"
              >
                Close
              </Button>
              <Button
                  @click="saveSeat"
                  class="c-seats-modal-footer__button"
                  :class="{'c-seats-modal-footer__button--disabled': !bookSeat.row}"
                  background="green"
                  size="sm"
                  :is-disabled="!bookSeat.row"
              >
                Book Seat
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapActions } from "vuex";
import Button from "../Forms/Button";
import Loader from "../Loader/Loader";
export default {
  name: "SeatsView",
  components: {Loader, Button},
  props: {
    seats: Array,
    sessionInfo: Object
  },
  data() {
    return {
      bookSeat: {},
      statusBooking: 'idle',
    }
  },
  methods: {
    ...mapActions('shows', ['book_ticket']),
    setSeat (row, seat) {
      this.bookSeat = {
        row,
        seat,
        ...this.sessionInfo
      }
    },
    async saveSeat () {
      this.statusBooking = 'pending';
      try {
        await this.book_ticket(this.bookSeat);
        this.$emit('close');
        this.statusBooking = 'success';
      } catch (err) {
        console.log(err);
        this.statusBooking = 'fail';
        throw err;
      }
    }
  }
}
</script>

<style lang="scss">
.c-seats-modal {
  &-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
  }

  &-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  &-holder {
    @media screen and (max-width: 1000px) {
      max-width: 500px;
      overflow-x: scroll;
      margin: 0 auto;
    }
    @media screen and (max-width: 580px) {
      max-width: 380px;
    }
    @media screen and (max-width: 440px) {
      max-width: 300px;
    }
  }

  &-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 80vw;
    height: 80vh;
    margin: 0 auto;
    padding: 20px 30px;
    background-color: var(--white);
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    @media screen and (max-width: 1000px) {
      width: 800px;
    }
  }

  &-header {
    width: 100%;
    height: 24px;
    border-radius: 50% 50% 0 0;
    border-top: 6px solid var(--lightBlue);
    &__title {
      text-align: center;
    }
  }

  &-body {
    &__rows {
      width: 100%;
      height: 20px;
      border-bottom: 1px solid;
    }
    &__seats {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      &-item {
        width: 10px;
        height: 10px;
        display: block;
        cursor: pointer;
        &--close {
          background: var(--red) !important;
        }
        &--open {
          background: var(--green);
        }
      }
    }
  }
  &-footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 20px;
    @media screen and (max-width: 1000px) {
      justify-content: flex-start;
    }
    &__button {
      margin-left: 15px;
      &--disabled {
        opacity: .5;
        cursor: no-drop;
      }
    }
  }
}
</style>
