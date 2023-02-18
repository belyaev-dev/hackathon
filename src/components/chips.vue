<script setup lang="ts">import { computed } from 'vue';


type Status = 'success' | 'warning'

const {status} = defineProps<{
    status?: Status
}>()


</script>
<template>
    <div
    class="chips"
    :class="{
        'chips__success': status === 'success',
        'chips__warning': status === 'warning'
    }">
        <span><slot></slot></span>
    </div>
</template>
<style lang="scss" scoped>
.chips {
    max-width: 150px;
    min-width: 115px;
    border-radius: 100px;
    border: 1px solid white;
    padding: 7px 10px;
    text-align: center;
    margin: 0 5px 20px 5px;
    cursor: pointer;
    transition: .4s ease;

    &__success {
        color: #77C104;
    }

    &__warning {
        color: #FF4D00;

    }

    &:hover {
        background-color: var(--text-bg-color);
    }
}



</style>