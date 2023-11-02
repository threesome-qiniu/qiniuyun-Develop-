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
  <div class="video-behave-swift flex-center">
    <el-button @click="getPreviousVideo" type="warning" circle/>
    <el-button @click="getNextVideo" type="primary" circle/>
  </div>
</template>
<script>

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
  emits: ['reloadVideoFeed'],
  created() {
  },
  mounted() {
    this.$refs.video.addEventListener("play", () => {
      this.videoPlay = "play";
      this.duration = this.$refs.video.duration;
      this.currentTime = this.$refs.video.currentTime;
      console.log(this.duration)
      console.log(this.currentTime)
    });
    // 监听视频暂停
    this.$refs.video.addEventListener("pause", () => {
      this.videoPlay = "pause";
      this.currentTime = this.$refs.video.currentTime;
    });
  },
  methods: {
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
  width: 100%;
  border-radius: 1rem;
  height: 100%;
}

.video-container {
  width: 90%;
  float: left;
  backdrop-filter: blur(20px);
  border-radius: 1rem;
  margin: 0 auto;
  height: calc(100vh - 160px);
}

.video-behave-swift {
  width: 10%;
  height: 100%;
  float: right;
}
</style>
