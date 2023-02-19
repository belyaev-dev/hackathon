<script setup lang="ts">
import MainLayout from '../layout/Main.vue'
import MainMenu from "../layout/MainMenu.vue";
import ItemsTree from "../components/ItemsTree.vue";
import ObjectProperties from "../components/ObjectProperties.vue";
import Chips from "../components/chips.vue";

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
  <div class="page-control">

    <div class="row">
      <ItemsTree/>
      <div class="container object-view" style="flex: 1 1 0;display:flex;flex-direction: column;">

        <div class="top">
          <div class="name">A420</div>
          <chips>Наблюдение</chips>
        </div>
        <div class="map">
          <img src="../assets/1-dfloor1.png" alt="">
        </div>
        <div class="actions">
          <div class="action" v-for="item in ITEMS">
            <div class="label">{{ item.label }}</div>
            <chips class="value">{{ item.value }}</chips>
          </div>
        </div>

      </div>

      <ObjectProperties style="flex: 1 1 100%;"/>
    </div>

  </div>
</template>

<style lang="scss">
.page-control {
  .object-view {
    display: flex;

    .top {
      display: flex;
      justify-content: space-between;
      padding: 1rem 2rem;

      .name {
        font-size: 2rem;
        font-weight: 600;
      }
    }

    .map {
      flex: 1 1 100%;

      img {
        width: 100%;
      }
    }

    .actions {
      display: flex;
      justify-content: space-evenly;
      gap: 2rem;
      padding: 1rem 2rem;

      .action {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .label {
        font-size: 1.25rem;
        font-weight: 300;
        flex: 1 1 0;
        text-align: center;
      }
      .value {
        max-width: none;
      }
    }
  }
}
</style>
