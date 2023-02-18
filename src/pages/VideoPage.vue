<script setup lang="ts">
import MainLayout from '../layout/Main.vue'
import Card from '../components/card.vue'
import Chips from '../components/chips.vue'

import {ref} from 'vue'
import MainMenu from "../layout/MainMenu.vue";

const chipListForFilter = ref([
    {
        name: 'ТЦ',
        value: ''
    },
    {
        name: 'ТЦ',
        value: ''
    },
    {
        name: 'ТЦ',
        value: ''
    },
    {
        name: 'ТЦ',
        value: ''
    },
    {
        name: 'ТЦ',
        value: ''
    },
    {
        name: 'ТЦ',
        value: ''
    },
    {
        name: 'ТЦ',
        value: ''
    },
    {
        name: 'ТЦ',
        value: ''
    },
    {
        name: 'ТЦ',
        value: ''
    },
])

</script>
<template>
    <MainMenu/>
    <div class="video-page">
        <main-layout>
            <card>
                <div class="video-page__filter">
                    <div class="video-page__filter-title">
                        Фильтр
                    </div>
                    <div class="video-page__block">
                        <chips v-for="item in chipListForFilter">
                            {{ item.name }}
                        </chips>
                    </div>
                </div>
            </card>
        </main-layout>
    </div>
</template>
<style lang="scss" scoped>
.video-page__filter-title {
    font-size: 20px;
    color: var(--main-text-color);
    margin-bottom: 25px;
}

.video-page__block {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>
