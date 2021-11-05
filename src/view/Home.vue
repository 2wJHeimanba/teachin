<template>
  <div class="home">
      <component :is="box"></component>
      <!-- <PCHome /> -->
      <el-button type="primary" plain @click="changeComponentEvent">切换组件</el-button>
  </div>
</template>

<script setup lang="ts">
import { reactive,ref } from "vue"
import PCHome from "./MBHome.vue"
import MBHome from "./MBHome.vue"

const box=ref('PCHome')

let componentArr=['PCHome','MBHome'];
const data = reactive({
    currentComponent:PCHome
});

const changeComponentEvent=():void=>{
    console.log("切换组件")
}

</script>

<style scoped>
.home{
    color: #fff;
}
.input-box{
    width: 250px;
    height: 32px;
}
</style>