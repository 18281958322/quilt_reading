<template>
  <div class="roleMangement">
    <div class="pagetitle">系统成员</div>
    <div class="PCOU_Announcement_header">
      <div>
        1、每个成员都有对应的角色，新建时可以选择，不同角色看到的后台不同，具体内容取决于当前角色的权限，权限可以在角色列表处修改
      </div>
      <div>
        2、id为1的是超级管理员，拥有所有权限，属于系统内置管理员，不可禁用或删除
      </div>
    </div>
    <div
      style="margin: 20px 0"
      class="flex align-center GO_rankingListHeader justify-between"
    >
      <div class="flex">
        <el-select
          style="width: 150px"
          v-model="input"
          placeholder="请选择角色"
        >
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
        <el-select
          style="width: 150px; margin: 0 0 0 10px"
          v-model="input"
          placeholder="请选择状态"
        >
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
        <el-input
          style="width: 150px; margin: 0 0 0 10px"
          placeholder="角色名称"
          clearable
          v-model="value"
        ></el-input>
        <div style="margin: 0 0 0 10px" class="isbutton bt1">搜索</div>
      </div>
      <div @click="dialogVisible = true" class="isbutton bt1">新增系统成员</div>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column prop="id" label="序号"> </el-table-column>
      <el-table-column label="用户名"></el-table-column>
      <el-table-column label="角色"></el-table-column>
      <el-table-column label="状态"></el-table-column>
      <el-table-column label="更新时间"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <a
            @click="dialogVisible1 = true"
            style="margin-left: 4px; color: #00a5ff; font-size: 12px"
            href="javascript:void(0)"
            >编辑</a
          >
          <a
            @click="openPage('/authorization')"
            style="color: #00a5ff; font-size: 12px; margin-left: 4px"
            href="javascript:void(0)"
            >下线</a
          >
          <a
            @click="open('确定删除该成员么？')"
            style="margin-left: 4px; color: #00a5ff; font-size: 12px"
            href="javascript:void(0)"
            >删除</a
          >
        </template>
      </el-table-column>
    </el-table>
    <div class="flex justify-between GO_rankingListBottom align-center">
      <div @click="open('确定删除选中成员么？')" class="isbutton bt0">
        批量删除
      </div>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      >
      </el-pagination>
    </div>
    <el-dialog title="新增系统成员" :visible.sync="dialogVisible" width="450px">
      <el-form
        :model="form"
        :rules="rules"
        ref="ruleForm"
        label-width="70px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="requireds">
          <el-input style="width: 300px" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="requireds">
          <el-input style="width: 300px" v-model="form.name"></el-input>
          <div style="font-size:14px;line-height:22px;color:#ddd">密码长度在6~18位之间</div>
        </el-form-item>
        <el-form-item label="手机号" prop="requireds">
          <el-input style="width: 300px" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="角色" prop="requireds">
          <el-select
            style="width: 300px"
            v-model="form.region"
            placeholder="请选择角色"
          >
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <div style="font-size:14px;line-height:22px;color:#00a5ff">点我新增角色</div>
        </el-form-item>
        <el-form-item label="状态" prop="requireds">
          <el-select
            style="width: 300px"
            v-model="form.region"
            placeholder="请选择状态"
          >
            <el-option label="启用" value="shanghai"></el-option>
            <el-option label="停用" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-from-item>
          <div class="flex justify-center">
            <div class="isbutton bt0">取消</div>
            <div style="margin: 0 0 0 12px" class="isbutton bt1">确定</div>
          </div>
        </el-from-item>
      </el-form>
    </el-dialog>
    <el-dialog title="编辑系统成员" :visible.sync="dialogVisible1" width="450px">
      <el-form
        :model="form"
        :rules="rules"
        ref="ruleForm"
        label-width="70px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="requireds">
          <el-input style="width: 300px" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="requireds">
          <el-input style="width: 300px" v-model="form.name"></el-input>
          <div style="font-size:14px;line-height:22px;color:#ddd">密码长度在6~18位之间</div>
        </el-form-item>
        <el-form-item label="手机号" prop="requireds">
          <el-input style="width: 300px" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="状态" prop="requireds">
          <el-select
            style="width: 300px"
            v-model="form.region"
            placeholder="请选择状态"
          >
            <el-option label="启用" value="shanghai"></el-option>
            <el-option label="停用" value="beijing"></el-option>
          </el-select>
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
  name: "roleMangement",
  data() {
    return {
      tableData: [
        {
          id: "0",
          address: "首页",
          channel: "男生",
          ActionType: "浏览器打开链接",
          content: "逆剑凌尊",
        },
        {
          id: "1",
          address: "首页",
          channel: "男生",
          ActionType: "浏览器打开链接",
          content: "逆剑凌尊",
        },
      ],
      input: "",
      currentPage4: 4,
      value: "",
      form: {
        region: "",
        name: "",
      },
      dialogVisible: false,
      dialogVisible1: false,
      rules: {
        requireds: [{ required: true, message: "这是必填项", trigger: "blur" }],
      },
    };
  },
  methods: {
    handleClick: function () {},
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    openPage(val) {
      this.$router.push(val);
    },
    open(val = "") {
      this.$confirm(val, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>

<style lang="scss">
.roleMangement {
}
</style>

<style lang='scss' scoped>
.GO_rankingListBottom {
  margin: 20px 0 0;
}
.pagetitle {
  font-size: 16px;
  color: #3c3d40;
  white-space: normal;
  padding: 18px 0;
  font-weight: 400;
}
.roleMangement {
  width: 100%;
  position: relative;
  height: auto;
  background-color: #fff;
  min-height: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px;
  .PCOU_Announcement_header {
    border: 1px solid rgba(221, 221, 221, 1);
    width: 100%;
    position: relative;
    padding: 12px;
    border-radius: 4px;
    & > div {
      font-size: 12px;
      color: #333;
      line-height: 26px;
    }
  }
}
</style>