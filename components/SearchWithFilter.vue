<template>
  <div class="c-search">
    <Loader v-if="searching === 'pending'"></Loader>
    <div class="container">
      <div class="c-search__holder">
        <TextField
            class="c-search__holder-input"
            placeholder="Пошук..."
            size="sm"
            @input="params.name = $event"
            @onEnter="handleSearch"
        />
        <Button
            class="c-search__holder-btn"
            background="orange"
            size="sm"
            @click="handleSearch"
        >
          Пошук
        </Button>
        <span @click="isAdvancedSearch = !isAdvancedSearch" class="c-search__holder-options overline-1">
          Розширений пошук
          <img
              class="c-search__holder-options_chevron"
              :class="{'c-search__holder-options_chevron--active': isAdvancedSearch}"
              src="@/assets/icons/icon-chevron-down.svg"
              alt=""
          >
        </span>
      </div>
      <div v-show="isAdvancedSearch" class="c-search__advanced-search">
        <SelectField
            @input="params.genres = $event"
            default-option-hide
            label="Жанр"
            size="sm"
            :options="genres"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { genres } from "@/utils/genre";
import TextField from "./Forms/TextField";
import Button from "./Forms/Button";
import Loader from "./Loader/Loader";
import SelectField from "./Forms/SelectField";
export default {
  name: "SearchWithFilter",
  components: {
    SelectField,
    Loader,
    Button,
    TextField
  },
  data() {
    return {
      searching: 'idle',
      genres,
      params: {
        name: "",
        genres: ""
      },
      isAdvancedSearch: false,
    }
  },
  methods: {
    ...mapActions({
      searchFilm: "movies/search_film",
    }),
    async handleSearch () {
      this.searching = 'pending';
      try {
        await this.searchFilm(this.params);
        this.searching = 'success';
      } catch (err) {
        console.log(err);
        this.searching = 'fail';
        throw err;
      }
    }
  },
}
</script>

<style lang="scss">
.c-search {
  margin: 20px 0;
  &__holder {
    position: relative;
    padding: 30px;
    display: flex;
    align-items: center;
    @media screen and (max-width: 420px) {
      flex-direction: column;
    }
    &-input {
      width: 95%;
    }
    &-btn {
      margin-left: 40px;
      @media screen and (max-width: 420px) {
        width: 100%;
        margin-left: 0;
        margin-top: 20px;
      }
    }
    &-options {
      position: absolute;
      bottom: 5px;
      right: 40px;
      cursor: pointer;
      user-select: none;
      @media screen and (max-width: 420px) {
        right: 50%;
        transform: translate(50%, 0%);
      }
      &_chevron {
        transition: all 0.3s;
        &--active {
          transform: rotate(180deg);
        }
      }
    }
  }
  &__advanced-search {
    padding: 20px 30px 20px 30px;
    width: 300px;
    @media screen and (max-width: 380px) {
      width: 80%;
    }
  }
}
</style>
