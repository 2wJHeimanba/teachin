<template>
  <div class="pc-header-box">
    <div class="pc-header-logo"></div>
    <div class="pc-header-link">
        <a href="#">云宣讲</a>
        <a href="#">线下宣讲</a>
    </div>
    <div class="pc-header-info">
        <a href="#">注册/登录</a>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
a{
  display: inline-flex;
  width: 0.8rem;
  height: 75%;
  border: 1px solid rgba(255,255,255,0.13);
  text-decoration: none;
  color: #fff;
  font-size: 0.08rem;
  justify-content: center;
  align-items: center;
}
.pc-header-box{
  height: 100%;
  margin: 0 auto;
  display: flex;
}
@media screen and (min-width:769px) {
  .pc-header-box{width: 100%;}
}
@media screen and (min-width:1440px) {
  .pc-header-box{width: 9rem;}
  .pc-header-logo{width: 1.4rem !important;}
}
@media screen and (min-width:1600px) {
  .pc-header-box{width: 7.6rem;}
  .pc-header-logo{width: 1.2rem !important;}
}
.pc-header-logo{
  width: 1.5rem;
}

.pc-header-link{
  flex-grow: 1;
  display: flex;
  align-items: center;
}
.pc-header-link>a{
  margin-right: 5px;
}
.pc-header-link>a:first-child{
    border-radius: 8px 0 0 8px;
    background: rgba(255,255,255,0.1);
}
.pc-header-link>a:last-child{
    border-radius: 0 8px 8px 0;
}

.pc-header-info{
  width: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pc-header-info>a{
    border-radius: 8px;
}
</style>