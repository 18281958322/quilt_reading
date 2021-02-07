<template>
  <div class="setOAOU_ImgTextNavigation">
    <div class="pagetitle">编辑图文导航</div>
    <el-form ref="form" :model="form" :rules="rules" label-width="84px">
        <el-form-item prop="requireds" label="首页频道">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item prop="requireds" label="导航名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item prop="requireds" label="icon图">
        <el-button type="info">选择图片</el-button>
        <div style="font-size: 14px; color: #999999">
          建议图片尺寸400*300或4*3，JPG、PNG格式， 图片小于5M
        </div>
      </el-form-item>
      <el-form-item prop="requireds" label="跳转子页面">
        <el-select v-model="form.region" placeholder="请选广告类型">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="requireds" label="展示顺序">
        <el-input v-model="form.name"></el-input>
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
  name: "setOAOU_ImgTextNavigation",
  data() {
    return {
      form: {
        name: "首页频道",
        region: "shanghai",
        resource: "已上线",
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
.setOAOU_ImgTextNavigation {
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
.setOAOU_ImgTextNavigation {
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