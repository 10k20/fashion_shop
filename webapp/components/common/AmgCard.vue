<template>
<div class="card-wrapper">
    <div class="card-title">
        <p class="title">Mercedes C-Класс</p>
        <a href="" class="choose-link">Выбрать</a>
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

.card-wrapper {
    width: 30%;
    height: 13rem;
    background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0) 100%), url(~assets/img/amg-banner.jpg);
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    padding-left: 2rem;
    transition: 0.35s ease-in-out;

    .title {
        font-size: 2rem;
        font-weight: 500;
        color: #fff;
        width: 45%;
    }

    .choose-link {
        color: $primary;
    }
}

.card-wrapper:hover {
    background-size: 120%;
}
</style>
