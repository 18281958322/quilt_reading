<template>
  <div class="PCOU_bottomNavigation">
    <div class="pagetitle">底部导航</div>
    <el-table :data="tableData" border style="width: 100%"
      >>
      <el-table-column prop="id" label="页面"> </el-table-column>
      <el-table-column prop="content" label="内容"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <a
            @click="dialogVisible = true"
            style="color: #00a5ff; font-size: 12px; margin-left: 4px"
            href="javascript:void(0)"
            >编辑</a
          >
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="编辑" :visible.sync="dialogVisible" width="450px">
      <el-form
        :model="form"
        :rules="rules"
        ref="ruleForm"
        label-width="70px"
        class="demo-ruleForm"
      >
        <el-form-item label="页面" prop="requireds">
          <el-input style="width: 300px" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="内容" prop="requireds">
          <el-input style="width: 300px" v-model="form.name"></el-input>
        </el-form-item>
        <el-from-item>
          <div class="flex justify-center">
            <div class="isbutton bt0">取消</div>
            <div style="margin: 0 0 0 12px" class="isbutton bt1">确定</div>
          </div>
        </el-from-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "PCOU_bottomNavigation",
  data() {
    return {
      tableData: [
        {
          id: "关于我们",
          content:
            "被窝读书小说网创建于2016年，是万象云智科技有限公司旗下集阅读与创作为一体的原创文学平台。拥有被窝读书PC站、被窝读书公众号、被窝读书APP等原创网站和移动..",
        },
        {
          id: "帮助中心",
          content:
            "1.   如何注册账号？<br/>您可以通过首页注册帐号进入注册页面。",
        },
        {
          id: "联系我们",
          content: "版权合作：<br/>联系人: XXX",
        },
      ],
      form: {
        region: "",
        name: "",
      },
      dialogVisible: false,
      rules: {
        requireds: [{ required: true, message: "这是必填项", trigger: "blur" }],
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
.PCOU_bottomNavigation {
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
.PCOU_bottomNavigation {
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