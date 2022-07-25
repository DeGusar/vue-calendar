<template>
  <div class="footer">
    <div class="footer__wrapper">
      <a
        href="https://github.com/DeGusar"
        target="_blank"
        class="footer__github-logo"
      />
      <p class="footer__name">
        Denis Gusar
      </p>
      <p class="footer__year">
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
  .footer {
    background-color: $color-purple;
    padding: 10px 0;
    color: white;
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
      background: url("https://res.cloudinary.com/rss-collection/image/upload/v1652345776/github_ke79xc.svg");
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
