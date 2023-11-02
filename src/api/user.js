//将登陆的接口分离
import request from '@/utils/request'

// 登录方法
export function login(username, password) {
    const data = {
        username,
        password
    }
    return request({
        url: '/user/api/v1/login',
        method: 'post',
        data: data
    })
}

export const userLogin = (username,password)=>{
    return request.post('user/api/v1/login',{
        username,
        password
    })
}

// 注册方法
export function register(data) {
    return request({
        url: '/user/api/v1/register',
        method: 'post',
        data: data
    })
}

// 获取用户详细信息
export function getInfo() {
    return request({
        url: '/getInfo',
        method: 'get'
    })
}

// 退出方法
export function logout() {
    return request({
        url: '/logout',
        method: 'post'
    })
}
