<template>
  <div class="ChannelSettlementStatement">
    <div class="pagetitle">渠道结算单</div>
    <ul class="liGroupBox flex justify-between align-center">
      <li class="flex1">
        <div class="lgb_title">昨日结算</div>
        <div class="lgb_sum">￥5</div>
        <div class="lgb_bottom">
          <div class="lgb_title">结算笔数：2</div>
        </div>
      </li>
      <li class="flex1">
        <div class="lgb_title">当月结算</div>
        <div class="lgb_sum">￥5</div>
        <div class="lgb_bottom">
          <div class="lgb_title">结算笔数：2</div>
        </div>
      </li>
      <li class="flex1">
        <div class="lgb_title">上月结算</div>
        <div class="lgb_sum">5</div>
        <div class="lgb_bottom">
          <div class="lgb_title">结算笔数 ：2</div>
        </div>
      </li>
      <li class="flex1">
        <div class="lgb_title">累计结算</div>
        <div class="lgb_sum">5</div>
        <div class="lgb_bottom">
          <div class="lgb_title">结算笔数 ：2</div>
        </div>
      </li>
    </ul>
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
      <el-table-column prop="id" label="日期" width="180"> </el-table-column>
      <el-table-column label="渠道名称" width="180">
        <template slot-scope="scope"> </template>
      </el-table-column>
      <el-table-column label="渠道账户名（登录用）">
        <template slot-scope="scope"> </template>
      </el-table-column>
      <el-table-column label="充值笔数">
        <template slot-scope="scope"> </template>
      </el-table-column>
      <el-table-column label="充值金额">
        <template slot-scope="scope"> </template>
      </el-table-column>
      <el-table-column label="分成比例">
        <template slot-scope="scope"> </template>
      </el-table-column>
      <el-table-column label="计算金额">
        <template slot-scope="scope"> </template>
      </el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope"> </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "ChannelSettlementStatement",
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
  methods: {},
};
</script>

<style lang='scss'>
.ChannelSettlementStatement {
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
.ChannelSettlementStatement {
  width: 100%;
  position: relative;
  height: auto;
  background-color: #fff;
  min-height: 100%;
  box-sizing: border-box;
  padding: 10px;
}
.liGroupBox {
  width: 100%;
  overflow: hidden;
  height: auto;
  flex-direction: row;
  -ms-flex-direction: row;
  & > li:nth-child(n + 2) {
    margin-left: 20px;
  }
  & > li {
    background-color: #fafbfc;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 16px 12px;
  }
  .lgb_title {
    font-size: 12px;
    color: #3c3d40;
    font-weight: 400;
  }
  .lgb_sum {
    font-size: 22px;
    color: #00a5ff;
    font-weight: 400;
  }
  .lgb_bottom {
    width: 100%;
    margin-top: 18px;
    overflow: hidden;
    & > div {
      margin: 3px 0;
    }
  }
}
.pagetitle {
  font-size: 16px;
  color: #3c3d40;
  white-space: normal;
  padding: 18px 0;
  font-weight: 400;
}
.exportBox {
  cursor: pointer;
  .el-icon-s-claim {
    font-size: 22px;
    color: #00a5ff;
    margin: 0 2px;
  }
  & > span:nth-child(2) {
    font-size: 14px;
    font-weight: 400;
    color: 3c3d40;
  }
}
</style>