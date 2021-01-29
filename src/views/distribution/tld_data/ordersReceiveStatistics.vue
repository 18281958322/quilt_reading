<template>
  <div class="ordersReceiveStatistics">
    <div class="pagetitle">订单统计</div>
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
  </div>
</template>

<script>
  export default {
    name: "ordersReceiveStatistics",
    data() {
      return {
       
      };
    },
    methods: {
      
    }
  };
</script>

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
    &>li:nth-child(n+2) {
      margin-left: 20px;
    }
    &>li {
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
      .lgbb_left,.lgbb_right {
        float: left;
        width: 50%;
        text-align: left;
        &>div{
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
</style>