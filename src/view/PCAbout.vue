<template>
  <div class="pc-about">
    <div class="pc-about-left">

      <div class="pc-about-header">
        <div class="pc-header-mask"></div>
        <div class="pc-about-header-box">
          <div class="pc-about-logo"></div>
          <div class="pc-about-info">
            <div class="pc-company-name font-lb">
              <h2>{{data.company.name}}</h2>
              <span>报名</span>
            </div>
            <div class="pc-about-teachin-info">
              <div>来源高校：{{data.company.source_school}}</div>
              <div>举办地点：{{data.company.host_place}}</div>
              <div>宣讲时间：{{data.company.host_time}}</div>
              <div>发布时间：{{data.company.publish_time}}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="pc-company-info">
        <div class="pc-company-info-box">
            <el-tabs v-model="data.activeName" @tab-click="handleClick">
              <el-tab-pane label="公司简介" name="first">
                <div class="pc-company-info-content">
                  <p v-html="data.company.introduction"></p>
                </div>
              </el-tab-pane>
              <el-tab-pane label="公司其他宣讲" name="second">
                <div class="pc-anthor-teachin-box">
                  <ul v-for="(item,index) in data.company.teachin_list" :key="index" class="pc-anthor-teachin-ul">
                    <li>{{item.ExSchName}}</li>
                    <li>{{item.ExDate}}-{{item.ExTime}}</li>
                    <li>{{item.ExSchName}}（{{item.ExSpaName}}）</li>
                    <li>报名</li>
                    <li>查看详情</li>
                  </ul>
                </div>
              </el-tab-pane>
            </el-tabs>
        </div>
      </div>

      <div class="pc-about-host-teachin">
        <div></div>
      </div>

      <div class="pc-footer b-flex">
        <span>Copyright © 1998 - 2021 51Job. All Rights Reserved.</span>
        <span>未经51Job同意，不得转载本网站之所有招聘信息及作品 | 无忧工作网版权所有©1999-2021</span>
      </div>
    </div>

    <div class="pc-about-right">
      <el-affix :offset="65">
        <div class="pc-company-logo">
          <div v-for="(item,index) in data.advertise" :key="index" class="b-flex">{{item.label}}</div>
        </div>
        <div class="pc-about-advertise"></div>
      </el-affix>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref,reactive,inject,onMounted,onBeforeMount } from "vue"
import axios from "axios"

const data=reactive({
  activeName:'first', 
  company:{
    id:'',//公司id
    name:'',//公司名
    logo:'',//公司logo
    introduction:'',//公司介绍
    source_school:'',//高校来源
    host_place:'',//举办地点
    host_time:'',//举办时间
    publish_time:'',//发布时间
    teachin_list:[]//其他宣讲会
  },
  advertise:[
    {label:1,value:132},
    {label:1,value:132},
    {label:1,value:132},
    {label:1,value:132},
    {label:1,value:132},
    {label:1,value:132},
    {label:1,value:132}
  ]
});

onBeforeMount(()=>{
  axios.get('/api/detail').then(res=>{
    let {CMPIntroduction,CMPLogo,CMPName,ExAddTime,ExDate,ExList,ExPKID,ExSpaName,SchoolName}=res.data.data;
    data.company.id=ExPKID,
    data.company.name=CMPName,
    data.company.logo=CMPLogo,
    data.company.introduction=CMPIntroduction,
    data.company.source_school=SchoolName,
    data.company.host_place=ExSpaName,
    data.company.host_time=ExDate,
    data.company.publish_time=ExAddTime,
    data.company.teachin_list=ExList
  })
})

onMounted(() => {
  console.log(inject('stateBox'));
  changeCompanyLogoNum();
});

const changeCompanyLogoNum=():void=>{
  let len=data.advertise.length%3;
  if(len!=0){
    for(let i=0;i<(3-len);i++){
      data.advertise.push({label:21,value:89})
    }
  }
}

const handleClick=(tab:any, event:any):void=>{
  console.log(tab, event)
}

</script>

<style scoped>
.pc-about{
  color: #fff;
  width: 100%;
  display: flex;
}
.pc-about>div:not(:last-child){
  margin-bottom: 0.03rem;
}
.pc-about>div{
  border: 1px solid rgba(255,255,255,0.15);;
}
.pc-about-left{
  flex-grow: 1;
}
.pc-about-header{
  height: 0.95rem;
  background: rgba(255,255,255,0.15);
  position: relative;
}
.pc-header-mask{
  position: absolute;
  background: #fff;
  bottom: 0.1rem;
  left: 0.1rem;
  right: 0.1rem;
  height: 0.43rem;
}
.pc-about-header-box{
  position: absolute;
  bottom: 0.1rem;
  left: 0.1rem;
  right: 0.1rem;
  height: 0.75rem;
  display: flex;
}
.pc-about-header-box>div{}
.pc-about-logo{
  width: 1rem;
}
.pc-about-info{
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
.pc-company-name{
  flex-grow: 1;
  padding-bottom: 0.05rem;
}
.pc-about-teachin-info{
  height: 0.43rem;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}
.pc-about-teachin-info>div{
  width: 50%;
  height: 0.16rem;
  color: #000;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.pc-company-info,
.pc-anthor-teachin{
  padding: 0.07rem;
  display: flex;
}
.pc-company-info>div,
.pc-about-host-teachin>div{
  border-radius: 8px;
  background: rgba(255,255,255,0.15);
  flex-grow: 1;
  overflow: hidden;
}
.pc-company-info-content{}
.pc-anthor-teachin-box{}
.pc-anthor-teachin-box,
.pc-company-info-content{
  padding: 0.05rem;
  padding-top: 0;
  min-height: 1rem;
}
.pc-anthor-teachin-ul{
  display: flex;
  list-style: none;
}
.pc-anthor-teachin-ul>li{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 0.2rem;
  line-height: 0.2rem;
}
.pc-anthor-teachin-ul:not(:last-child){
  border-bottom: 1px solid rgba(255,255,255,0.25);
}
.pc-anthor-teachin-ul>li:nth-child(1){flex: 3 1;}
.pc-anthor-teachin-ul>li:nth-child(2){flex: 3 1;}
.pc-anthor-teachin-ul>li:nth-child(3){flex: 4 1;}
.pc-anthor-teachin-ul>li:nth-child(4){flex: 1 1;text-align: center;}
.pc-anthor-teachin-ul>li:nth-child(5){flex: 1 1;text-align: center;}

.pc-about-host-teachin{
  height: 5rem;
  display: flex;
  padding: 0.07rem;
}
.pc-about-right{
  border: 1px solid #fff;
  width: 1.5rem;
  min-width: 1.5rem;
  min-height: calc(100vh - 0.32rem);
}
.pc-company-logo{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.pc-company-logo>div{
  width: 0.46rem;
  height: 0.5rem;
  background: rgba(255,255,255,0.15);
  margin: 2px;
  border-radius: 5px;
  flex-direction: column;
}
.pc-about-advertise{
  height: 1.5rem;
  border-radius: 5px;
  margin: 7px;
  background: rgba(255,255,255,0.15);
  
}

</style>