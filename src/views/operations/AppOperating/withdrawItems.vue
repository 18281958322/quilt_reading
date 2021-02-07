<template>
  <div class="withdrawItems">
    <div class="flex justify-between align-center">
      <div class="pagetitle">提现项</div>
      <div @click="dialogVisible = true" class="isbutton bt1">新增提现项</div>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="金币" name="first">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column prop="id" label="标题" width="80"> </el-table-column>
          <el-table-column label="商品提现金额（元）">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="所需金币">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="排序">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <a
                style="color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
              >
                排序
              </a>
              <a
                @click="dialogVisible2 = true"
                style="color: #00a5ff; font-size: 12px; margin-left: 4px"
                href="javascript:void(0)"
                >编辑</a
              >
              <a
                @click="open('确定删除该提现项么？')"
                style="margin-left: 4px; color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
                >删除</a
              >
            </template>
          </el-table-column>
        </el-table>
        <div class="flex justify-between withdrawItemsBottom align-center">
          <div @click="open('确定删除选中提现项么？')" class="isbutton bt0">
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
      </el-tab-pane>
      <el-tab-pane label="现金" name="second">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column prop="id" label="标题" width="80"> </el-table-column>
          <el-table-column label="商品提现金额（元）">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="所需金币">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="排序">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <a
                style="color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
              >
                排序
              </a>
              <a
                @click="dialogVisible2 = true"
                style="color: #00a5ff; font-size: 12px; margin-left: 4px"
                href="javascript:void(0)"
                >编辑</a
              >
              <a
                @click="open('确定删除该提现项么？')"
                style="margin-left: 4px; color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
                >删除</a
              >
            </template>
          </el-table-column>
        </el-table>
        <div class="flex justify-between withdrawItemsBottom align-center">
          <div @click="open('确定删除选中提现项么？')" class="isbutton bt0">
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
      </el-tab-pane>
    </el-tabs>
    <el-dialog
      title="新增金币提现项"
      :visible.sync="dialogVisible"
      width="450px"
    >
      <el-form
        :model="form"
        :rules="rules"
        ref="ruleForm"
        label-width="132px"
        class="demo-ruleForm"
      >
        <el-form-item label="标题" prop="requireds">
          <el-input style="width: 240px" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="兑换现金数，单位分" prop="requireds">
          <el-input style="width: 240px" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="排序">
          <el-input style="width: 240px" v-model="form.name"></el-input>
        </el-form-item>
        <el-from-item>
          <div class="flex justify-center">
            <div class="isbutton bt0">取消</div>
            <div style="margin: 0 0 0 12px" class="isbutton bt1">确定</div>
          </div>
        </el-from-item>
      </el-form>
    </el-dialog>
    <el-dialog
      title="编辑金币提现项"
      :visible.sync="dialogVisible2"
      width="450px"
    >
      <el-form
        :model="form"
        :rules="rules"
        ref="ruleForm"
        label-width="132px"
        class="demo-ruleForm"
      >
        <el-form-item label="标题" prop="requireds">
          <el-input style="width: 240px" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="兑换现金数，单位分" prop="requireds">
          <el-input style="width: 240px" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="排序">
          <el-input style="width: 240px" v-model="form.name"></el-input>
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
  name: "withdrawItems",
  data() {
    return {
      tableData: [
        {
          id: "1",
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
      dialogVisible: false,
      dialogVisible2: false
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
.withdrawItems {
  .el-table th {
    background-color: #f2f4f8;
  }
}
.withdrawItemsHeader {
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
.withdrawItemsBottom {
  margin: 20px 0 0;
}
.pagetitle {
  font-size: 16px;
  color: #3c3d40;
  white-space: normal;
  padding: 18px 0;
  font-weight: 400;
}
.withdrawItems {
  width: 100%;
  position: relative;
  height: auto;
  background-color: #fff;
  min-height: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px;
  .withdrawItems_header {
    border: 1px solid rgba(221, 221, 221, 1);
    width: 100%;
    position: relative;
    padding: 12px;
    border-radius: 4px;
    & > div {
      font-size: 14px;
      color: #333;
      line-height: 26px;
    }
  }
}
</style>