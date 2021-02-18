<template>
  <div class="authorization">
    <div class="pagetitle">授权</div>
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <el-form-item prop="requireds" label="角色名称">
        <el-input disabled v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item prop="requireds" label="权限">
        <el-tree
          :data="data"
          show-checkbox
          node-key="id"
          :default-expanded-keys="[2, 3]"
          :default-checked-keys="[5]"
          :props="defaultProps"
        >
        </el-tree>
      </el-form-item>
      <el-form-item>
        <div class="flex">
          <div class="isbutton bt0">返回</div>
          <div style="margin: 0 0 0 12px" class="isbutton bt1">保存</div>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "authorization",
  data() {
    return {
      form: {
        name: "",
        region: "",
        type: "",
      },
      rules: {
        requireds: [{ required: true, message: "只是必填项", trigger: "blur" }],
      },
      data: [
        {
          id: 1,
          label: "数据",
          children: [
            {
              id: 4,
              label: "听书",
              children: [
                {
                  id: 9,
                  label: "听书列表",
                },
                {
                  id: 10,
                  label: "新增列表",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: "用户",
          children: [
            {
              id: 5,
              label: "作者",
            },
            {
              id: 6,
              label: "设置",
            },
          ],
        },
        {
          id: 3,
          label: "内容",
          children: [
            {
              id: 7,
              label: "小说",
            },
            {
              id: 8,
              label: "运营",
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
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
.authorization {
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
.authorization {
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