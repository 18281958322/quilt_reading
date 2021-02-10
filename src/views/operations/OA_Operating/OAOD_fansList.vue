<template>
  <div class="OAOD_fansList">
    <div class="pagetitle">粉丝列表</div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="用户uid" width="80"> </el-table-column>
      <el-table-column label="头像"> </el-table-column>
      <el-table-column label="昵称"> </el-table-column>
      <el-table-column label="注册时间"> </el-table-column>
      <el-table-column label="来源渠道"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "OAOD_fansList",
  data() {
    return {
      value: "",
      tableData: [
        {
          id: "1",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss">
.OAOD_fansList {
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
.OAOD_fansList {
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