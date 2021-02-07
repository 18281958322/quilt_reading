<template>
  <div class="OAM_generatingCode">
    <div class="pagetitle">生成代码</div>
    <el-form style="width:480px" ref="form" :model="form" :rules="rules" label-width="80px">
      <el-form-item label="推广标题:">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="首章链接:">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="代码">
        <el-input type="textarea" :rows="6" v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item>
        <div class="flex">
          <div class="isbutton bt0">生成代码</div>
          <div style="margin: 0 0 0 12px" class="isbutton bt0">复制代码</div>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "OAM_generatingCode",
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
.OAM_generatingCode {
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
.OAM_generatingCode {
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