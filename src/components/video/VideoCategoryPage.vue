<template>
  <div class="video-page-container">
<!--    <el-scrollbar class="video-container">-->
      <div style="display: flex;flex-flow: row wrap;justify-content: space-between">
        <el-card v-for="item in videoList"
                 :key="item.videoId"
                 style="width: 32.66%;border-radius:0.5rem;height: 200px;margin-bottom: 0.5rem">
          <el-image style="height: 80%;border-radius: 0.5rem" :src="item.coverImage"/>
          <div style="height:20%;display: flex;justify-content: space-between;align-items: center">
            <div style="font-size: 0.8rem;color: white">{{ item.videoTitle }}
              <p style="font-size: 0.7rem;color: gray;">{{ item.videoDesc }}</p>
            </div>
            <el-avatar :src="item.userAvatar"/>
          </div>
        </el-card>
        <el-empty v-show="videoTotal<=0" description="暂无数据"/>
      </div>
      <el-pagination v-show="videoTotal>0"
                     :total="videoTotal"
                     background
                     layout="prev, pager, next"
                     :page.sync="videoQueryParams.pageNum"
                     :limit.sync="videoQueryParams.pageSize"
                     @pagination="getVideoList"/>
<!--    </el-scrollbar>-->
  </div>
</template>

<script>
import {videoCategoryPage} from "@/api/video.js";

export default {
  name: 'VideoCategoryPage',
  props: {
    channelId: Number,
  },
  data() {
    return {
      videoQueryParams: {
        categoryId: undefined,
        pageNum: 1,
        pageSize: 6,
      },
      videoList: [],
      videoTotal: undefined,
    }
  },
  created() {
    this.getVideoList()
  },
  methods: {
    getVideoList() {
      this.videoQueryParams.categoryId = this.channelId
      videoCategoryPage(this.videoQueryParams).then(res => {
        if (res.code === 200) {
          this.videoList = res.rows
          this.videoTotal = res.total
        }
      })
    }
  },
}
</script>

<style scoped>
.video-page-container {
  border-radius: 1rem;
  height: calc(100vh - 160px);
  backdrop-filter: blur(20px);
}
</style>
