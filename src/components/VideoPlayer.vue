<template>
  <div class="video-container">
    <video class="video-player"
           v-if="showVideo"
           autoplay
           controls
           ref="video"
           preload
           :src="videoUrl"></video>
  </div>
  <div class="video-swift flex-center">
    <el-button @click="getPreviousVideo" type="warning" circle/>
    <el-button @click="getNextVideo" type="primary" circle/>
  </div>
</template>
<script>
import {ArrowDownBold, ArrowUpBold} from "@element-plus/icons-vue";

export default {
  name: "VideoPlayer",
  props: {
    autoPlay: Boolean,
    videoUrl: String,
  },
  data() {
    return {
      showVideo: true,
      duration: 0, // 视频总时长
      currentTime: 0, // 目前时长
      videoPlay: true,
      autoPlayVideo: this.autoPlay,
    }
  },
  created() {
    // this.$message("左侧为自动播放,动态可调,请点击视频下方'自动播放'按钮");
  },
  mounted() {
    // this.$refs.video.addEventListener("play", () => {
    //   this.videoPlay = "play";
    //   this.duration = this.$refs.video.duration;
    //   this.currentTime = this.$refs.video.currentTime;
    // });
    // // 监听视频暂停
    // this.$refs.video.addEventListener("pause", () => {
    //   this.videoPlay = "pause";
    //   // this.currentTime = this.$refs.videoOne.currentTime;
    //   if (this.autoPlay === true) {
    //     if (this.$refs.video.duration === this.$refs.video.currentTime) {
    //       this.autoReloadVideo();
    //     }
    //   }
    // });
  },
  methods: {
    autoReloadVideo() {
      // alert("自动播放开始");
      this.showVideo = false;
      this.$emit("reloadV1", this.showVideo);
    },
    getPreviousVideo() {
    },
    getNextVideo() {
      console.log("next")
      this.showVideo = false;
      this.$emit("reloadVideoFeed", this.showVideo);
    }
  }
}
</script>
<style scoped>
.video-player {
  display: block;
  width: 100%;
  height: 100%;
}

.video-container {
  width: 90%;
  height: 100%;
  float: left;
}

.video-swift {
  width: 10%;
  height: 100%;
  float: right;
}
</style>
