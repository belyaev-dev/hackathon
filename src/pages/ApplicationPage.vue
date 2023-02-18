<script setup lang="ts">
import MainLayout from '../layout/Main.vue'
import MainMenu from '../layout/MainMenu.vue'
import Card from '../components/card.vue'
import Preloader from '../components/preloader.vue'

import { useTasks } from '../hooks/useTasks'
import { onMounted } from 'vue';

const {
    state,
    fetchAllTasks
} = useTasks()

onMounted(async () => {
    await fetchAllTasks()
})


</script>
<template>
    <main-menu></main-menu>
    <main-layout>
    <div class="application-page">
        
            <div class="application-page__title">
                Уведомления
            </div>

            <div
            v-if="state.listAllTasks.length"
            class="application-page__list-task">
                <div
                v-for="item in state.listAllTasks"
                class="application-page__user">
                    <div class="task-user">
                        <img src="../assets/avatar.png" alt="" class="avatar">
                        <div class="task-user__info">
                            <span class="task-user__name"><b>Павел</b></span>
                            <span class="task-user__job-title">Уборщик</span>
                        </div>
                    </div>
                    <div class="list-task">
                        <card>{{ item.title }}</card>
                        <card>Начать</card>
                        <card :class="{'border-warning': item.status === 'IN_PROGRESS'}">В процессе</card>
                        <card :class="{'border-success': item.status === 'DONE'}">Выполнено</card>
                    </div>
                </div>
                <!--div
                
                class="application-page__user">
                    <div class="task-user">
                        <img src="../assets/avatar.png" alt="" class="avatar">
                        <div class="task-user__info">
                            <span class="task-user__name"><b>Павел</b></span>
                            <span class="task-user__job-title">Уборщик</span>
                        </div>
                    </div>
                    <div class="list-task">
                        <card>Здравствуйте! Я увидела, что мусор бросают не в урны</card>
                        <card>Начать</card>
                        <card class="border-warning">В процессе</card>
                        <card>Выполнено</card>
                    </div>
                </div>
                <div class="application-page__user">
                    <div class="task-user">
                        <img src="../assets/avatar.png" alt="" class="avatar">
                        <div class="task-user__info">
                            <span class="task-user__name"><b>Павел</b></span>
                            <span class="task-user__job-title">Уборщик</span>
                        </div>
                    </div>
                    <div class="list-task">
                        <card>Поздравляем с успешной регистрацией!</card>
                        <card>Начать</card>
                        <card>В процессе</card>
                        <card class="border-success">Выполнено</card>
                    </div>
                </div-->
            </div>
            <div class="application-page__preloader" v-else>
                <preloader  />
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
.application-page__list-task {
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.application-page__user {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 25px;
}

.list-task {
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.list-task .card {
    margin-right: 20px;
    color: var(--main-text-color);
}

.list-task .card:first-of-type {
    margin-right: 40px;
}

.task-user {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 80px;
}

.task-user img {
    margin-right: 10px;
    width: 60px;
    height: 60px;
}
.task-user__info {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
}

.border-warning {
    border: 1px solid #FF4C00;
}

.border-success {
    border: 1px solid #77C104;
}

.card {
    max-width: 320px;
}

.task-user__job-title {
    font-size: 10px;
}

.application-page__preloader {
    display: flex;
}
</style>
