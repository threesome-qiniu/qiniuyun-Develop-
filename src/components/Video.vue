<template>
  <div style="height: 100%">
    <div style="margin: 0 auto;height: calc(100vh - 160px);">
      <video class="video-player" autoplay
             :src="videoUrl"></video>
    </div>
  </div>
</template>

<script>
import {ElMessage} from 'element-plus'


export default {
  name: 'Video',
  props: {
    videoUrl: String,
  },
  data() {
    return {}
  },
  created() {
  },
  methods: {

  }
}

</script>

<style lang='less' scoped>
.video-player {
  height: 100%;
  width: 100%
}
</style>
