<script setup lang="ts"></script>
<template>
    <div class="main-layout">
        <slot></slot>
    </div>
</template>
<style lang="scss" scoped>
.main-layout {
    margin: 0 auto;
    width: 80%;

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
</style>