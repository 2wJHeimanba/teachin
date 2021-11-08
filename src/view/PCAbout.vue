<template>
  <div class="pc-about" @click="age++">
    <div class="pc-about-left">


      <div class="pc-about-header">
        <div class="pc-header-mask"></div>
        <div class="pc-about-header-box">
          <div class="pc-about-logo"></div>
          <div class="pc-about-info">
            <div class="pc-company-name font-lb">
              <h2>广东省农村信用社联合社</h2>
              <span>报名</span>
            </div>
            <div class="pc-about-teachin-info">
              <div>来源高校：中山大学（东校区）</div>
              <div>举办地点：行政楼B座多功能厅B101</div>
              <div>宣讲时间：2021-11-08</div>
              <div>发布时间：2021-11-04 10:27:00</div>
            </div>
          </div>
        </div>
      </div>


      <div class="pc-company-info"></div>
      <div class="pc-anthor-teachin"></div>
      <div class="pc-footer b-flex">
        <span>Copyright © 1998 - 2021 51Job. All Rights Reserved.</span>
        <span>未经51Job同意，不得转载本网站之所有招聘信息及作品 | 无忧工作网版权所有©1999-2021</span>
      </div>
    </div>
    <div class="pc-about-right">

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref,reactive,inject,onMounted,onBeforeMount } from "vue"
import axios from "axios"

const data=reactive({

})


onBeforeMount(()=>{
  axios.get('/api/detail').then(res=>{
    console.log(res)
  })
})

const age=ref<number>(23);

onMounted(() => {
  console.log(inject('stateBox'))
})

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
  /* border: 1px solid red; */
  position: absolute;
  bottom: 0.1rem;
  left: 0.1rem;
  right: 0.1rem;
  height: 0.75rem;
  display: flex;
}
.pc-about-header-box>div{
  /* border: 1px solid blue; */
}
.pc-about-logo{
  width: 1rem;
}
.pc-about-info{
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
.pc-company-name{
  /* border: 1px solid cyan; */
  flex-grow: 1;
  padding-bottom: 0.04rem;
}
.pc-about-teachin-info{
  /* border: 1px solid red; */
  height: 0.43rem;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}
.pc-about-teachin-info>div{
  /* border: 1px solid red; */
  width: 50%;
  height: 0.16rem;
  color: #000;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}




.pc-company-info{
  height: 2rem;
}
.pc-anthor-teachin{
  height: 2rem;
}



.pc-about-right{
  border: 1px solid #fff;
  width: 1.5rem;
}

</style>