 <template>
  <div class="PCOU_BannerList">
    <div class="pagetitle">Banner列表</div>
    <div
      style="margin: 0 0 20px"
      class="flex align-center GO_rankingListHeader justify-between"
    >
      <div class="flex">
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
        <div style="margin: 0 0 0 10px" class="isbutton bt1">搜索</div>
      </div>
      <div @click="openPage('/addPCOU_BannerList')" class="isbutton bt1">
        新增Banner
      </div>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column label="序号"> </el-table-column>
      <el-table-column prop="address" label="动作类型"></el-table-column>
      <el-table-column prop="content" label="内容"></el-table-column>
      <el-table-column label="banner图"></el-table-column>
      <el-table-column prop="channel" label="展示顺序"></el-table-column>
      <el-table-column label="Banner图"></el-table-column>
      <el-table-column label="状态">
        <a
            style="margin-left: 4px; color: #00a5ff; font-size: 12px"
            href="javascript:void(0)"
            >上线</a
          >
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <a
            style="margin-left: 4px; color: #00a5ff; font-size: 12px"
            href="javascript:void(0)"
            >排序</a
          >
          <a
            @click="openPage('/setPCOU_BannerList')"
            style="color: #00a5ff; font-size: 12px; margin-left: 4px"
            href="javascript:void(0)"
            >编辑</a
          >
          <a
            @click="open('确定删除该Banner么？')"
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
      <div @click="open('确定删除选中Banner么？')" class="isbutton bt0">
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
  </div>
</template>

<script>
export default {
  name: "PCOU_BannerList",
  data() {
    return {
      tableData: [
        {
          id: "小说男生",
          address: '作品详情页',
          channel: '1',
          content: '逆剑凌尊'
        },
        {
          id: "小说男生",
          address: '跳转链接',
          channel: '2',
          content: '逆剑凌尊'
        },
        {
          id: "小说男生",
          address: '作品详情页',
          channel: '3',
          content: '逆剑凌尊'
        },
      ],
      input: "",
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
.PCOU_BannerList {
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
.PCOU_BannerList {
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