<template>
<div class="index-container">
    <Banner />
    <Amg />
    <Sale />
    <Gifts />
    <About />
    <Articles />
    <Comments />
</div>
</template>

<script>
import Banner from "~/components/page/index/Banner";
import Amg from "~/components/page/index/Amg";
import Sale from "~/components/page/index/Sale";
import Gifts from "~/components/page/index/Gifts";
import About from "~/components/page/index/About";
import Articles from "~/components/page/index/Articles";
import Comments from "~/components/page/index/Comments";

export default {
    components: {
        Banner,
        Amg,
        Sale,
        Gifts,
        About,
        Articles,
        Comments,
    },
}
</script>

<style lang="scss" scoped>
</style>
