<template>
  <div class="Basics">
    <div class="content">
      <div class="row">
        <div class="layout">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="网站名称" prop="name" label-width="135px">
              <el-input style="width:268px;" v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="【充值】货币名称" prop="name" label-width="135px">
              <el-input style="width:268px;" v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="站点类型" prop="resource" label-width="135px">
              <el-radio-group v-model="ruleForm.resource">
                <el-radio label="小说"></el-radio>
                <el-radio label="漫画"></el-radio>
                <el-radio label="听书"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="广告开关" prop="delivery" label-width="135px">
              <el-switch v-model="ruleForm.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="评论审核开关" prop="delivery" label-width="135px">
              <el-switch v-model="ruleForm.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="会员全站免费读" prop="delivery" label-width="135px">
              <el-switch v-model="ruleForm.delivery"></el-switch>
            </el-form-item>
            <el-divider></el-divider>
            <div class="layout-cell">
              <el-button style="margin-left: 100px;" type="primary">保 存</el-button>
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
      }
    }
  }
</script>

<style lang="scss" scoped>
  .Basics {
    .content {
      padding: 10px 0;

      .row {
        background-color: #fff;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);

        .layout {
          padding: 20px 3%;

          .layout-cell {
            display: flex;
            justify-content: left;
            padding: 10px 3%;

            .data-title {
              width: 150px;
              padding: 6px 0;
              text-align: right;
              margin-right: 20px;
            }
          }
        }
      }
    }
  }
</style>