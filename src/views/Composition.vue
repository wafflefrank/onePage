<template>
    <div class="text-white">{{ num }}</div>
    <button @click="add()">點擊</button>
</template>

<script setup>
import { ref } from 'vue';

const num = ref(1);

function add() {
  num.value += 1;
}
</script>

<style lang="scss" scoped></style>
