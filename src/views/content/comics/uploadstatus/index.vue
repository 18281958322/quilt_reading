<template>
  <div class="uploadstatus">
    <div class="layout">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" align="center" label="序号" width="50">
        </el-table-column>
        <el-table-column prop="date" align="center" label="任务ID">
        </el-table-column>
        <el-table-column prop="name" align="center" label="小说名称">
        </el-table-column>
        <el-table-column prop="address" align="center" label="文件">
        </el-table-column>
        <el-table-column prop="name" align="center" label="拆分规则">
        </el-table-column>
        <el-table-column prop="name" align="center" label="上传类型">
        </el-table-column>
        <el-table-column prop="name" align="center" label="状态">
        </el-table-column>
        <el-table-column prop="date" align="center" label="创建时间">
        </el-table-column>
        <el-table-column align="center" label="操作" width="50">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
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
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .uploadstatus {
    .layout-centent {
      display: flex;
      justify-content: center;
      padding-bottom: 20px;
      padding-top: 15px;
    }
  }
</style>