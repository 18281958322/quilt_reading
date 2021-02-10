<template>
  <div class="OAOD_orderDetails">
    <div class="pagetitle">订单明细</div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="充值订单" name="first">
        <div style="margin: 20px 0" class="flex align-center">
          <el-select style="width:150px" v-model="value" placeholder="请选择终端来源">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-select style="margin: 0 0 0 10px;width:150px" v-model="value" placeholder="请选择支付方式">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-select style="margin: 0 0 0 10px;width:150px" v-model="value" placeholder="请选择支付状态">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-date-picker
          style="margin: 0 0 0 10px"
            v-model="value1"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
          <el-input style="margin: 0 0 0 10px;width:150px" placeholder="推广名称" v-model="input" clearable>
          </el-input>
          <div style="margin: 0 0 0 10px" class="isbutton bt1">搜索</div>
        </div>
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="id"
            label="序号"
            width="80">
          </el-table-column>
          <el-table-column
            label="订单号">
          </el-table-column>
          <el-table-column
            label="昵称（UID）">
          </el-table-column>
          <el-table-column
            label="交易金额">
          </el-table-column>
          <el-table-column
            label="充值书币">
          </el-table-column>
          <el-table-column
            label="赠送书币">
          </el-table-column>
          <el-table-column
            label="终端来源">
          </el-table-column>
          <el-table-column
            label="支付方式">
          </el-table-column>
          <el-table-column
            label="支付状态">
          </el-table-column>
          <el-table-column
            label="下单时间">
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="会员订单" name="second"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "OAOD_orderDetails",
  data() {
    return {
      value1: '',
      input: "",
      activeName: "first",
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      tableData: [{
        id: '1',
      }]
    };
  },
  methods: {
    handleClick: function (val) {},
    openTpl_orderDetails() {
      this.$router.push('/tpl_orderDetails')
    }
  },
};
</script>

<style lang="scss">
.OAOD_orderDetails {
//   .el-table th {
//     background-color: #f2f4f8;
//   }
  .el-input__inner {
    height: 34px;
    line-height: 34px;
  }
  .el-input__icon {
    line-height: 26px;
  }
  .el-date-editor .el-range-separator {
      line-height: 26px;
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
.OAOD_orderDetails {
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