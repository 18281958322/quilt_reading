<template>
  <div class="tpl_orderDetails">
    <div class="pagetitle">订单明细</div>
    <div style="margin: 20px 0" class="flex align-center">
      <el-date-picker
        v-model="value1"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      >
      </el-date-picker>
      <el-select
        style="margin: 0 0 0 10px"
        v-model="value"
        placeholder="请选择"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
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
      <el-table-column prop="id" label="订单号" width="80"> </el-table-column>
      <el-table-column label="用户名（UID）">
        <template slot-scope="scope">
        </template>
      </el-table-column>
      <el-table-column label="充值次数">
        <template slot-scope="scope">
        </template>
      </el-table-column>
      <el-table-column label="交易金额">
        <template slot-scope="scope">
        </template>
      </el-table-column>
      <el-table-column label="充值货币数">
        <template slot-scope="scope">
        </template>
      </el-table-column>
      <el-table-column label="赠送货币数">
        <template slot-scope="scope">
        </template>
      </el-table-column>
      <el-table-column label="支付方式">
        <template slot-scope="scope">
        </template>
      </el-table-column>
      <el-table-column label="支付状态">
        <template slot-scope="scope">
        </template>
      </el-table-column>
      <el-table-column label="下单时间">
        <template slot-scope="scope">
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "tpl_orderDetails",
  data() {
    return {
      value1: "",
      input: "",
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
          id: "12346",
        },
      ],
    };
  },
  methods: {
    openSpread() {
      this.$router.push("/WorkSpread");
    },
  },
};
</script>

<style lang="scss">
.tpl_orderDetails {
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
.tpl_orderDetails {
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