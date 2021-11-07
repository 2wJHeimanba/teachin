<template>
  <div class="mb-about" @click="age++">{{age}}</div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const age=ref<number>(13)
</script>

<style>

</style>