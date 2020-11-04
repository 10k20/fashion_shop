<template>
<div class="wrapper">
    <div class="banner-text">
        <p class="banner-text_1">
            Sale
        </p>
        <p class="banner-text_2">
            10%
        </p>
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
    align-items: center;
    height: 28.75rem;
    background-image:
        linear-gradient(90deg, rgba(0, 0, 0, 0.6) 0%, rgba(9, 9, 121, 0) 50%, rgba(0, 0, 0, 0.6) 100%),
        url(~assets/img/banner-1.jpg);

    background-size: cover;
    background-repeat: no-repeat;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    color: #fff;
    margin: 0 auto;
    position: relative;
}

.banner-text {
    width: 80rem;
    display: flex;
    flex-direction: column;
    margin: 0 auto;

}

.banner-text_1 {
    font-size: 4.5rem;
    text-align: right;
}

.banner-text_2 {
    font-size: 9rem;
    text-align: right;
}
</style>
