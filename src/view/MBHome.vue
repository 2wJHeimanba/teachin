<template>
  <div class="pc">
      <h1>{{data.name}}</h1>
  </div>
</template>

<script setup lang="ts">
import { ref,reactive,onMounted } from "vue"

const data = reactive({
    name:"MB-HOME"
});
onMounted(()=>{
  console.log("MBHome页面加载")
})

</script>

<style>

</style>
