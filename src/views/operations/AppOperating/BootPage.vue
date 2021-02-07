<template>
  <div class="BootPage">
    <div class="flex justify-between align-center">
        <div class="pagetitle">启动页</div>
        <div @click="openPage('/addBootPage')" class="isbutton bt1">新增启动页</div>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column prop="id" label="序号" width="80"> </el-table-column>
      <el-table-column label="跳转类型">
        <template slot-scope="scope"> </template>
      </el-table-column>
      <el-table-column label="标题">
        <template slot-scope="scope"> </template>
      </el-table-column>
      <el-table-column label="启动图">
        <template slot-scope="scope"> </template>
      </el-table-column>
      <el-table-column label="内容">
        <template slot-scope="scope"> </template>
      </el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope"> </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <a
            @click="openPage('/setBootPage')"
            style="color: #00a5ff; font-size: 12px; margin-left: 4px"
            href="javascript:void(0)"
            >编辑</a
          >
          <a
            @click="open('确定删除该启动页么？')"
            style="margin-left: 4px; color: #00a5ff; font-size: 12px"
            href="javascript:void(0)"
            >删除</a
          >
          <a style="color: #00a5ff; font-size: 12px" href="javascript:void(0)">
            下线
          </a>
        </template>
      </el-table-column>
    </el-table>
    <div class="flex justify-between BootPageBottom align-center">
      <div @click="open('确定删除选中启动页么？')" class="isbutton bt0">批量删除</div>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "BootPage",
  data() {
    return {
      tableData: [
        {
          id: "1",
        },
      ],
      input: "",
      activeName: "first",
      currentPage4: 4,
    };
  },
  methods: {
    handleClick: function () {},
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    openPage(path) {
        this.$router.push(path)
    },
    open(val = "") {
      this.$confirm(val, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>

<style lang="scss">
.BootPage {
  .el-table th {
    background-color: #f2f4f8;
  }
}
</style>

<style lang='scss' scoped>
.BootPageBottom {
  margin: 20px 0 0;
}
.pagetitle {
  font-size: 16px;
  color: #3c3d40;
  white-space: normal;
  padding: 18px 0;
  font-weight: 400;
}
.BootPage {
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