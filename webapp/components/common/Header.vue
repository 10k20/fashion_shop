<template>
<header class="header">
    <nav>
        <a href="#" class="pages-links">Топ продаж</a>
        <a href="#" class="pages-links">Новинки</a>
        <a href="#" class="pages-links">Unsere Modelle</a>
    </nav>
    <div class="language-search">
        <div class="language">
            <SelectMenu />
        </div>
        <div class="search">
            <input type="text">
        </div>
    </div>
</header>
</template>

<script>
import SelectMenu from "~/components/basic/SelectMenu";
export default {
    components: {
        SelectMenu
    },
    methods: {
        onValueSelect(value) {
            this.selectedWrestler = value;
        }
    },
}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/breakpoints.scss";
@import "~/assets/styles/colors.scss";

.header {
    display: flex;
    justify-content: space-between;
    align-content: flex-end;
    width: 80rem;
    margin: 0 auto;
    padding: 3em 1em 1.5em;

    .language-search {
        display: flex;
        flex-direction: row;
    }
}
</style>
