<template>
  <div class="FeaturedFirst">
    <div class="pagetitle">推荐位</div>
    <div class="FeaturedFirstStyle">
      <div class="title">推荐位样式:</div>
      <div class="ffs_li flex" v-for="val in 3" :key="val">
        <em>小说：</em>
        <span v-for="item in 5" :key="item">【列表样式】</span>
      </div>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="首页" name="first">
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
            <el-input
              style="width: 150px; margin: 0 0 0 10px"
              clearable=""
              v-model="val"
            ></el-input>
            <div style="margin: 0 0 0 10px" class="isbutton bt1">搜索</div>
          </div>
          <div @click="openPage('/addFeaturedFirst')" class="isbutton bt1">
            新增推荐位
          </div>
        </div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column label="序号"> </el-table-column>
          <el-table-column prop="id" label="频道"></el-table-column>
          <el-table-column label="频道内容"></el-table-column>
          <el-table-column label="推荐位名称"></el-table-column>
          <el-table-column label="推荐位样式"></el-table-column>
          <el-table-column label="展示顺序"> </el-table-column>
          <el-table-column label="状态"> </el-table-column>
          <el-table-column label="作品数量"> </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <a
                style="margin-left: 4px; color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
                >排序</a
              >
              <a
                @click="openPage('/RecommendedWork')"
                style="margin-left: 4px; color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
                >推荐作品</a
              >
              <a
                @click="openPage('/setFeaturedFirst')"
                style="color: #00a5ff; font-size: 12px; margin-left: 4px"
                href="javascript:void(0)"
                >编辑</a
              >
              <a
                @click="open('确定删除该书籍么？')"
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
          <div @click="open('确定删除选中书籍么？')" class="isbutton bt0">
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
      <el-tab-pane label="发现页" name="second">
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
            <el-input
              style="width: 150px; margin: 0 0 0 10px"
              clearable=""
              v-model="val"
            ></el-input>
            <div style="margin: 0 0 0 10px" class="isbutton bt1">搜索</div>
          </div>
          <div @click="openPage('/addFeaturedFirst_fx')" class="isbutton bt1">
            新增推荐位
          </div>
        </div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column label="序号"> </el-table-column>
          <el-table-column prop="id" label="内容类型"></el-table-column>
          <el-table-column label="推荐位名称"></el-table-column>
          <el-table-column label="推荐位样式"></el-table-column>
          <el-table-column label="展示顺序"></el-table-column>
          <el-table-column label="状态"></el-table-column>
          <el-table-column label="作品数量"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <a
                style="margin-left: 4px; color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
                >排序</a
              >
              <a
                @click="openPage('/RecommendedWork_fx')"
                style="margin-left: 4px; color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
                >推荐作品</a
              >
              <a
                @click="openPage('/setFeaturedFirst_fx')"
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
          <div @click="open('确定删除选中推荐位子么？')" class="isbutton bt0">
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
      <el-tab-pane label="会员中心" name="third">
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
            <el-input
              style="width: 150px; margin: 0 0 0 10px"
              clearable=""
              v-model="val"
            ></el-input>
            <div style="margin: 0 0 0 10px" class="isbutton bt1">搜索</div>
          </div>
          <div @click="openPage('/addFeaturedFirst_fx')" class="isbutton bt1">
            新增推荐位
          </div>
        </div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column label="序号"> </el-table-column>
          <el-table-column prop="id" label="内容类型"></el-table-column>
          <el-table-column label="推荐位名称"></el-table-column>
          <el-table-column label="推荐位样式"></el-table-column>
          <el-table-column label="展示顺序"></el-table-column>
          <el-table-column label="状态"></el-table-column>
          <el-table-column label="作品数量"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <a
                style="margin-left: 4px; color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
                >排序</a
              >
              <a
                @click="openPage('/RecommendedWork_fx')"
                style="margin-left: 4px; color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
                >推荐作品</a
              >
              <a
                @click="openPage('/setFeaturedFirst_fx')"
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
          <div @click="open('确定删除选中推荐位子么？')" class="isbutton bt0">
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
  </div>
</template>

<script>
export default {
  name: "FeaturedFirst",
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
.FeaturedFirst {
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
.FeaturedFirst {
  width: 100%;
  position: relative;
  height: auto;
  background-color: #fff;
  min-height: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px;
  .FeaturedFirstStyle {
    padding: 10px;
    border: 1px solid rgba(198, 198, 198, 1);
    border-radius: 6px;
    background-color: rgba(255, 255, 255, 1);
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    .title {
      color: #333;
      font-size: 14px;
      font-family: "Arial Normal", "Arial", sans-serif;
      font-weight: 400;
      font-style: normal;
    }
    .ffs_li {
      margin: 6px 0 0;
      em {
        color: #333;
        font-size: 14px;
        font-family: "Arial Normal", "Arial", sans-serif;
        font-weight: 400;
        font-style: normal;
      }
      span {
        font-size: 14px;
        font-family: "Arial Normal", "Arial", sans-serif;
        font-weight: 400;
        font-style: normal;
        color: #00a5ff;
        margin-left: 10px;
      }
    }
  }
}
</style>