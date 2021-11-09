import axios,{AxiosInstance,AxiosRequestConfig,AxiosResponse} from "axios"

export interface ResponseData{
    data:any
}

let baseURL:string;
if(import.meta.env.MODE==="development"){
    baseURL='/api/xyxjh/OfflineCareerTalk'
}else{
    baseURL='/xyxjh/OfflineCareerTalk'
}

let service:AxiosInstance|any=axios.create({
    baseURL,
    timeout:5000
});

// request拦截器
service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        return config;
    },
    (error: any) => {
        // Do something with request error
        console.error("error:", error); // for debug
        Promise.reject(error);
    }
);


service.interceptors.response.use(
    (res: AxiosResponse) => {
        if (res.status === 200) {
            const data:any = res.data;
            return data;
            // if (data.code === 0) {
            //     return data.data;
            // } else {
            //     ElMessage({
            //         message: data.message,
            //         type: "error"
            //     });
            // }
        } else {
            // ElMessage({
            //     message: "网络错误!",
            //     type: "error"
            // });
            // return Promise.reject(new Error(res.data.message || "Error"));
        }
    },
    (error: any) => Promise.reject(error)
);



export default service