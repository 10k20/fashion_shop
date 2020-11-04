<template>
<header class="header">
    <nav>
        <a href="#" class="pages-links top">Топ продаж</a>
        <a href="#" class="pages-links novelty">Новинки</a>
        <a href="#" class="pages-links unsere">Unsere Modelle
            <ul class="unsere_list">
                <li><a href="#">Kompaktwagen</a></li>
                <li><a href="#">Limousinen</a></li>
                <li><a href="#">T-Modelle / Kombis</a></li>
                <li><a href="#">Coupés</a></li>
                <li><a href="#">Cabriolets & Roadster</a></li>
                <li><a href="#">Vans</a></li>
                <li><a href="#">Mercedes-AMG</a></li>
                <li><a href="#">Mercedes-Maybach</a></li>
            </ul>
        </a>

    </nav>
    <div class="logo">
        <img src="~/assets/img/logo-1.png" alt="">
    </div>
    <div class="language-search">
        <div class="language">
            <SelectMenu />
        </div>
        <div class="search">
            <input type="text" class="search_input" placeholder="Поиск">
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
    align-items: center;
    width: 80rem;
    padding-top: 2.625rem;
    padding-bottom: 2.25rem;
    flex: 1;
    margin: 0 auto;
    position: relative;

    .language-search {
        display: flex;
        flex-direction: row;

        .language {
            margin-right: 1.25rem;
        }

        .search {
            .search_input {
                height: 2rem;
                padding-left: 0.625rem;
                border: 1px solid $dark;
                border-radius: 2px;
                background: url(~assets/icons/loupe.svg) no-repeat scroll 9.5rem 0.5rem;
            }
        }
    }

    nav {
        display: flex;
        justify-content: space-between;
        width: 20rem;

        .pages-links {
            font-weight: 500;
            color: #000;
            text-decoration: none;
            padding-bottom: 1rem;
            margin-top: 1rem;
        }

        ul {
            display: none;
            position: absolute;
            top: 5.5rem;
            list-style: none;
            background-color: #000;
            border-radius: 2px;
            padding: 1.25rem;
            padding-top: 0;
            z-index: 1;

            li {
                width: 12rem;
                float: none;
                display: list-item;
                position: relative;
                margin-top: 1.25rem;

                a {
                    text-decoration: none;
                    color: #fff;
                    transition: 0.075s;
                }

                a:hover {
                    color: #00A3FF;
                }
            }

        }

        .unsere:hover>.unsere_list {
            display: inherit;
        }
    }

}
</style>
