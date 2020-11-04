<template>
<div class="wrapper">
    <div id="app">
        <v-select :options="items" label="title" class="select" v-model="selectedLang">
            <template slot="option" slot-scope="item">
                <img class="language-flag" :src="item.img" /> {{ item.title }}
            </template>
            <template slot="selected-option" slot-scope="item">
                <img class="language-flag" :src="item.img" /> {{ item.title }}
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
            selectedLang: null,
        }
    },
    mounted() {
        this.selectedLang = this.options[0];
    },
    computed: {
        items() {
            return this.options.filter(i => i.title !== this.selectedLang?.title)
        }
    }
}
</script>

<style lang="scss">
@import "~/assets/styles/breakpoints.scss";
@import "~/assets/styles/colors.scss";
@import "~/node_modules/vue-select/src/scss/global/_variables.scss";

#app {
    width: 7.5rem;
    background: url(~assets/icons/arrow-small.svg) no-repeat scroll 6.5rem 0.725rem;
}

.vs__dropdown-menu {
    transform: translateY(0.75rem);
    background-color: #000;
    color: #fff;
    border: 1px solid $dark;
    border-radius: 4px;
    width: 7.5rem;
    min-width: 7.5rem;
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
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
}

.vs__dropdown-toggle {
    border: 1px solid $dark;
    padding: 0 0 2px;
    border-radius: 2px;
}

.language-flag {
    margin-right: 0.25rem;
}

.vs--single {
    height: 2rem;

    .vs__selected {
        background-color: transparent;
        border-color: transparent;
        font-weight: 500;
    }
}

.vs__open-indicator {
    display: none;
}

.vs__dropdown-option--highlight {
    background: #000;
    color: $primary;
}
</style>
