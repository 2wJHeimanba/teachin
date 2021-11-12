<template>
    <component 
      :is="componentBox" 
      @toDetail="toDetail" 
      @backList="backList"
    ></component>
</template>

<script setup lang="ts">
import { reactive,onMounted,defineAsyncComponent,watch,shallowRef,provide,readonly } from "vue"

const data = reactive({
    componentName:"mb-list",
});
const store = reactive({
  currentSchoolId:'123456156156156'
});
provide("store",readonly(store));
const componentBox = shallowRef<any>(null);

// 组件切换
watch(()=>data.componentName,(newVal,oldVal):void=>{
  if(newVal=="mb-list"){
    componentBox.value=defineAsyncComponent(()=>import("./MBList.vue"))
  }else{
    componentBox.value=defineAsyncComponent(()=>import("./MBAbout.vue"))
  }
},{
  immediate:true,
  deep:true
});


onMounted(()=>{
  // console.log("MBHome页面加载")
});

// 跳转到详情页
const toDetail=(e:any):void=>{
  data.componentName="mb-about"
}
// 返回宣讲会列表页
const backList=():void=>{
  data.componentName="mb-list"
}

</script>

<style>


</style>
