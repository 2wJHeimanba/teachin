<template>
<div class="mb">
  <div class="mb-header"></div>
  <div class="mb-content-box">
    <div class="mb-operator">
        <div class="mb-operator-school b-flex-align">
            <div class="mb-operator-school-icon"></div>
            <div class="mb-operator-school-items b-flex-align">
                <span v-for="(item,index) in teachin_list" :key="index">{{item.label}}</span>
            </div>
        </div>
        <div class="mb-operator-date b-flex-align">
            <div class="mb-operator-date-icon"></div>
            <div class="mb-operator-date-item b-flex-align">
                <span>2021-11-11</span>
            </div>
        </div>
        <div class="mb-operator-btn b-flex-align">
            <span>筛选条件</span>
        </div>
    </div>
    <div class="mb-content">
        <ul v-for="(item,index) in teachin_list" :key="index" @click="toDetail(item)">{{item.label}}</ul>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import {defineComponent,reactive,toRefs } from "vue"
export default defineComponent({
    emits:['toDetail'],
    setup(props,context){
        
        const data = reactive({
            teachin_list:[
                {value:132456,label:"广州工商学院"},
                {value:12,label:"华南农业大学"},
                {value:465,label:"哈尔滨工业大学"},
                {value:798,label:"中山大学"},
                {value:132456,label:"广州工商学院"},
                {value:12,label:"华南农业大学"},
                {value:465,label:"哈尔滨工业大学"},
                {value:798,label:"中山大学"},
                {value:753,label:"广州工业大学"}
            ]
        });
        const toDetail = (item:any):void=>{
            context.emit('toDetail',"传数据")
        }
        return {
            ...toRefs(data),
            toDetail
        }
    }
})

</script>

<style scoped>
.mb{
  height: 100vh;
  font-size: 0.35rem;
}
.mb-header{
  height: 1rem;
  background: #2b3d5e;
  position: fixed;
  left: 0;right: 0;top: 0;

}
.mb-content-box{
  height: calc(100vh - 1rem);
  margin-top: 1rem;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
.mb-operator{
  height: 2.5rem;
  background: rgba(255,255,255,.15);
  margin-bottom: 0.2rem;
  display: flex;
  flex-direction: column;
}
.mb-operator>div{
  flex: 1 1;  
  padding: 0 0.2rem;
}
.mb-operator-school{
  display: flex;
}
.mb-operator-date>div,
.mb-operator-school>div{
    /* border: 1px solid #fff;   */
    height: 100%;
}
.mb-operator-date-icon,
.mb-operator-school-icon{
  width: 0.84rem;
}
.mb-operator-date-item,
.mb-operator-school-items{
  flex: 1 1;
  white-space: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
.mb-operator-date-item>span,
.mb-operator-school-items>span{
    border: 1px solid #ccc;
    padding: 1px 5px;
    margin: 0 2px;
    border-radius: 3px;
}
.mb-operator-date-item>span{
    padding: 2px 5px;
}
.mb-operator-date{

}
.mb-operator-btn{
    position: relative;
}
.mb-operator-btn::before{
    content: "";
    position: absolute;
    top: 0;left: 5px;right: 5px;
    height: 1px;
    background: #fff;
    transform: scaleY(0.3);
}
.mb-content{
  height: 20rem;
  background: rgba(255,255,255,.15);
}
</style>