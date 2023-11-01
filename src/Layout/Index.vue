<template>
  <div>
    <el-container class="layout-container" style="height: 100vh">
      <Aside :siteTitle="siteTitle"></Aside>
      <el-container class="is-vertical">
        <Header :user="user"></Header>
        <el-main>
          <!--          <el-scrollbar>-->
          <div style="width: 90%;float: left">
            <div class="video-container" style="background: goldenrod">
              <Video :video-url="videoUrl"></Video>
            </div>
          </div>
          <div style="height:100%;width:10%;background: #07A7E1;float: right">
            <div style="display: block;position: absolute; right: 8px;
    top: calc(50% + 60px);
    transform: translateY(calc(-50% - 30px));
        flex-shrink: 0;
    z-index: 2;">
              <div class="xgplayer-icon">
                <div style="background-color: #7adc4c;
    border-radius: 22px;
    height: 88px;
    width: 44px;">
                  <div data-e2e="video-switch-prev-arrow" class="xgplayer-playswitch-prev">
                    <svg width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg" class=""
                         viewBox="0 0 26 26">
                      <g filter="url(#newAbove_svg__filter0_d_1651_162618)">
                        <path
                            d="M7.269 16.316a1.393 1.393 0 010-1.97l5.056-5.055a1.393 1.393 0 011.97 0l.011.011 5.045 5.045a1.393 1.393 0 11-1.97 1.97l-4.071-4.072-4.071 4.071a1.393 1.393 0 01-1.97 0z"
                            fill="#fff"></path>
                      </g>
                      <defs>
                        <filter id="newAbove_svg__filter0_d_1651_162618" x="5.861" y="8.883" width="14.898"
                                height="9.842" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                         result="hardAlpha"></feColorMatrix>
                          <feOffset dy="1"></feOffset>
                          <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                          <feComposite in2="hardAlpha" operator="out"></feComposite>
                          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"></feColorMatrix>
                          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1651_162618"></feBlend>
                          <feBlend in="SourceGraphic" in2="effect1_dropShadow_1651_162618" result="shape"></feBlend>
                        </filter>
                      </defs>
                    </svg>
                  </div>
                  <div data-e2e="video-switch-next-arrow" class="xgplayer-playswitch-next">
                    <svg width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg" class=""
                         viewBox="0 0 26 26">
                      <g filter="url(#newBelow_svg__filter0_d_1646_162559)">
                        <path
                            d="M7.269 9.29a1.393 1.393 0 000 1.97l5.056 5.056a1.393 1.393 0 001.97 0l.011-.011 5.045-5.045a1.393 1.393 0 10-1.97-1.97l-4.071 4.072L9.239 9.29a1.393 1.393 0 00-1.97 0z"
                            fill="#fff"></path>
                      </g>
                      <defs>
                        <filter id="newBelow_svg__filter0_d_1646_162559" x="5.861" y="8.883" width="14.898"
                                height="9.842" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                         result="hardAlpha"></feColorMatrix>
                          <feOffset dy="1"></feOffset>
                          <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                          <feComposite in2="hardAlpha" operator="out"></feComposite>
                          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"></feColorMatrix>
                          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1646_162559"></feBlend>
                          <feBlend in="SourceGraphic" in2="effect1_dropShadow_1646_162559" result="shape"></feBlend>
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--          </el-scrollbar>-->
        </el-main>
        <el-footer style="background: gold">Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Aside from "@/components/Aside.vue"
import Header from "@/components/Header.vue"

import Video from "@/components/Video.vue"

import {videoFeed} from "@/api/video.js"
import {ElMessage} from "element-plus";

export default {
  name: 'Home',
  components: {Aside, Header, Video},

  data() {
    return {
      siteTitle: "牛音",
      user: Object,
      videoUrl: undefined
    }
  },
  created() {
    this.showMsg()
    this.getVideoFeed()
  },
  methods: {
    showMsg() {
      ElMessage('欢迎来到牛音')
    },
    getVideoFeed() {
      videoFeed(new Date()).then(res => {
        if (res.code === 200) {
          this.videoUrl = res.data.videoUrl
          // console.log(res)
        }
      })
    }
  }

}

</script>

<style scoped>
.el-footer {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  right: 20px;
}
</style>
