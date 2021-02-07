<template>
  <div class="highlyRecommended">
    <div class="pagetitle">重点推荐作品</div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="书架页上方" name="first">
        <div
          style="margin: 0 0 20px"
          class="flex align-center GO_rankingListHeader justify-between"
        >
          <div class="zdyTabs flex">
            <div @click="zdyTabsAt = 0" :class="['zdyTabs_item', zdyTabsAt === 0 ? 'active' : '']">小说</div>
            <div @click="zdyTabsAt = 1" :class="['zdyTabs_item', zdyTabsAt === 1 ? 'active' : '']">漫画</div>
            <div @click="zdyTabsAt = 2" :class="['zdyTabs_item', zdyTabsAt === 2 ? 'active' : '']">听书</div>
          </div>
          <div @click="dialogVisible = true" class="isbutton bt1">
            新增作品
          </div>
        </div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column prop="id" label="序号"> </el-table-column>
          <el-table-column label="封面"></el-table-column>
          <el-table-column label="作品"></el-table-column>
          <el-table-column label="展示顺序"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <a
                style="margin-left: 4px; color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
                >排序</a
              >
              <a
                @click="open('确定删除该作品么？')"
                style="margin-left: 4px; color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
                >删除</a
              >
            </template>
          </el-table-column>
        </el-table>
        <div class="flex justify-between GO_rankingListBottom align-center">
          <div @click="open('确定删除选中作品么？')" class="isbutton bt0">
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
      <el-tab-pane label="书架默认" name="second">
        <div
          style="margin: 0 0 20px"
          class="flex align-center GO_rankingListHeader justify-between"
        >
          <div class="zdyTabs flex">
            <div class="zdyTabs_item active">小说</div>
            <div class="zdyTabs_item">漫画</div>
            <div class="zdyTabs_item">听书</div>
          </div>
          <div @click="dialogVisible = true" class="isbutton bt1">
            新增作品
          </div>
        </div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column prop="id" label="序号"> </el-table-column>
          <el-table-column label="封面"></el-table-column>
          <el-table-column label="作品"></el-table-column>
          <el-table-column label="展示顺序"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <a
                style="margin-left: 4px; color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
                >排序</a
              >
              <a
                @click="open('确定删除该作品么？')"
                style="margin-left: 4px; color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
                >删除</a
              >
            </template>
          </el-table-column>
        </el-table>
        <div class="flex justify-between GO_rankingListBottom align-center">
          <div @click="open('确定删除选中作品么？')" class="isbutton bt0">
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
      <el-tab-pane label="搜索页" name="third">
        <div
          style="margin: 0 0 20px"
          class="flex align-center GO_rankingListHeader justify-between"
        >
          <div class="zdyTabs flex">
            <div class="zdyTabs_item active">小说</div>
            <div class="zdyTabs_item">漫画</div>
            <div class="zdyTabs_item">听书</div>
          </div>
          <div @click="dialogVisible = true" class="isbutton bt1">
            新增作品
          </div>
        </div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column prop="id" label="序号"> </el-table-column>
          <el-table-column label="封面"></el-table-column>
          <el-table-column label="作品"></el-table-column>
          <el-table-column label="展示顺序"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <a
                style="margin-left: 4px; color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
                >排序</a
              >
              <a
                @click="open('确定删除该作品么？')"
                style="margin-left: 4px; color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
                >删除</a
              >
            </template>
          </el-table-column>
        </el-table>
        <div class="flex justify-between GO_rankingListBottom align-center">
          <div @click="open('确定删除选中作品么？')" class="isbutton bt0">
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
      <el-tab-pane label="APP首次启动" name="fourthly">
        <div
          style="margin: 0 0 20px"
          class="flex align-center GO_rankingListHeader justify-between"
        >
          <div class="zdyTabs flex">
            <div class="zdyTabs_item active">小说</div>
            <div class="zdyTabs_item">漫画</div>
            <div class="zdyTabs_item">听书</div>
          </div>
          <div @click="dialogVisible = true" class="isbutton bt1">
            新增作品
          </div>
        </div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column prop="id" label="序号"> </el-table-column>
          <el-table-column label="封面"></el-table-column>
          <el-table-column label="作品"></el-table-column>
          <el-table-column label="展示顺序"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <a
                style="margin-left: 4px; color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
                >排序</a
              >
              <a
                @click="open('确定删除该作品么？')"
                style="margin-left: 4px; color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
                >删除</a
              >
            </template>
          </el-table-column>
        </el-table>
        <div class="flex justify-between GO_rankingListBottom align-center">
          <div @click="open('确定删除选中作品么？')" class="isbutton bt0">
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
      <el-tab-pane label="分享推荐位" name="fifth">
        <div
          style="margin: 0 0 20px"
          class="flex align-center GO_rankingListHeader justify-between"
        >
          <div class="zdyTabs flex">
            <div class="zdyTabs_item active">小说</div>
            <div class="zdyTabs_item">漫画</div>
            <div class="zdyTabs_item">听书</div>
          </div>
          <div @click="dialogVisible = true" class="isbutton bt1">
            新增作品
          </div>
        </div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column prop="id" label="序号"> </el-table-column>
          <el-table-column label="封面"></el-table-column>
          <el-table-column label="作品"></el-table-column>
          <el-table-column label="展示顺序"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <a
                style="margin-left: 4px; color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
                >排序</a
              >
              <a
                @click="open('确定删除该作品么？')"
                style="margin-left: 4px; color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
                >删除</a
              >
            </template>
          </el-table-column>
        </el-table>
        <div class="flex justify-between GO_rankingListBottom align-center">
          <div @click="open('确定删除选中作品么？')" class="isbutton bt0">
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
    <el-dialog title="新增作品" :visible.sync="dialogVisible" width="450px">
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
            placeholder="请选择作品名 "
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
  name: "highlyRecommended",
  data() {
    return {
      tableData: [
        {
          id: "小说",
        },
        {
          id: "漫画",
        },
        {
          id: "听书",
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
      zdyTabsAt: 0,
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
.highlyRecommended {
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
.highlyRecommended {
  width: 100%;
  position: relative;
  height: auto;
  background-color: #fff;
  min-height: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px;
  .zdyTabs {
    background-color: rgba(255, 255, 255, 1);
    border-radius: 6px;
    height: 32px;
    .zdyTabs_item {
      font-family: "Arial Normal", "Arial", sans-serif;
      font-weight: 400;
      font-style: normal;
      font-size: 13px;
      width: 64px;
      height: 100%;
      line-height: 34px;
      text-align: center;
      cursor: pointer;
    }
    .zdyTabs_item:nth-child(1) {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    .zdyTabs_item:nth-last-child(1) {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
    .zdyTabs_item:not(.active) {
      color: #333333;
      border: 1px solid rgba(221, 221, 221, 1);
    }
    .zdyTabs_item.active {
      color: #fff;
      background-color: #00a5ff;
      border: 1px solid #00a5ff;
    }
  }
}
</style>