<template>
  <!--  视频播放-->
  <!--  <VideoPlayer-->
  <!--      v-if="showVideoPlayer"-->
  <!--      :autoPlay="autoPlay"-->
  <!--      :video-url="videoUrl"-->
  <!--      @reloadVideoFeed="reloadVideoFeedEmit"-->
  <!--  ></VideoPlayer>-->
  <!--  <VideoPlayerSwiper-->
  <!--      v-if="showVideoPlayer"-->
  <!--      :video-list="videoList"-->
  <!--      @reloadVideoFeed="reloadVideoFeedEmit"-->
  <!--  ></VideoPlayerSwiper> -->
  <VideoPlayerCarousel
      v-if="showVideoPlayer"
      :video-list="videoList"
      @reloadVideoFeed="reloadVideoFeedEmit"
  ></VideoPlayerCarousel>
  <!--  <VideoPlayerScroll-->
  <!--      v-if="showVideoPlayer"-->
  <!--      :video-list="videoList"-->
  <!--  ></VideoPlayerScroll>-->
</template>

<script>
import VideoPlayerCarousel from "@/components/video/VideoPlayerCarousel.vue";
import {videoFeed} from "@/api/video"

export default {
  name: 'Video',
  components: {VideoPlayerCarousel},
  data() {
    return {
      autoPlay: true, // 自动播放视频
      showVideoPlayer: true,
      publishTime: undefined,
      videoUrl: undefined,
      videoList: [],
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
        if (res.code === 200 && res.data != null) {
          // console.log(res.data)
          this.videoList = res.data
          this.publishTime = res.data[this.videoList.length-1].createTime
        } else {
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

</style>
