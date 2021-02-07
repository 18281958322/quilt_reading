<template>
  <div class="withdrawAudit">
    <div class="pagetitle">提现审核</div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="金币提现" name="first">
        <div
          style="margin: 0 0 20px"
          class="flex align-center withdrawAuditHeader"
        >
          <el-select v-model="value" placeholder="请选择提现次数">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <el-select style="margin: 0 0 0 10px" v-model="value" placeholder="请选择状态">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <el-input
            style="width: 150px; margin: 0 0 0 10px"
            placeholder="昵称/手机号/支付宝"
            v-model="input"
            clearable
          >
          </el-input>
        </div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column prop="id" label="交易号" width="80">
          </el-table-column>
          <el-table-column label="日期">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="用户信息">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="金额">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="支付宝信息">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="提现次数">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="状态">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="状态变更时间">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="备注信息">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <a
                style="color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
              >
                通过
              </a>
              <a
                @click="dialogVisible2 = true"
                style="color: #00a5ff; font-size: 12px; margin-left: 4px"
                href="javascript:void(0)"
                >驳回</a
              >
            </template>
          </el-table-column>
        </el-table>
        <div class="flex justify-end withdrawAuditBottom align-center">
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
      </el-tab-pane>
      <el-tab-pane label="现金提现" name="second">
        <div
          style="margin: 0 0 20px"
          class="flex align-center withdrawAuditHeader"
        >
          <el-select v-model="value" placeholder="请选择提现次数">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <el-select style="margin: 0 0 0 10px" v-model="value" placeholder="请选择状态">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <el-input
            style="width: 150px; margin: 0 0 0 10px"
            placeholder="昵称/手机号/支付宝"
            v-model="input"
            clearable
          >
          </el-input>
        </div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column prop="id" label="交易号" width="80">
          </el-table-column>
          <el-table-column label="日期">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="用户信息">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="金额">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="支付宝信息">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="提现次数">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="状态">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="状态变更时间">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="备注信息">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <a
                style="color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
              >
                通过
              </a>
              <a
                @click="dialogVisible2 = true"
                style="color: #00a5ff; font-size: 12px; margin-left: 4px"
                href="javascript:void(0)"
                >驳回</a
              >
            </template>
          </el-table-column>
        </el-table>
        <div class="flex justify-end withdrawAuditBottom align-center">
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
      </el-tab-pane>
    </el-tabs>
    <el-dialog title="驳回理由" :visible.sync="dialogVisible2" width="450px">
      <el-input style="margin: 0 0 20px" placeholder="驳回理由最多两百字" type="textarea" v-model="value"></el-input>
      <div class="flex justify-end">
        <div class="isbutton bt8">驳回</div>
        <div style="margin: 0 0 0 12px" class="isbutton bt0">取消</div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "withdrawAudit",
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
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
      dialogVisible2: false,
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
    openPage(val) {
      this.$router.push(val);
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
.withdrawAudit {
  .el-table th {
    background-color: #f2f4f8;
  }
}
.withdrawAuditHeader {
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
.withdrawAuditBottom {
  margin: 20px 0 0;
}
.pagetitle {
  font-size: 16px;
  color: #3c3d40;
  white-space: normal;
  padding: 18px 0;
  font-weight: 400;
}
.withdrawAudit {
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