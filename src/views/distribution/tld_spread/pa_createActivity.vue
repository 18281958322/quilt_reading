<template>
  <div class="pa_createActivity">
    <div class="pagetitle">新增活动</div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="活动名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="商品信息">
        <el-select v-model="form.region" placeholder="请选择商品信息">
          <el-option label="充500送300" value="shanghai"></el-option>
          <el-option label="充1000送800" value="beijing"></el-option>
          <el-option label="充2000送2000" value="beijing2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-col :span="11">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="form.date1"
            style="width: 100%"
          ></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">至</el-col>
        <el-col :span="11">
          <el-time-picker
            placeholder="选择时间"
            v-model="form.date2"
            style="width: 100%"
          ></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="模板选择">
        <el-radio-group v-model="form.resource">
          <el-radio label="系统默认"></el-radio>
          <el-radio label="周末福利"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动描述">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <div class="flex align-center">
          <div class="isbutton bt1" @click="onSubmit">保存</div>
          <div style="margin-left: 16px" class="isbutton bt0">返回</div>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "pa_createActivity",
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        resource: "",
        desc: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  },
};
</script>

<style lang="scss">
.pa_createActivity {
  .el-form {
    max-width: 600px;
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
.pa_createActivity {
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