<template>
  <div class="addAdvertising">
    <div class="pagetitle">新增广告</div>
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <el-form-item prop="requireds" label="广告频道">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="小说" name="type"></el-checkbox>
          <el-checkbox label="漫画" name="type"></el-checkbox>
          <el-checkbox label="听书" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item prop="requireds" label="标题">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item prop="requireds" label="广告类型">
        <el-select v-model="form.region" placeholder="请选广告类型">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="requireds" label="广告图片">
        <el-button type="info">选择图片</el-button>
        <div style="font-size: 14px; color: #999999">
          建议图片尺寸900*300，建议压缩图片大小
        </div>
      </el-form-item>
      <el-form-item prop="requireds" label="跳转类型">
        <el-select v-model="form.region" placeholder="请选择跳转类型">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="requireds" label="跳转链接">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item prop="requireds" label="权重">
        <el-input v-model="form.name"></el-input>
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
  name: "addAdvertising",
  data() {
    return {
      form: {
        name: "",
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
.addAdvertising {
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
.addAdvertising {
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