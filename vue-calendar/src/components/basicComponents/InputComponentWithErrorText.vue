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
      v-for="error in errors"
      :key="error.$uid"
      class="input-component-with-error-text__text"
    >
      {{ error.$message }}
    </p>
  </div>
</template>

<script>
import InputComponent from './InputComponent'

export default {
  name: 'InputComponentWithErrorText',
  components: { InputComponent },
  props: {
    errors: {
      type: Array,
      default: () => ([])
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
      padding: 5px 0 0  16px;
    }
  }
</style>
