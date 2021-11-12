<template>
  <div class="mb-about">
    <div class="mb-about-header b-flex-align">
      <span @click="backList">返回</span>
    </div>
    <div class="mb-about-content-box">
      <div class="mb-about-content-header"></div>
      <div class="mb-about-content"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref,reactive,defineComponent,toRefs,inject } from "vue"
export default defineComponent({
  emits:["backList"],
  setup(props,context){
    const data = reactive({
      age:25,
      id:'123'
    });

    const {currentSchoolId} = inject<any>("store");

    const backList = ():void=>{
      context.emit("backList")
    }

    return {
      ...toRefs(data),
      currentSchoolId,
      backList
    }
  }
})
</script>

<style scoped>
.mb-about{
  height: 100vh;
  padding-top: 1rem;
}
.mb-about-header{
  height: 1rem;
  position: fixed;
  left: 0;right: 0;top: 0;
  background: #2b3d5e;
  padding-left: 0.2rem;
  color: #fff;
}
.mb-about-content-box{
  height: calc(100vh - 1rem);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
.mb-about-content-header{
  height: 3rem;
  margin-bottom: 0.2rem;
  background: rgba(255,255,255,0.15);
}
.mb-about-content{
  height: 20rem;
  background: rgba(255,255,255,0.15);
}
</style>