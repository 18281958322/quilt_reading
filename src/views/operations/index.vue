<template>
  <div class="operations">
    <div class="sidebarContent">
      <sidebar :defaultActive="s1" @subMenuOpen="subMenuOpens" @subMenuClose="subMenuCloses"
        @activeChange="activeChanges" :treeData="sidebarData" />
    </div>
    <div class="main">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">用户</el-breadcrumb-item>
        <el-breadcrumb-item>用户反馈</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script>
  export default {
    name: "operations",
    data() {
      return {
        sidebarData: [{
          title: "通用管理",
          key: "s1",
          icon: "el-icon-location",
          children: [{
              title: "热搜热词",
              key: "s1-1",
              icon: false,
            },
            {
              title: "排行榜",
              key: "s1-2",
              // icon: 'el-icon-location',
            },
            {
              title: "批量购买章节折扣",
              key: "s1-3",
              // icon: 'el-icon-location',
            },
          ],
        },],
      };
    },
    methods: {
      subMenuOpens(index, path) {
        console.log('subMenuOpens', index, path)
      },
      subMenuCloses(index, path) {
        console.log('subMenuCloses', index, path)
      },
      activeChanges(index, path) {
        console.log('activeChanges', index, path)
      }
    }
  };
</script>

<style lang='scss' scoped>
  .operations {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    min-width: 100vw;
    box-sizing: border-box;
    padding: 61px 0 0;
    display: flex;
    flex-direction: row;
  }
</style>