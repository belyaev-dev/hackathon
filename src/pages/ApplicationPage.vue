<script setup lang="ts">
import MainLayout from '../layout/Main.vue'
import MainMenu from '../layout/MainMenu.vue'
import Card from '../components/card.vue'
</script>
<template>
    <main-menu></main-menu>
    <main-layout>
    <div class="application-page">
        
            <div class="application-page__title">
                Уведомления
            </div>

            <div class="application-page__list-task">
                <div class="application-page__user">
                    <div class="task-user">
                        <img src="" alt="" class="avatar">
                        <div class="task-user__info">
                            <span class="task-user__name"><b>павел</b></span>
                            <span class="task-user__info">Уборщик</span>
                        </div>
                    </div>
                    <div class="list-task">
                        <card>Я ничего не видел они сами наверное</card>
                        <card>Начать</card>
                        <card>В процессе</card>
                        <card>Выполнено</card>
                    </div>
                </div>
                <div class="application-page__user">
                    <div class="task-user">
                        <img src="" alt="" class="avatar">
                        <div class="task-user__info">
                            <span class="task-user__name"><b>павел</b></span>
                            <span class="task-user__info">Уборщик</span>
                        </div>
                    </div>
                    <div class="list-task">
                        <card>Я ничего не видел они сами наверное</card>
                        <card>Начать</card>
                        <card>В процессе</card>
                        <card>Выполнено</card>
                    </div>
                </div>
                <div class="application-page__user">
                    <div class="task-user">
                        <img src="" alt="" class="avatar">
                        <div class="task-user__info">
                            <span class="task-user__name"><b>павел</b></span>
                            <span class="task-user__info">Уборщик</span>
                        </div>
                    </div>
                    <div class="list-task">
                        <card>Я ничего не видел они сами наверное</card>
                        <card>Начать</card>
                        <card>В процессе</card>
                        <card>Выполнено</card>
                    </div>
                </div>
            </div>
    </div>
</main-layout>
</template>
<style lang="scss" scoped>
.application-page {
width: 100%;
}
.application-page__title {
    margin: 0 0 auto;
        color: var(--main-text-color);
        font-size: 25px;
}
</style>
