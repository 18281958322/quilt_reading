<template>
  <div class="BuckleAmount">
    <div class="pagetitle">扣量设置</div>
    <el-form ref="form" :model="form" :rules="rules" label-width="130px">
      <el-form-item label="保护期（天）" prop="prop0">
        <div class="box">
          <el-input v-model="form.val0"></el-input>
          <div class="hint">渠道保护期内产生的订单不会进行扣量，保护期从该渠道创建时起算</div>
        </div>
      </el-form-item>
      <el-form-item label="扣量阈值（元）" prop="prop1">
        <div class="box">
          <el-input v-model="form.val1"></el-input>
          <div class="hint">渠道当日累计充值金额达到阈值后才会开始进行扣量</div>
        </div>
      </el-form-item>
      <el-form-item label="扣量比例" prop="prop2">
        <div class="box">
          <el-input v-model="form.val2"></el-input>
          <div class="hint">渠道下产生的每笔充值是否扣除的概率 = 扣量比例 * 该用户本次充值次数</div>
        </div>
      </el-form-item>
      <el-form-item label="起扣订单金额（元）" prop="prop3">
        <div class="box">
          <el-input v-model="form.val3"></el-input>
          <div class="hint">超过起扣金额的订单才会触发扣量</div>
        </div>
      </el-form-item>
      <el-form-item label="渠道白名单" prop="prop4">
        <div class="box">
          <el-input type="textarea" v-model="form.val4"></el-input>
          <div class="hint">白名单内的渠道产生的订单不进行扣量处理，多个渠道id以英文逗号拼接，例: 1,2,3</div>
        </div>
      </el-form-item>
      <el-form-item label="活动名称" prop="prop5">
        <div class="box">
          <div class="flex align-center">
            <span class="text">用户触发扣量</span>
            <el-input style="width: 60px;margin: 0 4px" v-model="form.val5"></el-input>
            <span class="text">次均未被扣，则该用户标记成豁免用户，产生的订单永远不会被扣量</span>
          </div>
          <div class="hint">该值设置成0时不生效</div>
        </div>
      </el-form-item>
      <el-form-item label="暗扣保护期（天）" prop="prop6">
        <div class="box">
          <el-input type="textarea" v-model="form.val6"></el-input>
          <div class="hint">例如30天，代理下活跃30天后的用户的充值订单暗扣掉归上级渠道所有，豁免用户例外；该值设置成0时不生效。</div>
        </div>
      </el-form-item>
      <el-form-item label="扣量开关">
        <el-switch v-model="form.delivery"></el-switch> 
      </el-form-item>
      <el-form-item>
        <div class="flex">
          <div class="isbutton bt1">保存</div>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "BuckleAmount",
  data() {
    return {
      form: {
        val0: "",
        val1: "",
        val2: "",
        val3: "",
        val4: "",
        val5: "",
        val6: "",
        delivery: true,
      },
      rules: {
        prop0: [
          { required: true, message: '请输入保护期', trigger: 'blur' },
        ],
        prop1: [
          { required: true, message: '请输入扣量阈值', trigger: 'blur' },
        ],
        prop2: [
          { required: true, message: '请输入扣量比例', trigger: 'blur' },
        ],
        prop3: [
          { required: true, message: '请输入起扣订单金额', trigger: 'blur' },
        ],
        prop4: [
          { required: true, message: '请输入渠道白名单', trigger: 'blur' },
        ],
        prop5: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
        ],
        prop6: [
          { required: true, message: '请输入暗扣保护期', trigger: 'blur' },
        ]
      }
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
  .BuckleAmount {
    .el-form {
      max-width: 700px;
    }
    .el-form-item__label {
      font-size: 12px;
      color: #333;
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
.BuckleAmount {
  width: 100%;
  position: relative;
  height: auto;
  background-color: #fff;
  min-height: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px;
  .box {
    width: auto;
    overflow: hidden;
    height: auto;
    position: relative;
  }
  .hint {
    font-size: 12px;
    color: #999999;
    text-align: left;
    line-height: 18px;
    font-family: 'Arial Normal', 'Arial', sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  .text {
    font-size: 12px;
    color: #333;
    text-align: left;
    font-family: 'Arial Normal', 'Arial', sans-serif;
    font-weight: 400;
    font-style: normal;
  }
}
</style>