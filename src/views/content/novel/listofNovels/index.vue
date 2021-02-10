<template>
  <div class="listofNovels">
    <div class="layout-right">
      <el-button size="small" type="primary" @click="addNewnovels()" style="margin-left:10px;">新增小说</el-button>
      <el-button size="small" type="primary" @click="chapter()">批量购买章节折扣</el-button>
    </div>
    <div class="list">
      <el-link :underline="false" style="margin-right:10px;">类别</el-link>
      <el-radio-group v-model="radio10" size="mini">
        <el-radio-button style="margin-right:10px;" label="全部"></el-radio-button>
        <el-radio-button style="margin-right:10px;border-left:1px solid #DCDFE6;" label="男生"></el-radio-button>
        <el-radio-button style="margin-right:10px;border-left:1px solid #DCDFE6;" label="女生"></el-radio-button>
        <el-radio-button style="margin-right:10px;border-left:1px solid #DCDFE6;" label="出版物"></el-radio-button>
      </el-radio-group>
    </div>
    <div class="list">
      <el-link :underline="false" style="margin-right:10px;">频道</el-link>
      <el-radio-group v-model="radio1" size="mini">
        <el-radio-button style="margin-right:10px;" label="全部"></el-radio-button>
        <el-radio-button style="margin-right:10px;border-left:1px solid #DCDFE6;" label="男频"></el-radio-button>
        <el-radio-button style="margin-right:10px;border-left:1px solid #DCDFE6;" label="女频"></el-radio-button>
      </el-radio-group>
    </div>
    <div class="list">
      <el-link :underline="false" style="margin-right:10px;">分类</el-link>
      <el-radio-group v-model="radio2" size="mini">
        <el-radio-button style="margin-right:10px;" label="全部"></el-radio-button>
        <el-radio-button style="margin-right:10px;border-left:1px solid #DCDFE6;" label="玄幻奇幻"></el-radio-button>
        <el-radio-button style="margin-right:10px;border-left:1px solid #DCDFE6;" label="军事历史"></el-radio-button>
        <el-radio-button style="margin-right:10px;border-left:1px solid #DCDFE6;" label="穿越"></el-radio-button>
        <el-radio-button style="margin-right:10px;border-left:1px solid #DCDFE6;" label="言情"></el-radio-button>
      </el-radio-group>
    </div>
    <div class="list">
      <el-link :underline="false" style="margin-right:10px;">连载</el-link>
      <el-radio-group v-model="radio3" size="mini">
        <el-radio-button style="margin-right:10px;" label="全部"></el-radio-button>
        <el-radio-button style="margin-right:10px;border-left:1px solid #DCDFE6;" label="连载中"></el-radio-button>
        <el-radio-button style="margin-right:10px;border-left:1px solid #DCDFE6;" label="已完结"></el-radio-button>
      </el-radio-group>
    </div>
    <div class="list">
      <el-link :underline="false" style="margin-right:10px;">上线</el-link>
      <el-radio-group v-model="radio4" size="mini">
        <el-radio-button style="margin-right:10px;" label="全部"></el-radio-button>
        <el-radio-button style="margin-right:10px;border-left:1px solid #DCDFE6;" label="以上线"></el-radio-button>
        <el-radio-button style="margin-right:10px;border-left:1px solid #DCDFE6;" label="以下线"></el-radio-button>
      </el-radio-group>
    </div>
    <div class="list">
      <el-link :underline="false" style="margin-right:10px;">铭感</el-link>
      <el-radio-group v-model="radio5" size="mini">
        <el-radio-button style="margin-right:10px;" label="全部"></el-radio-button>
        <el-radio-button style="margin-right:10px;border-left:1px solid #DCDFE6;" label="铭感"></el-radio-button>
        <el-radio-button style="margin-right:10px;border-left:1px solid #DCDFE6;" label="不铭感"></el-radio-button>
      </el-radio-group>
    </div>
    <div class="list">
      <el-link :underline="false" style="margin-right:10px;">属性</el-link>
      <el-radio-group v-model="radio6" size="mini">
        <el-radio-button style="margin-right:10px;" label="全部"></el-radio-button>
        <el-radio-button style="margin-right:10px;border-left:1px solid #DCDFE6;" label="新书"></el-radio-button>
        <el-radio-button style="margin-right:10px;border-left:1px solid #DCDFE6;" label="爽文"></el-radio-button>
        <el-radio-button style="margin-right:10px;border-left:1px solid #DCDFE6;" label="精选"></el-radio-button>
        <el-radio-button style="margin-right:10px;border-left:1px solid #DCDFE6;" label="大神"></el-radio-button>
      </el-radio-group>
    </div>
    <div class="list">
      <el-link :underline="false" style="margin-right:10px;">会员</el-link>
      <el-radio-group v-model="radio7" size="mini">
        <el-radio-button style="margin-right:10px;" label="全部"></el-radio-button>
        <el-radio-button style="margin-right:10px;border-left:1px solid #DCDFE6;" label="会员"></el-radio-button>
        <el-radio-button style="margin-right:10px;border-left:1px solid #DCDFE6;" label="非会员"></el-radio-button>
      </el-radio-group>
    </div>
    <div class="list">
      <el-link :underline="false" style="margin-right:10px;">资费</el-link>
      <el-radio-group v-model="radio8" size="mini">
        <el-radio-button style="margin-right:10px;" label="全部"></el-radio-button>
        <el-radio-button style="margin-right:10px;border-left:1px solid #DCDFE6;" label="免费"></el-radio-button>
        <el-radio-button style="margin-right:10px;border-left:1px solid #DCDFE6;" label="付费"></el-radio-button>
      </el-radio-group>
    </div>
    <div class="list">
      <el-link :underline="false" style="margin-right:10px;">字数</el-link>
      <el-radio-group v-model="radio9" size="mini">
        <el-radio-button style="margin-right:10px;" label="20万字以下"></el-radio-button>
        <el-radio-button style="margin-right:10px;border-left:1px solid #DCDFE6;" label="20-30万字"></el-radio-button>
        <el-radio-button style="margin-right:10px;border-left:1px solid #DCDFE6;" label="30-50万字"></el-radio-button>
        <el-radio-button style="margin-right:10px;border-left:1px solid #DCDFE6;" label="50-100万字"></el-radio-button>
        <el-radio-button style="margin-right:10px;border-left:1px solid #DCDFE6;" label="100-200万字"></el-radio-button>
        <el-radio-button style="margin-right:10px;border-left:1px solid #DCDFE6;" label="200以上"></el-radio-button>
      </el-radio-group>
    </div>
    <el-divider></el-divider>
    <div class="list">
      <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column prop="name" align="center" label="封面">
        </el-table-column>
        <el-table-column prop="name" align="center" label="类型/名称">
        </el-table-column>
        <el-table-column prop="name" align="center" label="频道">
        </el-table-column>
        <el-table-column prop="name" align="center" label="来源">
        </el-table-column>
        <el-table-column prop="name" align="center" label="章节价格">
        </el-table-column>
        <el-table-column label="操作" align="center" width="180">
          <template slot-scope="scope">
            <el-button @click="chapterClick(scope.row)" type="text" size="small">章节管理</el-button>
            <el-button @click="editClick(scope.row)" type="text" size="small">编辑</el-button>
            <el-button @click="handleClick(scope.row)" type="text" size="small">下线</el-button>
            <el-button @click="editClick(scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection([tableData[1], tableData[2]])">批量设置价格</el-button>
      <el-button @click="toggleSelection()">设置会员</el-button>
      <el-button @click="toggleSelection()">取消会员</el-button>
      <el-button @click="toggleSelection()">批量上架</el-button>
      <el-button @click="toggleSelection()">批量下架</el-button>
      <el-button @click="toggleSelection()">批量删除</el-button>
    </div>
    <div class="layout-centent">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fileList: [{
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }, {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }],
        activeName: 'first',
        checkboxGroup1: [],
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
        radio1: '全部',
        radio2: '全部',
        radio3: '全部',
        radio4: '全部',
        radio5: '全部',
        radio6: '全部',
        radio7: '全部',
        radio8: '全部',
        radio9: '20万字以下',
        radio10: '全部',
        multipleSelection: [],
        currentPage4: 4,
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
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
          region: [{
            required: true,
            message: '请选择活动区域',
            trigger: 'change'
          }],
          date1: [{
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change'
          }],
          date2: [{
            type: 'date',
            required: true,
            message: '请选择时间',
            trigger: 'change'
          }],
          type: [{
            type: 'array',
            required: true,
            message: '请至少选择一个活动性质',
            trigger: 'change'
          }],
          resource: [{
            required: true,
            message: '请选择活动资源',
            trigger: 'change'
          }],
          desc: [{
            required: true,
            message: '请填写活动形式',
            trigger: 'blur'
          }]
        }
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
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
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
      // 新增小说
      addNewnovels() {
        this.$router.push('/Newnovels');
      },
      // 编辑
      editClick(row) {
        this.$router.push('/Newnovels');
      },
      // 章节管理
      chapterClick(row){
        

      }
    }
  }
</script>

<style lang="scss" scoped>
  .listofNovels {
    .list {
      display: flex;
      padding-bottom: 10px;
    }

    .layout-right {
      display: flex;
      flex-direction: row-reverse;
      margin-right: 20px;
    }

    .layout-centent {
      display: flex;
      justify-content: center;
      padding-bottom: 20px;
      padding-top: 15px;
    }
  }
</style>

<style>
  .el-radio-button:first-child .el-radio-button__inner {
    border-radius: 0;
  }

  .el-radio-button:last-child .el-radio-button__inner {
    border-radius: 0;
  }
</style>