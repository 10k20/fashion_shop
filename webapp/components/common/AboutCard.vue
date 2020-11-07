<template>
  <div class="about-card-wrapper">
    <div class="about-card-img"><img :src="aboutCardImage" alt="" /></div>
    <div class="about-card-body">
      <div class="about-card-title">
        {{ aboutCardTitle }}
      </div>
      <div class="about-card-text">{{ aboutCardText }}</div>
      <button>
        {{ aboutCardButtonText }}
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    aboutCardImage: String,
    aboutCardTitle: String,
    aboutCardText: String,
    aboutCardButtonText: String,
  },
};
</script>
<style lang="scss" scoped>
@import "~/assets/styles/breakpoints.scss";
@import "~/assets/styles/colors.scss";

.about-card-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .about-card-img {
    width: 14.125rem;
    height: 14.125rem;
    margin-right: 1rem;
  }
  .about-card-body {
    display: flex;
    align-content: flex-end;
    flex-direction: column;
    align-items: flex-start;
    .about-card-title {
      width: 100%;
      font-weight: 700;
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }
    .about-card-text {
      width: 100%;
    }
    button {
      border: none;
      outline: none;
      background-color: $dark;
      color: #fff;
      border-radius: 2px;
      padding: 0.55rem 2rem;
      cursor: pointer;
    }
  }
}
</style>