<template>
  <div class="editorincharge">
    <div class="all">
      <div class="row">
        <div class="layout">
          <div class="layout-float">
            <div class="layout-cell">
              <el-button size="mini" @click="NewresClick()" type="primary">新增责编</el-button>
            </div>
          </div>
          <div class="layout-center">
            <el-table :data="tableData" style="width: 100%">
              <el-table-column align="center" type="index" label="序号" width="50">
              </el-table-column>
              <el-table-column prop="address" align="center" label="责编ID">
              </el-table-column>
              <el-table-column prop="date" align="center" label="姓名">
              </el-table-column>
              <el-table-column prop="name" align="center" label="账号">
              </el-table-column>
              <el-table-column prop="name" align="center" label="描述">
              </el-table-column>
              <el-table-column prop="name" align="center" label="创建时间">
              </el-table-column>
              <el-table-column prop="name" label="操作" align="center" width="140">
                <template slot-scope="scope">
                  <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
                  <el-button @click="eideClick(scope.row)" type="text" size="small">编辑</el-button>
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
    <!-- 删除 -->
    <el-dialog title="删除责编" :visible.sync="detletSync" width="30%" :before-close="handleClose">
      <div style="display: flex;">
        <i class="el-icon-warning" style="color:#e6a23c;line-height: 19px;"></i>
        <span style="margin-left:5px;">确定删除该责编吗？</span>
      </div>
      <span slot="footer" style="display: flex;justify-content:center;" class="dialog-footer">
        <el-button size="mini" @click="detletSync = false">取 消</el-button>
        <el-button size="mini" type="primary" @click="detletSync = false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 新增责编 -->
    <el-dialog title="新增责编" :visible.sync="newres" width="30%" :before-close="handleClose">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="姓名" prop="name" label-width="100px">
          <el-input style="width:244px;" v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="账号" prop="name" label-width="100px">
          <el-input style="width:244px;" v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="描述" prop="name" label-width="100px">
          <el-input style="width:244px;" v-model="ruleForm.name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" style="display: flex;justify-content:center;" class="dialog-footer">
        <el-button size="mini" @click="newres = false">取 消</el-button>
        <el-button size="mini" type="primary" @click="newres = false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 编辑 -->
    <el-dialog title="新增责编" :visible.sync="eidesync" width="30%" :before-close="handleClose">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="姓名" prop="name" label-width="100px">
          <el-input style="width:244px;" v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="账号" prop="name" label-width="100px">
          <el-input style="width:244px;" v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="描述" prop="name" label-width="100px">
          <el-input style="width:244px;" v-model="ruleForm.name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" style="display: flex;justify-content:center;" class="dialog-footer">
        <el-button size="mini" @click="eidesync = false">取 消</el-button>
        <el-button size="mini" type="primary" @click="eidesync = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input: '',
        newres: false,
        eidesync: false,
        detletSync: false,
        currentPage4: 4,
        ruleForm: {
          name: ''
        },
        rules: {
          name: [{
              required: true,
              message: '请输入活动名称',
              trigger: 'blur'
            },
            {
              min: 3,
              max: 5,
              message: '长度在 3 到 5 个字符',
              trigger: 'blur'
            }
          ],
        },
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
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      // 新增责编
      NewresClick() {
        this.newres = true;
      },
      // 编辑
      eideClick(row){
        this.eidesync = true;
      },
      // 删除
      handleClick(row){
        this.detletSync = true;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .editorincharge {
    .all {
      padding: 10px 0;

      .row {
        background-color: #fff;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);

        .layout {
          padding: 10px 1%;

          .layout-float {
            display: flex;
            flex-direction: row-reverse;
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