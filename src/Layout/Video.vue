<template>
  <div style="width: 90%;float: left">
    <div class="video-container">
      <video class="video-player" autoplay
             :src="videoUrl"></video>
    </div>
  </div>
  <div style="width: 10%;float: right;">
    <div style="margin: 0 auto">
      <el-row>
        <el-button @click="getPreviousVideo" type="warning" :icon="ArrowUpBold" circle/>
      </el-row>
      <el-row>
        <el-button @click="getNextVideo" type="primary" :icon="ArrowDownBold" circle/>
      </el-row>
    </div>
  </div>
</template>

<script>
import {ElMessage} from 'element-plus'
import {videoFeed} from "@/api/video"
import {ArrowDownBold, ArrowUpBold} from "@element-plus/icons-vue";

export default {
  name: 'Video',
  computed: {
    ArrowDownBold() {
      return ArrowDownBold
    },
    ArrowUpBold() {
      return ArrowUpBold
    }
  },
  data() {
    return {
      videoUrl: undefined,
      publishTime: new Date()
    }
  },
  created() {
    this.getVideoFeed()
  },
  methods: {
    getVideoFeed() {
      videoFeed(this.publishTime).then(res => {
        if (res.code === 200) {
          // console.log(res.data.videoUrl)
          this.videoUrl = res.data.videoUrl
          this.publishTime = res.data.createTime
          // console.log(res)
        }
      })
    },
    getPreviousVideo() {

    },
    getNextVideo() {
      videoFeed(this.publishTime)
    }
  }
}

</script>

<style lang='less' scoped>
.video-container {
  //background: #07A7E1;
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  margin: 0 auto;
  height: calc(100vh - 160px);
}

.video-player {
  height: 100%;
  width: 100%
}
</style>
