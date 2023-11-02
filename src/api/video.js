import request from '@/utils/request'

// 视频流-feed
export function videoFeed(createTime) {
    const data = {
        createTime
    }
    return request({
        url: '/video/api/v1/feed',
        method: 'post',
        data: data
    })
}

// 分页查询我的视频
export function videoMypage(data) {
    return request({
        url: '/video/api/v1/mypage',
        method: 'post',
        data: data
    })
}


// 发布视频
export function publishVideo(data) {
    return request({
        url: '/video/api/v1/publish',
        method: 'post',
        data: data
    })
}
