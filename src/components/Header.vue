<template>
  <el-header class="niuyin-header">
    <div class="toolbar">
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
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped>
.niuyin-header {
  text-align: right;
  position: relative;
  backdrop-filter: blur(20px);

  .toolbar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    right: 20px;
  }

}
</style>
