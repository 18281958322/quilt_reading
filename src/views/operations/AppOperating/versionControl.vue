<template>
  <div class="versionControl">
    <div class="flex justify-between align-center">
      <div class="flex align-center">
        <div class="pagetitle">版本控制</div>
        <el-tooltip
          class="item"
          effect="dark"
          content="提示文本"
          placement="right"
        >
          <i
            style="color: #d0d0d0; margin-left: 12px; font-size: 18px"
            class="el-icon-question"
          ></i>
        </el-tooltip>
      </div>
      <div @click="openPage(activeName === 'first' ? '/addversionControl_IOS' : 'addversionControl_Android')" class="isbutton bt1">新增版本</div>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="IOS" name="first">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column prop="id" label="版本号"> </el-table-column>
          <el-table-column label="终端"></el-table-column>
          <el-table-column label="更新文案"></el-table-column>
          <el-table-column label="上架时间"></el-table-column>
          <el-table-column label="是否强制更新">
            <template slot-scope="scope">
              <div class="switchBox flex">
                <div @click="sb_active = true" :class="['sb_item', sb_active ? 'active': '']">是</div>
                <div @click="sb_active = false" :class="['sb_item', !sb_active ? 'active': '']">否</div>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="是否发布">
            <template slot-scope="scope">
              <div class="switchBox flex">
                <div @click="sb_active = true" :class="['sb_item', sb_active ? 'active': '']">是</div>
                <div @click="sb_active = false" :class="['sb_item', !sb_active ? 'active': '']">否</div>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <a
                @click="dialogVisible = true"
                style="margin-left: 4px; color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
                >详情</a
              >
              <a
                @click="openPage('/setversionControl_IOS')"
                style="color: #00a5ff; font-size: 12px; margin-left: 4px"
                href="javascript:void(0)"
                >编辑</a
              >
              <a
                @click="open('确定删除该版本么？')"
                style="margin-left: 4px; color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
                >删除</a
              >
            </template>
          </el-table-column>
        </el-table>
        <div class="flex justify-between GO_rankingListBottom align-center">
          <div @click="open('确定删除选中版本么？')" class="isbutton bt0">
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
      <el-tab-pane label="Android" name="second">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column prop="id" label="版本号"> </el-table-column>
          <el-table-column label="终端"></el-table-column>
          <el-table-column label="更新文案"></el-table-column>
          <el-table-column label="上架时间"></el-table-column>
          <el-table-column label="是否强制更新">
            <template slot-scope="scope">
              <div class="switchBox flex">
                <div @click="sb_active = true" :class="['sb_item', sb_active ? 'active': '']">是</div>
                <div @click="sb_active = false" :class="['sb_item', !sb_active ? 'active': '']">否</div>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="是否发布">
            <template slot-scope="scope">
              <div class="switchBox flex">
                <div @click="sb_active = true" :class="['sb_item', sb_active ? 'active': '']">是</div>
                <div @click="sb_active = false" :class="['sb_item', !sb_active ? 'active': '']">否</div>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <a
                @click="dialogVisible = true"
                style="margin-left: 4px; color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
                >详情</a
              >
              <a
                @click="openPage('/setversionControl_Android')"
                style="color: #00a5ff; font-size: 12px; margin-left: 4px"
                href="javascript:void(0)"
                >编辑</a
              >
              <a
                @click="open('确定删除该版本么？')"
                style="margin-left: 4px; color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
                >删除</a
              >
            </template>
          </el-table-column>
        </el-table>
        <div class="flex justify-between GO_rankingListBottom align-center">
          <div @click="open('确定删除选中版本么？')" class="isbutton bt0">
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
    <el-dialog title="渠道过审列表" :visible.sync="dialogVisible" width="600px">
      <el-table :data="dialogTable" border style="width: 100%">
          <el-table-column prop="id" label="渠道名称"></el-table-column>
          <el-table-column label="审核开关">
            <template slot-scope="scope">
              <div class="switchBox flex">
                <div @click="sb_active = true" :class="['sb_item', sb_active ? 'active': '']">开</div>
                <div @click="sb_active = false" :class="['sb_item', !sb_active ? 'active': '']">关</div>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="渠道下载地址"></el-table-column>
        </el-table>
        <div style="margin: 20px 0 0" class="flex justify-end">
          <div class="isbutton bt0">关闭</div>
        </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "versionControl",
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
      activeName: 'first',
      sb_active: true,
      dialogTable: [
        { id: '苹果' }
      ],
      dialogVisible: false,
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
.versionControl {
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
.versionControl {
  width: 100%;
  position: relative;
  height: auto;
  background-color: #fff;
  min-height: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px;
  .switchBox {
    height: 34px;
    .sb_item {
      width: 34px;
      height: 32px;
      text-align: center;
      line-height: 32px;
      font-family: 'Arial Normal', 'Arial', sans-serif;
      font-weight: 400;
      font-style: normal;
      font-size: 13px;
      letter-spacing: normal;
      cursor: pointer;
    }
    .sb_item.active {
      opacity: 1;
    }
    .sb_item:not(.active) {
      opacity: 0.2;
    }
    .sb_item:nth-last-child(1) {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      color: #fff;
      background-color: #00a5ff;
    }
    .sb_item:nth-child(1) {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      color: #333333;
      background-color: #f4f4f5;
    }
  }
}
</style>