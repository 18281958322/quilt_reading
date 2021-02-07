<template>
  <div class="OAM_GroupSentMessage">
    <div class="pagetitle">群发消息</div>
    <div class="setOAM_GroupSentMessage_header">
        <div>1. 仅 48 小时内和公众号有过交互 (点击菜单, 回复等) 的粉丝才能收到</div>
        <div>2. <a href="http://www.oicqzone.com/tool/emoji/">点击查看特殊符号；</a></div>
    </div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="文本消息" name="first">
        <div
          style="margin: 0 0 20px"
          class="flex align-center GO_rankingListHeader justify-between"
        >
          <div class="flex">
            <el-select
              style="width: 150px"
              v-model="region"
              placeholder="请选择推送状态"
            >
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
            <el-select
              style="width: 150px"
              v-model="region"
              placeholder="请选择推送类型"
            >
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
            <el-input
              style="width: 150px; margin: 0 0 0 10px"
              placeholder="标题信息"
              clearable
              v-model="value"
            ></el-input>
            <div style="margin: 0 0 0 10px" class="isbutton bt1">搜索</div>
          </div>
          <div @click="openPage('/addOAM_GroupSentMessage')" class="isbutton bt1">
            新增消息
          </div>
        </div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column prop="id" label="序号"> </el-table-column>
          <el-table-column label="消息标题"></el-table-column>
          <el-table-column label="消息内容"></el-table-column>
          <el-table-column label="推送类型"></el-table-column>
          <el-table-column label="推送时间"></el-table-column>
          <el-table-column label="推送状态"></el-table-column>
          <el-table-column label="计划推送数量"></el-table-column>
          <el-table-column label="实际推送数量"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <a
                @click="openPage('/setOAM_GroupSentMessage')"
                style="color: #00a5ff; font-size: 12px; margin-left: 4px"
                href="javascript:void(0)"
                >编辑</a
              >
              <a
                @click="open('确定删除该文本消息么？')"
                style="margin-left: 4px; color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
                >删除</a
              >
            </template>
          </el-table-column>
        </el-table>
        <div class="flex justify-between GO_rankingListBottom align-center">
          <div @click="open('确定删除选中文本消息么？')" class="isbutton bt0">
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
      <el-tab-pane label="图文消息" name="second">
        <div
          style="margin: 0 0 20px"
          class="flex align-center GO_rankingListHeader justify-between"
        >
          <div class="flex">
            <el-select
              style="width: 150px"
              v-model="region"
              placeholder="请选择推送状态"
            >
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
            <el-select
              style="width: 150px"
              v-model="region"
              placeholder="请选择推送类型"
            >
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
            <el-input
              style="width: 150px; margin: 0 0 0 10px"
              placeholder="标题信息"
              clearable
              v-model="value"
            ></el-input>
            <div style="margin: 0 0 0 10px" class="isbutton bt1">搜索</div>
          </div>
          <div @click="openPage('/addOAM_GroupSentMessage')" class="isbutton bt1">
            新增消息
          </div>
        </div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column prop="id" label="序号"> </el-table-column>
          <el-table-column label="消息标题"></el-table-column>
          <el-table-column label="消息内容"></el-table-column>
          <el-table-column label="推送类型"></el-table-column>
          <el-table-column label="推送时间"></el-table-column>
          <el-table-column label="推送状态"></el-table-column>
          <el-table-column label="计划推送数量"></el-table-column>
          <el-table-column label="实际推送数量"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <a
                @click="openPage('/setOAM_GroupSentMessage')"
                style="color: #00a5ff; font-size: 12px; margin-left: 4px"
                href="javascript:void(0)"
                >编辑</a
              >
              <a
                @click="open('确定删除该文本消息么？')"
                style="margin-left: 4px; color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
                >删除</a
              >
            </template>
          </el-table-column>
        </el-table>
        <div class="flex justify-between GO_rankingListBottom align-center">
          <div @click="open('确定删除选中文本消息么？')" class="isbutton bt0">
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
  name: "OAM_GroupSentMessage",
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
      region: "",
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
.OAM_GroupSentMessage {
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
.OAM_GroupSentMessage {
  width: 100%;
  position: relative;
  height: auto;
  background-color: #fff;
  min-height: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px;
  .setOAM_GroupSentMessage_header {
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