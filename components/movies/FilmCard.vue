<template>
  <div class="c-card">
    <div class="c-card__holder">
      <nuxt-link :to="{ path: `/film/`, query: { id: film.id } }" class="c-card__holder-img">
        <img
            class="c-card__holder-img_picture"
            :src="film.image"
            alt=""
        />
      </nuxt-link>
      <div class="c-card__holder-info">
          <nuxt-link
              :to="{ path: `/film/`, query: { id: film.id } }"
              class="c-card__holder-info_title headline-4"
              v-html="film.name"
          />
          <h6 class="c-card__holder-info_title headline-6" v-html="film.name" />
        <div class="c-card__holder-info_tags" v-html="film.additional">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { genre } from '@/utils/genre';
export default {
  name: "FilmCard",
  props: {
    film: Object
  },
  data() {
    return {
      genre,
    }
  },
}
</script>

<style lang="scss">
.c-card {
  width: 100%;
  border-bottom: 1px solid var(--gray);
  &__holder {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    @media screen and (max-width: 500px) {
      flex-direction: column;
      align-items: center;
    }
    &-img {
      &_picture {
        width: 200px;
        @media screen and (max-width: 670px) {
          width: 140px;
        }
        @media screen and (max-width: 500px) {
          width: 100%;
        }
      }
    }
    &-info {
      margin-left: 15px;
    }
  }
}
</style>
