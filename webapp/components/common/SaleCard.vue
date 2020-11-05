<template>
<div class="sail-card-wrapper">
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
    <div class="timer"></div>
    <div class="view-buttin">
        Смотреть все товары
    </div>
</div>
</template>

<style lang="scss" scoped>
@import "~/assets/styles/breakpoints.scss";
@import "~/assets/styles/colors.scss";

.sail-card-wrapper {
    height: 32rem;
    width: 23%;
    display: flex;
    flex-direction: column;
    position: relative;
    .red-stripes {
    
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        .red-stripe {
            display: flex;
            justify-content: space-around;
            height: 1.5rem;
            position: absolute;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            background-color: $secondary;
            p {
                color: #fff;
                text-transform: uppercase;
            }
        }
        .red-stripe-1 {
            transform: rotate(-6.43deg);
        }
        .red-stripe-2 {
            transform: rotate(7.99deg);
        }
    }

}
</style>
