<template>
  <div class="rechargeProportion">
    <div class="pagetitle">充值比例</div>
    <div class="rechargeProportion_header">
      <div>1. 单位充值比例：指充值1元人民币能获得的书币数</div>
      <div>
        2. 由于苹果支付存在费率，可以设置不同的充值比例。如：苹果App
        Store市场虚拟类货币内购支付扣30%手续费，可以单独设置苹果支付的单位充值比例为70（即苹果用户充值1元可得70书币）
      </div>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column prop="id" label="序号" width="80"> </el-table-column>
      <el-table-column label="充值比例 默认1:100">
        <template slot-scope="scope">100</template>
      </el-table-column>
      <el-table-column label="渠道">
        <template slot-scope="scope">Android</template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <div class="flex">
              <div @click="dialogVisible = true" class="isbutton bt8">更新</div>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <div class="flex justify-end rechargeProportionBottom align-center">
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
    <el-dialog title="单位充值比例设置" :visible.sync="dialogVisible" width="600px">
        <el-input placeholder="请设置单位充值比例（1人民币等于多少书币）" v-model="value" clearable> </el-input>
        <div style="margin: 20px 0 0" class="flex justify-end">
          <div class="isbutton bt8">确定</div>
        </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "rechargeProportion",
  data() {
    return {
      tableData: [
        {
          id: "1",
        },
      ],
      currentPage4: 4,
      value: "",
      dialogVisible: false,
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
  },
};
</script>

<style lang="scss">
.rechargeProportion {
  .el-table th {
    background-color: #f2f4f8;
  }
}
.rechargeProportionHeader {
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
.rechargeProportionBottom {
  margin: 20px 0 0;
}
.pagetitle {
  font-size: 16px;
  color: #3c3d40;
  white-space: normal;
  padding: 18px 0;
  font-weight: 400;
}
.rechargeProportion {
  width: 100%;
  position: relative;
  height: auto;
  background-color: #fff;
  min-height: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px;
  .rechargeProportion_header {
    border: 1px solid rgba(221, 221, 221, 1);
    position: relative;
    padding: 12px;
    border-radius: 4px;
    & > div {
      font-size: 14px;
      color: #333;
      line-height: 26px;
    }
  }
}
</style>