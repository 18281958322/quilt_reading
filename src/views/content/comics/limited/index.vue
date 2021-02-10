<template>
  <div class="limited">
    <div class="layout-cell">
      <div class="cell-pull">
        <el-input style="width:168px;margin-right:10px;" v-model="input" placeholder="请输入内容"></el-input>
        <el-button size="mini" type="primary">搜索</el-button>
      </div>
      <div class="cell-pull">
        <p style="margin-right:10px;">当前限免时间：至</p>
        <el-button size="mini" type="primary">设置限免时间</el-button>
        <el-button size="mini" type="primary">新增限免时间</el-button>
      </div>
    </div>
    <div class="layout">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" align="center" label="序号" width="50">
        </el-table-column>
        <el-table-column prop="date" align="center" label="封面">
        </el-table-column>
        <el-table-column prop="name" align="center" label="小说名">
        </el-table-column>
        <el-table-column prop="address" align="center" label="作者">
        </el-table-column>
        <el-table-column prop="name" align="center" label="显示顺序">
        </el-table-column>
        <el-table-column prop="name" align="center" label="频道">
        </el-table-column>
        <el-table-column align="center" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">排序</el-button>
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
        input: '',
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
  .limited {
    .layout-cell {
      display: flex;
      justify-content: space-between;
      .cell-pull{
        display: flex;
        line-height: 35px;
      }
    }
  }
</style>