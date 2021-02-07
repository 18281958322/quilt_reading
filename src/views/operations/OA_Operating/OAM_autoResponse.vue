<template>
  <div class="OAM_autoResponse">
    <div class="pagetitle">自动回复</div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="关键词" name="first">
        <div
          style="margin: 0 0 20px"
          class="flex align-center GO_rankingListHeader justify-between"
        >
          <div class="flex">
            <el-select
              style="width: 150px"
              v-model="region"
              placeholder="请选择回复类型"
            >
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
            <el-input
              style="width: 150px; margin: 0 0 0 10px"
              placeholder="标题"
              clearable
              v-model="value"
            ></el-input>
            <div style="margin: 0 0 0 10px" class="isbutton bt1">搜索</div>
          </div>
          <div @click="openPage('/addOAM_autoResponse')" class="isbutton bt1">
            新增回复
          </div>
        </div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column prop="id" label="序号"> </el-table-column>
          <el-table-column label="关键词"></el-table-column>
          <el-table-column label="回复内容"></el-table-column>
          <el-table-column label="回复类型"></el-table-column>
          <el-table-column label="创建时间"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <a
                @click="openPage('/setOAM_autoResponse')"
                style="color: #00a5ff; font-size: 12px; margin-left: 4px"
                href="javascript:void(0)"
                >编辑</a
              >
              <a
                @click="open('确定删除该自动回复么？')"
                style="margin-left: 4px; color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
                >删除</a
              >
            </template>
          </el-table-column>
        </el-table>
        <div class="flex justify-between GO_rankingListBottom align-center">
          <div @click="open('确定删除选中自动回复么？')" class="isbutton bt0">
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
      <el-tab-pane label="被关注回复" name="second">
        <div class="setOAM_autoResponse_header">
          <div>
            1.
            设置推荐书籍或漫画时，输入书籍漫画名称后选中，点击标签栏“插入链接”按钮，输入链接（最好使用推广链接）保存即可；
          </div>
          <div>2. 编辑内容时，请注意格式；</div>
        </div>
        <div
          class="flex justify-between"
          style="position: relative; margin: 20px 0 0"
        >
          <div class="editBox flex1">
            <div class="toolbar">
              <i class="el-icon-picture-outline"></i>
              <i class="el-icon-picture-outline"></i>
              <i class="el-icon-picture-outline"></i>
            </div>
            <el-input
              style="width: 100%"
              placeholder="请填写回复"
              type="textarea"
              :rows="10"
              v-model="value"
            ></el-input>
          </div>
          <ul class="OAMA_right">
            <li>
              <em>替换字段，请直接点击复制按钮</em>
            </li>
            <li>
              <em>公众号名称:wx_name</em>
              <span>点击复制</span>
            </li>
            <li>
              <em>用户名称:user_name</em>
              <span>点击复制</span>
            </li>
            <li>
              <em>上次阅读历史:last_read</em>
              <span>点击复制</span>
            </li>
            <li>
              <em>签到信息:sign_info</em>
              <span>点击复制</span>
            </li>
          </ul>
        </div>
      </el-tab-pane>
      <el-tab-pane label="签到答复" name="third">
        <div class="setOAM_autoResponse_header">
          <div>
            1.
            设置推荐书籍或漫画时，输入书籍漫画名称后选中，点击标签栏“插入链接”按钮，输入链接（最好使用推广链接）保存即可；
          </div>
          <div>2. 编辑内容时，请注意格式；</div>
        </div>
        <div
          class="flex justify-between"
          style="position: relative; margin: 20px 0 0"
        >
          <div class="editBox flex1">
            <div class="toolbar">
              <i class="el-icon-picture-outline"></i>
              <i class="el-icon-picture-outline"></i>
              <i class="el-icon-picture-outline"></i>
            </div>
            <el-input
              style="width: 100%"
              placeholder="请填写回复"
              type="textarea"
              :rows="10"
              v-model="value"
            ></el-input>
          </div>
          <ul class="OAMA_right">
            <li>
              <em>替换字段，请直接点击复制按钮</em>
            </li>
            <li>
              <em>公众号名称:wx_name</em>
              <span>点击复制</span>
            </li>
            <li>
              <em>用户名称:user_name</em>
              <span>点击复制</span>
            </li>
            <li>
              <em>上次阅读历史:last_read</em>
              <span>点击复制</span>
            </li>
            <li>
              <em>签到信息:sign_info</em>
              <span>点击复制</span>
            </li>
          </ul>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "OAM_autoResponse",
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
.OAM_autoResponse {
  textarea {
    border: none;
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
.OAM_autoResponse {
  width: 100%;
  position: relative;
  height: auto;
  background-color: #fff;
  min-height: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px;
  .setOAM_autoResponse_header {
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
  .editBox {
    background-color: rgba(255, 255, 255, 1);
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(215, 215, 215, 1);
    border-radius: 6px;
    .toolbar {
      width: 100%;
      box-sizing: border-box;
      line-height: 38px;
      height: 32px;
      border-bottom: 1px solid rgba(215, 215, 215, 1);
      .el-icon-picture-outline {
        color: #b3b3b4;
        font-size: 20px;
        cursor: pointer;
        margin: 0 12px;
      }
    }
  }
  .OAMA_right {
    width: 270px;
    margin-left: 20px;
    background-color: rgba(255, 255, 255, 1);
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(215, 215, 215, 1);
    border-radius: 6px;
    padding: 15px;
    em {
      width: 156px;
      font-size: 13px;
      color: #333;
      display: inline-block;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    li:nth-child(n + 2) {
      margin: 20px 0 0;
    }
    span {
      font-size: 12px;
      color: #333;
      padding: 3px 6px;
      margin-left: 12px;
      cursor: pointer;
      border-radius: 10px;
      border: 1px solid rgba(215, 215, 215, 1);
    }
  }
}
</style>