<template>
  <div class="appapplication">
    <div class="content">
      <div class="row">
        <div class="layout">
          <div class="layout-cell">
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column type="index" label="序号" width="50" align="center">
              </el-table-column>
              <el-table-column prop="date" label="应用名" align="center">
              </el-table-column>
              <el-table-column prop="name" label="logo" align="center">
              </el-table-column>
              <el-table-column prop="address" label="终端分布" align="center">
              </el-table-column>
              <el-table-column prop="name" label="语言" align="center">
              </el-table-column>
              <el-table-column prop="name" label="备注" align="center">
              </el-table-column>
              <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                  <el-button type="text" size="small">设置</el-button>
                  <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
                </template>
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

    }
  }
</script>

<style lang="scss" scoped>
  .appapplication {
    .content {
      padding: 10px 0;

      .row {
        background-color: #fff;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);

        .layout {
          padding: 20px 0;

          .layout-cell {
            padding: 10px 3%;
          }
        }
      }
    }
  }
</style>