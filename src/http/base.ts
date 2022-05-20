import axios from "axios";
import { baseURL } from "./baseUrl";
// 请求
const https = axios.create({
  baseURL,
  timeout: 30000,
});

// 或直接设置 基础前缀
// http.defaults.baseURL = baseUrl

// 请求拦截器
https.interceptors.request.use(
  (config: any) => {
    console.log("发请求之前", config);
    let token = window.localStorage.getItem("token");
    // 批准需要存放的信息
    config.headers["Authorization"] = token;
    return config;
  },
  (error) => {
    console.log("请求错误", error);
    return Promise.reject(error);
  }
);

// 响应拦截器
https.interceptors.response.use(
  (res) => {
    console.log("得到的响应数据", res);
    return res;
  },
  (error) => {
    console.log("响应错误", error);
    return Promise.reject(error);
  }
);

export default https;
