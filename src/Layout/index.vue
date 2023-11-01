<template>
  <div>
    <el-container class="layout-container" style="height: 100vh">
      <Aside :siteTitle="siteTitle"></Aside>
      <el-container class="is-vertical">
        <Header :user="user"></Header>
        <el-main>
          <el-scrollbar>
            <el-table :data="tableData">
              <el-table-column prop="date" label="Date" width="140"/>
              <el-table-column prop="name" label="Name" width="120"/>
              <el-table-column prop="address" label="Address"/>
            </el-table>
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import {ref} from 'vue'
import Aside from "@/components/Aside.vue"
import Header from "@/components/Header.vue"


const item = {
  date: '2023-11-01',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}
const tableData = ref(Array.from({length: 10}).fill(item))

export default {
  name: 'Home',
  components: {Aside, Header},

  data() {
    return {
      siteTitle: "牛音",
      tableData: {},
      user: Object
    }
  },
  created() {
    this.initVideo()
  },
  methods: {
    initVideo() {
      this.tableData = tableData
    }
  }

}

</script>

<style scoped>

</style>
