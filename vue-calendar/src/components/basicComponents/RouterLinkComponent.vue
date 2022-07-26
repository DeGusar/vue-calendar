<template>
  <router-link
    class="router-link"
    :to="to"
  >
    <slot />
  </router-link>
</template>

<script>
export default {
  name: 'RouterLinkComponent',
  props: {
    to: {
      type: [Object, String],
      required: true
    }
  }
}
</script>

<style lang="scss">
  .router-link {
    font-size: $font-size-base;
    color: $color-white;
    text-decoration: none;

    &:hover {
      color: $color-black;
    }
  }
</style>
