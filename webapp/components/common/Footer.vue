<template>
  <footer>
    <div class="footer-wrapper">
      <img src="~/assets/icons/desktop.svg" alt="" />
      <p>Перейти на мобильную версию сайта</p>
    </div>
  </footer>
</template>

<script>
</script>

<style lang="scss" scoped>
@import "~/assets/styles/breakpoints.scss";
@import "~/assets/styles/colors.scss";

.footer-wrapper {
  position: fixed;
  bottom: 0;
  background-color: $dark;
  display: flex;
  padding: 0.375rem 0;
  width: 100%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  p {
    color: #fff;
    margin-left: 1.15rem;
  }
}

@include for-mobile-only {
}
</style>
