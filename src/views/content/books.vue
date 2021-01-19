<template>
    <div class="books">
    <div class="all">
      <div class="row">
        <div class="layout-row">
          <div class="layout-title">
            <p>听书</p>
          </div>
          <div class="layout">
            <div class="layout-cell" style="margin-right:5px;">
              <el-select style="width:148px" v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="layout-cell layout-pull">
              <el-select style="width:148px" v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="layout-cell layout-pull">
              <el-select style="width:148px" v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="layout-cell layout-pull">
              <el-input v-model="input" placeholder="UID/手机号/昵称"></el-input>
            </div>
            <div class="layout-cell layout-pull">
              <el-button type="primary">搜索</el-button>
            </div>
          </div>
          <div class="layout-data">
            <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%"
              @selection-change="handleSelectionChange">
              <el-table-column type="selection" width="55">
              </el-table-column>
              <el-table-column prop="name" label="昵称（UID）">
              </el-table-column>
              <el-table-column prop="name" label="手机号">
              </el-table-column>
              <el-table-column prop="name" label="性别">
              </el-table-column>
              <el-table-column prop="name" label="来源">
              </el-table-column>
              <el-table-column prop="name" label="市场渠道">
              </el-table-column>
              <el-table-column prop="name" label="是否会员">
              </el-table-column>
              <el-table-column prop="name" label="余额">
              </el-table-column>
              <el-table-column prop="name" label="现金">
              </el-table-column>
              <el-table-column prop="name" label="注册时间">
              </el-table-column>
              <el-table-column prop="name" label="状态">
              </el-table-column>
              <el-table-column prop="name" label="操作" width="200">
                <template slot-scope="scope">
                  <el-button @click="handleClick(scope.row)" type="text" size="small">开通会员</el-button>
                  <el-button type="text" size="small">充值</el-button>
                  <el-button type="text" size="small">编辑</el-button>
                  <el-button type="text" size="small">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div style="margin-top: 20px">
              <el-button type="danger" @click="toggleSelection([tableData[1], tableData[2]])">批量删除</el-button>
            </div>
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
      }
    }
  }
</script>

<style lang="scss" scoped>
.books{
  width: 100%;
    .all{
        padding: 10px 0;
        .row{
            background-color: #fff;
            .layout-row{
                .layout-title{
                    font-size: 14px;
                    text-indent: 20px;
                    p{
                        padding: 20px 0;
                    }
                }
                .layout{
                    display: flex;
                    padding: 0px 20px;
                    .layout-cell{
                        padding: 5px 0px;
                    }
                    .layout-pull{
                        padding: 5px 5px;
                    }
                }
                .layout-data{
                    padding: 0 0 20px 20px;
                }
            }
        }
    }
}
</style>
