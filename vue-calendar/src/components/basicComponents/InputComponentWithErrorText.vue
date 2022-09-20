<template>
  <div class="input-component-with-error-text">
    <InputComponent
      :place-holder="placeHolder"
      :type="type"
      :value="value"
      :invalid="invalid"
      @input="$emit('input', $event)"
    />
    <p
      v-if="invalid"
      class="input-component-with-error-text__text"
    >
      {{ errorMessage }}
    </p>
  </div>
</template>

<script>
import InputComponent from './InputComponent'

export default {
  name: 'InputComponentWithErrorText',
  components: { InputComponent },
  props: {
    errorMessage: {
      type: String,
      default: ''
    },
    placeHolder: {
      type: String,
      default: 'Placeholder'
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: [String, Number, Date],
      required: true
    },
    invalid: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
  .input-component-with-error-text {
    display: flex;
    width: 100%;
    flex-wrap: wrap;

    &__text {
      color: $color-red;
      font-size: $font-size-small;
      padding: 5px 0 0  15px;
    }
  }
</style>
