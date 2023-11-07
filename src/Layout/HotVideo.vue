<template>
  <div class="hot-container">
    <el-scrollbar>
      <div v-loading="loading"
           :element-loading-svg="svg"
           class="custom-loading-svg"
           element-loading-svg-view-box="-10, -10, 50, 50"
           style="display: flex;flex-flow: row wrap;justify-content: space-between">
        <el-card v-for="item in hotVideoList"
                 :key="item.videoId"
                 style="padding:1rem;background-color: white;width: 32.66%;border-radius:0.5rem;height: 300px;margin-bottom: 0.5rem">
          <div style="height: 80%;border-radius: 0.5rem;text-align: center">
            <el-image
                style="height:100%;border-radius: 0.5rem"
                @click="videoDialog(item.videoId)"
                :src="item.coverImage"/>
          </div>
          <div style="height:20%;margin-top:10px;display: flex;justify-content: space-between;align-items: center">
            <div class="one-line" style="font-size: 0.8rem;color: black">{{ item.videoTitle }}
              <p class="one-line" style="font-size: 0.7rem;color: gray;">{{ item.videoDesc }}</p>
            </div>
            <el-avatar v-if="item.userAvatar" :src="item.userAvatar"/>
            <el-avatar v-else :icon="UserFilled"/>
          </div>
        </el-card>
      </div>
      <el-dialog v-model="dialogVisible"
                 @close="dialogDestroy"
                 style="height: calc(100% - 10vh);"
                 width="80%"
                 :show-close="false">
        <template #header="{ close, titleId, titleClass }">
          <h3 class="one-line" :id="titleId" :class="titleClass" style="color: black">{{ video.videoTitle }}</h3>
          <el-button circle :icon="Close" type="info" @click="close">
          </el-button>
        </template>
        <video class="dialog-video"
               style="width: 100%;max-height: 100%;border-radius: 1rem"
               autoplay
               :src="video.videoUrl"
               controls/>
      </el-dialog>
    </el-scrollbar>
  </div>
</template>

<script>
import {hotVideoPage} from "@/api/video";
import {Close, UserFilled} from "@element-plus/icons-vue";

export default {
  name: "HotVideo",
  computed: {
    Close() {
      return Close
    },
    UserFilled() {
      return UserFilled
    }
  },
  data() {
    return {
      dialogVisible: false,
      loading: true,
      svg: `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `,
      hotVideoList: [],
      hotVideoTotal: 0,
      hotVideoQueryParams: {
        pageNum: 1,
        pageSize: 10
      },
      video: {},
    };
  },
  created() {
    this.getHotVideoPage()
  },
  methods: {
    getHotVideoPage() {
      this.loading = true
      hotVideoPage(this.hotVideoQueryParams).then(res => {
        if (res.code === 200) {
          this.hotVideoList = res.rows
          this.hotVideoTotal = res.total
          this.loading = false
          // console.log(this.hotVideoList)
        }
      })
    },
    videoDialog(videoId) {
      const videoF = this.hotVideoList.filter(v => {
        return videoId === v.videoId
      })
      this.video = videoF[0]
      this.dialogVisible = true
    },
    dialogDestroy() {
      const videoD = document.getElementsByClassName("dialog-video")
      videoD[0].pause();
    }
  }
};
</script>

<style scoped lang="less">
.hot-container {
  border-radius: 1rem;
  height: 100%;
  padding: 0 1rem 1rem 0;
}

.video-uploader {
  width: 100%;

  .video-uploader-icon {
    border: 2px dashed darkblue !important;
    border-radius: 0.5rem;
    font-size: 28px;
    color: black;
    width: 100%;
    height: 100%;
    line-height: 180px;
    text-align: center;
  }

}

.video-uploader .el-upload:hover {
  border: 2px dashed #d83f3f !important;
}

.video {
  width: 320px;
  height: 180px;
  border-radius: 1rem;
  display: block;
}

.container-water-fall {
  padding-top: 30px;
  box-sizing: border-box;

  h4 {
    padding-top: 56px;
    padding-bottom: 28px;
    font-family: PingFangSC-Medium;
    font-size: 36px;
    color: #000000;
    letter-spacing: 1px;
    text-align: justify;
  }

  button {
    // background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);
    background-color: yellow;
    color: #24292e;
    border: 1px solid rgba(27, 31, 35, 0.2);
    border-radius: 0.25em;
    width: 100px;
    line-height: 26px;
    font-size: 13px;

    margin: 4px 0;
    margin-right: 4px;
    cursor: pointer;
    outline: none;

    &.blue-light {
      background: #27fbc2;
    }
  }

  button:hover {
    background-image: linear-gradient(-180deg, #fafbfc, #ccc 90%);
  }

  .cell-item {
    width: 100%;
    // margin-bottom: 18px;
    background: #ffffff;
    border: 2px solid #f0f0f0;
    border-radius: 12px 12px 12px 12px;
    overflow: hidden;
    box-sizing: border-box;

    img {
      // border-radius: 12px 12px 0 0;
      width: 100%;
      height: auto;
      display: block;
    }

    .item-body {
      // border: 1px solid #F0F0F0;
      padding: 12px;

      .item-desc {
        font-size: 15px;
        color: #333333;
        line-height: 15px;
        font-weight: bold;
      }

      .item-footer {
        margin-top: 22px;
        position: relative;
        display: flex;
        align-items: center;

        .avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-repeat: no-repeat;
          background-size: contain;
        }

        .name {
          max-width: 150px;
          margin-left: 10px;
          font-size: 14px;
          color: #999999;
        }

        .like {
          position: absolute;
          right: 0;
          display: flex;
          align-items: center;

          &.active {
            i {
            }

            .like-total {
              color: #ff4479;
            }
          }

          i {
            width: 28px;
            display: block;
          }

          .like-total {
            margin-left: 10px;
            font-size: 12px;
            color: #999999;
          }
        }
      }
    }
  }
}

.githubdata {
  float: right;
  margin-right: 90px;

  img {
    width: 14px;
    // height: 16px;
  }
}

.action {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  background: white;
  width: 100%;
  padding-left: 10px;
  box-sizing: border-box;
}

</style>

