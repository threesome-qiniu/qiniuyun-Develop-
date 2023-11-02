import request from '@/utils/request'

// 视频搜索
export function searchVideo(data) {
    return request({
        url: '/search/api/v1/video',
        method: 'post',
        data: data
    })
}

