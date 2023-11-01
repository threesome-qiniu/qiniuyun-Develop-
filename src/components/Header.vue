<template>
  <el-header style="text-align: right; font-size: 12px;background:gold">
    <div class="toolbar">
      <el-dropdown>
        <el-icon style="margin-right: 8px; margin-top: 1px">
          <setting/>
        </el-icon>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>View</el-dropdown-item>
            <el-dropdown-item>Add</el-dropdown-item>
            <el-dropdown-item>Delete</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-image :src="user.avatar"></el-image>
      <span>roydon</span>
    </div>
  </el-header>
</template>

<script>
export default {
  name: "Header",
  props: {
    user: Object
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped>
.el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);

  .toolbar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    right: 20px;
  }
}

</style>
