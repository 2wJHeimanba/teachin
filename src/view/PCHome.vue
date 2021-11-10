<template>
  <div class="pc">
    <div class="pc-header">
      <PCHeader />
    </div>
    <div class="pc-content">
      <div class="pc-content-nav">
        <div class="pc-nav-search">
          <el-select
            v-model="data.currentAreaId"
            filterable
            allow-create
            default-first-option
            placeholder="地区"
          >
            <el-option
              v-for="item in data.area_list"
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
            <component :is="componentBox" 
              @outputTeachinId="outputTeachinId" 
              @outputPagination="outputPagination" 
              :teachinList="data.teachin_list" 
              :totalPages="data.totalPages" 
              :loading="data.loading" 
              :page="data.page"
            ></component>
          </transition>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PCHeader from "../components/PCHeader.vue"
import { ref,reactive,onMounted,shallowRef,defineAsyncComponent,watch,onBeforeMount,provide } from "vue"
import service from "../http"
import store from "../store"
import {areaDataType} from "../tools/interface"

const data = reactive({
    childComponetName:"pc-list",
    loading:false,
    teachin_list:[],
    school_list:[],
    area_list:[],
    currentSchoolId:'',
    currentCompanyId:'',
    currentAreaId:'473f08ee-5da7-4311-9031-b987e554fb41',
    searchKye:'',
    date:'',
    page:1,
    totalPages:1
});
const componentBox=shallowRef(defineAsyncComponent(()=>import('./PCList.vue')));

const dataBox=store;
// 状态管理
provide('stateBox',dataBox);

watch(()=>data.childComponetName,(newVal,oldVal)=>{
  let temporaryBox:any;
  if(newVal=='pc-list'){
    temporaryBox=defineAsyncComponent(()=>import('./PCList.vue'))
  }else{
    temporaryBox=defineAsyncComponent(()=>import('./PCAbout.vue'))
  };
  componentBox.value=temporaryBox;
});

// 监听数据变化获取对应的数据
watch(()=>[data.currentAreaId,data.currentSchoolId],([newAreaId,newSchoolId],[oldAreaId,oldSchoolId])=>{
  data.page=1;
  if(newAreaId!==oldAreaId){
    requestAreaSchools();
    if(data.currentSchoolId){
      data.currentSchoolId=''
    }else{
      requestData();
    }
  }
  if(newSchoolId!==oldSchoolId){
    data.childComponetName="pc-list";
    requestData();
  }
})


onBeforeMount(() => {
  requestAreaSchools();
  service.post('/Index/GetAreaList').then((res:any):void=>{
    data.area_list=res.Data.map((item:any):areaDataType=>{
      return {
        value:item.AreaPKID,
        label:item.AreaName
      }
    })
  });
  requestData();
});

// 获取宣讲会列表数据
const requestData=():void=>{
  data.loading=true;
  let {currentSchoolId,currentAreaId,searchKye,date,page}=data;
  service.post(`/Index/GetExecutiveList?areaPKID=${currentAreaId}&schoolPKID=${currentSchoolId}&cmpName=${searchKye}&date=${date}&page=${page}&size=10`).then((res:any):void=>{
    data.loading=false;
    data.teachin_list=res.Data;
    data.totalPages=res.TotalCount;
  })
}

// 获取地区学校列表数据
const requestAreaSchools=():void=>{
  service.post(`/Index/GetSchoolList?areaPKID=${data.currentAreaId}`).then((res:any):void=>{
    data.school_list=res.Data;
  });
}

// 分页组件抛出来的数据
const outputPagination=(e:number):void=>{
  data.page=e;
  requestData();
}

// 页面刷新
window.addEventListener('beforeunload',function(){
  console.log("-------------------")
});


// 选择学校
const selectedSchool=(item:any):void=>{
  data.currentSchoolId=item.SchoolPKID;
  data.childComponetName="pc-list";
}

// 选件会列表抛出的宣讲会id
const outputTeachinId=(item:any):void=>{
  // console.warn(item);
  store.schoolId=item.value;
  data.currentCompanyId=item.value;
  data.childComponetName="pc-about";
}

</script>

<style scoped>
:root{
    --el-text-color-primary:#fff;
    --el-text-color-primary:#fff;
}
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
  .pc-content-nav{
    width: 1.2rem !important;
  }
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
  height: 0.2rem;
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
  line-height: 0.2rem;
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