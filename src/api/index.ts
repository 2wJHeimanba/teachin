import axios from "axios"

export const testRquest=()=>{
    return axios.get("/api/info")
}