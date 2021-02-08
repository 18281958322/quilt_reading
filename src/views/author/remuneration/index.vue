<template>
  <div class="remuneration">
    <div class="row">
      <div class="layout">
        <div class="layout-title">
          <el-select style="width:128px;" v-model="value" placeholder="全部时间">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
          <el-input style="width:128px;margin-left:10px;" v-model="input" placeholder="书籍ID/书籍名称"></el-input>
          <el-button style="margin:0 10px;" size="mini" type="primary">搜索</el-button>
          <el-link underline type="primary">或</el-link>
          <el-select style="width:128px;margin:0 10px;" v-model="value" placeholder="自然月">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
          <el-date-picker style="width:128px;" v-model="value1" type="date" placeholder="选择日期">
          </el-date-picker>
          <el-input style="width:128px;margin:0 10px;" v-model="input" placeholder="书籍ID/书籍名称"></el-input>
          <el-button size="mini" type="primary">搜索</el-button>
        </div>
        <div class="layout-div">
          <div class="layout-cell">
            <div class="layout-pull">
              <p>累计订阅/买断结算</p>
            </div>
            <div class="layout-pull">
              <p class="mou">￥200000</p>
            </div>
          </div>
          <div class="layout-cell">
            <div class="layout-pull">
              <p>累计奖励结算</p>
            </div>
            <div class="layout-pull">
              <p class="mou">￥1000</p>
            </div>
          </div>
          <div class="layout-cell">
            <div class="layout-pull">
              <p>累计三方订阅结算</p>
            </div>
            <div class="layout-pull">
              <p class="mou">￥2323</p>
            </div>
          </div>
          <div class="layout-cell">
            <div class="layout-pull">
              <p>累计实发合计</p>
            </div>
            <div class="layout-pull">
              <p class="mou">￥3988</p>
            </div>
          </div>
        </div>
        <div class="layout-item">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="书籍ID" align="center" width="140">
            </el-table-column>
            <el-table-column prop="name" label="书籍名称" align="center" width="140">
            </el-table-column>
            <el-table-column prop="name" label="订阅/买断收入" align="center" width="140">
            </el-table-column>
            <el-table-column prop="name" label="订阅收入（三方）" align="center" width="140">
            </el-table-column>
            <el-table-column prop="name" label="月票奖励" align="center" width="140">
            </el-table-column>
            <el-table-column prop="name" label="打赏奖励" align="center" width="140">
            </el-table-column>
            <el-table-column prop="name" label="作家姓名" align="center" width="140">
            </el-table-column>
            <el-table-column prop="name" label="银行账号" align="center" width="140">
            </el-table-column>
            <el-table-column prop="name" label="税前合计" align="center" width="140">
            </el-table-column>
            <el-table-column prop="name" label="税金合计" align="center" width="140">
            </el-table-column>
            <el-table-column prop="name" label="实发合计" align="center" width="140">
            </el-table-column>
            <el-table-column prop="name" label="支付状态" align="center" width="140">
            </el-table-column>
            <el-table-column prop="name" label="结算时间" align="center" width="140">
            </el-table-column>
            <el-table-column prop="name" label="发放时间" align="center" width="140">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="70" align="center">
              <template slot-scope="scope">
                <el-button @click="paymentClick(scope.row)" type="text" size="small">确认支付</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="layout-div" style="padding:30px 0;">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
            :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100"
            layout="total, sizes, prev, pager, next, jumper" :total="400">
          </el-pagination>
        </div>
      </div>
    </div>
    <!-- 确认支付 -->
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="书籍名称：" label-width="120px">
          <p>天幻战纪</p>
        </el-form-item>
        <el-form-item label="税前合计：（元）" label-width="120px">
          <p>1260</p>
        </el-form-item>
        <el-form-item label="税金合计：（元）" label-width="120px">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="实发合计：（元）" label-width="120px">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer" style="display: flex;justify-content:center;">
        <el-button size="mini" type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentPage4: 4,
        dialogVisible: false,
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
        form:{
          name: ''
        },
        value: '',
        value1: '',
        input: '',
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
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      paymentClick(row) {
        this.dialogVisible = true;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .remuneration {
    padding: 1% 5px;

    .row {
      background-color: #fff;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);

      .layout {
        padding: 10px 0px;

        .layout-title {
          padding: 10px 10px;
          display: flex;
        }

        .layout-div {
          display: flex;
          padding: 10px 0;
          justify-content: space-around;

          .layout-cell {
            width: 23%;
            padding: 10px 0;
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);

            .layout-pull {
              text-indent: 10%;
              color: #333333;

              .mou {
                color: #2d6ada;
                font-size: 20px;
                padding: 20px 0;
              }
            }
          }
        }

        .layout-item {
          padding: 0 10px;
        }
      }
    }
  }
</style>

<style>
.el-form-item{
  margin-bottom: 0;
}
</style>