// 与后端协商一致后按项目需求配置。
import axios from "axios";
// import vm from "@/main.js";
import qs from "qs";
// 动态获取域名 无需配置，默认不配置baseURL，就是像自己发出
// const baseUrl = window.location.protocol + "//" + window.location.host + "/";

// 实例即可。
const instance = axios.create({
  // baseURL: baseUrl,
  timeout: 65000, // 超时时间
  headers: {
    "Content-Type": "application/json",
  },
});

// request 请求 拦截器
instance.interceptors.request.use(
  config => {
    // 发请求前需要做写什么，比如加入往请求头中放一些参数
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// 响应 response拦截器  如果非200 。拦截器的两个回调都会走
instance.interceptors.response.use(
  response => {
    // 请求状态码只认200
    if (response.status === 200) {
      const res = response.data; //  拿到后端返回的数据
      // 假设。实体状态码只认 1000.
      // 这里已经做了判断。无需在页面做判断。但是需要catch。
      if (res.status === 1000) {
        // 大部分请求只有正确的返回值。那就是状态码1000时
        return Promise.resolve(res);
      } else {
        // 不同的状态码并不是常态，其余状态码统一扔try catch处理,这里需要在业务代码中判断状态码
        return Promise.reject(res);
      }
    } else {
      // 非200状态码,但是不包括500，500走的error回调
      return Promise.reject(new Error("服务异常"));
    }
  },
  error => {
    console.log("请求报错", error);

    //  返回一个mock的数据错误,可以统一用toast提示
    const mockError = new Error();
    if (!error.response) {
      // 没有状态就是 超时
      mockError.message = "TIMEOUT,连接超时，请稍后再试！";
    }
    if (error.response.status === 404) {
      // 400 开头。 统一 找不到服务
      mockError.message = "4XX，找不到了，请联系管理员！";
    } else if (String(error.response.status).startsWith("5")) {
      // 500开头。统一服务器忙
      mockError.message = "5XX，服务器忙，请稍后再试！";
    }
    return Promise.reject(mockError);
  },
);

// 通用get请求
export function get(url, params = {}) {
  return instance.request({
    url,
    method: "GET",
    params,
  });
}
// post 请求。 application/json
export function post(url, data = {}) {
  return instance.request({
    url,
    method: "POST",
    data,
  });
}

// post 请求。 普通表单请求 'application/x-www-form-urlencoded'
export function form(url, data) {
  return instance.request({
    method: "POST",
    url,
    data: qs.stringify(data),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
}
// post 请求。 文件上传 "multipart/form-data";
export function formData(url, data) {
  return instance.request({
    method: "POST",
    url,
    data,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
// 看情况可以增加delete patch put
