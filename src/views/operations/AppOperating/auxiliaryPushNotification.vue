<template>
  <div class="PushNotification">
    <div class="pagetitle">辅助推送通道列表</div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="title" label="通道名称" width="80">
      </el-table-column>
      <el-table-column label="通道key"></el-table-column>
      <el-table-column label="app id">
        <template slot-scope="scope"> </template>
      </el-table-column>
      <el-table-column label="app key">
        <template slot-scope="scope"> </template>
      </el-table-column>
      <el-table-column label="app secret">
        <template slot-scope="scope"> </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <a
            @click="openDialog = true"
            style="color: #00a5ff; font-size: 12px; margin-left: 4px"
            href="javascript:void(0)"
            >编辑</a
          >
        </template>
      </el-table-column>
    </el-table>
    <div class="flex justify-end PushNotificationBottom align-center">
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
    <el-dialog title="编辑玩家" :visible.sync="openDialog" width="450px">
      <el-form
        :model="form"
        :rules="rules"
        ref="ruleForm"
        label-width="70px"
        class="demo-ruleForm"
      >
        <el-form-item label="通道名称">
          <el-input style="width: 300px" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="通道key">
          <el-input style="width: 300px" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="app id">
          <el-input style="width: 300px" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="app key">
          <el-input style="width: 300px" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="app secret">
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
  name: "PushNotification",
  data() {
    return {
      tableData: [
        {
          title: "通道名称1",
        },
        {
          title: "通道名称2",
        },
      ],
      input: "",
      activeName: "first",
      currentPage4: 4,
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
      form: {
        name: "",
        region: "",
      },
      rules: {
        requireds: [{ required: true, message: "这是必填项", trigger: "blur" }],
      },
      openDialog: false,
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
.PushNotification {
  .el-table th {
    background-color: #f2f4f8;
  }
}
.PushNotificationHeader {
  .el-input {
    width: 190px;
  }
  .el-input__inner {
    height: 34px;
    line-height: 34px;
  }
  .el-input__icon {
    line-height: 34px;
  }
}
</style>

<style lang='scss' scoped>
.PushNotificationBottom {
  margin: 20px 0 0;
}
.pagetitle {
  font-size: 16px;
  color: #3c3d40;
  white-space: normal;
  padding: 18px 0;
  font-weight: 400;
}
.PushNotification {
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