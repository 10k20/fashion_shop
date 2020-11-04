<template>
<div class="wrapper">
    <div class="title">
        <div class="text">
            <p>Распродажа</p>
        </div>
        <div class="line"></div>
        <div class="arrows">
            <img src="~/assets/icons/arrow-big.svg" alt="" class="arrow-left">
            <img src="~/assets/icons/arrow-big.svg" alt="" class="arrow-right">
        </div>
    </div>
    <div class="sail-cards">
        <SailCard />
        <SailCard />
        <SailCard />
        <SailCard />
    </div>
</div>
</template>

<script>
import SailCard from "~/Components/common/SailCard"
export default {
    components: {
        SailCard,
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

    .sail-cards {
        display: flex;
        justify-content: space-between;
    }
}
</style>
