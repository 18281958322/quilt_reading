<template>
  <div class="OAOD_productions">
    <div class="pagetitle">分销作品列表</div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="小说" name="first">
        <div class="flex align-center">
          <el-input placeholder="书名/作者" v-model="input" clearable>
          </el-input>
          <div style="margin: 0 0 0 10px" class="isbutton bt1">搜索</div>
        </div>
        <ul class="channelList">
          <li class="flex align-center">
            <div class="title">频道：</div>
            <div class="cl_item active">全部</div>
            <div class="cl_item">男频</div>
            <div class="cl_item">女频</div>
          </li>
          <li class="flex align-center">
            <div class="title">类型：</div>
            <div class="cl_item active">全部</div>
            <div class="cl_item">奇幻玄幻</div>
            <div class="cl_item">网游竞技</div>
            <div class="cl_item">军事历史</div>
          </li>
          <li class="flex align-center">
            <div class="title">状态：</div>
            <div class="cl_item active">全部</div>
            <div class="cl_item">连载中</div>
            <div class="cl_item">已完结</div>
          </li>
          <li class="flex align-center">
            <div class="title">属性：</div>
            <div class="cl_item active">全部</div>
            <div class="cl_item">新书</div>
            <div class="cl_item">爽文</div>
            <div class="cl_item">精选</div>
            <div class="cl_item">大神</div>
          </li>
          <li class="flex align-center">
            <div class="title">字数：</div>
            <div class="cl_item active">全部</div>
            <div class="cl_item">30万字以下</div>
            <div class="cl_item">30万-50万</div>
            <div class="cl_item">50万-100万</div>
            <div class="cl_item">100万-200万</div>
            <div class="cl_item">200万以上</div>
          </li>
          <li class="flex align-center">
            <div class="title">排序：</div>
            <div class="cl_item active">全部</div>
            <div class="cl_item">更新时间</div>
            <div class="cl_item">浏览量</div>
            <div class="cl_item">推荐指数</div>
          </li>
        </ul>
        <div class="customTable">
          <div class="ct_th flex">
            <div class="flex2">封面</div>
            <div class="flex4">名称</div>
            <div class="flex1">频道</div>
            <div class="flex2">派单指数</div>
            <div class="flex2">推广指数</div>
            <div class="flex1">操作</div>
          </div>
          <div class="ct_tr flex">
            <div class="flex2 td"></div>
            <div class="flex4 td name">
              <div>
                <a href="javascript:void(0)">[仙侠武侠]</a>
                <a href="javascript:void(0)">魔尊十要</a>
                <span>[已完结]</span>
              </div>
              <div>
                <span>作者：</span>
                <span>老鹰</span>
              </div>
              <div>
                <span>最新章节：</span>
                <span>第665章 你想当逃兵么？</span>
              </div>
              <div>
                <span>更新时间：</span>
                <span>2020-12-01 18:11</span>
              </div>
            </div>
            <div class="flex1 td" style="text-align: center">男频</div>
            <div class="flex2 td" style="text-align: center">100</div>
            <div class="flex2 td" style="text-align: center">100</div>
            <div class="flex1 td" style="text-align: center">
              <a @click="openSpread" href="javascript:void(0)">推广</a>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="漫画" name="second">配置管理</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "OAOD_productions",
  data() {
    return {
      input: "",
      activeName: "first",
    };
  },
  methods: {
    handleClick: function (val) {},
    openSpread() {
      this.$router.push('/OA_workSpread')
    }
  },
};
</script>

<style lang="scss">
.OAOD_productions {
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
.pagetitle {
  font-size: 16px;
  color: #3c3d40;
  white-space: normal;
  padding: 18px 0;
  font-weight: 400;
}
.customTable {
  width: 100%;
  border: 1px solid #f2f2f2;
  .ct_th {
    width: 100%;
    background-color: #fafbfc;
    -webkit-box-align: stretch;
    -moz-align-items: stretch;
    -ms-align-items: stretch;
    -o-align-items: stretch;
    -webkit-align-items: stretch;
    align-items: stretch;
  }
  .ct_tr {
    border-top: 1px solid #f2f2f2;
    width: 100%;
    background-color: #fff;
    overflow: hidden;
    -webkit-box-align: stretch;
    -moz-align-items: stretch;
    -ms-align-items: stretch;
    -o-align-items: stretch;
    -webkit-align-items: stretch;
    align-items: stretch;
    .name > div {
      margin: 2px 0 0;
    }
    .td {
      padding: 10px;
      height: 100%;
      height: inherit;
    }
    a {
      color: #00a5ff;
      text-decoration: none;
    }
    span {
      color: #666666;
    }
  }
  .ct_th > div {
    text-align: center;
    height: 34px;
    line-height: 34px;
    padding: 0 10px;
  }
  .ct_tr > div,
  .ct_th > div {
    font-family: "Arial Normal", "Arial", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 13px;
    color: #333333;
    box-sizing: border-box;
  }
  .ct_tr > div:nth-child(n + 2),
  .ct_th > div:nth-child(n + 2) {
    border-left: 1px solid #f2f2f2;
  }
}
.OAOD_productions {
  width: 100%;
  position: relative;
  height: auto;
  background-color: #fff;
  min-height: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px;
  .channelList {
    margin: 15px 0;
    li:nth-child(n + 2) {
      margin: 12px 0 0;
    }
    .cl_item {
      padding: 5px 10px;
      border-radius: 6px;
      font-size: 13px;
      cursor: pointer;
    }
    .cl_item:not(.active) {
      color: #666666;
    }
    .title {
      font-size: 13px;
      color: #666666;
    }
    .cl_item.active {
      background-color: rgba(0, 165, 255, 1);
      color: white;
    }
  }
}
</style>