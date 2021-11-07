<template>
  <div class="pc-about" @click="age++">{{age}}</div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const age=ref<number>(23)
</script>

<style>
.pc-about{
  color: #fff;
  height: 10rem;
  width: 3rem;
  background: pink;
}

</style>