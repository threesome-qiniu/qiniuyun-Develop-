<template>
  <!--  侧边栏-->
  <el-aside width="160px">
    <el-scrollbar>
      <div style="width:100%;overflow:hidden;height: 60px;text-align: center">
        <router-link style="display:flex;justify-content: center;align-items: center;width: 100%;height: 100%;text-decoration: none"
                     class="link-type"
                     :to="'/'">
          <img style="width: 32px;height: 32px;display: inline-block"
               src="@/assets/logo/logo-tiktok.png">
          <span style="display:inline-block;line-height: 60px;height: 60px">牛音</span>
        </router-link>
      </div>
      <!-- tab栏区域 -->
      <div class="b-wrap tab_main">
        <!-- tab栏左边区域 -->
        <div class="tab_left">
          <ul>
            <li class="tab_left_item"
                v-for="(item, i) in tabsLeftList"
                :key="i">
              <router-link class="router-link" :to="item.link">
                <div class="tab_left_item2">
                  <div class="round">
                    <i class="iconfont" :class="item.class" :style="item"></i>
                  </div>
                  <span>{{ item.name }}</span>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </el-scrollbar>
  </el-aside>
</template>

<script>
import {Message} from "@element-plus/icons-vue";

export default {
  name: "Aside",
  components: {Message},
  props: {
    siteTitle: String,
  },
  data() {
    return {
      tabsLeftList: [
        {id: 1, name: "首页", background: "#ff5c7c", link: "/"},
        {id: 2, name: "动态", background: "#73c9e5", link: "/",},
        {id: 3, name: "关注", background: "#ff716d", link: "/follow"},
        {id: 4, name: "频道", background: "#6dc781", link: "/channel",},
      ],
    }
  },
  methods: {
    handleSelect(index) {
      // console.log(this.$router.options.routes)
    }
  }
}
</script>

<style>
.el-aside {
  background-color: aliceblue
}

.tab_left_item {
  width: 100%;
  margin: 10px 0;
  text-align: center;
  font-size: 16px;
  border-radius: 0.5rem;
}

.router-link {
  border-radius: 0.5rem;
  padding: 0.5rem 0;
  text-decoration: none;
  color: black;
}

.tab_left_item2 {
  margin: 5px;
  display: flex;
  padding: 0.5rem 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  transition: all 0.5s ease;
}

.tab_left_item2:hover {
  backdrop-filter: blur(10px);
  background-color: rgba(150, 150, 150, 0.5);
  color: blue !important;
}

.round {
  display: inline-block;
  width: 36px;
  height: 36px;
  line-height: 36px;
}

.round i {
  color: #fff;
  border-radius: 50%;
  padding: 5px;
  font-size: 20px;
}

/* tab栏中间区域 */
.tab_center {
  flex: 1;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  text-align: center;
  border-left: 1px solid rgba(105, 105, 105, 0.2);
  border-right: 1px solid rgba(105, 105, 105, 0.2);
}

.tab_center_item {
  /* position: relative; */
  display: inline-block;
  width: 10%;
  font-size: 14px;
  margin-top: 5px;
}

.tab_center_item span {
  margin-right: 2px;
}

.tab_center_item span img {
  /* position: absolute;
  top: 5px;
  left: 29px;*/
  width: 28px;
}

/* tab栏右边区域 */
.tab_right {
  margin-left: 8px;
  width: 216px;
}

.tab_right ul {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding-left: 0;
}

.tab_right_item {
  font-size: 14px;
  margin-right: 6px;
  margin-top: 5px;
}

.tab_right_item i {
  font-size: 18px;
  margin-right: 5px;
}

.s_r_c_item img {
  width: 100%;
  display: block;
}

.s_r_c_title {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  line-height: 23px;
  color: #fff;
  font-size: 14px;
  background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.6),
      rgba(119, 119, 119, 0.1)
  );
  padding: 2px 5px 5px;
  /* 一行显示 */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}

</style>
