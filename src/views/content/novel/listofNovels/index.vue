<template>
  <div class="listofNovels">
    <div class="list">
      <el-checkbox-group v-model="checkboxGroup1" size="small">
        <el-checkbox label="频道" border></el-checkbox>
        <el-checkbox label="男频" border></el-checkbox>
        <el-checkbox label="女频" border></el-checkbox>
      </el-checkbox-group>
    </div>
    <div class="list">
      <el-checkbox-group v-model="checkboxGroup1" size="small">
        <el-checkbox label="分类" border></el-checkbox>
        <el-checkbox label="全部" border></el-checkbox>
        <el-checkbox label="玄幻奇幻" border></el-checkbox>
        <el-checkbox label="军事历史" border></el-checkbox>
        <el-checkbox label="穿越" border></el-checkbox>
        <el-checkbox label="言情" border></el-checkbox>
      </el-checkbox-group>
    </div>
    <div class="list">
      <el-checkbox-group v-model="checkboxGroup1" size="small">
        <el-checkbox label="连载" border></el-checkbox>
        <el-checkbox label="全部" border></el-checkbox>
        <el-checkbox label="连载中" border></el-checkbox>
        <el-checkbox label="已完结" border></el-checkbox>
      </el-checkbox-group>
    </div>
    <div class="list">
      <el-checkbox-group v-model="checkboxGroup1" size="small">
        <el-checkbox label="上线" border></el-checkbox>
        <el-checkbox label="全部" border></el-checkbox>
        <el-checkbox label="以上线" border></el-checkbox>
        <el-checkbox label="以下线" border></el-checkbox>
      </el-checkbox-group>
    </div>
    <div class="list">
      <el-checkbox-group v-model="checkboxGroup1" size="small">
        <el-checkbox label="铭感" border></el-checkbox>
        <el-checkbox label="全部" border></el-checkbox>
        <el-checkbox label="铭感" border></el-checkbox>
        <el-checkbox label="不铭感" border></el-checkbox>
      </el-checkbox-group>
    </div>
    <div class="list">
      <el-checkbox-group v-model="checkboxGroup1" size="small">
        <el-checkbox label="属性" border></el-checkbox>
        <el-checkbox label="全部" border></el-checkbox>
        <el-checkbox label="新书" border></el-checkbox>
        <el-checkbox label="爽文" border></el-checkbox>
        <el-checkbox label="精选" border></el-checkbox>
        <el-checkbox label="大神" border></el-checkbox>
      </el-checkbox-group>
    </div>
    <div class="list">
      <el-checkbox-group v-model="checkboxGroup1" size="small">
        <el-checkbox label="会员" border></el-checkbox>
        <el-checkbox label="全部" border></el-checkbox>
        <el-checkbox label="会员" border></el-checkbox>
        <el-checkbox label="非会员" border></el-checkbox>
      </el-checkbox-group>
    </div>
    <div class="list">
      <el-checkbox-group v-model="checkboxGroup1" size="small">
        <el-checkbox label="资费" border></el-checkbox>
        <el-checkbox label="全部" border></el-checkbox>
        <el-checkbox label="免费" border></el-checkbox>
        <el-checkbox label="付费" border></el-checkbox>
      </el-checkbox-group>
    </div>
    <div class="list">
      <el-checkbox-group v-model="checkboxGroup1" size="small">
        <el-checkbox label="20万字以下" border></el-checkbox>
        <el-checkbox label="20-30万字" border></el-checkbox>
        <el-checkbox label="30-50万字" border></el-checkbox>
        <el-checkbox label="50-100万字" border></el-checkbox>
        <el-checkbox label="100-200万字" border></el-checkbox>
        <el-checkbox label="200以上" border></el-checkbox>
      </el-checkbox-group>
    </div>
    <div class="list">
      <el-checkbox-group v-model="checkboxGroup1" size="small">
        <el-checkbox label="排序" border></el-checkbox>
        <el-checkbox label="最近更新" border></el-checkbox>
        <el-checkbox label="最多浏览" border></el-checkbox>
        <el-checkbox label="最多收藏" border></el-checkbox>
        <el-checkbox label="最多字数" border></el-checkbox>
      </el-checkbox-group>
    </div>
    <el-divider></el-divider>
    <div class="layout-right">
      <el-button type="primary" @click="dialogVisible = true">新增小说</el-button>
    </div>
    <div class="list">
      <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column prop="name" label="封面">
        </el-table-column>
        <el-table-column prop="name" label="类型/名称">
        </el-table-column>
        <el-table-column prop="name" label="频道">
        </el-table-column>
        <el-table-column prop="name" label="来源">
        </el-table-column>
        <el-table-column prop="name" label="章节价格">
        </el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="layout-centent">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
    <!-- 新增小说弹窗 -->
    <el-dialog title="新增小说" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <!-- 基本信息 -->
        <el-form-item label="频道" prop="resource" label-width="120px">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="男频"></el-radio>
            <el-radio label="女频"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="分类" prop="region" label-width="120px">
          <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="小说名" prop="name" label-width="120px">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="作品封面" prop="name" label-width="120px">
          <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3"
            :on-exceed="handleExceed" :file-list="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="作者" prop="name" label-width="120px">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="作者寄语" prop="desc" label-width="120px">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item label="来源" prop="name" label-width="120px">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="作者简介" prop="desc" label-width="120px">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <!-- 作品属性 -->

        <el-form-item label="付费类型" prop="region" label-width="120px">
          <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="免费章节数" prop="name" label-width="120px">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="定价标准" prop="resource" label-width="120px">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="章节定价"></el-radio>
            <el-radio label="千字定价"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="价格（书币）" prop="name" label-width="120px">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="浏览数" prop="name" label-width="120px">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="收藏数" prop="name" label-width="120px">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="是否会员" prop="resource" label-width="120px">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="非会员作品"></el-radio>
            <el-radio label="会员作品"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="更新状态" prop="resource" label-width="120px">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="连载中"></el-radio>
            <el-radio label="已完结"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="上线状态" prop="resource" label-width="120px">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="上线"></el-radio>
            <el-radio label="离线"></el-radio>
          </el-radio-group>
        </el-form-item>
        <!-- 功能属性 -->
        <el-form-item label="是否铭感" prop="resource" label-width="120px">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="不铭感作品"></el-radio>
            <el-radio label="铭感作品"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="章节更新推送" prop="delivery" label-width="120px">
          <el-switch v-model="ruleForm.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="章节存储方式" prop="resource" label-width="120px">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="数据库存储"></el-radio>
            <el-radio label="文件存储"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
        activeName: 'first',
        dialogVisible: false,
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
      }
    }
  }
</script>

<style lang="scss" scoped>
  .listofNovels {
    .list {
      display: flex;
      padding-bottom: 5px;
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