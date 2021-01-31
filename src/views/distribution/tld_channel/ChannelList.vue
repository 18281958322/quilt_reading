<template>
  <div class="ChannelList">
    <div class="flex justify-between align-center">
      <div class="pagetitle">渠道列表</div>
      <div class="flex align-center">
        <div class="isbutton bt5">查看总站推广域名</div>
        <div style="margin: 0 0 0 10px" class="isbutton bt1">新增渠道</div>
      </div>
    </div>
    <div style="margin: 0 0 20px" class="flex align-center">
      <el-input placeholder="推广名称" v-model="input" clearable>
      </el-input>
      <div style="margin: 0 0 0 10px" class="isbutton bt1">搜索</div>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="渠道ID" width="80"> </el-table-column>
      <el-table-column label="渠道名称">
        <template slot-scope="scope">
        </template>
      </el-table-column>
      <el-table-column label="账号（登录用）">
        <template slot-scope="scope">
        </template>
      </el-table-column>
      <el-table-column label="创建时间">
        <template slot-scope="scope">
        </template>
      </el-table-column>
      <el-table-column label="佣金比例">
        <template slot-scope="scope">
        </template>
      </el-table-column>
      <el-table-column label="今日货币充值">
        <template slot-scope="scope">
        </template>
      </el-table-column>
      <el-table-column label="总货币充值">
        <template slot-scope="scope">
        </template>
      </el-table-column>
      <el-table-column label="今日开通会员">
        <template slot-scope="scope">
        </template>
      </el-table-column>
      <el-table-column label="总开通会员">
        <template slot-scope="scope">
        </template>
      </el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope">
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <a style="color:#00A5FF;font-size:12px" href="javascript:void(0)">数据统计</a>
          <a style="color:#00A5FF;font-size:12px;margin-left: 4px;" href="javascript:void(0)">编辑</a>
          <a style="margin-left: 4px;color:#00A5FF;font-size:12px" href="javascript:void(0)">删除</a>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "ChannelList",
  data() {
    return {
      tableData: [
        {
          id: "12346",
        },
      ],
      input: ''
    };
  },
  methods: {
  },
};
</script>

<style lang="scss">
.ChannelList {
  .el-table th {
    background-color: #f2f4f8;
  }
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
.ChannelList {
  width: 100%;
  position: relative;
  height: auto;
  background-color: #fff;
  min-height: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px;
  .hintBox {
    margin: 0 0 20px;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid rgba(215, 215, 215, 1);
    padding: 10px 15px;
    height: auto;
    overflow: hidden;
    .text {
      text-align: left;
      color: #999999;
      font-size: 12px;
      line-height: 20px;
    }
  }
}
</style>