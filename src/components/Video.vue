<template>
  <div style="height: 100%">
    <div style="margin: 0 auto;height: calc(100vh - 160px);">
      <video class="video-player" autoplay
             :src="videoUrl"></video>
    </div>
  </div>
</template>

<script>
import { ElMessage } from 'element-plus'
import {register} from "@/api/user.js"
export default {
  name: 'Video',
  props: {
    videoUrl: String,
  },
  data() {
    return {}
  },
  created(){
    this.showMsg()
  },
  methods: {
    showMsg(){
      ElMessage('欢迎来到牛音')
    }
  }
}

</script>

<style lang='less' scoped>
.video-player {
  height: 100%;
  width: 100%
}
</style>
