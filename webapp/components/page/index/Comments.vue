<template>
  <div class="wrapper">
    <div class="stats">
      <div v-show="choosenStats == 1" class="stats-questions stats-active">
        Вопросы({{ questions.length }})
      </div>
      <div
        @click="choosenStats = 1"
        v-show="choosenStats == 2"
        class="stats-questions"
      >
        Вопросы({{ questions.length }})
      </div>
      <div v-show="choosenStats == 2" class="stats-comments stats-active">
        Комментарии({{ comments.length }})
      </div>
      <div
        @click="choosenStats = 2"
        v-show="choosenStats == 1"
        class="stats-comments"
      >
        Комментарии({{ comments.length }})
      </div>
    </div>
    <div class="pointers">
      <img
        class="left-pointer pointer"
        @click="showPrev"
        src="~/assets/icons/left-pointer.svg"
      />
      <img
        class="right-pointer pointer"
        @click="showNext"
        src="~/assets/icons/right-pointer.svg"
      />
    </div>
    <VueSlickCarousel
      ref="carousel"
      :arrows="false"
      :dots="false"
      :infinite="true"
      :rows="2"
      :sliderPerRow="1"
      :draggable="true"
      :autoplay="true"
      class="comment-section"
    >
      <div class="slider" v-for="c in comments" :key="c.id">
        <Comment :comment="c" />
      </div>
    </VueSlickCarousel>
    <div class="add-comment">
      <button @click="visible = true">Оставить отзыв</button>
    </div>
    <div class="modal-overlay" v-show="visible"></div>
    <div class="modal" v-show="visible">
      <div class="modal-body">
        <div class="button-close" @click="visible = false"></div>
        <div class="modal-title">
          <div
            v-show="modalActive == 2"
            @click="modalActive = 1"
            class="modal-choose-comment"
          >
            Оставить отзыв
          </div>
          <div
            v-show="modalActive == 1"
            class="modal-choose-comment modal-active"
          >
            Оставить отзыв
          </div>
          <div
            v-show="modalActive == 1"
            @click="modalActive = 2"
            class="modal-choose-question"
          >
            Задать вопрос
          </div>
          <div
            v-show="modalActive == 2"
            class="modal-choose-question modal-active"
          >
            Задать вопрос
          </div>
        </div>
        <div class="rating">
          <div class="rating-title">Как вы оцениваете качество?</div>
          <div class="rating-stars">
            <img
              v-show="choosenRating > 0"
              @click="choosenRating = 1"
              src="~/assets/icons/rating-star.svg"
              alt=""
            />
            <img
              v-show="choosenRating > 1"
              @click="choosenRating = 2"
              src="~/assets/icons/rating-star.svg"
              alt=""
            />
            <img
              v-show="choosenRating == 1"
              @click="choosenRating = 2"
              src="~/assets/icons/rating-star-blank.svg"
              alt=""
            />
            <img
              v-show="choosenRating > 2"
              @click="choosenRating = 3"
              src="~/assets/icons/rating-star.svg"
              alt=""
            />
            <img
              v-show="choosenRating == 1 || choosenRating == 2"
              @click="choosenRating = 3"
              src="~/assets/icons/rating-star-blank.svg"
              alt=""
            />
            <img
              v-show="choosenRating > 3"
              @click="choosenRating = 4"
              src="~/assets/icons/rating-star.svg"
              alt=""
            />
            <img
              v-show="choosenRating <= 3"
              @click="choosenRating = 4"
              src="~/assets/icons/rating-star-blank.svg"
              alt=""
            />
            <img
              v-show="choosenRating == 5"
              src="~/assets/icons/rating-star.svg"
              alt=""
            />
            <img
              v-show="choosenRating !== 5"
              @click="choosenRating = 5"
              src="~/assets/icons/rating-star-blank.svg"
              alt=""
            />
          </div>
        </div>
        <div class="modal-input">
          <div class="label">Ваш отзыв:</div>
          <textarea v-model="commentText" />
        </div>
      </div>
      <div class="modal-line"></div>
      <div class="modal-footer">
        <div class="rules">
          <a href="#">Правила публикации отзывов</a>
        </div>
        <div class="buttons">
          <button @click="visible = false" class="cancel">Отменить</button>
          <button @click="submitComment()" class="accept">Отправить</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Comment from "~/components/common/Comment";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  data() {
    return {
      modalActive: 1,
      commentName: "",
      commentText: "",
      choosenRating: 4,
      visible: false,
      choosenStats: 2,
      questions: [],
      comments: [
        {
          rating: 2,
          name: "Петров Иван Петрович",
          commentImg: "",
          text:
            "В данный момент я не имею в своем распоряжении AMG GT, но мне довелось на нем почти целый месяц проездить, пока я был в Калифорнии. Знаете, это довольно редкая машина не только в России, но и в США. Версия, на которой гонял я, была с 8-цилиндровым битурбированным двигателем мощностью 520 лошадиных сил. За все время езды на ней, я понял, что если я и куплю такой автомобиль, то не на каждый день. Из-за низкой посадки и особенностей управления очень устаешь. Подвеска, конечно, классная, но из-за того, что дорога у тебя под попой находится буквально в нескольких сантиметрах, все изъяны чувствуются. Выехать на выходных и наказать всяких гонщиков, вот для чего нужно ее покупать. По салону что сказать – Мерседес. Качество чувствуется во всем, кожа везде, где только можно, включая торпедо. В моей комплектации не была предусмотрена вентиляция сидений, этого реально не хватало. Но, думаю, в Москве эта опция вообще будет лишняя. Скорость этой машины заставляет все сжиматься внутри, такой мощи мне еще не приходилось встречать, даже в Мерседесах. Это что-то за гранью фантастики! Удивительно, что я так и не нашел отзывов об этом автомобиле в рамках нашей страны. То ли никто не ездит на такой, то ли времени нет писать. Поэтому не спешу с покупкой, хотелось бы, естественно, узнать, как она себя ведет в наших-то условиях.",
        },
        {
          rating: 5,
          name: "Пупкин Иван Евгеньевич",
          commentImg: require("~/assets/img/avatar-1.png"),
          text:
            "Удивительно, как в одной машине немецкому производителю удалось совместить практичность элегантного четырехдверного автомобиля и мощь спорткара. С виду это современная машина и трудно догадаться, что из-под капота готовы вырваться 460 мустангов. В салон решился заглянуть не сразу, сначала пришлось перевести дух от вида машины.Внутри – тишина и идеальный комфорт. Стильное информационное торпедо, в котором я, как водитель с опытом, разобрался достаточно быстро. Для защиты много подушек безопасности. Багажник приятный и глубокий, задние сидения раскладываются, и он становится побольше, если это конечно надо владельцу такой машины. Водительское место адаптировано для максимального комфорта при езде не высоких скоростях: сидения с боковой поддержкой от верха до низа, идеальная для агрессивной езды форма рулевого колеса.",
        },
        {
          rating: 3,
          name: "Пупкин Иван Евгеньевич",
          commentImg: require("~/assets/img/avatar-2.png"),
          text:
            "Удивительно, как в одной машине немецкому производителю удалось совместить практичность элегантного четырехдверного автомобиля и мощь спорткара. С виду это современная машина и трудно догадаться, что из-под капота готовы вырваться 460 мустангов. В салон решился заглянуть не сразу, сначала пришлось перевести дух от вида машины.Внутри – тишина и идеальный комфорт. Стильное информационное торпедо, в котором я, как водитель с опытом, разобрался достаточно быстро. Для защиты много подушек безопасности. Багажник приятный и глубокий, задние сидения раскладываются, и он становится побольше, если это конечно надо владельцу такой машины. Водительское место адаптировано для максимального комфорта при езде не высоких скоростях: сидения с боковой поддержкой от верха до низа, идеальная для агрессивной езды форма рулевого колеса.",
        },
        {
          rating: 3,
          name: "Пупкин Иван Евгеньевич",
          commentImg: require("~/assets/img/avatar-1.png"),
          text:
            "Удивительно, как в одной машине немецкому производителю удалось совместить практичность элегантного четырехдверного автомобиля и мощь спорткара. С виду это современная машина и трудно догадаться, что из-под капота готовы вырваться 460 мустангов. В салон решился заглянуть не сразу, сначала пришлось перевести дух от вида машины.Внутри – тишина и идеальный комфорт. Стильное информационное торпедо, в котором я, как водитель с опытом, разобрался достаточно быстро. Для защиты много подушек безопасности. Багажник приятный и глубокий, задние сидения раскладываются, и он становится побольше, если это конечно надо владельцу такой машины. Водительское место адаптировано для максимального комфорта при езде не высоких скоростях: сидения с боковой поддержкой от верха до низа, идеальная для агрессивной езды форма рулевого колеса.",
        },
        {
          rating: 2,
          name: "Пупкин Иван Евгеньевич",
          commentImg: require("~/assets/img/avatar-1.png"),
          text:
            "Удивительно, как в одной машине немецкому производителю удалось совместить практичность элегантного четырехдверного автомобиля и мощь спорткара. С виду это современная машина и трудно догадаться, что из-под капота готовы вырваться 460 мустангов. В салон решился заглянуть не сразу, сначала пришлось перевести дух от вида машины.Внутри – тишина и идеальный комфорт. Стильное информационное торпедо, в котором я, как водитель с опытом, разобрался достаточно быстро. Для защиты много подушек безопасности. Багажник приятный и глубокий, задние сидения раскладываются, и он становится побольше, если это конечно надо владельцу такой машины. Водительское место адаптировано для максимального комфорта при езде не высоких скоростях: сидения с боковой поддержкой от верха до низа, идеальная для агрессивной езды форма рулевого колеса.",
        },
        {
          rating: 2,
          name: "Пупкин Иван Евгеньевич",
          commentImg: require("~/assets/img/avatar-1.png"),
          text:
            "Удивительно, как в одной машине немецкому производителю удалось совместить практичность элегантного четырехдверного автомобиля и мощь спорткара. С виду это современная машина и трудно догадаться, что из-под капота готовы вырваться 460 мустангов. В салон решился заглянуть не сразу, сначала пришлось перевести дух от вида машины.Внутри – тишина и идеальный комфорт. Стильное информационное торпедо, в котором я, как водитель с опытом, разобрался достаточно быстро. Для защиты много подушек безопасности. Багажник приятный и глубокий, задние сидения раскладываются, и он становится побольше, если это конечно надо владельцу такой машины. Водительское место адаптировано для максимального комфорта при езде не высоких скоростях: сидения с боковой поддержкой от верха до низа, идеальная для агрессивной езды форма рулевого колеса.",
        },
        {
          rating: 1,
          name: "Пупкин Иван Евгеньевич",
          commentImg: require("~/assets/img/avatar-2.png"),
          text:
            "Удивительно, как в одной машине немецкому производителю удалось совместить практичность элегантного четырехдверного автомобиля и мощь спорткара. С виду это современная машина и трудно догадаться, что из-под капота готовы вырваться 460 мустангов. В салон решился заглянуть не сразу, сначала пришлось перевести дух от вида машины.Внутри – тишина и идеальный комфорт. Стильное информационное торпедо, в котором я, как водитель с опытом, разобрался достаточно быстро. Для защиты много подушек безопасности. Багажник приятный и глубокий, задние сидения раскладываются, и он становится побольше, если это конечно надо владельцу такой машины. Водительское место адаптировано для максимального комфорта при езде не высоких скоростях: сидения с боковой поддержкой от верха до низа, идеальная для агрессивной езды форма рулевого колеса.",
        },
        {
          rating: 1,
          name: "Пупкин Иван Евгеньевич",
          commentImg: require("~/assets/img/avatar-1.png"),
          text:
            "Удивительно, как в одной машине немецкому производителю удалось совместить практичность элегантного четырехдверного автомобиля и мощь спорткара. С виду это современная машина и трудно догадаться, что из-под капота готовы вырваться 460 мустангов. В салон решился заглянуть не сразу, сначала пришлось перевести дух от вида машины.Внутри – тишина и идеальный комфорт. Стильное информационное торпедо, в котором я, как водитель с опытом, разобрался достаточно быстро. Для защиты много подушек безопасности. Багажник приятный и глубокий, задние сидения раскладываются, и он становится побольше, если это конечно надо владельцу такой машины. Водительское место адаптировано для максимального комфорта при езде не высоких скоростях: сидения с боковой поддержкой от верха до низа, идеальная для агрессивной езды форма рулевого колеса. ",
        },
        {
          rating: 1,
          name: "",
          commentImg: "",
          text:
            "Удивительно, как в одной машине немецкому производителю удалось совместить практичность элегантного четырехдверного автомобиля и мощь спорткара. С виду это современная машина и трудно догадаться, что из-под капота готовы вырваться 460 мустангов. В салон решился заглянуть не сразу, сначала пришлось перевести дух от вида машины.Внутри – тишина и идеальный комфорт. Стильное информационное торпедо, в котором я, как водитель с опытом, разобрался достаточно быстро. Для защиты много подушек безопасности. Багажник приятный и глубокий, задние сидения раскладываются, и он становится побольше, если это конечно надо владельцу такой машины. Водительское место адаптировано для максимального комфорта при езде не высоких скоростях: сидения с боковой поддержкой от верха до низа, идеальная для агрессивной езды форма рулевого колеса. ",
        },
      ],
    };
  },
  components: {
    VueSlickCarousel,
    Comment,
  },
  methods: {
    showNext() {
      this.$refs.carousel.next();
    },
    showPrev() {
      this.$refs.carousel.prev();
    },
    submitComment() {
      this.comments.push({
        rating: this.choosenRating,
        name: "",
        commentImg: "",
        text: this.commentText,
      });
      this.visible = false;
    },
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
  margin-top: 4.25rem;
  justify-content: space-between;
  position: relative;
  margin-bottom: 3.125rem;
  .stats {
    display: flex;
    margin-bottom: 1.25rem;
    &-questions {
      cursor: pointer;
    }
    &-comments {
      margin-left: 1.25rem;
      cursor: pointer;
    }
    &-active {
      font-weight: 700;
    }
  }
  .comment-section {
    padding: 2.5rem 7rem 2.5rem 2.45rem;
    background-color: #000;
    position: relative;
  }
  .slider:focus {
    outline: none;
  }
  .pointers {
    display: flex;
    position: absolute;
    width: 6rem;
    justify-content: space-between;
    right: 2rem;
    top: 4.5rem;
    z-index: 2;
    .pointer {
      cursor: pointer;
    }
  }
  .add-comment {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    button {
      outline: none;
      background-color: $primary;
      width: 21rem;
      height: 2.25rem;
      border: none;
      border-radius: 2px;
      color: #fff;
      margin-top: 1.875rem;
      cursor: pointer;
    }
    button:active {
      background-color: $primary-active;
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
  z-index: 4;
  opacity: 0.6;
}
.modal {
  width: 49.5rem;
  color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 10%;
  left: 26.5%;
  z-index: 5;
  &-body {
    display: flex;
    flex-direction: column;
    background-color: #000;
    padding: 1.5rem 3.125rem;
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
      justify-content: center;
      .modal-choose-comment {
        width: 11.875rem;
        padding: 0.5rem 1rem;
        border-bottom: 1px solid $dark;
        text-transform: uppercase;
        text-align: center;
        cursor: pointer;
      }
      .modal-choose-question {
        width: 11.875rem;
        padding: 0.5rem 1rem;
        border-bottom: 1px solid $dark;
        text-align: center;
        text-transform: uppercase;
        cursor: pointer;
      }
    }
    .rating {
      &-title {
        margin-top: 3.125rem;
        margin-bottom: 1.5rem;
      }
      &-stars {
        img {
          cursor: pointer;
          width: 2.8rem;
          height: 2.8rem;
        }
      }
    }
    .modal-input {
      margin-top: 2rem;
      margin-bottom: 3.125rem;
      .label {
        padding: 0.5rem 0rem;
      }
      textarea {
        font-family: "Roboto", sans-serif;
        min-height: 15.375rem;
        height: auto;
        background-color: #222222;
        color: #fff;
        padding: 1.25rem;
        max-width: 100%;
        min-width: 100%;
        overflow: auto;
        resize: none;
        border: none;
      }
    }
  }
  &-line {
    height: 1px;
    width: 100%;
    background-color: #4e4e4e;
  }
  &-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 3.125rem;
    background-color: #000;
    .rules {
      a {
        color: #fff;
      }
    }
    .buttons {
      .accept {
        width: 10.875rem;
        height: 2.75rem;
        background-color: $primary;
        color: #fff;
        outline: none;
        border: none;
        border-radius: 2px;
        cursor: pointer;
      }
      .accept:active {
        background-color: $primary-active;
      }
      .cancel {
        width: 8.875rem;
        height: 2.75rem;
        color: #fff;
        outline: none;
        border: none;
        background-color: transparent;
        cursor: pointer;
      }
    }
  }
}
.modal-active {
  font-weight: 700;
  border-bottom: 1px solid $dark-active !important;
}
</style>



