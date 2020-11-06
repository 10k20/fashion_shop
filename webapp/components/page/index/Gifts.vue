<template>
<div class="wrapper">
    <div class="title">
      <div class="text">
        <p>Подарки и распродажи на Монро24!</p>
      </div>
      <div class="line"></div>
    </div>
    <div class="banner">
      <div class="title">
          <p>Эксклюзивные купоны новичкам!</p>
      </div>
      <div class="card">
        <div class="price">10 BYN</div>
        <div class="button-wrapper"><a href="" class="button">Получить</a></div>
      </div>
      <div class="circs">
        <a href="">Условия</a>
      </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/breakpoints.scss";
@import "~/assets/styles/colors.scss";

.wrapper {
  display: flex;
  flex-direction: column;
  width: 80rem;
  margin: 0 auto;
  padding-top: 4.25rem;

  .title {
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2.5rem;

    .text {
      font-size: 1.5rem;
      font-weight: 700;
      width: 35%;
      display: flex;
      margin-bottom: 2.25rem;
    }

    .line {
      height: 1px;
      background-color: $dark;
      width: 55%;
      margin-right: 2rem;
    }

  }
  .banner {
      background-color: #000;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .title {
          color: #fff;
          font-size: 1.875rem;
          margin: 2.5rem 0;
      }
      .card {
          .price {
              background-image: url();
          }
          .banner-wrapper {

          }
      }
  }
}
</style>
