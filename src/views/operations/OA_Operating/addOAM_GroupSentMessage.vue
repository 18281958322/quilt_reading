<template>
  <div class="addOAM_GroupSentMessage">
    <div class="pagetitle">新增消息</div>
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <el-form-item prop="requireds" label="任务标题">
        <el-input v-model="form.name"></el-input>
        <div style="font-size: 13px; line-height: 20px; color: #999999">
          标题，后台展示标记作用
        </div>
      </el-form-item>
      <el-form-item prop="requireds" label="图文标题">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item prop="requireds" label="简介">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item prop="requireds" label="图片">
        <el-button type="info">选择图片</el-button>
        <div style="font-size: 13px; line-height: 20px; color: #999999">
          建议图片尺寸300*300，建议压缩图片大小
        </div>
      </el-form-item>
      <el-form-item prop="requireds" label="跳转链接">
        <el-input v-model="form.name"></el-input>
        <div style="font-size: 13px; line-height: 20px; color: #999999">
          用户点击后跳转的链接，需要完整的链接
        </div>
      </el-form-item>
      <el-form-item label="选择粉丝">
        <div>
          <span style="font-size: 13px; line-height: 20px; color: #999999"
            >性别：</span
          >
          <el-radio-group v-model="form.resource">
            <el-radio label="不限"></el-radio>
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </div>
        <div>
          <span style="font-size: 13px; line-height: 20px; color: #999999"
            >VIP：</span
          >
          <el-radio-group v-model="form.resource">
            <el-radio label="不限"></el-radio>
            <el-radio label="是"></el-radio>
            <el-radio label="否"></el-radio>
          </el-radio-group>
        </div>
        <div>
          <span style="font-size: 13px; line-height: 20px; color: #999999"
            >充值：</span
          >
          <el-radio-group v-model="form.resource">
            <el-radio label="不限"></el-radio>
            <el-radio label="已充值"></el-radio>
            <el-radio label="未充值"></el-radio>
          </el-radio-group>
        </div>
      </el-form-item>
      <el-form-item prop="requireds" label="推送时间">
        <el-date-picker
          v-model="value1"
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
  name: "addOAM_GroupSentMessage",
  data() {
    return {
      form: {
        name: "",
        region: "",
      },
      rules: {
        requireds: [{ required: true, message: "只是必填项", trigger: "blur" }],
      },
      value1: "",
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
.addOAM_GroupSentMessage {
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
.addOAM_GroupSentMessage {
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