<template>
  <div class="video-container">
    <video class="video-player"
           v-if="showVideo"
           :autoplay="autoPlayVideo"
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
      autoPlayVideo: "autoplay",
    }
  },
  emits: ['reloadVideoFeed'],
  created() {
    this.init()
  },
  mounted() {
    // this.$refs.video.addEventListener("play", () => {
    //   this.videoPlay = "play";
    //   this.duration = this.$refs.video.duration;
    //   this.currentTime = this.$refs.video.currentTime;
    //   console.log(this.duration)
    //   console.log(this.currentTime)
    // });
    // // 监听视频暂停
    // this.$refs.video.addEventListener("pause", () => {
    //   this.videoPlay = "pause";
    //   this.currentTime = this.$refs.video.currentTime;
    // });
    //监听鼠标滚动事件
    window.addEventListener('mousewheel', this.handleScroll) // 监听滚动事件，然后用handleScroll这个方法进行相应的处理

  },
  methods: {
    init() {
      if (this.autoPlay === true) {
        this.autoPlayVideo = "autoplay"
      }
    },
    getPreviousVideo() {
    },
    getNextVideo() {
      console.log("next")
      this.showVideo = false;
      this.$emit("reloadVideoFeed", this.showVideo);
    },
    //判断滚动方向，因为此demo中只有四页，故边界处理为 0 与 3
    handleScroll(e) {
      // console.log("mousewheel")
      //e.wheelDellta：可以用来获取鼠标的滚动方向，对于得到的值，只看正负，往上滚是正值，往下滚是负值。
      //火狐浏览器不支持这个方法，需要会用e.detail来获取滚轮的滚动方向，向上是负值，向下是正值
      let direction = e.deltaY > 0 ? 'down' : 'up';  //deltaY为正则滚轮向下，为负滚轮向上
      console.log(direction)
      if (direction === 'down') {
        this.showVideo = false;
        this.$emit("reloadVideoFeed", this.showVideo);
      }
      // //125为用户一次滚动鼠标的wheelDelta的值,125与鼠标滚动一下是几行的不同而不同
      // if (direction == 'down' && e.deltaY >= 125) {
      //   if (this.initialIndex >= 3) {
      //     this.initialIndex = 3
      //   } else {
      //     this.initialIndex += 1;
      //     this.setActiveItem(this.initialIndex)
      //   }
      // }
      // if (direction == 'up' && e.deltaY <= -125) {
      //   if (this.initialIndex <= 0) {
      //     this.initialIndex = 0;
      //     // this.setActiveItem(0)
      //   } else {
      //     this.initialIndex -= 1;
      //     this.setActiveItem(this.initialIndex)
      //   }
      // }
    },

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
