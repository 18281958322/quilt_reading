<template>
  <div class="addBootPage">
    <div class="pagetitle">新增启动页</div>
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <el-form-item prop="requireds" label="标题">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item prop="requireds" label="跳转类型 ">
        <el-select v-model="form.region" placeholder="请选跳转类型">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="requireds" label="小说">
        <el-select v-model="form.region" placeholder="请选小说">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="requireds" label="启动图">
        <el-button type="info">选择图片</el-button>
        <div style="font-size: 14px; color: #999999">
          建议图片尺寸1242*2208，建议压缩图片大小
        </div>
      </el-form-item>
      <el-form-item label="上线状态">
        <el-radio-group v-model="form.resource">
          <el-radio label="已上线"></el-radio>
          <el-radio label="已下线"></el-radio>
        </el-radio-group>
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
  name: "addBootPage",
  data() {
    return {
      form: {
        name: "",
        region: "",
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
.addBootPage {
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
.addBootPage {
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