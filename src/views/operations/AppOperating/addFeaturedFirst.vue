<template>
  <div class="addFeaturedFirst">
    <div class="pagetitle">新增推荐位</div>
    <el-form ref="form" :model="form" :rules="rules" label-width="84px">
      <el-form-item prop="requireds" label="频道">
        <el-select v-model="form.region" placeholder="请选频道">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="requireds" label="频道内容">
        <el-select v-model="form.region" placeholder="请选频道内容">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="requireds" label="推荐位名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="推荐位样式">
        <el-select v-model="form.region" placeholder="请选择推荐位样式">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="requireds" label="展示顺序">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item prop="requireds" label="上线状态">
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
  name: "addFeaturedFirst",
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
.addFeaturedFirst {
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
.addFeaturedFirst {
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