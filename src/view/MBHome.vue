<template>
  <div class="pc">
      <h1>{{data.name}}</h1>
  </div>
</template>

<script setup lang="ts">
import { ref,reactive } from "vue"

const data = reactive({
    name:"MB-HOME"
})

</script>

<style>

</style>
