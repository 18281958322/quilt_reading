<template>
  <div class="materialManagement">
    <div class="flex justify-between align-center">
      <div class="pagetitle">素材管理</div>
      <div class="isbutton bt1">新增素材</div>
    </div>
    <div style="margin: 0 0 20px" class="flex align-center">
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <div style="margin: 0 0 0 10px" class="isbutton bt1">搜索</div>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="序号1" width="80"> </el-table-column>
      <el-table-column label="类型">
        <template slot-scope="scope"> </template>
      </el-table-column>
      <el-table-column label="内容">
        <template slot-scope="scope"> </template>
      </el-table-column>
      <el-table-column label="创建时间">
        <template slot-scope="scope"> </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
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
  </div>
</template>

<script>
export default {
  name: "materialManagement",
  data() {
    return {
      tableData: [
        {
          id: "1",
        },
      ],
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
    };
  },
  methods: {},
};
</script>

<style lang="scss">
.materialManagement {
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
.materialManagement {
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