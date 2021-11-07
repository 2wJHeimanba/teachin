<template>
  <div class="pc">
    <div class="pc-header">
      <div class="pc-header-box">
        <div class="pc-header-logo"></div>
        <div class="pc-header-link">
          <el-button type="warning" plain @click="changeData('pc-list')">pc-list</el-button>
        </div>
        <div class="pc-header-info">
          <el-button type="success" plain @click="changeData('pc-about')">pc-about</el-button>
        </div>
      </div>
    </div>
    <div class="pc-content">
      <div class="pc-content-nav">
        <div class="pc-nav-search">
          <el-select
            v-model="value"
            filterable
            allow-create
            default-first-option
            placeholder="Choose tags for your article"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div class="pc-nav-list">
          <el-scrollbar>
            <p v-for="item in 80" :key="item" class="scrollbar-demo-item">{{ item }}</p>
          </el-scrollbar>
        </div>
      </div>
      <div class="pc-content-box">
        <el-scrollbar>
          <transition name="fade" mode="out-in">
            <component :is="componentBox"></component>
          </transition>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref,reactive,onMounted,shallowRef,defineAsyncComponent,watch } from "vue"

const data = reactive({
    childComponetName:"pc-list",
    age:23
});
const options=ref<any>([
  {value: 'HTML',label: 'HTML'},
  {value: 'CSS',label: 'CSS'},
  {value: 'JavaScript',label: 'JavaScript'}
]);
const value=ref([]);
const componentBox=shallowRef(defineAsyncComponent(()=>import('./PCList.vue')));

watch(()=>data.childComponetName,(newVal,oldVal)=>{
  console.log(newVal)
  if(newVal=='pc-list'){
    componentBox.value=defineAsyncComponent(()=>import('./PCList.vue'))
  }else{
    componentBox.value=defineAsyncComponent(()=>import('./PCAbout.vue'))
  }
});

onMounted(()=>{
  console.log("PCHome页面加载")
});

const changeData=(val:string):void=>{
  data.childComponetName=val
}

</script>

<style scoped>
.pc{
  padding-top: 0.42rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.pc-header{
  /* max-width: 1440px; */
  min-width: 1280px;
  width: 10rem;
  height: 0.42rem;
  position: fixed;
  top: 0;left: 0;
}
.pc-header-box{
  max-width: 1440px;
  min-width: 1280px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;

}
.pc-header-logo{
  width: 1.25rem;
  /* border: 1px solid #fff; */
}
.pc-header-link{
  flex-grow: 1;
  /* border: 1px solid #fff; */
}
.pc-header-info{
  width: 1.25rem;
  /* border: 1px solid #fff; */
}



.pc-content{
  max-width: 1440px;
  min-width: 1280px;
  width: 100%;
  /* border: 1px solid #fff; */
  margin: 0 auto;
  display: flex;
  flex-grow: 1;
}
.pc-content-nav{
  width: 1.25rem;
  display: flex;
  flex-direction: column;
}
.pc-nav-search{
  /* border: 1px solid #fff; */
  height: 0.3rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pc-nav-list{
  flex-grow: 1;
  /* border: 1px solid #fff; */
  height: calc(100vh - 0.72rem);
  overflow-y: auto;
}


/* 内容框样式 */
.pc-content-box{
  /* border: 1px solid #fff; */
  flex-grow: 1;
  height: calc(100vh - 0.42rem);
  /* background: orange; */
  overflow-y: auto;
}
.pc-content-test{
  /* height: 9rem; */
  width: 2rem;
  /* background: cyan; */
  overflow-y: auto;
}
p{
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.fade-enter-active,.fade-leave-active {
  transition: opacity 0.2s linear;
}

.fade-enter-from,.fade-leave-to {
  opacity: 0;
}
</style>