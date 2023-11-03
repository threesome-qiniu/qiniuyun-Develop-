import axios from 'axios'
import ElementPlus from 'element-plus'
import { useUserStore } from '@/store/useUserStore'


const instance = axios.create({
    baseURL: 'http://39.101.67.45:9090',
    timeout: 5000,
});
const userstore = useUserStore()
const token = userstore.token
// 添加请求拦截器
instance.interceptors.request.use(config => {
    // config.headers['Content-Type'] = 'application/json;charset=utf-8';
    // // 在发送请求之前做些什么
    // // 是否需要设置 token
    // const isToken = (config.headers || {}).isToken === false
    // // if (!isToken) {
    // config.headers['Authorization'] = 'Bearer ' + 'eyJhbGciOiJIUzUxMiIsInppcCI6IkdaSVAifQ.H4sIAAAAAAAAAC2LUQrDIBBE77LfEap165rbaLOCgSSSNdBQevduIPM1b4b3hblXGAEDlXd4kiFnvfGFHyYHZFMwFp8tky4wQE0dRvuKpHERB5Ajqy2ndF6uX0Rx385pWxXTMSmm1rTzp6kaCN2tVv3c7w8QZaD7gQAAAA.yZsuNb-qHfy8jBDmpVsTtz2_OYiPmHtwS_2HHpXsxfln1HxEHxpMO0qSN11KbPVVukZO0MuomaeFzrgJAMDMhA' // getToken()如何存
    // // }
    if (token) {
        config.headers.Authorization = 'Bearer ' + token//如果登陆后  token会存储在pinia中  携带token


    }

    return config;
}, error => {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response.data;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default instance
