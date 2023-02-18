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
        <slot></slot>
    </div>
</template>
<style lang="scss" scoped>
.chips {
    border-radius: 100px;
    border: 1ox solid white;
    padding: 7px 10px;

    &__success {
        color: #77C104;
    }

    &__warning {
        color: #FF4D00;

    }
}



</style>