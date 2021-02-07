<template>
  <div class="addOAO_recharge">
    <div class="pagetitle">新增套餐</div>
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <el-form-item prop="requireds" label="商品名">
        <el-input clearable v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="副标题">
        <el-input clearable v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item prop="requireds" label="商品价格（分）">
        <el-input
          clearable=""
          style="width: 400px"
          type="textarea"
          v-model="form.name"
        ></el-input>
      </el-form-item>
      <el-form-item prop="requireds" label="充值获取">
        <el-input clearable v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item prop="requireds" label="限充次数">
        <el-input
          clearable
          style="width: 400px"
          type="textarea"
          v-model="form.name"
        ></el-input>
      </el-form-item>
      <el-form-item prop="requireds" label="展示顺序">
        <el-input
          clearable
          style="width: 400px"
          type="textarea"
          v-model="form.name"
        ></el-input>
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
  name: "addOAO_recharge",
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
.addOAO_recharge {
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
.addOAO_recharge {
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
    color: #666;
    line-height: 20px;
  }
}
</style>