<template>
  <div class="Deduction_record">
    <div class="content">
      <div class="row">
        <div class="layout">
          <div class="layout-cell">
            <el-date-picker style="width:300px;margin:0 10px;" v-model="value1" type="daterange" range-separator="至"
              start-placeholder="开始日期" end-placeholder="结束日期">
            </el-date-picker>
            <el-input style="width:148px;margin-right:10px;" v-model="input" placeholder="请输入内容"></el-input>
            <el-button size="mini" type="primary">搜索</el-button>
          </div>
          <div class="layout-cell">
            <el-table :data="tableData" style="width: 100%">
              <el-table-column type="index" label="序号" width="50">
              </el-table-column>
              <el-table-column prop="name" label="订单号">
              </el-table-column>
              <el-table-column prop="address" label="订单类型">
              </el-table-column>
              <el-table-column prop="name" label="用户（UID）">
              </el-table-column>
              <el-table-column prop="name" label="充值金额">
              </el-table-column>
              <el-table-column prop="name" label="充值次数">
              </el-table-column>
              <el-table-column prop="name" label="来源链接">
              </el-table-column>
              <el-table-column prop="name" label="渠道名称">
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 'first',
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
        input: '',
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
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .Deduction_record {

    .content {
      padding: 10px 0;

      .row {
        background-color: #fff;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);

        .layout {
          padding: 10px 20px;

          .layout-cell {
            display: flex;
          }
        }
      }
    }
  }
</style>