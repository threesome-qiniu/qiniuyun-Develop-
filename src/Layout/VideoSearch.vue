<template>
  <div class="search-container">
    <el-scrollbar>
      <div class="hint-container" v-for="item in videoSearchList" key="item.viderId">
        <div class="user-container">
          <img class="user-avatar" :src="item.avatar">
          <span class="username">{{ item.userNickName }}</span>
        </div>
        <p class="hint-title" v-html="item.videoTitle"></p>
        <video class="hint-video" :src="item.videoUrl" controls></video>
      </div>
    </el-scrollbar>
  </div>
</template>
<script>

import {searchVideo} from "@/api/search.js";

export default {
  name: "VideoSearch",
  props: {},
  data() {
    return {
      searchFrom: {
        keyword: this.$route.query.keyword,// 搜索输入框的数据  url 上的keyword
        pageNum: 0,
        pageSize: 10,
      },
      videoSearchList: [],
    }
  },
  created() {
    this.loadSearchVideo()
  },
  mounted() {
  },
  methods: {
    loadSearchVideo() {
      searchVideo(this.searchFrom).then(res => {
        // console.log(res)
        this.videoSearchList = res.data
      })

    }
  }
}
</script>
<style scoped>
.search-container {
  border-radius: 1rem;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px);
}

.hint-container {
  margin: 2rem;
  border-radius: 1rem;
  background: black;
  max-height: calc(100vh - 120px - 8rem);
  padding: 2rem;
  color: white;
}

.user-container {
  text-align: center;
  display: flex;
  border-radius: 10px;

  .user-avatar {
    width: 50px;
    height: 50px;
    border-radius: 32px;
  }

  .username {
    line-height: 50px;
    padding: 0 10px;
  }
}

.hint-title {
  margin: 1rem 0;
}

.hint-video {
  width: 100%;
  border-radius: 1rem;
  max-height: 400px;
}

</style>
