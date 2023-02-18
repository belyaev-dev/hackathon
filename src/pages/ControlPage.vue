<script setup lang="ts">
import MainLayout from '../layout/Main.vue'
import MainMenu from "../layout/MainMenu.vue";
import ItemsTree from "../components/ItemsTree.vue";

</script>
<template>
  <MainMenu/>
  <div class="page">
    <main-layout>
      <ItemsTree/>
    </main-layout>
  </div>
</template>

<style scoped>
</style>
