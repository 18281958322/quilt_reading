<template>
  <div class="ToPromoteLinks">
    <div class="pagetitle">推广链接</div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">
        <div class="flex align-center">
          <el-input placeholder="请输入内容" v-model="input" clearable>
          </el-input>
          <div style="margin: 0 0 0 10px" class="isbutton bt1">搜索</div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "ToPromoteLinks",
  data() {
    return {
      input: "",
      activeName: "first",
    };
  },
  methods: {
    handleClick: function (val) {},
    openSpread() {
      this.$router.push('/WorkSpread')
    }
  },
};
</script>

<style lang="scss">
.ToPromoteLinks {
  .el-input {
    width: 190px;
  }
  .el-input__inner {
    height: 34px;
    line-height: 34px;
  }
  .el-input__icon {
    line-height: 34px;
  }
}
</style>

<style lang='scss' scoped>
.pagetitle {
  font-size: 16px;
  color: #3c3d40;
  white-space: normal;
  padding: 18px 0;
  font-weight: 400;
}
.ToPromoteLinks {
  width: 100%;
  position: relative;
  height: auto;
  background-color: #fff;
  min-height: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px;
}
</style>