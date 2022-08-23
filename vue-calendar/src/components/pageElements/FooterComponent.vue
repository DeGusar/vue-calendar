<template>
  <div class="footer-component">
    <div class="footer-component__wrapper">
      <a
        href="https://github.com/DeGusar"
        target="_blank"
        class="footer-component__github-logo"
      />
      <p class="footer-component__name">
        Denis Gusar
      </p>
      <p class="footer-component__year">
        2022
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'FooterComponent'
}
</script>

<style lang="scss">
  .footer-component {
    background-color: $color-purple;
    padding: 10px 0;
    color: white;
    height: $footer-height;
    font-size: $font-size-large;

    &__wrapper {
      max-width: $content-width;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 auto;
    }

    &__github-logo {
      width: 35px;
      height: 35px;
      background: $github-logo-url;
      background-size: 100% 100%;
      background-position: center;
      cursor: pointer;
      transition: all 0.5s;

      &:hover {
        transform: scale(1.1);
        transition: all 0.5s;
      }
    }
  }
</style>
