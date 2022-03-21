<template>
  <label
    class="v-text-field"
    :class="[
      fullWidth ? 'v-text-field--full-width' : '',
      size ? `v-text-field--${size}` : '',
    ]"
  >
    <div
      v-if="label"
      class="v-text-field__lbl"
    >
      {{ label }}
    </div>
    <img
      v-if="prependIconSrc"
      :src="prependIconSrc"
      alt=""
      class="icon-default v-text-field__prepend-icon"
    />
    <input
      :type="type"
      class="v-text-field__input"
      @keyup.enter="$emit('onEnter', $event.target.value)"
      :class="[
        {'v-text-field__input--prepend-icon': prependIconSrc},
        size ? `v-text-field__input--${size}` : '',
      ]"
      :placeholder="placeholder"
      :min="min"
      :max="max"
      :required="required"
      :value="value"
      :maxlength="maxlength"
      @input="$emit('input', $event.target.value)"
    />
  </label>
</template>

<script>
export default {
  name: 'TextField',
  props: {
    label: {
      type: String,
      default: () => {
        return ''
      }
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: [String, Number],
      default: () => {
        return ''
      }
    },
    prependIconSrc: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      required: true
    },
    fullWidth: Boolean,
    placeholder: {
      type: String,
      default: ''
    },
    min: {
      type: String,
      default: null
    },
    max: {
      type: String,
      default: null
    },
    required: Boolean,
    maxlength: {
      type: String,
      default: () => {
        return ''
      }
    }
  }
}
</script>

<style lang="scss">
@import "/assets/styles/fonts";
.v-text-field {
  position: relative;
  width: auto;
  margin: 0;
  font-size: 16px;
  line-height: 30px;
  letter-spacing: 0.25px;
  font-family: $lato;

  &--xs {
    width: 80px;
  }

  &--full-width {
    width: 100%;
  }

  &__lbl {
    font-weight: 700;
    color: var(--black);
    margin-bottom: 8px;
  }

  &__prepend-icon {
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
  }

  &__input {
    width: 100%;
    height: 48px;
    background: #FEFEFE;
    border: 1px solid var(--gray);
    border-radius: 8px;
    padding: 8px 0 8px 16px;
    font-size: 16px;
    font-family: $lato;
    font-weight: 700;
    caret-color: var(--orange);

    &::placeholder {
      font-family: $lato;
      font-weight: 700;
      color: var(--gray);
    }

    &--xs {
      height: 36px;
      padding: 8px;
    }

    &--sm {
      height: 25px;
    }

    &--md {
      height: 35px;
    }

    &--prepend-icon {
      padding: 8px 16px 8px 56px;
    }

    &:focus {
      outline: none;
    }
  }
}
</style>
