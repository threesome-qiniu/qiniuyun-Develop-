//将登陆的接口分离 
import request from '@/utils/request.js'

export const userlogin = (username,password)=>{
    return request.post('user/api/v1/login',{
        username,
        password
    })
}