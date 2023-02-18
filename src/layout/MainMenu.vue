<template>
<div class="main-menu">
  <div class="header">LEASEASY</div>
  <div class="items">
    <div class="item" v-for="item in MENU" @click="openPage(item)">
      <i></i><div class="label">{{ item.title }}</div>
    </div>
  </div>
  <div class="footer"></div>
</div>
</template>

<script>

const MENU = [
  {
    page: '/',
    title: 'Дашборд'
  },
  {
    page: '/tasks',
    title: 'Задачи'
  },
  {
    page: '/rent',
    title: 'Аренда'
  },
  {
    page: '/control',
    title: 'Управление'
  },
  {
    page: '/video',
    title: 'Видеонаблюдение'
  },
]

export default {
  name: 'MainMenu',
  data() {
    return {
      MENU
    }
  },
  methods: {
    openPage(item) {
      this.$router.push(item.page)
    }
  }
}
</script>

<style lang="scss">

</style>
