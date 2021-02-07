<template>
  <div class="RecommendedWork_fx">
    <div class="pagetitle">推荐位：热门推荐</div>
    <div
      style="margin: 0 0 20px"
      class="flex align-center GO_rankingListHeader justify-between"
    >
      <div class="flex">
        <el-input clearable v-model="val"></el-input>
        <div style="margin: 0 0 0 10px" class="isbutton bt1">搜索</div>
      </div>
      <div @click="dialogVisible = true" class="isbutton bt1">新增书籍</div>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column prop="id" label="序号"> </el-table-column>
      <el-table-column label="封面"></el-table-column>
      <el-table-column label="作品名"></el-table-column>
      <el-table-column label="排序"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <a
            style="margin-left: 4px; color: #00a5ff; font-size: 12px"
            href="javascript:void(0)"
            >排序</a
          >
          <a
            @click="open('确定删除该书籍么？')"
            style="margin-left: 4px; color: #00a5ff; font-size: 12px"
            href="javascript:void(0)"
            >删除</a
          >
        </template>
      </el-table-column>
    </el-table>
    <div class="flex justify-between GO_rankingListBottom align-center">
      <div @click="open('确定删除选中书籍 么？')" class="isbutton bt0">
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
    <el-dialog title="新增书籍" :visible.sync="dialogVisible" width="450px">
      <el-form
        :model="form"
        :rules="rules"
        ref="ruleForm"
        label-width="70px"
        class="demo-ruleForm"
      >
        <el-form-item label="书籍名称" prop="requireds">
          <el-select
            style="width: 300px"
            v-model="form.region"
            placeholder="请选择书籍"
          >
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="排序" prop="requireds">
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
  name: "RecommendedWork_fx",
  data() {
    return {
      tableData: [
        {
          id: "1",
        },
        {
          id: "2",
        },
      ],
      val: "",
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
.RecommendedWork_fx {
  .el-input {
    width: 160px;
  }
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
.RecommendedWork_fx {
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