<template>
  <div class="container object-properties">
    <div class="item" v-for="item in ITEMS">
      <div class="label">{{ item.label }}</div>
      <div class="value">{{ item.value }}</div>
    </div>
  </div>
</template>

<script>

const ITEMS = [
  {
    label: 'Наименование помещения',
    value: 'А420'
  },
  {
    label: 'Общая площадь',
    value: '100 м²'
  },
  {
    label: 'Кадастровый номер',
    value: '1010-420'
  },
  {
    label: 'Кадастровая стоимость',
    value: '100 000 руб'
  },
  {
    label: 'Инвентарный номер',
    value: '771010420'
  },
  {
    label: 'Назначение',
    value: 'Торговая площадь'
  },
]

export default {
  name: 'ObjectProperties',
  data() {
    return {
      ITEMS
    }
  }
}
</script>

<style lang="scss">
.object-properties {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 2rem;
  padding: 1rem 2rem;
  //justify-content: space-evenly;

  .item {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .label {
    font-size: 1.25rem;
    font-weight: 300;
    flex: 1 1 0;
  }
  .value {
    font-size: 1.25rem;
    font-weight: 700;
  }
}
</style>
