<template>
  <div class="wrapper">
    <div class="models">
      <ModelButton
        v-for="modelButton in modelButtons"
        :key="modelButton.id"
        :model="modelButton.model"
      />
    </div>
    <div class="articles">
      <Article
        v-for="article in articles"
        :key="article.id"
        :articleTitle="article.articleTitle"
        :articleText="article.articleText"
      />
    </div>
  </div>
</template>

<script>
import ModelButton from "~/components/basic/ModelButton";
import Article from "~/components/common/Article";
export default {
  components: {
    ModelButton,
    Article,
  },
  data() {
    return {
      modelButtons: [
        {
          model: "Kompaktwagen",
        },
        {
          model: "Limousinen",
        },
        {
          model: "SUVs",
        },
        {
          model: "Kompaktwagen",
        },
        {
          model: "Limousinen",
        },
        {
          model: "SUVs",
        },
        {
          model: "Kompaktwagen",
        },
        {
          model: "Limousinen",
        },
        {
          model: "SUVs",
        },
        {
          model: "Kompaktwagen",
        },
        {
          model: "Limousinen",
        },
        {
          model: "SUVs",
        },
        {
          model: "Kompaktwagen",
        },
        {
          model: "Limousinen",
        },
        {
          model: "SUVs",
        },
        {
          model: "Kompaktwagen",
        },
        {
          model: "Limousinen",
        },
        {
          model: "SUVs",
        },
      ],
      articles: [
        {
          articleTitle:
            "История бренда: 130 лет Mercedes-Benz Легендарный бренд, давший начало всему автопрому, сегодня отмечает юбилей",
          articleText: `Марка Mercedes-Benz для автолюбителей со всего
мира является не только одним из самых
узнаваемых и значимых производителей 
автомобилей в мире, но на прямую ассоциируется 
с самим понятием "автомобиль". И это оправданно
как минимум историческим значением бренда: 
ровно 130 лет назад немецкий инженер Карл Бенц 
официально оформил патент на «транспортное 
средство с бензиновым двигателем»
            
.Событие, которое положило начало истории 
не только немецкой марки, но и всего мирового 
автопрома, произошло 29 января 1886 года. 
Именно в этот день немецкий инженер и новатор 
по фамилии Бенц получил патент № 37435 на свое 
творение - первое в мире авто с бензиновым 
мотором.
            
Конечно, изобретение Бенца сильно отличалось 
от современного образа автомобиля: по сути, 
он установил разработанный им с нуля 
четырёхтактный двигатель на трёхколёсный 
велосипед.`,
        },
        {
          articleTitle: "Логотип компании Mercedes",
          articleText: `Марка Mercedes-Benz для автолюбителей со всего
мира является не только одним из самых
узнаваемых и значимых производителей 
автомобилей в мире, но на прямую ассоциируется 
с самим понятием "автомобиль". И это оправданно
как минимум историческим значением бренда: 
ровно 130 лет назад немецкий инженер Карл Бенц 
официально оформил патент на «транспортное 
средство с бензиновым двигателем»
            
.Событие, которое положило начало истории 
не только немецкой марки, но и всего мирового 
автопрома, произошло 29 января 1886 года. 
Именно в этот день немецкий инженер и новатор 
по фамилии Бенц получил патент № 37435 на свое 
творение - первое в мире авто с бензиновым 
мотором.`,
        },
        {
          articleTitle: "Реклама системы BlueEFFICIENCY",
          articleText: `Марка Mercedes-Benz для автолюбителей со всего
мира является не только одним из самых
узнаваемых и значимых производителей 
автомобилей в мире, но на прямую ассоциируется 
с самим понятием "автомобиль". И это оправданно
как минимум историческим значением бренда: 
ровно 130 лет назад немецкий инженер Карл Бенц 
официально оформил патент на «транспортное 
средство с бензиновым двигателем»`,
        },
      ],
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
  justify-content: space-between;
  .models {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .articles {
    display: flex;
    justify-content: space-between;
  }
}
</style>
