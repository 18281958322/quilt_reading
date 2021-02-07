<template>
  <div class="ImgTextNavigation">
    <div class="flex align-center">
      <div class="pagetitle">图文导航</div>
      <el-tooltip
        class="item"
        effect="dark"
        content="首页同一频道，最多显示5个图文导航，按照展示顺序显示。在“自定义子页面”中，可创建自定义图文导航子页面"
        placement="right"
      >
        <i
          style="color: #d0d0d0; margin-left: 12px; font-size: 18px"
          class="el-icon-question"
        ></i>
      </el-tooltip>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="图文导航" name="first">
        <div
          style="margin: 0 0 20px"
          class="flex align-center GO_rankingListHeader justify-between"
        >
          <div class="flex">
            <el-select
              style="width: 150px"
              v-model="value"
              placeholder="请选择"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <el-select
              style="width: 150px; margin-left: 10px"
              v-model="value"
              placeholder="请选择"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <div style="margin: 0 0 0 10px" class="isbutton bt1">搜索</div>
          </div>
          <div @click="openPage('/addImgTextNavigation')" class="isbutton bt1">
            新增图文导航
          </div>
        </div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column label="序号"> </el-table-column>
          <el-table-column prop="id" label="首页频道"></el-table-column>
          <el-table-column label="导航名称"></el-table-column>
          <el-table-column label="icon图"></el-table-column>
          <el-table-column label="跳转子页面"></el-table-column>
          <el-table-column label="展示顺序">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="状态">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <a
                style="margin-left: 4px; color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
                >排序</a
              >
              <a
                @click="openPage('/setImgTextNavigation')"
                style="color: #00a5ff; font-size: 12px; margin-left: 4px"
                href="javascript:void(0)"
                >编辑</a
              >
              <a
                @click="open('确定删除该榜单么？')"
                style="margin-left: 4px; color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
                >删除</a
              >
              <a
                style="margin-left: 4px; color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
                >下线</a
              >
            </template>
          </el-table-column>
        </el-table>
        <div class="flex justify-between GO_rankingListBottom align-center">
          <div @click="open('确定删除选中榜单么？')" class="isbutton bt0">
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
      <el-tab-pane label="自定义子页面" name="second">
        <div
          style="margin: 0 0 20px"
          class="flex align-center GO_rankingListHeader justify-between"
        >
          <div class="flex">
            <el-input style="width:150px" clearable v-model="val"></el-input>
            <div style="margin: 0 0 0 10px" class="isbutton bt1">搜索</div>
          </div>
          <div @click="addChildrenPage = true" class="isbutton bt1">
            新增子页面
          </div>
        </div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column label="序号"> </el-table-column>
          <el-table-column prop="id" label="首页频道"></el-table-column>
          <el-table-column label="子页面名称"></el-table-column>
          <el-table-column label="内容类型"></el-table-column>
          <el-table-column label="创建时间"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <a
                @click="openPage('/itn_manageBooks')"
                style="margin-left: 4px; color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
                >管理书籍</a
              >
              <a
                @click="setChildrenPage = true"
                style="color: #00a5ff; font-size: 12px; margin-left: 4px"
                href="javascript:void(0)"
                >编辑</a
              >
              <a
                @click="open('确定删除该榜单么？')"
                style="margin-left: 4px; color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
                >删除</a
              >
            </template>
          </el-table-column>
        </el-table>
        <div class="flex justify-between GO_rankingListBottom align-center">
          <div @click="open('确定删除选中榜单么？')" class="isbutton bt0">
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
    <el-dialog title="新增子页面" :visible.sync="addChildrenPage" width="450px">
      <el-form
        :model="form"
        :rules="rules"
        ref="ruleForm"
        label-width="84px"
        class="demo-ruleForm"
      >
        <el-form-item label="子页面名称" prop="requireds">
          <el-input style="width: 300px" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="内容类型 " prop="requireds">
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
    <el-dialog title="编辑子页面" :visible.sync="setChildrenPage" width="450px">
      <el-form
        :model="form"
        :rules="rules"
        ref="ruleForm"
        label-width="84px"
        class="demo-ruleForm"
      >
        <el-form-item label="子页面名称" prop="requireds">
          <el-input style="width: 300px" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="内容类型 " prop="requireds">
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
  name: "ImgTextNavigation",
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
      input: "",
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
      activeName: "first",
      form: {
        region: "",
        name: "",
      },
      addChildrenPage: false,
      setChildrenPage: false,
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
.ImgTextNavigation {

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
.ImgTextNavigation {
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