<script setup lang="ts">
import MainMenu from "../layout/MainMenu.vue";
import ItemsTree from "../components/ItemsTree.vue";
import ObjectProperties from "../components/ObjectProperties.vue";
import Chips from "../components/chips.vue";
import Card from "../components/card.vue";

const ITEMS = [
  {
    label: 'Статус',
    value: 'Сдан в аренду'
  },
  {
    label: 'Счёт оплаты',
    value: 'Привязан'
  },
  {
    label: 'Репутация',
    value: 'Платит в срок'
  },
  {
    label: 'Договор истекает',
    value: 'Через 3 года 2 месяца'
  },
]

</script>
<template>
  <MainMenu/>
  <div class="page-profile">
    <div class="page-title">Мой профиль</div>
    <div class="row">
      <card class="profile">
        <img class="avatar" src="../assets/avatar.png" alt="">
        <div class="info">
          <div class="name">Марина Марьева</div>
          <div class="email">marieva@yandex.ru</div>
          <div class="property">8 объектов</div>
          <div class="property">4 партнера</div>
        </div>
        <div class="actions">
          <div class="action">Редактировать профиль</div>
          <div class="action">Язык</div>
          <div class="action">Изменить пароль</div>
          <div class="action">Уведомления</div>
          <div class="action">Добавить партнера</div>
        </div>
      </card>
    </div>

    <div class="row">
      <div class="objects">
        <card>
          <div class="title">Объекты</div>
          <chips>Oz Mall, Крылатая, 9</chips>
          <chips>Ул. Рашпилевская, 19</chips>
          <chips>Ул. Гоголя, 80</chips>
        </card>
        <div class="btn">Добавить объект</div>
      </div>

      <div class="objects">
        <card>
          <div class="title">Документы</div>
          <chips>Договоры</chips>
          <chips>Квитанции</chips>
          <chips>Проверки</chips>
          <chips>Техническая документация</chips>
        </card>
        <div class="btn">Добавить объект</div>
      </div>

      <div class="objects">
        <card>
          <div class="title">Отчеты</div>
          <chips>Общая статистика</chips>
          <chips>Оборот</chips>
          <chips>Чистая прибыль</chips>
          <chips>Расходы</chips>
        </card>
        <div class="btn">Добавить объект</div>
      </div>
    </div>

  </div>
</template>

<style lang="scss">
.page-profile {
  .page-title {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }

  .objects {
    flex: 1 1 30%;
    display: flex;
    flex-direction: column;
    gap: .75rem;

    .card {
      flex: 1 0 0;
      display: flex;
      flex-direction: column;
      gap: .75rem;
      padding: 1.5rem 2rem 3rem;
    }

    .chips {
      max-width: none;
      margin: 0;
    }

    .title {
      font-size: 1.25rem;
      font-weight: 300;
    }
  }

  .profile {
    display: flex;
    gap: 2rem;
    padding: 1.5rem 2rem;
    align-items: flex-start;

    .avatar {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }

    .info {
      .name {
        font-size: 1.25rem;
        font-weight: 500;
      }
      .email {
        font-size: .875rem;
        margin-bottom: 1rem;
      }
      .property {
        font-size: 1.25rem;
        font-weight: 500;
      }
    }

    .actions {
      display: grid;
      gap: .5rem 1rem;
      grid-template-columns: repeat(2, 1fr);

      >* {
        background-color: #2A2D46;
        border-radius: 2rem;
        font-size: .75rem;
        text-align: center;
        padding: .5rem 1rem;
        transition: all .2s;
        cursor: pointer;

        &:hover {
          background-color: hsl(234, 25%, 32%);
        }
      }
    }
  }
}
</style>
