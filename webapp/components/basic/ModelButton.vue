<template>
  <div class="model-button">
    {{ model }}
  </div>
</template>
<script>
export default {
  props: {
    model: String,
  },
};
</script>
<style lang="scss" scoped>
@import "~/assets/styles/breakpoints.scss";
@import "~/assets/styles/colors.scss";

.model-button {
  width: 12rem;
  height: 2.5rem;
  color: $dark;
  border: 1px solid $dark;
  border-radius: 2px;
  margin-bottom: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.1s ease-in-out;
}
.model-button:hover {
  box-shadow: 0px 0px 15px $primary;
  border: 1px solid $primary;
}
.model-button:active {
  box-shadow: 0px 0px 0px $primary;
  color: $primary;
}
</style>