<template>
  <!--  导航栏-->
  <el-header class="niuyin-header">

    <div class="nav-left"></div>
    <!-- 导航栏中间区域 -->
    <div class="nav-center">
      <div
          class="nav_center_search"
          ref="NavSearch"
      >
        <!-- 输入框 -->
        <el-autocomplete
            class="search-input"
            slot="reference"
            popper-class="my-autocomplete"
            v-model="searchData"
            :placeholder="searchDefaults"
            :fetch-suggestions="querySearch"
            @select="handleSelect"
            @keyup.enter.native="searchConfirm"
            clearable
        >
<!--          <template slot-scope="{ item }">-->
<!--            <div class="search-history">-->
<!--              <el-tag type="info">{{ item.keyword }}</el-tag>-->
<!--            </div>-->
<!--          </template>-->
        </el-autocomplete>

        <el-button class="search-btn" type="info" plain @click="searchConfirm">
          <i class="iconfont icon-sousuo search_logo"></i>
        </el-button>
      </div>
    </div>
    <div class="nav-right">
      <div>
        <router-link class="link-type" :to="'/publish'"><span>发布视频</span>
        </router-link>
      </div>
      <el-dropdown>
        <el-icon style="margin: 0 10px">
          <Message/>
        </el-icon>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>View</el-dropdown-item>
            <el-dropdown-item>Add</el-dropdown-item>
            <el-dropdown-item>Delete</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <!--      <el-image :src="user.avatar"></el-image>-->
      <router-link class="link-type" :to="'/user'"><span>roydon</span>
      </router-link>
    </div>
  </el-header>
</template>

<script>
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'

export default {
  name: "Header",
  components: {Message},
  props: {
    // user: Object
    // 热搜数据
    hotsearch: {
      type: Array,
      default() {
        return [];
      },
    },
    searchHistory: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      // 输入框的数据
      searchData: "",
      // 默认搜索词
      searchDefaults: "请输入内容",
    }
  },
  created() {
  },
  methods: {
    // 输入框获取焦点时调用的方法
    querySearch(queryString, cb) {
      let results = this.searchHistory;
      console.log(results)
      cb(results);
    },
    // 判断选中了哪个搜索历史
    handleSelect(item) {
      this.searchData = item.keyword;
      this.routerJump();
    },
    // 确认搜索
    searchConfirm() {
      if (this.searchData === "") {
        this.searchData = this.searchDefaults;
      }
      this.routerJump();
    },

    // 路由跳转
    routerJump() {
      // 跳转到搜索页面
      this.$router.push(`/videoSearch?keyword=${this.searchData}`);
    },

  },
}
</script>

<style scoped>
.niuyin-header {
  text-align: right;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(20px);

  .nav-right {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    right: 20px;
  }

}

/* nav中间部分 */
.nav-center {
  margin: 0 2rem;
}

.nav_center_search {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 10vw;
}

.search-input {
  flex: 1;
  height: 40px;
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}

.search-history {
  display: inline-block;
  width: 24px;
  height: 24px;
  text-align: center;
  font-size: 12px
}

.search-btn {
  width: 48px;
  height: 40px;
  border-radius: 0 1rem 1rem 0;
  margin: 0;
  padding: 0;
}

.search_logo {
  font-size: 24px;
  font-weight: 600;
  color: #2999d9;
}

</style>
