<template>
  <div class="OAM_customizeMenus">
    <div class="pagetitle">自定义菜单</div>
    <div class="flex justify-between" style="margin: 10px 0">
      <div class="oamcm_left">
        <img
          src="https://axure-file.lanhuapp.com/04d970a8-e878-4388-a910-ec882398d440__4bed9f6a158f3a7677e5e0fc8904652b.png"
          alt=""
        />
      </div>
      <div class="oamcm_right flex1">
        <el-tabs v-model="activeName">
          <el-tab-pane label="当前菜单" name="first">
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column
                prop="date"
                label="菜单名称"
                width="180"
              ></el-table-column>
              <el-table-column prop="name" label="菜单层级" width="180">
              </el-table-column>
              <el-table-column prop="address" label="菜单内容">
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <a
                    style="color: #00a5ff; font-size: 12px; margin-left: 4px"
                    href="javascript:void(0)"
                    >编辑</a
                  >
                  <a
                    @click="open('确定删除该一级菜单么？')"
                    style="margin-left: 4px; color: #00a5ff; font-size: 12px"
                    href="javascript:void(0)"
                    >删除</a
                  >
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="菜单列表" name="second">
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column
                prop="date"
                label="菜单名称"
                width="180"
              ></el-table-column>
              <el-table-column prop="name" label="菜单层级" width="180">
              </el-table-column>
              <el-table-column prop="address" label="菜单内容">
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <a
                    style="color: #00a5ff; font-size: 12px; margin-left: 4px"
                    href="javascript:void(0)"
                    >编辑</a
                  >
                  <a
                    @click="open('确定删除该一级菜单么？')"
                    style="margin-left: 4px; color: #00a5ff; font-size: 12px"
                    href="javascript:void(0)"
                    >删除</a
                  >
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div class="flex">
      <div style="margin: 0 0 0 60px" class="isbutton bt1">发布微信菜单</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OAM_customizeMenus",
  data() {
    return {
      tableData: [
        {
          date: "首页",
          name: "一级菜单",
          address: "客服微信：XXX",
        },
        {
          date: "联系客服",
          name: "二级菜单",
          address: "客服微信：XXX",
        },
      ],
      activeName: "first",
    };
  },
  methods: {
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
.OAM_customizeMenus {
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
.OAM_customizeMenus {
  width: 100%;
  position: relative;
  height: auto;
  background-color: #fff;
  min-height: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px;
  .oamcm_left {
    width: 270px;
    height: 480px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .oamcm_right {
    margin-left: 20px;
    background-color: rgba(244, 245, 249, 1);
    border: 1px solid rgba(221, 221, 221, 1);
    box-sizing: border-box;
    position: relative;
    padding: 15px;
  }
}
</style>