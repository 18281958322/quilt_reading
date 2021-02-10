<template>
  <div class="major">
    <div class="layout">
      <div class="layout-cell">
        <el-button size="mini" @click="dialogVisible = true" type="primary">新增大类别</el-button>
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" align="center" label="序号" width="50">
        </el-table-column>
        <el-table-column prop="date" align="center" label="类别名">
        </el-table-column>
        <el-table-column prop="name" align="center" label="作品数量">
        </el-table-column>
        <el-table-column align="center" label="操作" width="200">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
            <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
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
        }],
        dialogVisible: false,
      }
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  }
</script>

<style lang="scss" scoped>
  .major {
    .layout-search {
      display: flex;
    }

    .layout {
      padding: 10px 0;
    }

    .layout-centent {
      display: flex;
      justify-content: center;
      padding-bottom: 20px;
      padding-top: 15px;
    }
  }
</style>