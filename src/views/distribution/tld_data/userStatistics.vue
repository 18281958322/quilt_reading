<template>
  <div class="userStatistics">
    <div class="pagetitle">用户统计</div>
    <ul class="liGroupBox flex justify-between align-center">
      <li class="flex1">
        <div class="lgb_title">今日新增</div>
        <div class="lgb_sum">5</div>
        <div class="lgb_bottom">
          <div class="lgb_title">男性：5  女性：0  未知：0</div>
          <div class="lgb_title">已关注：4（80.0%）</div>
          <div class="lgb_title">已付费：0（0.0%）</div>
        </div>
      </li>
      <li class="flex1">
        <div class="lgb_title">昨日新增</div>
        <div class="lgb_sum">5</div>
        <div class="lgb_bottom">
          <div class="lgb_title">男性：5  女性：0  未知：0</div>
          <div class="lgb_title">已关注：4（80.0%）</div>
          <div class="lgb_title">已付费：0（0.0%）</div>
        </div>
      </li>
      <li class="flex1">
        <div class="lgb_title">本月新增（不含当日）</div>
        <div class="lgb_sum">5</div>
        <div class="lgb_bottom">
          <div class="lgb_title">男性：5  女性：0  未知：0</div>
          <div class="lgb_title">已关注：4（80.0%）</div>
          <div class="lgb_title">已付费：0（0.0%）</div>
        </div>
      </li>
      <li class="flex1">
        <div class="lgb_title">累计新增（不含当日）</div>
        <div class="lgb_sum">5</div>
        <div class="lgb_bottom">
          <div class="lgb_title">男性：5  女性：0  未知：0</div>
          <div class="lgb_title">已关注：4（80.0%）</div>
          <div class="lgb_title">已付费：0（0.0%）</div>
        </div>
      </li>
    </ul>
    <div style="margin: 20px 0" class="flex align-center justify-between">
      <div class="flex align-center">
        <el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
        <div style="margin-left: 10px" class="isbutton bt1">搜索</div>
      </div>
      <div class="exportBox flex align-center">
        <span class="el-icon-s-claim"></span>
        <span>导出</span>
      </div>
    </div>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "userStatistics",
    data() {
      return {
        value1: '',
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      };
    },
    methods: {
      
    }
  };
</script>

<style lang='scss'>
  .userStatistics {
    .el-table th {
      background-color: #f2f4f8;
    }
    .el-input__inner {
      height: 34px;
      line-height: 34px;
    }
    .el-date-editor .el-range__icon,.el-date-editor .el-range-separator,.el-date-editor .el-range__close-icon {
      line-height: 26px;
    }
  }
</style>

<style lang='scss' scoped>
  .userStatistics {
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
    .lgb_bottom {
      width: 100%;
      margin-top: 18px;
      overflow: hidden;
      &>div{
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
      color: #00A5FF;
      margin: 0 2px;
    }
    &>span:nth-child(2) {
      font-size: 14px;
      font-weight: 400;
      color: 3c3d40;
    }
  }
</style>