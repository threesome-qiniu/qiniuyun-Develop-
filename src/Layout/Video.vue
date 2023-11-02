<template>
<!--  视频播放-->
  <VideoPlayer
      v-if="showVideoPlayer"
      :autoPlay="autoPlay"
      :video-url="videoUrl"
      @reloadVideoFeed="reloadVideoFeedEmit"
  ></VideoPlayer>
</template>

<script>
import VideoPlayer from "@/components/VideoPlayer.vue";
import {videoFeed} from "@/api/video"

export default {
  name: 'Video',
  components: {VideoPlayer},
  data() {
    return {
      autoPlay: true, // 自动播放视频
      showVideoPlayer: true,
      publishTime: undefined,
      videoUrl: undefined,
    }
  },
  created() {
    this.getVideoFeed()
  },
  mounted() {
  },
  methods: {
    getVideoFeed() {
      videoFeed(this.publishTime).then(res => {
        if (res.code === 200) {
          console.log(res.data.videoUrl)
          this.videoUrl = res.data.videoUrl
          this.publishTime = res.data.createTime
        }else {
          this.$message.error(res.msg)
        }
      })
    },
    autoPlayVideo(val) {
      this.autoPlay = val;
    },
    reloadVideoFeedEmit(val) {
      this.showVideoPlayer = val;
      this.$nextTick(() => {
        this.showVideoPlayer = true;
        this.getVideoFeed();
      });
    }
  }
}

</script>

<style lang='less' scoped>
.video-container {
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
