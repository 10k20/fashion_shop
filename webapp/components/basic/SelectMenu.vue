<template>
<div class="wrapper">
    <div id="app">
        <v-select :options="options" label="title" class="select" v-model="selectedLang">
            <template slot="option" slot-scope="option">
                <img class="language-flag" :src="option.img" /> {{ option.title }}
            </template>
            <template slot="selected-option" slot-scope="option">
                <img class="language-flag" :src="option.img" /> {{ option.title }}
            </template>
        </v-select>
    </div>
</div>
</template>

<script>
import Vue from 'vue'
import vSelect from 'vue-select'
Vue.component('v-select', vSelect)
import 'vue-select/dist/vue-select.css';

export default {
    data() {
        return {
            options: [{
                    title: 'RU',
                    img: require('../../assets/icons/flags/RU.svg'),
                },
                {
                    title: 'KZ',
                    img: require('../../assets/icons/flags/KZ.svg')
                },
                {
                    title: 'UA',
                    img: require('../../assets/icons/flags/UA.svg')
                },
                {
                    title: 'USA',
                    img: require('../../assets/icons/flags/USA.svg')
                },
            ],
            clearSearchOnSelect: {
                type: Boolean,
                default: false
            },
            selectedLang: null,
        }
    },
    mounted() {
        this.selectedLang = this.options[0];
    }
}
</script>

<style lang="scss">
@import "~/assets/styles/breakpoints.scss";
@import "~/assets/styles/colors.scss";
@import "~/node_modules/vue-select/src/scss/global/_variables.scss";

#app {
    width: 7.5rem;
    margin-right: 1.5rem;
}

.vs__dropdown-menu {
    transform: translateY(0.75rem);
    background-color: #000;
    color: #fff;
    border: 1px solid $dark;
    border-radius: 3px;
}

.vs__dropdown-option {
    color: #fff;
    padding: 3px 10px;
}

.vs__clear {
    display: none;
}

.vs--open .vs__dropdown-toggle {
    border: 1px solid $dark;
    border-bottom-color: $dark;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
}

.vs__dropdown-toggle {
    border: 1px solid $dark;
}

.language-flag {
    margin-right: 0.25rem;
}

.vs--single {
    .vs__selected {
        background-color: transparent;
        border-color: transparent;
        font-weight: 500;
    }
}
</style>
