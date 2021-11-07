<template>
  <div class="pc-list">
      <div class="pc-list-header"></div>
      <div class="pc-list-content"></div>
      <div class="pc-list-advertise"></div>
      <div class="pc-list-footer"></div>
  </div>
</template>

<script setup lang="ts">
import {reactive} from "vue"
const data=reactive({
    name:"pc-list"
})
</script>

<style scoped>
.pc-list{
    /* border: 1px solid #fff; */
    width: 100%;
    /* height: 5rem; */
}
.pc-list>div{
    background:rgba(255,255,255,0.15);
    height: 2rem;
    border-radius:8px;
    margin: 8px;
    margin-right: 15px;
}
/* 顶部搜索框样式 */
.pc-list-header{

}
/* 列表样式 */
.pc-list-content{

}
/* 广告位样式 */
.pc-list-advertise{

}
/* 底部版权样式 */
.pc-list-footer{

}
</style>