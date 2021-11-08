<template>
  <div class="pc">
    <div class="pc-header">
      <PCHeader />
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
            <ul class="pc-school-ul" v-for="(item,index) in data.school_list" :key="index">
              <li class="pc-school-list b-flex" @click="selectedSchool(item)"><span>{{item.SchoolName}}</span></li>
            </ul>
          </el-scrollbar>
        </div>
      </div>
      <div class="pc-content-box">
        <el-scrollbar>
          <transition name="fade" mode="out-in">
            <component :is="componentBox" @outputTeachinId="outputTeachinId"></component>
          </transition>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PCHeader from "../components/PCHeader.vue"
import { ref,reactive,onMounted,shallowRef,defineAsyncComponent,watch,onBeforeMount,provide } from "vue"
import axios from "axios"

const data = reactive({
    childComponetName:"pc-list",
    age:23,
    school_list:[],
    currentSchoolId:'',
    currentSchoolName:'',
    currentCompanyId:'',
    currentCompanyName:''
});
const options=ref<any>([
  {value: 'HTML',label: 'HTML'},
  {value: 'CSS',label: 'CSS'},
  {value: 'JavaScript',label: 'JavaScript'}
]);
const value=ref([]);
const componentBox=shallowRef(defineAsyncComponent(()=>import('./PCList.vue')));

const dataBox={
  currentSchoolId:'',
  currentCompanyId:'',
}

watch(()=>data.childComponetName,(newVal,oldVal)=>{
  if(newVal=='pc-list'){
    componentBox.value=defineAsyncComponent(()=>import('./PCList.vue'))
  }else{
    componentBox.value=defineAsyncComponent(()=>import('./PCAbout.vue'))
  }
});
onBeforeMount(() => {
  axios.get("/api/schools").then(res=>data.school_list=res.data.data)
});

window.addEventListener('beforeunload',function(){
  console.log("-------------------")
});


// 状态管理
provide('stateBox',dataBox);

onMounted(()=>{
  // console.log("PCHome页面加载",import.meta.env.VITE_APP_BASE_API)
});

// 选择学校
const selectedSchool=(item:any):void=>{
  componentBox.value=defineAsyncComponent(()=>import('./PCList.vue'))
}

// 选件会列表抛出的宣讲会id
const outputTeachinId=(item:any):void=>{
  dataBox.currentCompanyId=item.value;
  componentBox.value=defineAsyncComponent(()=>import('./PCAbout.vue'));
}

</script>

<style scoped>
.pc{
  padding-top: 0.32rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.pc-header{
  /* max-width: 1440px; */
  min-width: 1280px;
  width: 10rem;
  height: 0.32rem;
  position: fixed;
  top: 0;left: 0;
  background: #2b3d5e;
}

.pc-content{
  margin: 0 auto;
  display: flex;
  flex-grow: 1;
}
/* 根据屏幕大小调整 */
@media screen and (min-width:769px) {
  .pc-content{width: 100%;}
}
@media screen and (min-width:1440px) {
  .pc-content{width: 9rem;}
  .pc-content-nav{
    width: 1.4rem !important;
  }
}
@media screen and (min-width:1600px) {
  .pc-content{width: 7.6rem;}
}

.pc-content-nav{
  width: 1.5rem;
  display: flex;
  flex-direction: column;
  background: #222;
}

.pc-nav-search{
  height: 0.3rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pc-nav-list{
  flex-grow: 1;
  height: calc(100vh - 0.72rem);
  overflow-y: auto;
}
.pc-nav-list .el-scrollbar{}
.pc-school-list{
  color: #fff;
  justify-content: flex-start;
  height: 0.25rem;
  padding: 0 0.06rem;
  margin-bottom: 3px;
  user-select: none;
  padding: 0 0.06rem;
}
.pc-school-list>span{
  display: block;
  width: 100%;height: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* background: rgba(255,255,255,0.08); */
  border-radius: 5px;
  line-height: 0.25rem;
  padding: 0 0.012rem;
}
.pc-school-list>span:hover{
  background: rgba(255,255,255,0.25);
}
.pc-school-ul{
  width: 100%;
  list-style: none;
}

/* 内容框样式 */
.pc-content-box{
  flex-grow: 1;
  height: calc(100vh - 0.32rem);
  overflow-y: auto;
}
.pc-content-test{
  width: 2rem;
  overflow-y: auto;
}
.fade-enter-active,.fade-leave-active {
  transition: opacity 0.2s linear;
}

.fade-enter-from,.fade-leave-to {
  opacity: 0;
}
</style>