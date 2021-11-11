import service from "../http"
import {teachinList} from "../tools/interface"

// 获取宣讲会列表接口
export const requestTeachinList = (params:teachinList):any=>{
    const {currentSchoolId,currentAreaId,searchKey,date,page} = params;
    return service.post(`/Index/GetExecutiveList?areaPKID=${currentAreaId}&schoolPKID=${currentSchoolId}&cmpName=${searchKey}&date=${date}&page=${page}&size=10`)
}

// 获取地区学校列表
export const requestAreaSchoolList = (params:string):any=>{
    return service.post(`/Index/GetSchoolList?areaPKID=${params}`)
}

// 获取地区列表
export const requestAreaList = (params?:string):any=>{
    return service.post('/Index/GetAreaList')
}

// 获取宣讲会详情
// params->宣讲会id
export const requestTeachinDetail = (params:any):any=>{
    // console.log(params)
    return service.post(`/Detail/GetExecutiveDetail?expkid=${params}`)
}