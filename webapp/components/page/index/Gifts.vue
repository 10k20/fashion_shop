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
        <div class="price-img">
          <div class="price">10 BYN</div>
        </div>
        <div class="button-img">
          <div class="button-wrapper" @click="visible = true">
            <p>Получить!</p>
          </div>
        </div>
      </div>
      <div class="circs" @click="visible = true">
        <p>Условия</p>
      </div>
    </div>
    <div class="modal-overlay" v-show="visible"></div>
    <div class="modal" v-show="visible">
      <div class="modal-header">
        <div class="button-close" @click="visible = false"></div>
        <div class="modal-title"><p>Условия</p></div>
      </div>
      <div class="modal-body">
        <div class="modal-subtitle">
          <p>
            Купон распространяется только на клиентов осуществивших покупку в
            течении 2000 года.
          </p>
        </div>
        <input type="email" class="modal-input" placeholder="E-mail" />
        <div class="modal-buttons">
          <button class="accept">Забрать купон</button>
          <button class="cancel" @click="visible = false">Отменить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
};
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
      display: flex;
      margin-bottom: 2.5rem;
      .price-img {
        background-image: url(~assets/img/ticket-1.png);
        height: 7.75rem;
        width: 24.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        .price {
          font-size: 4rem;
          color: #000;
          font-weight: 900;
        }
      }
      .button-img {
        background-image: url(~assets/img/ticket-2.png);
        width: 17.9rem;
        height: 7.75rem;
        display: flex;
        justify-content: center;
        align-items: center;
        .button-wrapper {
          height: 2.25rem;
          width: 11.625rem;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(93.01deg, #00a3ff 3.99%, #0078bc 81.61%);
          box-shadow: 0 0 0 0 rgba(#00a3ff, 1);
          border-radius: 2px;
          cursor: pointer;
          transition: 0.2s ease-in-out;
          -webkit-animation: pulse 2s infinite;
          border: none;
        }
        .button-wrapper:hover {
          font-size: 1.1rem;
        }
      }
    }
    .circs {
      margin-bottom: 1.5rem;
      p {
        color: #fff;
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
}
.modal-overlay {
  top: 0;
  left: 0;
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: #000;
  z-index: 5;
  opacity: 0.6;
}
.modal {
  width: 21.875rem;
  height: 19rem;
  color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 20%;
  left: 39.5%;
  z-index: 6;
  .modal-header {
    display: flex;
    flex-direction: column;
    background-color: #000;
    margin-bottom: 2px;
    padding: 1.5rem;
    .button-close {
      position: absolute;
      height: 0.75rem;
      width: 0.75rem;
      top: 0.5rem;
      right: 0.6rem;
      background-image: url(~assets/icons/close.svg);
      cursor: pointer;
    }
    .modal-title {
      display: flex;
      align-items: center;
      margin-left: 1rem;
      p {
        text-transform: uppercase;
        font-weight: 700;
      }
    }
  }
  .modal-body {
    display: flex;
    flex-direction: column;
    background-color: #000;
    padding: 2.5rem;
    .modal-subtitle {
      margin-bottom: 1.5rem;
    }
    .modal-input {
      background-color: #000;
      border: 1px solid #fff;
      border-radius: 2px;
      padding: 0.5rem;
      margin-bottom: 1.5rem;
      color: #fff;
    }
    .modal-buttons {
      display: flex;
      .accept {
        width: 45%;
        border: none;
        outline: none;
        padding: 0.5rem;
        border-radius: 2px;
        cursor: pointer;
      }
      .cancel {
        width: 35%;
        border: none;
        outline: none;
        background-color: transparent;
        cursor: pointer;
        color: #afafb1;
        margin-left: 1rem;
      }
    }
  }
}
@-webkit-keyframes pulse {
  0% {
  }
  70% {
    box-shadow: 0 0 60px rgba(#00a3ff, 0);
  }
  100% {
    box-shadow: 0 0 0 rgba(#00a3ff, 0);
  }
}
</style>
