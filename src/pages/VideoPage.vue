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
        name: 'Продажа',
        value: ''
    },
    {
        name: 'Продажа',
        value: ''
    },
    {
        name: 'ООО',
        value: ''
    },
    {
        name: 'Продажа',
        value: ''
    },
    {
        name: 'Продажа',
        value: ''
    },
    {
        name: 'Аренда',
        value: ''
    },
    {
        name: 'Продажа',
        value: ''
    },
    {
        name: 'Продажа',
        value: ''
    },
])

</script>
<template>
    <MainMenu/>
    <div class="video-page">
        <main-layout>
            <div class="video-page-filter">
                <card>
                    <div class="video-page__filter">
                        <div class="video-page__filter-title">
                            Фильтр
                        </div>
                        <div class="video-page__container-filter">
                            <div class="video-page__block">
                                <chips>ТЦ</chips>
                                <chips>Продажа</chips>
                                <chips>Продажа</chips>
                            </div>
                            <div class="video-page__block">
                                <chips>ООО</chips>
                                <chips>Продажа</chips>
                                <chips>Продажа</chips>
                            </div>
                            <div class="video-page__block">
                                <chips>Аренда</chips>
                                <chips>Продажа</chips>
                                <chips>Продажа</chips>
                            </div>
                        </div>
                    </div>
                </card>
                <div class="btn">Добавить объект</div>
            </div>
            <div class="camcorder">
                <card>
                    <img src="../assets/camcoder.png" alt="">
                    <span>ул. Рашпилевская 19</span>
                </card>
            </div>
        </main-layout>
    </div>
</template>
<style lang="scss" scoped>
.video-page__filter-title {
    font-size: 20px;
    color: var(--main-text-color);
    margin-bottom: 25px;
}

.video-page-filter .card {
    max-width: 320px;
    margin-bottom: 15px;
}

.video-page__block {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: column;
    margin-bottom: 20px;
}

.video-page .main-layout {
    align-items: flex-start;
}

.camcorder {
    margin-left: 15px;
}

.camcorder .card {
    padding: 4rem 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.camcorder .card img {
    margin-bottom: 20px;
}

.video-page__container-filter {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>
