<template>
  <div class="books">
    <div class="all">
      <div class="row">
        <div class="layout-row">
          <div class="layout">
            <el-tabs v-model="activeName" style="width：1000px;" @tb-click="handleClick">
              <div class="tabel">
                <div class="idnex-box">
                  <el-select style="width: 148px;" v-model="value" placeholder="全部状态">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </div>
                <div class="idnex-box" style="padding:0 10px;">
                  <el-input v-model="input" placeholder="请输入内容"></el-input>
                </div>
                <div class="idnex-box">
                  <el-button type="primary" size="small">搜索</el-button>
                </div>
              </div>
              <div class="cell-pull">
                <el-table :data="tableData" style="width: 100%">
                  <el-table-column align="center" type="index" label="序号">
                  </el-table-column>
                  <el-table-column align="center" prop="date" label="用户（UID）">
                  </el-table-column>
                  <el-table-column align="center" prop="date" label="作品">
                  </el-table-column>
                  <el-table-column align="center" prop="name" label="章节">
                  </el-table-column>
                  <el-table-column align="center" prop="address" label="评论内容">
                  </el-table-column>
                  <el-table-column align="center" prop="date" label="评论时间">
                  </el-table-column>
                  <el-table-column align="center" label="操作">
                    <template slot-scope="scope">
                      <el-button @click="DeleteClick(scope.row)" type="text" size="small">删除</el-button>
                      <el-button @click="BanClick()" type="text" size="small">封禁</el-button>
                      <el-button type="text" size="small">通过</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
              <div class="layout-data" style="margin-top:20px;">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                  :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100"
                  layout="total, sizes, prev, pager, next, jumper" :total="400">
                </el-pagination>
              </div>
            </el-tabs>
          </div>
        </div>
      </div>
    </div>
    <!-- 封禁 -->
    <el-dialog title="封禁" :visible.sync="Ban" width="30%" :before-close="handleClose">
      <span>确认封禁该用户？</span>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="Ban = false">取 消</el-button>
        <el-button size="mini" type="primary" @click="Ban = false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 删除 -->
    <el-dialog title="删除" :visible.sync="Deletedata" width="30%" :before-close="handleClose">
      <span>确认删除该评论？</span>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="Deletedata = false">取 消</el-button>
        <el-button size="mini" type="primary" @click="Deletedata = false">确 定</el-button>
      </span>
    </el-dialog>
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
        currentPage4: 4,
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
        }],
        Ban: false,
        Deletedata: false,
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      // 封禁
      BanClick() {
        this.Ban = true;
      },
      // 删除
      DeleteClick() {
        this.Deletedata = true;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .books {
    .all {
      padding: 10px 0;

      .row {
        background-color: #fff;
        padding: 10px 0;

        .layout {
          display: flex;
          padding: 0px 20px;

          .layout-cell {
            padding: 5px 0px;
          }

          .layout-pull {
            padding: 5px 5px;
          }

          .tabel {
            display: flex;
          }
        }

        .layout-data {
          padding: 0 0 20px 20px;
          display: flex;
          justify-content: center;
        }
      }
    }
  }
</style>