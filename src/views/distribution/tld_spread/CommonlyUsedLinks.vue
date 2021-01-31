<template>
  <div class="CommonlyUsedLinks">
    <div class="pagetitle">常用链接</div>
    <div class="hintBox">
      <div class="text">1、常用链接是日常推广过程中频繁使用到的链接，可以点击复制</div>
      <div class="text">2、推广链接只有管理员才可以进行编辑修改</div>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="序号" width="80"> </el-table-column>
      <el-table-column label="推广名称">
        <template slot-scope="scope">
        </template>
      </el-table-column>
      <el-table-column label="页面链接">
        <template slot-scope="scope">
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <a style="color:#00A5FF;font-size:12px" href="javascript:void(0)">编辑</a>
          <a style="margin-left: 4px;color:#00A5FF;font-size:12px" href="javascript:void(0)">删除</a>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "CommonlyUsedLinks",
  data() {
    return {
      tableData: [
        {
          id: "12346",
        },
      ],
    };
  },
  methods: {
    handleClick: function (val) {},
    openSpread() {
      this.$router.push("/WorkSpread");
    },
  },
};
</script>

<style lang="scss">
.CommonlyUsedLinks {
  .el-table th {
    background-color: #f2f4f8;
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
.CommonlyUsedLinks {
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