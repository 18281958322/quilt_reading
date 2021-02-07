<template>
  <div class="RotaryActivities">
    <div class="pagetitle">转盘活动</div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="奖励项" name="first">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column label="序号" width="80"> </el-table-column>
          <el-table-column prop="title" label="标题"></el-table-column>
          <el-table-column label="图片">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="奖励金额">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="中奖权重">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="奖励类型">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <a
                @click="openPage('/setRotaryActivities')"
                style="color: #00a5ff; font-size: 12px; margin-left: 4px"
                href="javascript:void(0)"
                >编辑</a
              >
            </template>
          </el-table-column>
        </el-table>
        <div class="flex justify-end RotaryActivitiesBottom align-center">
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
      <el-tab-pane label="玩家列表" name="second">
        <div
          style="margin: 0 0 20px"
          class="flex align-center rankingProductionHeader"
        >
          <div class="flex">
            <el-select
              style="width: 150px"
              v-model="form.region"
              placeholder="请选奖励"
            >
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
            <el-input
              style="margin: 0 0 0 10px; width: 150px"
              placeholder="昵称/ID/手机号"
              v-model="input"
              clearable
            >
            </el-input>
            <div style="margin: 0 0 0 10px" class="isbutton bt1">搜索</div>
          </div>
        </div>
        <el-table :data="tableData2" border style="width: 100%">
          <el-table-column label="用户（ID）" width="80"> </el-table-column>
          <el-table-column label="奖励类型"></el-table-column>
          <el-table-column label="获得奖项">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="姓名">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="手机号">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="联系地址"></el-table-column>
          <el-table-column prop="status" label="发放状态"></el-table-column>
          <el-table-column label="最近参与时间"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <a
                @click="openDialog = true"
                style="color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
                >编辑</a
              >
              <a
                style="color: #00a5ff; font-size: 12px; margin-left: 4px"
                href="javascript:void(0)"
                >已发放</a
              >
              <a
                style="color: #00a5ff; font-size: 12px; margin-left: 4px"
                href="javascript:void(0)"
                >重新发放</a
              >
            </template>
          </el-table-column>
        </el-table>
        <div class="flex justify-end RotaryActivitiesBottom align-center">
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
      <el-tab-pane label="规则说明" name="third">
        <el-form
            :model="form"
            :rules="rules"
            ref="ruleForm"
            label-width="120px"
            class="demo-ruleForm"
        >
            <el-form-item label="大转盘规则说明">
            <el-input type="textarea" style="width: 300px" :rows='6' v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="实物奖励发放说明">
            <el-input type="textarea" style="width: 300px" :rows='6' v-model="form.name"></el-input>
            </el-form-item>
            <el-from-item>
            <div class="flex">
                <div style="margin: 0 0 0 120px" class="isbutton bt1">保存</div>
            </div>
            </el-from-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
    <el-dialog
      title="编辑玩家"
      :visible.sync="openDialog"
      width="450px"
    >
      <el-form
        :model="form"
        :rules="rules"
        ref="ruleForm"
        label-width="70px"
        class="demo-ruleForm"
      >
        <el-form-item label="姓名" prop="requireds">
          <el-input style="width: 300px" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input style="width: 300px" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="联系地址">
          <el-input style="width: 300px" v-model="form.name"></el-input>
        </el-form-item>
        <el-from-item>
          <div class="flex justify-center">
            <div class="isbutton bt0">取消</div>
            <div style="margin: 0 0 0 12px" class="isbutton bt1">确定</div>
          </div>
        </el-from-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "RotaryActivities",
  data() {
    return {
      tableData2: [
        {
          status: "已发放",
        },
        {
          status: "发放中",
        },
        {
          status: "待填写收货地址",
        },
        {
          status: "已失效",
        },
      ],
      tableData: [
        {
          title: "邀请好友",
        },
        {
          title: "每日分享",
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
      form: {
        name: "",
        region: "",
      },
      rules: {
        requireds: [{ required: true, message: "这是必填项", trigger: "blur" }],
      },
      openDialog: false,
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
.RotaryActivities {
  .el-table th {
    background-color: #f2f4f8;
  }
}
.RotaryActivitiesHeader {
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
.RotaryActivitiesBottom {
  margin: 20px 0 0;
}
.pagetitle {
  font-size: 16px;
  color: #3c3d40;
  white-space: normal;
  padding: 18px 0;
  font-weight: 400;
}
.RotaryActivities {
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