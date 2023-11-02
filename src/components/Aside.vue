<template>
  <el-aside width="200px">
    <el-scrollbar>
      <div style="width:100%;overflow:hidden;">
        <img style="width: auto;height: 60px;margin: 0 auto;display: block" src="../assets/logo/logo.png">
      </div>
      <el-menu :default-openeds="['1']">
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/follow">推荐</el-menu-item>
        <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <Message/>
            </el-icon>
            一级菜单
          </template>
          <el-menu-item index="1-3">选项一</el-menu-item>
          <el-menu-item-group title="Group 2">
            <el-menu-item index="/2">选项二</el-menu-item>
            <el-menu-item index="/2">选项三</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
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
    return {}
  },
  methods: {
    handleSelect(index) {
      // console.log(this.$router.options.routes)
    }
  }
}
</script>

<style scoped>

.el-aside {
  color: var(--el-text-color-primary);
  backdrop-filter: blur(10px);

  .el-menu {
    border-right: none;
  }
}

</style>
