<template>
  <div class="pc-list">
      <div class="pc-list-header">
          <div class="pc-search-left">
              <div class="pc-search-title">
                  <h2>宣讲会查询系统</h2>&nbsp;&nbsp;
                  <span>全国重点高校就业办官方“就业信息网”的全部宣讲会信息</span>
              </div>
              <div class="pc-search-ipt">
                  <input type="text" class="no-border-outline" placeholder="输入关键词搜索">
                  <!-- <el-date-picker v-model="select_date" type="date" placeholder="全部"></el-date-picker> -->
                  <button class="no-border-outline">搜索宣讲会</button>
              </div>
          </div>
          <div class="pc-search-right b-flex">
              <QrCode />
          </div>
      </div>
      <div class="pc-list-content">
          <div class="pc-teachin-box">
              <div class="pc-teachin-title b-flex-align">全部宣讲会信息</div>
              <template v-if="props.teachinList.length!=0">
                <div class="pc-teachin-list" 
                    v-loading="props.loading" 
                    element-loading-text="Loading..."
                    element-loading-background="rgba(0, 0, 0, 0.5)"
                >
                    <ul>
                        <li>公司标题</li>
                        <li>举办时间</li>
                        <li>举办院校</li>
                        <li>举办地点</li>
                        <li>点击量</li>
                        <li>操作</li>
                        <li>报名</li>
                    </ul>
                    <ul v-for="(item,index) in props.teachinList" :key="index" class="pc-teacin-list">
                        <li @click="toDetail(item)">{{item.ExCMPName}}</li>
                        <li>{{item.ExDate}}</li>
                        <li>{{item.ExSchName}}</li>
                        <li>{{item.ExSpaName}}</li>
                        <li>{{item.ExPageView}}</li>
                        <li>投简历</li>
                        <li><el-button type="primary" plain size="mini">报名</el-button></li>
                    </ul>
                </div>
              </template>
              <template v-else>
                  <el-empty description="暂无数据" :image-size="123" class="pc-empty-status"></el-empty>
              </template>
              
              <div class="pc-teachin-pagination b-flex-align">
                  <el-pagination layout="prev, pager, next" :total="props.totalPages" :current-page="props.page" @current-change="changePagination"></el-pagination>
              </div>
          </div>
      </div>
      <div class="pc-list-advertise">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
      </div>
      <div class="pc-footer b-flex">
          <span>Copyright © 1998 - 2021 51Job. All Rights Reserved.</span>
          <span>未经51Job同意，不得转载本网站之所有招聘信息及作品 | 无忧工作网版权所有©1999-2021</span>
      </div>
  </div>
</template>

<script setup lang="ts">
import QrCode from "../components/QrCode.vue"
import {reactive,defineEmits,ref,defineProps} from "vue"
const data=reactive({
    name:"pc-list"
});
const select_date=ref<string>('');
const props=defineProps<{
    teachinList:any,
    totalPages:any,
    loading:boolean,
    page:number
}>();

// 接收父组件传来的数据
const emit=defineEmits(['outputTeachinId','outputPagination']);

// 点击宣讲会进入到详情页
const toDetail=(item:any):void=>{
    emit('outputTeachinId',{value:item.ExPKID,label:item.ExCMPName});
}

// 分页数改变
const changePagination=(val:any)=>{
    emit('outputPagination',val)
}
</script>

<style scoped>
.pc-list{
    width: 100%;
}
.pc-list>div{
    margin-bottom: 0.07rem;
}
.pc-list>div:last-child{
    margin-bottom: 0;
}
/* 顶部搜索框样式 */
.pc-list-header{
    height: 0.78rem;
    display: flex;
    padding-left: 0.15rem;
    background:rgba(255,255,255,0.15);  
}
.pc-search-left{
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-right: 0.15rem;
}
.pc-search-left>div{
    width: 100%;
}
.pc-search-title{
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    margin-bottom: 0.04rem;
}
.pc-search-title>span{
    font-size: 0.06rem;
}
.pc-search-ipt{
    margin-top: 0.03rem;
    border: 9px solid rgba(255,255,255,0.15);
    border-radius: 5px;
    display: flex;
    background: rgba(255,255,255,0.15);
}
.pc-search-ipt>input[type='text']{
    height: 100%;
    flex-grow: 1;
    padding: 0 0.2rem;
    min-height: 0.21rem;
}
.pc-search-ipt>button{
    width: 0.61rem;
    background: #4169e1;
    color: #fff;
    border-radius: 0 5px 5px 0;
}
.pc-search-right{
    width: 1.7rem;
    position: relative;
    padding-left: 0.15rem;
    padding-right: 0.05rem;
}
.pc-search-right::before{
    position: absolute;
    content: "";
    top: 0.1rem;bottom: 0.1rem;left: 0;
    background: rgba(255,255,255,0.15);
    width: 1px;
    transform: scaleX(0.5);
}

/* 列表样式 */
.pc-list-content,
.pc-list-advertise{
    padding: 0.07rem;
}
.pc-teachin-box{
    border: 1px solid rgba(255,255,255,0.35);
    border-radius: 8px;
    overflow: hidden;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.pc-teachin-box>div{
    padding: 0 0.05rem;
}
.pc-teachin-title{
    height: 0.28rem;
    border-bottom: 1px solid rgba(255,255,255,0.35);
    background: rgba(255,255,255,0.1);    
}
.pc-teachin-list{
    flex-grow: 1;
}
.pc-teachin-list>ul{
    display: flex;
    height: 0.28rem;
    display: flex;
    align-items: center;
    list-style: none;
}
.pc-teacin-list>li{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.pc-teachin-list>ul>li:nth-child(1){flex: 4 1;cursor: pointer;}
.pc-teachin-list>ul>li:nth-child(2){flex: 4 1;}
.pc-teachin-list>ul>li:nth-child(3){flex: 3 1;}
.pc-teachin-list>ul>li:nth-child(4){flex: 3 1;}
.pc-teachin-list>ul>li:nth-child(5){flex: 1 1;}
.pc-teachin-list>ul>li:nth-child(6){flex: 1 1;}
.pc-teachin-list>ul>li:nth-child(7){flex: 1 1;}
.pc-teachin-list>ul>li:nth-child(-n+4){text-align: left;}
.pc-teachin-list>ul:not(:last-child){border-bottom: 1px solid rgba(255,255,255,0.35);}
.pc-teachin-list>ul:not(:first-child):hover{background: rgba(255,255,255,0.06);}
.pc-teachin-pagination{
    height: 0.28rem;
    border-top: 1px solid rgba(255,255,255,0.35);
    justify-content: flex-end;
    --el-text-color-primary:#fff;
    --el-text-color-primary:#fff;
}
.pc-teachin-pagination >>> .el-pagination .btn-next,
.pc-teachin-pagination >>> .el-pagination .btn-prev{
    background: transparent;
}
.pc-teachin-pagination >>> .el-pager li{
    background: transparent;
}

/* 广告位样式 */
.pc-list-advertise{
    height: 0.9rem;
    display: flex;
}
.pc-list-advertise>div{
    border: 1px solid rgba(255,255,255,0.15);
    flex: 1 1;
    border-radius: 8px;
    margin: 0 5px;
}
.pc-list-advertise>div:last-child{margin-right: 0;}
.pc-list-advertise>div:first-child{margin-left: 0;}
</style>