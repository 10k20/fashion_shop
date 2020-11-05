<template>
  <div class="sail-card-wrapper">
    <div class="image-wrapper">
      <img :src="saleCardImage" alt="" />
    </div>
    <div class="red-stripes">
      <div class="red-stripe-1 red-stripe">
        <p>скидки до -50%</p>
        <p>скидки до -50%</p>
      </div>
      <div class="red-stripe-2 red-stripe">
        <p>скидки до -50%</p>
        <p>скидки до -50%</p>
      </div>
    </div>
    <div class="title">Sale</div>
    <div class="subtitle">До окончания акции осталось:</div>
    <div class="timer">
      <Countdown date="2021-07-06 08:15:00" />
    </div>
    <div class="countdown-bg-wrapper">
      <div class="countdown-bg" id="1"></div>
      <div class="countdown-bg" id="2"></div>
      <div class="countdown-bg" id="3"></div>
      <div class="countdown-bg" id="4"></div>
      <div class="countdown-bg" id="5"></div>
      <div class="countdown-bg" id="6"></div>
    </div>
    <div class="view-button"><span>Смотреть все товары</span></div>
  </div>
</template>
<script>
import Countdown from "~/components/basic/Countdown";
export default {
  data() {
    return {};
  },
  components: { Countdown },
  props: { saleCardImage: String },
};
</script>
<style lang="scss" scoped>
@import "~/assets/styles/breakpoints.scss";
@import "~/assets/styles/colors.scss";

.sail-card-wrapper {
  height: 32rem;
  width: 23.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  color: #fff;
  background-image: linear-gradient(0deg, $dark 0%, rgba(0, 0, 0, 0) 100%);
  .image-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -2;
    overflow: hidden;
    img {
      position: absolute;
    }
  }
  .red-stripes {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    .red-stripe {
      display: flex;
      justify-content: space-around;
      height: 1.5rem;
      width: 100%;
      position: absolute;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      background-color: $secondary;
      top: 18rem;
      p {
        color: #fff;
        text-transform: uppercase;
        padding-top: 0.2rem;
      }
    }
    .red-stripe-2 {
      transform: rotate(-6.43deg);
    }
    .red-stripe-1 {
      transform: rotate(7.99deg);
    }
  }
  .title {
    margin-top: 20rem;
    font-weight: 700;
    font-size: 1.875rem;
    text-transform: uppercase;
  }
  .subtitle {
    margin-top: 0.625rem;
    margin-bottom: 0.75rem;
  }
  .countdown-bg-wrapper {
    display: flex;
    justify-content: space-between;
    width: 12rem;
    position: absolute;
    bottom: 4.85rem;
    .countdown-bg {
      height: 2.25rem;
      width: 1.5rem;
      background-color: #fff;
      z-index: 1;
    }
    .countdown-bg:nth-child(3) {
      margin-left: 0.5em;
    }
    .countdown-bg:nth-child(4) {
      margin-right: 0.5rem;
    }
  }
  .timer {
    z-index: 2;
    color: #000;
    margin-top: 0.2rem;
  }
  .view-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 14.625rem;
    height: 2.25rem;
    margin-top: 1.5rem;
    background-color: $secondary;
    border-radius: 2px;
    cursor: pointer;
    transition: 0.2s ease-in-out;
  }
  .view-button:hover {
    opacity: 0.8;
  }
}
</style>
