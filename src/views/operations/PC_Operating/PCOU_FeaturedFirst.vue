<template>
  <div class="PCOU_FeaturedFirst">
    <div class="pagetitle">推荐位</div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="首页推荐位" name="first">
        <div class="PCOU_zdyTabs flex">
          <div class="zdyTabs_item active">左侧自定义样式推荐位</div>
          <div class="zdyTabs_item">右侧固定样式推荐位</div>
        </div>
        <div class="PCOU_FeaturedFirst_header">
          <div>首页推荐位左侧、右侧需要分别配置</div>
          <div>
            点击关键词，查看推荐位样式效果图。“3+6图”表示首页样式左边显示3本书，中间显示6本书；
          </div>
          <div>
            <a
              style="margin-left: 4px; color: #00a5ff; font-size: 12px"
              href="javascript:void(0)"
              >【3+6图】</a
            >
            <a
              style="margin-left: 4px; color: #00a5ff; font-size: 12px"
              href="javascript:void(0)"
              >【3+12图】</a
            >
            <a
              style="margin-left: 4px; color: #00a5ff; font-size: 12px"
              href="javascript:void(0)"
              >【1+6图】</a
            >
            <a
              style="margin-left: 4px; color: #00a5ff; font-size: 12px"
              href="javascript:void(0)"
              >【8图】</a
            >
          </div>
        </div>
        <div
          style="margin: 20px 0"
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
            <el-input
              placeholder="推荐位名称"
              style="width: 150px; margin: 0 0 0 10px"
              clearable=""
              v-model="val"
            ></el-input>
            <div style="margin: 0 0 0 10px" class="isbutton bt1">搜索</div>
          </div>
          <div
            @click="openPage('/addPCOUFeaturedFirst_sy')"
            class="isbutton bt1"
          >
            新增推荐位
          </div>
        </div>
        <el-table :data="tableData" border style="width: 100%">
          <!-- <el-table-column type="selection" width="55"> </el-table-column> -->
          <el-table-column prop="id" label="序号"> </el-table-column>
          <el-table-column label="标题"></el-table-column>
          <el-table-column label="样式"></el-table-column>
          <el-table-column label="作品数量"> </el-table-column>
          <el-table-column label="展示顺序"> </el-table-column>
          <el-table-column label="状态"> </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <a
                style="margin-left: 4px; color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
                >排序</a
              >
              <a
                @click="openPage('/PCOU_RecommendedWork')"
                style="margin-left: 4px; color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
                >推荐作品</a
              >
              <a
                @click="openPage('/setPCOUFeaturedFirst_sy')"
                style="color: #00a5ff; font-size: 12px; margin-left: 4px"
                href="javascript:void(0)"
                >编辑</a
              >
              <a
                @click="open('确定删除该推荐位么？')"
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
          <div @click="open('确定删除选中推荐位么？')" class="isbutton bt0">
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
      <el-tab-pane label="书架推荐位" name="second">
        <div class="PCOU_FeaturedFirst_header">
          <div>
            书架推荐位展示在“个人中心-我的书架”页面上方，如图<a
              style="margin-left: 4px; color: #00a5ff; font-size: 12px"
              href="javascript:void(0)"
              >【推荐位样式】</a
            >
          </div>
        </div>
        <div
          style="margin: 20px 0"
          class="flex align-center GO_rankingListHeader justify-between"
        >
          <div class="flex">
            <el-input
              style="width: 150px; margin: 0 0 0 10px"
              clearable=""
              v-model="val"
              placeholder="作品名称"
            ></el-input>
            <div style="margin: 0 0 0 10px" class="isbutton bt1">搜索</div>
          </div>
          <div @click="dialogVisible = true" class="isbutton bt1">
            新增推荐作品
          </div>
        </div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column prop="id" label="序号"> </el-table-column>
          <el-table-column label="封面"></el-table-column>
          <el-table-column label="作品名"></el-table-column>
          <el-table-column label="展示顺序"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <a
                style="margin-left: 4px; color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
                >排序</a
              >
              <a
                @click="open('确定删除该推荐作品么？')"
                style="margin-left: 4px; color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
                >删除</a
              >
            </template>
          </el-table-column>
        </el-table>
        <div class="flex justify-between GO_rankingListBottom align-center">
          <div @click="open('确定删除选中推荐作品么？')" class="isbutton bt0">
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
      <el-tab-pane label="搜索推荐位" name="second">
        <div class="PCOU_FeaturedFirst_header">
          <div>
            书架推荐位展示在“个人中心-我的书架”页面上方，如图<a
              style="margin-left: 4px; color: #00a5ff; font-size: 12px"
              href="javascript:void(0)"
              >【推荐位样式】</a
            >
          </div>
        </div>
        <div
          style="margin: 20px 0"
          class="flex align-center GO_rankingListHeader justify-between"
        >
          <div class="flex">
            <el-input
              style="width: 150px; margin: 0 0 0 10px"
              clearable=""
              v-model="val"
              placeholder="作品名称"
            ></el-input>
            <div style="margin: 0 0 0 10px" class="isbutton bt1">搜索</div>
          </div>
          <div @click="dialogVisible = true" class="isbutton bt1">
            新增推荐作品
          </div>
        </div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column prop="id" label="序号"> </el-table-column>
          <el-table-column label="封面"></el-table-column>
          <el-table-column label="作品名"></el-table-column>
          <el-table-column label="展示顺序"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <a
                style="margin-left: 4px; color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
                >排序</a
              >
              <a
                @click="open('确定删除该推荐作品么？')"
                style="margin-left: 4px; color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
                >删除</a
              >
            </template>
          </el-table-column>
        </el-table>
        <div class="flex justify-between GO_rankingListBottom align-center">
          <div @click="open('确定删除选中推荐作品么？')" class="isbutton bt0">
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
      title="新增推荐位作品"
      :visible.sync="dialogVisible"
      width="450px"
    >
      <el-form
        :model="form"
        :rules="rules"
        ref="ruleForm"
        label-width="70px"
        class="demo-ruleForm"
      >
        <el-form-item label="作品名" prop="requireds">
          <el-select
            style="width: 300px"
            v-model="form.region"
            placeholder="请选择作品名"
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
  name: "PCOU_FeaturedFirst",
  data() {
    return {
      tableData: [
        {
          id: "1",
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
      dialogVisible: false,
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
.PCOU_FeaturedFirst {
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
.PCOU_FeaturedFirst {
  width: 100%;
  position: relative;
  height: auto;
  background-color: #fff;
  min-height: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px;
  .PCOU_FeaturedFirst_header {
    border: 1px solid rgba(221, 221, 221, 1);
    position: relative;
    padding: 12px;
    border-radius: 4px;
    & > div {
      font-size: 14px;
      color: #333;
      line-height: 26px;
    }
  }
  .PCOU_zdyTabs {
    margin: 0 0 20px;
    .zdyTabs_item {
      padding: 4px 8px 6px;
      font-size: 13px;
      border-width: 1px;
      border-style: solid;
      cursor: pointer;
    }
    .zdyTabs_item.active {
      border-color: #00a5ff;
      color: #00a5ff;
    }
    .zdyTabs_item:not(.active) {
      border-color: #dedede;
      color: #dedede;
    }
    .zdyTabs_item:nth-child(1) {
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
    }
    .zdyTabs_item:nth-last-child(1) {
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
    }
  }
}
</style>