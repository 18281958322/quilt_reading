<template>
  <div class="AnnouncementOfTheManagement">
    <div class="flex justify-between align-center">
      <div class="pagetitle">公告管理</div>
      <div class="isbutton bt1">新增公告</div>
    </div>
    <div style="margin: 0 0 20px" class="flex align-center">
      <el-input placeholder="标题" v-model="input" clearable>
      </el-input>
      <div style="margin: 0 0 0 10px" class="isbutton bt1">搜索</div>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="序号1" width="80"> </el-table-column>
      <el-table-column label="标题">
        <template slot-scope="scope">
        </template>
      </el-table-column>
      <el-table-column label="内容">
        <template slot-scope="scope">
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <a style="color:#00A5FF;font-size:12px" href="javascript:void(0)">查看公告</a>
          <a style="color:#00A5FF;font-size:12px;margin-left: 4px;" href="javascript:void(0)">编辑</a>
          <a style="margin-left: 4px;color:#00A5FF;font-size:12px" href="javascript:void(0)">删除</a>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "AnnouncementOfTheManagement",
  data() {
    return {
      tableData: [
        {
          id: "1",
        },
      ],
      input: ''
    };
  },
  methods: {
  },
};
</script>

<style lang="scss">
.AnnouncementOfTheManagement {
  .el-table th {
    background-color: #f2f4f8;
  }
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
.AnnouncementOfTheManagement {
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