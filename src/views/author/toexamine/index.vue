<template>
  <div class="toexamine">
    <div class="all">
      <div class="row">
        <div class="layout">
          <div class="layout-float">
            <div class="layout-cell">
              <el-select v-model="value" placeholder="全部状态">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
              <el-input style="margin-left:10px;" v-model="input" placeholder="作者ID/笔名/手机号"></el-input>
              <el-button style="margin-left:10px;" type="primary">搜索</el-button>
            </div>
            <div class="layout-cell">
              <el-button type="primary">新增作者</el-button>
            </div>
          </div>
          <div class="layout-center">
            <el-table ref="multipleTable" tooltip-effect="dark" :data="tableData" style="width: 100%"
              @selection-change="handleSelectionChange">
              <el-table-column type="selection" width="55">
              </el-table-column>
              <el-table-column align="center" type="index" label="序号" width="50">
              </el-table-column>
              <el-table-column prop="name" align="center" label="作家ID">
              </el-table-column>
              <el-table-column prop="name" align="center" label="笔名">
              </el-table-column>
              <el-table-column prop="name" align="center" label="手机号">
              </el-table-column>
              <el-table-column prop="name" align="center" label="邮箱">
              </el-table-column>
              <el-table-column prop="name" align="center" label="状态">
              </el-table-column>
              <el-table-column prop="name" align="center" label="注册时间">
              </el-table-column>
              <el-table-column prop="name" align="center" label="备注">
              </el-table-column>
              <el-table-column prop="name" label="操作" align="center" width="120">
                <template slot-scope="scope">
                  <el-button @click="adoptClick(scope.row)" type="text" size="small">通过</el-button>
                  <el-button @click="rejectClick(scope.row)" type="text" size="small">驳回</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div style="margin-top: 20px">
              <el-button @click="toggleSelection([tableData[0],tableData[1],tableData[2],tableData[3], 
              tableData[4],tableData[5],tableData[6],tableData[7],tableData[8],
              tableData[9]])">批量通过</el-button>

              <el-button @click="toggleSelection([tableData[0],tableData[1],tableData[2],tableData[3], 
              tableData[4],tableData[5],tableData[6],tableData[7],tableData[8],
              tableData[9]])">批量驳回</el-button>
            </div>
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
    <!-- 选中/驳回 -->
    <el-dialog title="提示" :visible.sync="statusSync" width="30%" :before-close="handleClose">
      <div style="display: flex;">
        <i class="el-icon-warning" style="color:#e6a23c;line-height: 19px;"></i>
        <span style="margin-left:5px;">确定{{text}}该作者吗？</span>
      </div>
      <span slot="footer" style="display: flex;justify-content:center;" class="dialog-footer">
        <el-button size="mini" @click="statusSync = false">取 消</el-button>
        <el-button size="mini" type="primary" @click="statusSync = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input: '',
        text: "通过/驳回",
        statusSync: false,
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
        currentPage4: 4,
        tableData: [{
          name: '王小虎',
        }, {
          name: '王小虎',
        }, {
          name: '王小虎',
        }, {
          name: '王小虎',
        }, {
          name: '王小虎',
        }, {
          name: '王小虎',
        }, {
          name: '王小虎',
        }, {
          name: '王小虎',
        }, {
          name: '王小虎',
        }, {
          name: '王小虎',
        }]
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      handleSelectionChange(val) {

        this.multipleSelection = val;
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      // 批量选中
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
            this.statusSync = true;
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      // 通过
      adoptClick(row){
        this.statusSync = true;
      },
      // 驳回
      rejectClick(row){
        this.statusSync = true;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .toexamine {
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