<template>
  <div class="chapter">
    <div class="center">
      <div class="row">
        <div class="layout">
          <div class="layout-cell">
            <el-select style="width:100px;" v-model="value" placeholder="全部章节">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
            <el-input style="width:168px;margin:0 10px;" v-model="input" placeholder="请输入内容"></el-input>
            <el-button size="mini" type="primary">搜索</el-button>
          </div>
          <div class="layout-cell">
            <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%"
              @selection-change="handleSelectionChange">
              <el-table-column type="selection" align="center" width="55">
              </el-table-column>
              <el-table-column type="index" align="center" label="章节序号" width="70">
              </el-table-column>
              <el-table-column prop="name" align="center" label="卷">
              </el-table-column>
              <el-table-column prop="name" align="center" label="章节名">
              </el-table-column>
              <el-table-column prop="name" align="center" label="收费类型">
              </el-table-column>
              <el-table-column prop="name" align="center" label="字数">
              </el-table-column>
              <el-table-column prop="name" align="center" label="创建时间">
              </el-table-column>
              <el-table-column prop="name" align="center" label="更新时间">
              </el-table-column>
              <el-table-column label="操作" align="center" width="100">
                <template slot-scope="scope">
                  <el-button @click="editClick(scope.row)" type="text" size="small">编辑</el-button>
                  <el-button @click="editClick(scope.row)" type="text" size="small">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div style="margin-top: 20px">
            <el-button @click="toggleSelection()">批量删除</el-button>
          </div>
          <div style="display: flex;justify-content: center;margin-bottom:20px;">
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
        input: '',
        currentPage4: 4,
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
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
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .chapter {
    .center {
      padding: 10px 0;

      .row {
        background-color: #fff;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);

        .layout {
          padding: 10px 20px;

          .layout-cell {
            display: flex;
            padding: 5px 0px;
          }
        }
      }
    }
  }
</style>