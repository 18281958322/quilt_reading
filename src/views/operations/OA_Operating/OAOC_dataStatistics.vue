<template>
  <div class="ordersReceiveStatistics">
    <div class="pagetitle">订单统计</div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="充值统计" name="first">
        <ul class="liGroupBox flex justify-between align-center">
          <li class="flex1">
            <div class="lgb_title">当日充值</div>
            <div class="lgb_sum">￥3.65</div>
            <div class="lgb_bottom">
              <div class="lgbb_left">
                <div class="lgb_title">货币充值</div>
                <div class="lgb_sum2">￥3.65</div>
                <div class="lgb_title">已支付：0笔</div>
                <div class="lgb_title">未支付：0笔</div>
              </div>
              <div class="lgbb_right">
                <div class="lgb_title">VIP会员</div>
                <div class="lgb_sum2">￥3.65</div>
                <div class="lgb_title">已支付：0笔</div>
                <div class="lgb_title">未支付：0笔</div>
                <div class="lgb_title">完成率：0%</div>
              </div>
            </div>
          </li>
          <li class="flex1">
            <div class="lgb_title">昨日充值</div>
            <div class="lgb_sum">￥3.65</div>
            <div class="lgb_bottom">
              <div class="lgbb_left">
                <div class="lgb_title">货币充值</div>
                <div class="lgb_sum2">￥3.65</div>
                <div class="lgb_title">已支付：0笔</div>
                <div class="lgb_title">未支付：0笔</div>
                <div class="lgb_title">完成率：0%</div>
              </div>
              <div class="lgbb_right">
                <div class="lgb_title">VIP会员</div>
                <div class="lgb_sum2">￥3.65</div>
                <div class="lgb_title">已支付：0笔</div>
                <div class="lgb_title">未支付：0笔</div>
                <div class="lgb_title">完成率：0%</div>
              </div>
            </div>
          </li>
          <li class="flex1">
            <div class="lgb_title">本月充值（不含当日）</div>
            <div class="lgb_sum">￥3.65</div>
            <div class="lgb_bottom">
              <div class="lgbb_left">
                <div class="lgb_title">货币充值</div>
                <div class="lgb_sum2">￥3.65</div>
                <div class="lgb_title">已支付：0笔</div>
                <div class="lgb_title">未支付：0笔</div>
                <div class="lgb_title">完成率：0%</div>
              </div>
              <div class="lgbb_right">
                <div class="lgb_title">VIP会员</div>
                <div class="lgb_sum2">￥3.65</div>
                <div class="lgb_title">已支付：0笔</div>
                <div class="lgb_title">未支付：0笔</div>
                <div class="lgb_title">完成率：0%</div>
              </div>
            </div>
          </li>
          <li class="flex1">
            <div class="lgb_title">累计充值（不含当日）</div>
            <div class="lgb_sum">￥3.65</div>
            <div class="lgb_bottom">
              <div class="lgbb_left">
                <div class="lgb_title">货币充值</div>
                <div class="lgb_sum2">￥3.65</div>
                <div class="lgb_title">已支付：0笔</div>
                <div class="lgb_title">未支付：0笔</div>
                <div class="lgb_title">完成率：0%</div>
              </div>
              <div class="lgbb_right">
                <div class="lgb_title">VIP会员</div>
                <div class="lgb_sum2">￥3.65</div>
                <div class="lgb_title">已支付：0笔</div>
                <div class="lgb_title">未支付：0笔</div>
                <div class="lgb_title">完成率：0%</div>
              </div>
            </div>
          </li>
        </ul>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="id" label="日期" width="180">
          </el-table-column>
          <el-table-column label="充值金额"> </el-table-column>
          <el-table-column label="货币充值"> </el-table-column>
          <el-table-column label="货币充值支付订单数"> </el-table-column>
          <el-table-column label="老用户货币充值"> </el-table-column>
          <el-table-column label="新用户货币充值"> </el-table-column>
          <el-table-column label="VIP会员"> </el-table-column>
          <el-table-column label="VIP会员支付订单数"> </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="用户统计" name="second"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "ordersReceiveStatistics",
  data() {
    return {
      activeName: "first",
      value1: "",
      tableData: [
        {
          id: "2020/12/2",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang='scss'>
.ordersReceiveStatistics {
  .el-input__inner {
    height: 34px;
    line-height: 34px;
  }
  .el-date-editor .el-range__icon,
  .el-date-editor .el-range-separator,
  .el-date-editor .el-range__close-icon {
    line-height: 26px;
  }
}
</style>

<style lang='scss' scoped>
.ordersReceiveStatistics {
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
  margin: 10px 0 20px;
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
  .lgb_sum2 {
    font-size: 14px;
    color: #00a5ff;
    font-weight: 400;
  }
  .lgb_bottom {
    width: 100%;
    margin-top: 18px;
    overflow: hidden;
    .lgbb_left,
    .lgbb_right {
      float: left;
      width: 50%;
      text-align: left;
      & > div {
        margin: 3px 0;
      }
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