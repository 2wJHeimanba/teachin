<template>
  <div class="qr-code">
      <div class="qr-code-tip b-flex">
          <span>微信扫码关注</span>
          <span>前程无忧公众号</span>
          <span>获取每日大厂内推</span>
      </div>
      <div class="qr-code-image">
          <img src="../assets/images/qrcode.png">
      </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.qr-code{
    width: 100%;
    height: 80%;
    display: flex;
    align-items: center;
    box-shadow: 0 0 8px rgba(255,255,255,0.25);
    border-radius: 8px;
}
.qr-code>div{
    height: 100%;
    flex: 1 1;
}
.qr-code-tip{
    flex-direction: column;
}
.qr-code-tip>span{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.qr-code-tip>span:last-child{
    background: rgba(255,255,255,0.15);
    padding: 1px 8px;
    border-radius: 8px;
}
.qr-code-tip>span:last-child,
.qr-code-tip>span:first-child{
    font-size: 0.04rem;
    transform: scale(0.9);
}
.qr-code-tip>span:nth-child(2){
    font-size: 0.08rem;
    margin: 0.025rem 0;
    font-weight: bold;
}
.qr-code-image>img{
    width: 100%;
    height: 100%;
    transform: scale(0.78);
}
</style>