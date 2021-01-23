<template>
  <div class="penster">
    <div class="all">
      <div class="row">
        <div class="layout">
          <div class="layout-float">
            <div class="layout-cell">
              <el-input v-model="input" placeholder="作者ID/笔名/手机号"></el-input>
              <el-button style="margin-left:10px;" type="primary">搜索</el-button>
            </div>
            <div class="layout-cell">
              <el-button type="primary">新增作者</el-button>
            </div>
          </div>
          <div class="layout-center">
            <el-table :data="tableData" style="width: 100%">
              <el-table-column align="center" type="index" label="序号" width="50">
              </el-table-column>
              <el-table-column prop="name" align="center" label="作者ID">
              </el-table-column>
              <el-table-column prop="name" align="center" label="笔名">
              </el-table-column>
              <el-table-column prop="name" align="center" label="姓名">
              </el-table-column>
              <el-table-column prop="name" align="center" label="手机号">
              </el-table-column>
              <el-table-column prop="name" align="center" label="电子邮箱">
              </el-table-column>
              <el-table-column prop="name" align="center" label="身份证号">
              </el-table-column>
              <el-table-column prop="name" align="center" label="联系地址">
              </el-table-column>
              <el-table-column prop="name" align="center" label="QQ号">
              </el-table-column>
              <el-table-column prop="name" align="center" label="银行卡号">
              </el-table-column>
              <el-table-column prop="name" align="center" label="开户省市">
              </el-table-column>
              <el-table-column prop="name" align="center" label="状态">
              </el-table-column>
              <el-table-column prop="name" align="center" label="注册时间">
              </el-table-column>
              <el-table-column prop="name" label="操作" align="center" width="120">
                <template slot-scope="scope">
                  <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
                  <el-button type="text" size="small">编辑</el-button>
                  <el-button type="text" size="small">下线</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="layout-center-page">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
              :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100"
              layout="total, sizes, prev, pager, next, jumper" :total="400">
            </el-pagination>
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
        input: '',
        currentPage4: 4,
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路'
        }]
      }
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  .penster {
    .all {
      padding: 10px 0;

      .row {
        background-color: #fff;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);

        .layout {
          padding: 10px 1%;

          .layout-float {
            display: flex;
            justify-content: space-between;

            .layout-cell {
              margin: 10px 0;
              display: flex;
              justify-content: space-between;
            }
          }

          .layout-center-page {
            display: flex;
            padding: 20px 0;
            justify-content: center;
          }
        }
      }
    }
  }
</style>