<template>
  <div class="wap">
    <div class="content">
      <div class="row">
        <div class="layout">
            <div class="layout-cell">
            <div class="data-title">
              <p>产品APP ID</p>
            </div>
            <el-input style="width:268px;" v-model="input" placeholder="请输入内容"></el-input>
          </div>
          <div class="layout-cell">
            <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
              <el-form-item label="商户号" label-width="125px" prop="age" :rules="[
                { required: true, message: '年龄不能为空'},
                { type: 'number', message: '年龄必须为数字值'}]">
                <el-input style="width:268px;" type="age" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
          </div>
          <div class="layout-cell">
            <div class="data-title">
              <p>API秘钥</p>
            </div>
            <el-input style="width:268px;" v-model="input" placeholder="请输入内容"></el-input>
          </div>
          <el-divider></el-divider>
          <div class="layout-cell">
            <el-button style="margin-left: 170px;" type="primary">保 存</el-button>
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
        input: '',
        numberValidateForm: {
          age: ''
        },
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
  .wap {
    .content {
      padding: 10px 0;

      .row {
        background-color: #fff;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);

        .layout {
          padding: 20px 0;

          .layout-cell {
            display: flex;
            justify-content: left;
            padding: 10px 3%;

            .data-title {
              width: 105px;
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

<style>
  .el-form-item {
    margin-bottom: 0;
  }
</style>