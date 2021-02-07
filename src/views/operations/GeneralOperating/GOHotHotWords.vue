<template>
  <div class="GOHotHotWords">
    <div class="pagetitle">热搜热词</div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="小说" name="first">
        <div
          style="margin: 0 0 20px"
          class="flex align-center GOHotHotWordsHeader justify-between"
        >
          <div class="flex">
            <el-input placeholder="标题" v-model="input" clearable> </el-input>
            <div style="margin: 0 0 0 10px" class="isbutton bt1">搜索</div>
          </div>
          <div class="isbutton bt1">新增热词</div>
        </div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column prop="id" label="序号" width="80"> </el-table-column>
          <el-table-column label="热词">
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
                style="color: #00a5ff; font-size: 12px; margin-left: 4px"
                href="javascript:void(0)"
                >编辑</a
              >
              <a
                style="margin-left: 4px; color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
                >删除</a
              >
            </template>
          </el-table-column>
        </el-table>
        <div class="flex justify-between GOHotHotWordsBottom align-center">
          <div class="isbutton bt0">批量删除</div>
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
      <el-tab-pane label="漫画" name="second">
        <div
          style="margin: 0 0 20px"
          class="flex align-center GOHotHotWordsHeader justify-between"
        >
          <div class="flex">
            <el-input placeholder="标题" v-model="input" clearable> </el-input>
            <div style="margin: 0 0 0 10px" class="isbutton bt1">搜索</div>
          </div>
          <div class="isbutton bt1">新增热词</div>
        </div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column prop="id" label="序号" width="80"> </el-table-column>
          <el-table-column label="热词">
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
                style="color: #00a5ff; font-size: 12px; margin-left: 4px"
                href="javascript:void(0)"
                >编辑</a
              >
              <a
                style="margin-left: 4px; color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
                >删除</a
              >
            </template>
          </el-table-column>
        </el-table>
        <div class="flex justify-between GOHotHotWordsBottom align-center">
          <div class="isbutton bt0">批量删除</div>
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
      <el-tab-pane label="听书" name="third">
        <div
          style="margin: 0 0 20px"
          class="flex align-center GOHotHotWordsHeader justify-between"
        >
          <div class="flex">
            <el-input placeholder="标题" v-model="input" clearable> </el-input>
            <div style="margin: 0 0 0 10px" class="isbutton bt1">搜索</div>
          </div>
          <div class="isbutton bt1">新增热词</div>
        </div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column prop="id" label="序号" width="80"> </el-table-column>
          <el-table-column label="热词">
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
                style="color: #00a5ff; font-size: 12px; margin-left: 4px"
                href="javascript:void(0)"
                >编辑</a
              >
              <a
                style="margin-left: 4px; color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
                >删除</a
              >
            </template>
          </el-table-column>
        </el-table>
        <div class="flex justify-between GOHotHotWordsBottom align-center">
          <div class="isbutton bt0">批量删除</div>
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
  </div>
</template>

<script>
export default {
  name: "GOHotHotWords",
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
  },
};
</script>

<style lang="scss">
.GOHotHotWords {
  .el-table th {
    background-color: #f2f4f8;
  }
}
.GOHotHotWordsHeader {
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
.GOHotHotWordsBottom {
  margin: 20px 0 0;
}
.pagetitle {
  font-size: 16px;
  color: #3c3d40;
  white-space: normal;
  padding: 18px 0;
  font-weight: 400;
}
.GOHotHotWords {
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