<template>
  <div class="OAOD_ToPromoteLinks">
    <div class="pagetitle">推广链接</div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="小说" name="first">
        <div style="margin: 20px 0" class="flex align-center">
          <el-date-picker
            v-model="value1"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
          <el-input
            style="margin: 0 0 0 10px"
            placeholder="推广名称"
            v-model="input"
            clearable
          >
          </el-input>
          <div style="margin: 0 0 0 10px" class="isbutton bt1">搜索</div>
        </div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="id" label="id" width="80"> </el-table-column>
          <el-table-column label="推广链接">
            <template slot-scope="scope">
              <div style="color: #333; font-size: 14px; margin-top: 2px">
                推广名称：昭南文学【阮甜】书单强烈推荐txt1
              </div>
              <div style="color: #333; font-size: 14px; margin-top: 2px">
                https://mmbizurl.cn/s/bBh9kdUDr
              </div>
              <div style="color: #999999; font-size: 12px; margin-top: 2px">
                创建时间:2020-12-03 10:43:35
              </div>
            </template>
          </el-table-column>
          <el-table-column label="备注" width="100"> </el-table-column>
          <el-table-column label="点击数（PV）">
            <template slot-scope="scope">
              <div style="color: #333; font-size: 13px; margin-top: 2px">
                新增用户：0
              </div>
              <div style="color: #333; font-size: 13px; margin-top: 2px">
                关注用户：0
              </div>
              <div style="color: #333; font-size: 13px; margin-top: 2px">
                关注率：0.0%
              </div>
            </template>
          </el-table-column>
          <el-table-column label="用户数">
            <template slot-scope="scope">
              <div style="color: #333; font-size: 13px; margin-top: 2px">
                新增用户：0
              </div>
              <div style="color: #333; font-size: 13px; margin-top: 2px">
                关注用户：0
              </div>
              <div style="color: #333; font-size: 13px; margin-top: 2px">
                关注率：0.0%
              </div>
            </template>
          </el-table-column>
          <el-table-column label="累计充值">
            <template slot-scope="scope">
              <div style="color: #333; font-size: 13px; margin-top: 2px">
                充值金额：￥0.00
              </div>
              <div style="color: #333; font-size: 13px; margin-top: 2px">
                充值笔数：0
              </div>
            </template>
          </el-table-column>
          <el-table-column label="成本">
            <template slot-scope="scope">
              <div style="color: #333; font-size: 13px; margin-top: 2px">
                ￥100.00
              </div>
            </template>
          </el-table-column>
          <el-table-column label="利润">
            <template slot-scope="scope">
              <div style="color: #333; font-size: 13px; margin-top: 2px">
                ￥-100.00
              </div>
              <div style="color: #333; font-size: 13px; margin-top: 2px">
                回本率：0.0%
              </div>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <a
                @click="openPage('/OAOD_orderDetails')"
                style="margin-left: 4px; color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
                >订单明细</a
              >
              <a
                @click="openPage('/OAOD_fansList')"
                style="color: #00a5ff; font-size: 12px; margin-left: 4px"
                href="javascript:void(0)"
                >粉丝列表</a
              >
              <a
                @click="open('确定删除该推广链接么？')"
                style="margin-left: 4px; color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
                >删除</a
              >
            </template>
          </el-table-column>
        </el-table>
        <div style="margin: 20px 0 0" class="flex justify-between align-center">
          <div @click="open('确定删除选中推广链接么？')" class="isbutton bt0">
            批量删除
          </div>
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
      <el-tab-pane label="漫画" name="second">配置管理</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "OAOD_ToPromoteLinks",
  data() {
    return {
      value1: "",
      input: "",
      activeName: "first",
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
      tableData: [
        {
          id: "1",
        },
      ],
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
    handleClick: function (val) {},
    openTpl_orderDetails() {
      this.$router.push("/tpl_orderDetails");
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
.OAOD_ToPromoteLinks {
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
.OAOD_ToPromoteLinks {
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