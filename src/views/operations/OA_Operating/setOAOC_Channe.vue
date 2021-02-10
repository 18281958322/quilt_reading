<template>
  <div class="setOAOC_Channe">
    <div class="pagetitle">编辑渠道</div>
    <el-form ref="form" :model="form" :rules="rules" label-width="84px">
      <el-form-item prop="requireds" label="账号">
        <el-input clearable v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item prop="requireds" label="密码">
        <el-input clearable v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item prop="requireds" label="分成百分比">
        <el-input clearable v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item prop="requireds" label="渠道名">
        <el-input clearable v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input clearable v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input clearable v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="QQ号">
        <el-input clearable v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="开户银行">
        <el-input clearable v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="卡号">
        <el-input clearable v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="微信号">
        <el-input clearable v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="支付宝">
        <el-input clearable v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item>
        <div class="flex">
          <div class="isbutton bt1">保存</div>
          <div style="margin: 0 0 0 12px" class="isbutton bt0">返回</div>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "setOAOC_Channe",
  data() {
    return {
      form: {
        name: "文本",
        region: "",
        resource: "",
      },
      rules: {
        requireds: [{ required: true, message: "只是必填项", trigger: "blur" }],
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style lang="scss">
.setOAOC_Channe {
  .el-input {
    width: 400px;
  }
}
</style>

<style lang='scss' scoped>
.pagetitle {
  font-size: 16px;
  color: #3c3d40;
  white-space: normal;
  padding: 18px 0;
  font-weight: 400;
}
.setOAOC_Channe {
  width: 100%;
  position: relative;
  height: auto;
  background-color: #fff;
  min-height: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px;
}
</style>