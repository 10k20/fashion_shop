<template>
  <div class="wrapper">
    <div class="about">
      <div class="about-title">
        <p>О нас</p>
        <div class="about-line"></div>
      </div>
      <div class="about-articles">
        <AboutCard
          class="about-article"
          v-for="aboutCard in aboutCards"
          :key="aboutCard.id"
          :aboutCardImage="aboutCard.aboutCardImage"
          :aboutCardTitle="aboutCard.aboutCardTitle"
          :aboutCardText="aboutCard.aboutCardText"
          :aboutCardButtonText="aboutCard.aboutCardButtonText"
        />
      </div>
    </div>
    <div class="history">
      <div class="history-title">
        <p>История</p>
        <div class="history-line"></div>
      </div>
    </div>
  </div>
</template>

<script>
import AboutCard from "~/components/common/AboutCard";
export default {
  data() {
    return {
      aboutCards: [
        {
          aboutCardImage: require("~/assets/img/about-1.jpg"),
          aboutCardTitle:
            "Для ценителей. Под Минском прошел слет легендарных Mercedes-Benz",
          aboutCardText:
            "Под Минском прошел слет легенды лихих 90-х — Mercedes-Benz W140. Даже в 2020 году эта марка авто не нуждается в особом представлении, хотя в последний раз она сошла с конвейера еще в июле 1998 года. Вчера автомобильное сообщество W140 Belarus устроило республиканский слет.",
          aboutCardButtonText: "Подробнее",
        },
        {
          aboutCardImage: require("~/assets/img/about-1.jpg"),
          aboutCardTitle:
            "Mercedes снова готовит G-Class с огромным дорожным просветом",
          aboutCardText:
            "Представленный пять лет назад Mercedes G500/G550 4×4² (еще в старом кузове) не останется единственным «Геликом» с огромными колесами и внушительным клиренсом. Шпионские фотографии Carscoops подтверждают, что скоро на рынок выйдет преемник.",
          aboutCardButtonText: "Узнать подробнее",
        },
        {
          aboutCardImage: require("~/assets/img/about-1.jpg"),
          aboutCardTitle:
            "Камеры вместо зеркал теперь будут ставить и на строительные грузовики Mercedes-Benz",
          aboutCardText:
            "Коронавирус нарушил планы всех производителей, но жизнь не останавливается. Несмотря на отмену крупнейшего салона коммерческих автомобилей IAA 2020, ведущие производители презентуют свои новинки в режиме онлайн.",
          aboutCardButtonText: "Подробнее",
        },
      ],
    };
  },
  components: { AboutCard },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  width: 80rem;
  margin: 0 auto;
  padding-top: 4.25rem;
  justify-content: space-between;
  .about {
    width: 60%;
    display: flex;
    flex-direction: column;
    position: relative;
    .about-title {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
      p {
        font-weight: 700;
        width: 10%;
      }
      .about-line {
        width: 90%;
        height: 1px;
        background-color: #000;
      }
    }
    .about-articles {
      display: flex;
      flex-direction: column;
      width: 100%;
      .about-article {
        width: 100%;
      }
    }
  }
  .history {
    width: 30%;
    display: flex;
    .history-title {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      position: relative;
      margin-bottom: 2rem;
      p {
        font-weight: 700;
        width: 10%;
      }
      .history-line {
        width: 70%;
        height: 1px;
        background-color: #000;
      }
    }
  }
}
</style>
