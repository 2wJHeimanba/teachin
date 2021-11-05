<template>
  <div class="pc">{{data.name}}</div>
</template>

<script setup lang="ts">
import { ref,reactive } from "vue"

const data = reactive({
    name:"PC-HOME"
})

</script>

<style>

</style>