import { createApp } from 'vue'
import App from './App.vue'
import "./assets/css/popcss.css"
import router from "./router"
import "./mockjs"

// 设置rem
let equipmentWidth=window.innerWidth;
let rem=equipmentWidth/10;
function remRefresh(){
    let clientWidth=document.documentElement.clientWidth;
    let rem=clientWidth/10;
    document.documentElement.style.fontSize=rem+'px';
    document.body.style.fontSize='14px';
}
window.addEventListener("pageshow",remRefresh);
let timeoutId:any;
window.addEventListener("resize",()=>{
    timeoutId&&clearTimeout(timeoutId);
    timeoutId=setTimeout(()=>{
        remRefresh();
    },300)
});

const app=createApp(App);
app.use(router);
app.mount('#app');
