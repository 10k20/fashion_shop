<template>
<div class="wrapper">
    <div class="title">
        <div class="text">
            <p>Mercedes amg</p>
        </div>
        <div class="line"></div>
        <div class="arrows">
            <img src="~/assets/icons/arrow-big.svg" alt="" class="arrow-left">
            <img src="~/assets/icons/arrow-big.svg" alt="" class="arrow-right">
        </div>
    </div>
    <div class="banners">
        <AmgCard />
        <AmgCard />
        <AmgCard />
    </div>
</div>
</template>

<script>
import AmgCard from "~/components/common/AmgCard"
export default {
    components: {
        AmgCard,
    }
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
            width: 15%;
            display: flex;
        }

        .line {
            height: 1px;
            background-color: $dark;
            width: 60%;
        }

        .arrows {
            width: 7%;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .arrow-left {
                transform: rotate(180deg);
            }

            img {
                cursor: pointer;
            }
        }
    }

    .banners {
        display: flex;
        justify-content: space-between;

    }
}
</style>
