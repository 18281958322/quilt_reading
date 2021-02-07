<template>
  <div class="PCOTDKSet">
    <div class="pagetitle">编辑转盘活动</div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="网站TDK设置" name="first">
        <el-form
          style="width: 500px"
          ref="form"
          :model="form"
          :rules="rules"
          label-width="100px"
        >
          <el-form-item label="浏览器标题">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="网站SEO关键词">
            <el-input type="textarea" :rows="6" v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="网站SEO描述">
            <el-input type="textarea" :rows="6" v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item>
            <div class="flex">
              <div class="isbutton bt1">保存</div>
            </div>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="单页TDK设置" name="second">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column prop="page" label="页面"> </el-table-column>
          <el-table-column label="标题 [Title]"></el-table-column>
          <el-table-column label="关键词 [Keyword]"></el-table-column>
          <el-table-column label="描述 [Description]"></el-table-column>
          <el-table-column label="发布时间"></el-table-column>
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
        <div class="flex" style="margin: 20px 0 0">
          <div @click="dialogVisible1 = true" class="isbutton bt1">
            批量设置
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
    <el-dialog title="编辑TDK" :visible.sync="dialogVisible" width="450px">
      <el-form
        :model="form"
        :rules="rules"
        ref="ruleForm"
        label-width="96px"
        class="demo-ruleForm"
      >
        <el-form-item label="页面" prop="requireds"> 首页 </el-form-item>
        <el-form-item label="标题" prop="requireds">
          <el-input style="width: 280px" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="关键词" prop="requireds">
          <el-input
            type="textarea"
            style="width: 280px"
            v-model="form.name"
          ></el-input>
        </el-form-item>
        <el-form-item label="描述" prop="requireds">
          <el-input
            type="textarea"
            style="width: 280px"
            v-model="form.name"
          ></el-input>
        </el-form-item>
        <el-from-item>
          <div class="flex justify-center">
            <div class="isbutton bt0">取消</div>
            <div style="margin: 0 0 0 12px" class="isbutton bt1">确定</div>
          </div>
        </el-from-item>
      </el-form>
    </el-dialog>
    <el-dialog title="批量设置TDK" :visible.sync="dialogVisible1" width="450px">
      <el-form
        :model="form"
        :rules="rules"
        ref="ruleForm"
        label-width="96px"
        class="demo-ruleForm"
      >
        <el-form-item label="标题" prop="requireds">
          <el-input style="width: 280px" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="关键词" prop="requireds">
          <el-input
            type="textarea"
            style="width: 280px"
            v-model="form.name"
          ></el-input>
        </el-form-item>
        <el-form-item label="描述" prop="requireds">
          <el-input
            type="textarea"
            style="width: 280px"
            v-model="form.name"
          ></el-input>
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
  name: "PCOTDKSet",
  data() {
    return {
      activeName: "first",
      form: {
        name: "",
        region: "",
      },
      rules: {
        requireds: [{ required: true, message: "只是必填项", trigger: "blur" }],
      },
      dialogVisible: false,
      dialogVisible1: false,
      tableData: [
        {
          page: "首页",
        },
        {
          page: "书库",
        },
        {
          page: "免费",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss">
.PCOTDKSet {
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
.PCOTDKSet {
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