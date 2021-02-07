<template>
  <div class="addPushNotification">
    <div class="pagetitle">编辑消息推送</div>
    <div style="width:100%;overflow:hidden;position:relative" class="flex">
        <el-form style="width: 60%" ref="form" label-position="top" :model="form" :rules="rules" label-width="80px">
      <el-form-item prop="requireds" label="目标平台（必选）">
        
      </el-form-item>
      <el-form-item prop="requireds" label="推送类型（必选）">
        
      </el-form-item>
      <el-form-item prop="requireds" label="标题">
        <el-input placeholder="请输入标题" v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item prop="requireds" label="推送内容">
        <el-input type="textarea" placeholder="请输入内容" :rows="6" v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="推送类型">
        <el-radio-group v-model="form.resource">
          <el-radio label="立即"></el-radio>
          <el-radio label="定时"></el-radio>
          <el-radio label="每日"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="用户范围">
        <el-radio-group v-model="form.resource2">
          <el-radio label="全部用户"></el-radio>
          <el-radio label="部分用户"></el-radio>
          <el-radio label="指定用户"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <div class="flex">
          <div class="isbutton bt1">保存</div>
        </div>
      </el-form-item>
    </el-form>
    <div class="addPushNotification_right" style="width: 35%;margin: 0 0 0 5%">
        <div class="title">预览</div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "addPushNotification",
  data() {
    return {
      form: {
        name: "",
        region: "",
        resource2: '',
        resource: ''
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
.addPushNotification {
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
.addPushNotification {
  width: 100%;
  position: relative;
  height: auto;
  background-color: #fff;
  min-height: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px;
  .addPushNotification_right {
      padding: 15px;
      box-sizing: border-box;
  }
}
</style>