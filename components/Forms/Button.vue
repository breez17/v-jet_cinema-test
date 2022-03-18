<template>
  <button
    :type="type"
    class="v-btn btn-text"
    :class="[
      size ? `v-btn--${size}` : '',
      background ? `v-btn--${background}` : ''
    ]"
    :disabled="isDisabled"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'button'
    },
    size: {
      type: String,
      default: () => {
        return ''
      }
    },
    background: {
      type: String,
      default: () => {
        return ''
      }
    },
    isDisabled: {
      type: Boolean
    }
  }
}
</script>

<style lang="scss">
.v-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  min-width: 112px;
  height: 48px;
  background: transparent;
  border-radius: 8px;
  padding: 16px;
  cursor: pointer;
  border: none;
  color: var(--white);

  &:focus {
    box-shadow: none;
  }

  &--mini {
    height: 27px;
  }

  &--sm {
    height: 40px;
  }

  &--md {
    height: 48px;
  }

  &--red {
    background: var(--red);
  }
  &--green {
    background: var(--green);
  }
  &--purple {
    background: var(--purple);
  }
  &--orange {
    background: var(--orange);
  }
  &--dark-green {
    background: var(--darkGreen);
  }
  &--light-orange {
    background: var(--lightOrange);
  }
}
</style>
