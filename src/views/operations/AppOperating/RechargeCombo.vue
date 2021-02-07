<template>
  <div class="RechargeCombo">
    <div class="pagetitle">充值套餐</div>
    <div class="RechargeCombo_header">
      <div>
        1.
        注意：iOS充值套餐金额、iOS商品id两者需要与苹果内购后台配置一致，若在上架后，需要新增套餐金额，系统后台和苹果内购后台需同步增加，并且需要重新提交市场
      </div>
      <div>2. 充值书币数=单位充值比例*价格</div>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="充值套餐" name="first">
        <div
          style="margin: 0 0 20px"
          class="flex align-center RechargeComboHeader justify-between"
        >
          <div class="flex">
            <el-select v-model="value" placeholder="请选择终端">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
             <el-input style="width: 150px;margin:0 0 0 10px" placeholder="商品名" v-model="input" clearable> </el-input>
            <div style="margin: 0 0 0 10px" class="isbutton bt1">搜索</div>
          </div>
          <div class="flex align-center">
            <div @click="openPage('/rechargeProportion')" class="isbutton bt5">单位充值比例</div>
            <div @click="openPage('/addrechargeProportion')" style="margin: 0 0 0 10px" class="isbutton bt1">新增充值套餐</div>
          </div>
        </div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column prop="id" label="序号" width="80"> </el-table-column>
          <el-table-column label="商品名">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="终端">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="商品价格">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="充值获取">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="苹果商品ID">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="限充次数">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="展示顺序">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <a
                style="color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
              >
                排序
              </a>
              <a
                @click="openPage('/setrechargeProportion')"
                style="color: #00a5ff; font-size: 12px; margin-left: 4px"
                href="javascript:void(0)"
                >编辑</a
              >
              <a
                @click="open('确定删除该充值套餐么？')"
                style="margin-left: 4px; color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
                >删除</a
              >
            </template>
          </el-table-column>
        </el-table>
        <div class="flex justify-between RechargeComboBottom align-center">
          <div @click="open('确定删除选中充值套餐么？')" class="isbutton bt0">批量删除</div>
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
      <el-tab-pane label="会员套餐" name="second">
        <div
          style="margin: 0 0 20px"
          class="flex align-center RechargeComboHeader justify-between"
        >
          <div class="flex">
             <el-select v-model="value" placeholder="请选择商品名">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <el-input style="width: 150px;margin:0 0 0 10px"  placeholder="商品名" v-model="input" clearable> </el-input>
            <div style="margin: 0 0 0 10px" class="isbutton bt1">搜索</div>
          </div>
          <div @click="openPage('/addMembersPackage')" class="isbutton bt1">新增会员套餐</div>
        </div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column prop="id" label="商品ID" width="80"> </el-table-column>
          <el-table-column label="商品名">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="副标题">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="终端">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="商品价格（元）">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="天数">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="苹果商品ID">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="展示顺序">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <a
                style="color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
              >
                排序
              </a>
              <a
                @click="openPage('/setMembersPackage')"
                style="color: #00a5ff; font-size: 12px; margin-left: 4px"
                href="javascript:void(0)"
                >编辑</a
              >
              <a
                @click="open('确定删除该会员套餐么？')"
                style="margin-left: 4px; color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
                >删除</a
              >
            </template>
          </el-table-column>
        </el-table>
        <div class="flex justify-between RechargeComboBottom align-center">
          <div @click="open('确定删除选中会员套餐么？')" class="isbutton bt0">批量删除</div>
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
  name: "RechargeCombo",
  data() {
    return {
      tableData: [
        {
          id: "1",
        },
      ],
      input: "",
      activeName: "first",
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
.RechargeCombo {
  .el-table th {
    background-color: #f2f4f8;
  }
}
.RechargeComboHeader {
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
.RechargeComboBottom {
  margin: 20px 0 0;
}
.pagetitle {
  font-size: 16px;
  color: #3c3d40;
  white-space: normal;
  padding: 18px 0;
  font-weight: 400;
}
.RechargeCombo {
  width: 100%;
  position: relative;
  height: auto;
  background-color: #fff;
  min-height: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px;
  .RechargeCombo_header {
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