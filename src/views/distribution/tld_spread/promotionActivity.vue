<template>
  <div class="promotionActivity">
    <div class="flex align-center justify-between">
      <div class="pagetitle">常用链接</div>
      <div @click="openCreateActivity" class="isbutton bt1">创建活动</div>
    </div>
    <div class="hintBox">
      <div class="text">新增活动时的充值金额只有管理员才可以设置</div>
      <div class="text">活动创建后,点击复制活动链接就可以进行推广了</div>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="活动名称" width="80"> </el-table-column>
      <el-table-column width="80" label="活动时间">
        <template slot-scope="scope">
        </template>
      </el-table-column>
      <el-table-column width="80" label="活动内容">
        <template slot-scope="scope">
        </template>
      </el-table-column>
      <el-table-column width="80" label="商品信息">
        <template slot-scope="scope">
        </template>
      </el-table-column>
      <el-table-column width="80" label="今日充值">
        <template slot-scope="scope">
        </template>
      </el-table-column>
      <el-table-column label="历史充值（不含当日）">
        <template slot-scope="scope">
        </template>
      </el-table-column>
      <el-table-column label="用户点击数（不含当日）">
        <template slot-scope="scope">
        </template>
      </el-table-column>
      <el-table-column label="活动状态">
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
  name: "promotionActivity",
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
    openCreateActivity() {
      this.$router.push("/pa_createActivity");
    },
  },
};
</script>

<style lang="scss">
.promotionActivity {
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
.promotionActivity {
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