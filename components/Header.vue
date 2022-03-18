<template>
  <div class="c-header">
    <div class="container">
      <div class="c-header__wrapper">
        <nuxt-link to="/" class="c-header__wrapper-logo">
          <img class="c-header__wrapper-logo_icon" src="@/assets/icons/play.svg" alt="logo">
          <p class="c-header__wrapper-logo_label body-1">Cinema</p>
        </nuxt-link>
        <div class="c-header__wrapper-navigations">
          <nuxt-link
              active-class="c-header__wrapper-navigations_link--active"
              class="c-header__wrapper-navigations_link body-1"
              to="/"
          >
          Movies
          </nuxt-link>
          <nuxt-link
              active-class="c-header__wrapper-navigations_link--active"
              class="c-header__wrapper-navigations_link body-1"
              to="/sessions"
          >
            Sessions
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="scss">
.c-header {
  background: var(--lightBlue);
  padding: 15px 0;
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &-logo {
      display: flex;
      align-items: center;
      text-decoration: none;

      &_icon {
        margin-right: 10px;
      }
    }
    &-navigations {
      &_link {
        text-decoration: none;
        margin-right: 20px;
        &--active {
          border-bottom: 3px solid var(--white);
        }
      }
    }
  }
}
</style>
