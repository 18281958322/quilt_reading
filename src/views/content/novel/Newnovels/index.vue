<template>
  <div class="Newnovels">
    <div class="content">
      <div class="row">
        <div class="layout">
          <el-form style="width:500px" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <div class="layout-cell">
              <div class="layout-item">
                <div class="layout-color"></div>
                <div class="layout-title">
                  <p>基本信息</p>
                </div>
              </div>
              <div class="layout-pull">
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
                    :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" multiple
                    :limit="3" :on-exceed="handleExceed" :file-list="fileList">
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
              </div>
            </div>
            <div class="layout-cell">
              <div class="layout-item">
                <div class="layout-color"></div>
                <div class="layout-title">
                  <p>作品属性</p>
                </div>
              </div>
              <div class="layout-pull">
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
              </div>
            </div>
            <div class="layout-cell">
              <div class="layout-item">
                <div class="layout-color"></div>
                <div class="layout-title">
                  <p>功能属性</p>
                </div>
              </div>
              <div class="layout-pull">
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
              </div>
            </div>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
          fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
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
    }
  }
</script>

<style lang="scss" scoped>
  .Newnovels {
    .content {
      padding: 10px 0;

      .row {
        background-color: #fff;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);

        .layout {
          padding: 20px 0;

          .layout-cell {
            padding: 10px;

            .layout-item {
              display: flex;
              margin-bottom: 20px;

              .layout-color {
                width: 3px;
                padding: 10px 0px;
                background-color: #00a5ff;
              }

              .layout-title {
                line-height: 20px;
                margin-left: 10px;

                p {
                  font-size: 13px;
                }
              }
            }
          }
        }
      }
    }
  }
</style>