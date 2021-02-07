<template>
  <div class="setversionControl_Android">
    <div class="pagetitle">编辑版本</div>
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <el-form-item prop="requireds" label="版本号">
        <el-input clearable v-model="form.name"></el-input>
        <div class="hint">只能填写数字和小数点类型，例如1.0.1</div>
      </el-form-item>
      <el-form-item label="渠道包地址">
        <div class="flex flex-column">
          <el-input placeholder="请输入内容" v-model="form.name">
            <template slot="prepend">360:</template>
            <template slot="append">
              <div class="isbutton bt0">上传安装包</div>
            </template>
          </el-input>
          <el-input placeholder="请输入内容" v-model="form.name">
            <template slot="prepend">豌豆荚:</template>
            <template slot="append">
              <div class="isbutton bt0">上传安装包</div>
            </template>
          </el-input>
          <el-input placeholder="请输入内容" v-model="form.name">
            <template slot="prepend">应用宝:</template>
            <template slot="append">
              <div class="isbutton bt0">上传安装包</div>
            </template>
          </el-input>
          <el-input placeholder="请输入内容" v-model="form.name">
            <template slot="prepend">百度助手:</template>
            <template slot="append">
              <div class="isbutton bt0">上传安装包</div>
            </template>
          </el-input>
          <el-input placeholder="请输入内容" v-model="form.name">
            <template slot="prepend">oppo:</template>
            <template slot="append">
              <div class="isbutton bt0">上传安装包</div>
            </template>
          </el-input>
          <el-input placeholder="请输入内容" v-model="form.name">
            <template slot="prepend">vivo:</template>
            <template slot="append">
              <div class="isbutton bt0">上传安装包</div>
            </template>
          </el-input>
          <el-input placeholder="请输入内容" v-model="form.name">
            <template slot="prepend">小米:</template>
            <template slot="append">
              <div class="isbutton bt0">上传安装包</div>
            </template>
          </el-input>
          <el-input placeholder="请输入内容" v-model="form.name">
            <template slot="prepend">华为:</template>
            <template slot="append">
              <div class="isbutton bt0">上传安装包</div>
            </template>
          </el-input>
          <el-input placeholder="请输入内容" v-model="form.name">
            <template slot="prepend">魅族:</template>
            <template slot="append">
              <div class="isbutton bt0">上传安装包</div>
            </template>
          </el-input>
          <el-input placeholder="请输入内容" v-model="form.name">
            <template slot="prepend">PP助手:</template>
            <template slot="append">
              <div class="isbutton bt0">上传安装包</div>
            </template>
          </el-input>
          <el-input placeholder="请输入内容" v-model="form.name">
            <template slot="prepend">默认渠道:</template>
            <template slot="append">
              <div class="isbutton bt0">上传安装包</div>
            </template>
          </el-input>
        </div>
      </el-form-item>
      <el-form-item prop="requireds" label="上架时间">
        <el-date-picker
          v-model="form.resource"
          type="datetime"
          placeholder="选择日期时间"
        >
        </el-date-picker>
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
  name: "setversionControl_Android",
  data() {
    return {
      form: {
        name: "文本",
        region: "",
        type: "",
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
.setversionControl_Android {
  .flex.flex-column .el-input:nth-child(n + 2) {
    margin-top: 20px;
  }
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
.setversionControl_Android {
  width: 100%;
  position: relative;
  height: auto;
  background-color: #fff;
  min-height: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px;
  .hint {
    font-size: 13px;
    color: #666666;
    line-height: 20px;
  }
}
</style>