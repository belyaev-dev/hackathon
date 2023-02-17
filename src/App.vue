<script setup lang="ts">
import { useAxios } from '@vueuse/integrations/useAxios'

const res = useAxios('https://jsonplaceholder.typicode.com/todos', {method: 'GET'})
console.log(res.data.value)
</script>

<template>
<div>df</div>
</template>

<style scoped>
</style>
