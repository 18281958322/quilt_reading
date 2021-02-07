<template>
  <div class="PCOBootstrapClient">
    <div class="pagetitle">引导客户端</div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column label="客户端二维码"> </el-table-column>
      <el-table-column label="类型"></el-table-column>
      <el-table-column label="状态"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <a
            @click="dialogVisible = true"
            style="color: #00a5ff; font-size: 12px; margin-left: 4px"
            href="javascript:void(0)"
            >编辑</a
          >
          <a
            style="color: #00a5ff; font-size: 12px; margin-left: 4px"
            href="javascript:void(0)"
            >下线</a
          >
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="编辑" :visible.sync="dialogVisible" width="450px">
      <el-form
        :model="form"
        :rules="rules"
        ref="ruleForm"
        label-width="96px"
        class="demo-ruleForm"
      >
        <el-form-item label="客户端二维码" prop="requireds">
          <el-button type="info">点击上传</el-button>
        </el-form-item>
        <el-form-item label="类型" prop="requireds">
          <el-input style="width: 280px" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="状态" prop="requireds">
          <el-radio-group v-model="form.resource">
            <el-radio label="已上线"></el-radio>
            <el-radio label="已下线"></el-radio>
          </el-radio-group>
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
  name: "PCOBootstrapClient",
  data() {
    return {
      tableData: [{}],
      form: {
        resource: "",
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
.PCOBootstrapClient {
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
.PCOBootstrapClient {
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