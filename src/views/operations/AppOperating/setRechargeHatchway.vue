<template>
  <div class="addBanner">
    <div class="pagetitle">编辑充值通道</div>
    <el-form ref="form" :model="form" :rules="rules" label-width="94px">
      <el-form-item prop="requireds" label="图标">
        <el-button type="info">选择图片</el-button>
        <div style="font-size: 14px; color: #999999">
          建议图片尺寸200*200，建议压缩图片大小
        </div>
      </el-form-item>
      <el-form-item prop="requireds" label="显示名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item prop="requireds" label="支付通道名称">
        <el-input placeholder="微信支付" v-model="form.name"></el-input>
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
  name: "addBanner",
  data() {
    return {
      form: {
        name: "",
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
.addBanner {
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
.addBanner {
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