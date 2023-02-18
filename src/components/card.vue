<script setup lang="ts">


</script>
<template>
    <div class="card">
        <slot></slot>
    </div>
</template>
<style lang="scss" scoped>

.card {
    width: 320px;

    border: 1px solid var(--main-border-color);
    border-radius: 12px;
    padding: 20px;
}
</style>
