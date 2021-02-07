<template>
  <div class="RechargeHatchway">
    <div class="pagetitle">充值通道</div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="终端" width="80"> </el-table-column>
      <el-table-column label="图标">
        <template slot-scope="scope"> </template>
      </el-table-column>
      <el-table-column label="显示名称">
        <template slot-scope="scope"> </template>
      </el-table-column>
      <el-table-column label="支付通道名称">
        <template slot-scope="scope"> </template>
      </el-table-column>
      <el-table-column label="通道类型">
        <template slot-scope="scope"> </template>
      </el-table-column>
      <el-table-column label="当前状态">
        <template slot-scope="scope"> </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <a
            @click="openPage('/setRechargeHatchway')"
            style="color: #00a5ff; font-size: 12px;"
            href="javascript:void(0)"
            >编辑</a
          >
          <a
            style="margin-left: 4px; color: #00a5ff; font-size: 12px"
            href="javascript:void(0)"
            >下线</a
          >
        </template>
      </el-table-column>
    </el-table>
    <div class="flex justify-end RechargeHatchwayBottom align-center">
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
  name: "RechargeHatchway",
  data() {
    return {
      tableData: [
        {
          id: "IOS",
        },
        {
          id: "Android",
        },
      ],
      value: "",
      currentPage4: 4,
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    openPage(val) {
      this.$router.push(val);
    },
  },
};
</script>

<style lang="scss">
.RechargeHatchway {
  .el-table th {
    background-color: #f2f4f8;
  }
}
</style>

<style lang='scss' scoped>
.RechargeHatchwayBottom {
  margin: 20px 0 0;
}
.pagetitle {
  font-size: 16px;
  color: #3c3d40;
  white-space: normal;
  padding: 18px 0;
  font-weight: 400;
}
.RechargeHatchway {
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