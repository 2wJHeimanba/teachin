<template>
  <div class="home">
      <component :is="componentBox"></component>
  </div>
</template>

<script setup lang="ts">
import { reactive,shallowRef,defineAsyncComponent, watch } from "vue"

// 初始话的时候根据屏幕大小展示不同屏幕
window.addEventListener("load",function(){
    changeComponentEvent()
});

// 根据屏幕大小更改屏幕展示
window.addEventListener("resize",function(){
    let windowWidth=window.innerWidth;
    if(windowWidth>=769){
        data.currentComponentName='pc-home'
    }else{
        data.currentComponentName='mb-home'
    }
})

let componentBox=shallowRef(defineAsyncComponent(() => import('./MBHome.vue')));
const data = reactive({
    currentComponentName:"pc-home"
});

watch(()=>data.currentComponentName,(newVal,oldVal)=>{
    changeComponentEvent();
})

const changeComponentEvent=():void=>{
    if(window.innerWidth>=769){
        componentBox.value=defineAsyncComponent(() => import('./PCHome.vue'))
    }else{
        componentBox.value=defineAsyncComponent(() => import('./MBHome.vue'))
    }
};

</script>

<style scoped>
.home{
    color: #fff;
}
</style>