<template>
  <div class="distribution">
    <div class="content">
      <div class="row">
        <div class="layout">
          <el-form style="width:400px;margin-top:20px;" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="网站名称" prop="name" label-width="140px">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="【充值】货币名称" prop="name" label-width="140px">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="站点类型" prop="resource" label-width="140px">
              <el-radio-group v-model="ruleForm.resource">
                <el-radio label="小说"></el-radio>
                <el-radio label="漫画"></el-radio>
                <el-radio label="听书"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="广告开关" prop="delivery" label-width="140px">
              <el-switch v-model="ruleForm.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="评论审核开关" prop="delivery" label-width="140px">
              <el-switch v-model="ruleForm.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="全员全站免费读" prop="delivery" label-width="140px">
              <el-switch v-model="ruleForm.delivery"></el-switch>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" scoped>
  @import './style.scss';
</style>