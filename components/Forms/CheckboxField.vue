<template>
  <label class="v-checkbox">
    <input
      :id="id"
      type="checkbox"
      class="v-checkbox__field"
      :checked="checked"
      @change="$emit('change', $event)"
    >
    <span class="v-checkbox__checkmark"></span>
  </label>
</template>

<script>
export default {
  name: 'CheckboxField',
  props: {
    checked: Boolean,
    id: {
      type: String,
      default () {
        return ''
      }
    }
  }
}
</script>

<style lang="scss">
.v-checkbox {
  display: block;
  position: relative;
  padding-left: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  user-select: none;

  &__field {
    position: absolute;
    height: 0;
    width: 0;
    opacity: 0;
    cursor: pointer;

    &:checked ~ .v-checkbox__checkmark {
      border: 2px solid var(--lightBlue);
      background-color: var(--lightBlue);
    }

    &:checked ~ .v-checkbox__checkmark:after {
      display: block;
    }
  }

  &__checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: transparent;
    border: 2px solid var(--lightGray);
    border-radius: 2px;

    &:after {
      content: '';
      position: absolute;
      display: none;
      left: 5px;
      top: 1px;
      width: 6px;
      height: 12px;
      border: solid var(--white);
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  }
}
</style>
