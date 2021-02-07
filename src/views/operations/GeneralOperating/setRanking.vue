<template>
  <div class="setRanking">
    <div class="pagetitle">编辑榜单</div>
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <el-form-item label="榜单名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item prop="requireds" label="榜单频道">
        <div class="flex align-center">
          <el-select v-model="form.region" placeholder="请选榜单频道">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <el-tooltip
            class="item"
            effect="dark"
            content="只能选择已创建的榜单频道"
            placement="right"
          >
            <i
              style="color: #d0d0d0; margin-left: 12px; font-size: 18px"
              class="el-icon-question"
            ></i>
          </el-tooltip>
        </div>
      </el-form-item>
      <el-form-item label="频道内容">
        <span>小说</span>
      </el-form-item>
      <el-form-item prop="requireds" label="榜单类型">
        <div class="flex align-center">
          <el-select v-model="form.region" placeholder="请选榜单频道">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </div>
      </el-form-item>
      <el-form-item prop="requireds" label="榜单内容">
        <div class="flex align-center">
          <el-select v-model="form.region" placeholder="请选榜单内容">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <el-tooltip
            class="item"
            effect="dark"
            content="此处的榜单内容是系统自动更新榜单里的内容 => 推荐榜：根据近7天阅读热度排行,热搜榜：根据近7天搜索次数排行,打赏榜：根据近7天打赏总金额排行"
            placement="right"
          >
            <i
              style="color: #d0d0d0; margin-left: 12px; font-size: 18px"
              class="el-icon-question"
            ></i>
          </el-tooltip>
        </div>
      </el-form-item>
      <el-form-item label="描述">
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
  name: "setRanking",
  data() {
    return {
      form: {
        name: "",
        delivery: false,
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
.setRanking {
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
.setRanking {
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