<template>
  <div class="addExceptionalGifts">
    <div class="pagetitle">新增礼物</div>
    <el-form ref="form" :model="form" :rules="rules" label-width="90px">
      <el-form-item prop="requireds" label="礼物标题">
        <el-input v-model="form.name"></el-input>
        <div style="font-size: 13px; line-height:20px; color: #999999">
          礼物标题用于打赏时展示作用
        </div>
      </el-form-item>
      <el-form-item prop="requireds" label="封面">
        <el-button type="info">选择图片</el-button>
        <div style="font-size: 13px; line-height:20px; color: #999999">
          建议图片尺寸300*300，建议压缩图片大小
        </div>
      </el-form-item>
      <el-form-item prop="requireds" label="书币数">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item prop="requireds" label="赠送月票数">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item prop="requireds" label="排序">
        <el-input v-model="form.name"></el-input>
        <div style="font-size: 13px; line-height:20px; color: #999999">排序到第多少位</div>
      </el-form-item>
      <!-- <el-form-item label="上线状态">
        <el-radio-group v-model="form.resource">
          <el-radio label="已上线"></el-radio>
          <el-radio label="已下线"></el-radio>
        </el-radio-group>
      </el-form-item> -->
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
  name: "addExceptionalGifts",
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
.addExceptionalGifts {
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
.addExceptionalGifts {
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