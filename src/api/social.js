import request from '@/utils/request'

// 我的关注
export function followPageList(data) {
    return request({
        url: '/social/api/v1/follow/page',
        method: 'post',
        data: data
    })
}
