<template>
  <div class="fansDetails">
    <div class="pagetitle">粉丝明细</div>
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
    name: "fansDetails",
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
  .fansDetails {
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
  .fansDetails {
    width: 100%;
    position: relative;
    height: auto;
    background-color: #fff;
    min-height: 100%;
    box-sizing: border-box;
    padding: 10px;
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