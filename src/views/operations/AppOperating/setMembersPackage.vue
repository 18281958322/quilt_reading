<template>
  <div class="setMembersPackage">
    <div class="pagetitle">编辑会员套餐</div>
    <div class="addrechargeProportion_header">
      <div>
        1.
        苹果内购商品ID是根据苹果开发者后台设置的商品ID来填写，需要先在苹果开发者后台创建商品，填写后，ios客户端页面会展示设置了苹果商品id的套餐
      </div>
      <div>
        2.
        苹果支付因为有汇率原因，不能自定义金额，请先去开发者账号下申请再设置等额的套餐金额
      </div>
    </div>
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <el-form-item prop="requireds" label="产品线">
        <el-select v-model="form.region" placeholder="请选终端">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="requireds" label="套餐名">
        <el-input clearable v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="副标题">
        <el-input clearable v-model="form.name"></el-input>
        <div class="hint">
          展示得位置在标题的下方，相当于对标题的补充，可以填比如【每天只需一元】
        </div>
      </el-form-item>
      <el-form-item prop="requireds" label="商品价格（分）">
        <el-input clearable v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item prop="requireds" label="天数">
        <el-input clearable v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item prop="requireds" label="标签">
        <el-radio-group v-model="form.resource">
          <el-radio label="无"></el-radio>
          <el-radio label="热门"></el-radio>
          <el-radio label="推荐"></el-radio>
          <el-radio label="限时特惠"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item prop="requireds" label="展示顺序">
        <el-input
          clearable=""
          style="width: 400px"
          type="textarea"
          v-model="form.name"
        ></el-input>
        <div class="hint">排序到第多少位</div>
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
  name: "setMembersPackage",
  data() {
    return {
      form: {
        name: "文本",
        region: "shanghai",
        resource: "无",
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
.setMembersPackage {
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
.setMembersPackage {
  width: 100%;
  position: relative;
  height: auto;
  background-color: #fff;
  min-height: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px;
  .addrechargeProportion_header {
    border: 1px solid rgba(221, 221, 221, 1);
    position: relative;
    padding: 12px;
    border-radius: 4px;
    margin: 0 0 20px;
    & > div {
      font-size: 14px;
      color: #333;
      line-height: 26px;
    }
  }
  .hint {
    font-size: 13px;
    color: #666;
    line-height: 20px;
  }
}
</style>