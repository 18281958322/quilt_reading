<template>
  <div class="welfareTask">
    <div class="flex align-center">
      <div class="pagetitle">福利任务</div>
      <el-tooltip
        class="item"
        effect="dark"
        content="任务规则由系统内置，只可修改任务次数、任务描述、任务状态和任务奖励金额，其他信息无法修改"
        placement="right"
      >
        <i
          style="color: #d0d0d0; margin-left: 12px; font-size: 18px"
          class="el-icon-question"
        ></i>
      </el-tooltip>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="日常任务" name="first">
        <div class="welfareTask_header">
          <div>
            支持设置任务可完成次数，表示用户能够完成X次任务，获得X次奖励
          </div>
        </div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column label="序号" width="80"> </el-table-column>
          <el-table-column prop="title" label="标题"></el-table-column>
          <el-table-column label="描述">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="奖励">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="限制完成次数">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="附加条件">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="状态">
            <template slot-scope="scope">
              <div class="flex">
                <div class="isbutton bt1">显示</div>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <a
                @click="openDialog(scope)"
                style="color: #00a5ff; font-size: 12px; margin-left: 4px"
                href="javascript:void(0)"
                >编辑</a
              >
            </template>
          </el-table-column>
        </el-table>
        <div class="flex justify-end welfareTaskBottom align-center">
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
      <el-tab-pane label="新手任务" name="second">
        <div class="welfareTask_header">
          <div>
            1.
            每个用户只能完成一次，除充值货币、开通VIP任务，其他任务每个设备只能完成1次
          </div>
          <div>
            2.
            1元提现任务指：用户阅读满20分钟后，提现项中增加“1元”权益，用户的账户余额并不会增加。仅新用户可完成，其中新用户条件由后台设置。
          </div>
        </div>
        <el-table :data="tableData2" border style="width: 100%">
          <el-table-column label="序号" width="80"> </el-table-column>
          <el-table-column prop="title" label="标题"></el-table-column>
          <el-table-column label="描述">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="奖励">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="附加条件">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="状态">
            <template slot-scope="scope">
              <div class="flex">
                <div class="isbutton bt1">显示</div>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <a
                @click="openDialog2(scope)"
                style="color: #00a5ff; font-size: 12px; margin-left: 4px"
                href="javascript:void(0)"
                >编辑</a
              >
            </template>
          </el-table-column>
        </el-table>
        <div class="flex justify-end welfareTaskBottom align-center">
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
      <el-tab-pane label="阅读任务" name="third">
        <div class="welfareTask_header">
          <div>
            阅读任务请按照梯级递增的形式设置，由于完成任务时是从低到高完成，未按照规定设置会出现完不成任务情况
          </div>
        </div>
        <el-table :data="tableData3" border style="width: 100%">
          <el-table-column label="序号" width="80"> </el-table-column>
          <el-table-column prop="title" label="标题"></el-table-column>
          <el-table-column label="描述">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="奖励">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column prop="additionalConditions" label="附加条件"></el-table-column>
          <el-table-column label="状态">
            <template slot-scope="scope">
              <div class="flex">
                <div class="isbutton bt1">显示</div>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <a
                @click="dialogVisible5 = true"
                style="color: #00a5ff; font-size: 12px; margin-left: 4px"
                href="javascript:void(0)"
                >编辑</a
              >
            </template>
          </el-table-column>
        </el-table>
        <div class="flex justify-end welfareTaskBottom align-center">
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
    <el-dialog
      title="编辑日常任务"
      :visible.sync="dialogVisible1"
      width="450px"
    >
      <el-form
        :model="form"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="标题" prop="requireds">
          <el-input style="width: 260px" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input style="width: 260px" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="奖励值">
          <el-input style="width: 260px" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="限制完成次数">
          <el-input style="width: 260px" v-model="form.name"></el-input>
        </el-form-item>
        <el-from-item>
          <div class="flex justify-center">
            <div class="isbutton bt0">取消</div>
            <div style="margin: 0 0 0 12px" class="isbutton bt1">确定</div>
          </div>
        </el-from-item>
      </el-form>
    </el-dialog>
    <el-dialog
      title="编辑日常任务"
      :visible.sync="dialogVisible2"
      width="450px"
    >
      <el-form
        :model="form"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="标题" prop="requireds">
          <el-input style="width: 260px" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input style="width: 260px" v-model="form.name"></el-input>
        </el-form-item>
        <el-from-item>
          <div class="flex justify-center">
            <div class="isbutton bt0">取消</div>
            <div style="margin: 0 0 0 12px" class="isbutton bt1">确定</div>
          </div>
        </el-from-item>
      </el-form>
    </el-dialog>
    <el-dialog
      title="编辑新手任务"
      :visible.sync="dialogVisible3"
      width="450px"
    >
      <el-form
        :model="form"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="标题" prop="requireds">
          <el-input style="width: 260px" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input style="width: 260px" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item prop="requireds" label="阅读时长">
          <el-input style="width: 260px" v-model="form.name"></el-input>
        </el-form-item>
        <el-from-item>
          <div class="flex justify-center">
            <div class="isbutton bt0">取消</div>
            <div style="margin: 0 0 0 12px" class="isbutton bt1">确定</div>
          </div>
        </el-from-item>
      </el-form>
    </el-dialog>
    <el-dialog
      title="编辑新手任务"
      :visible.sync="dialogVisible4"
      width="450px"
    >
      <el-form
        :model="form"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="标题" prop="requireds">
          <el-input style="width: 260px" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input style="width: 260px" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item prop="requireds" label="奖励值">
          <el-input style="width: 260px" v-model="form.name"></el-input>
        </el-form-item>
        <el-from-item>
          <div class="flex justify-center">
            <div class="isbutton bt0">取消</div>
            <div style="margin: 0 0 0 12px" class="isbutton bt1">确定</div>
          </div>
        </el-from-item>
      </el-form>
    </el-dialog>
    <el-dialog
      title="编辑阅读任务"
      :visible.sync="dialogVisible5"
      width="450px"
    >
      <el-form
        :model="form"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="标题" prop="requireds">
          <el-input style="width: 260px" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item prop="requireds" label="阅读时长">
          <el-input style="width: 260px" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item prop="requireds" label="奖励值">
          <el-input style="width: 260px" v-model="form.name"></el-input>
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
  name: "welfareTask",
  data() {
    return {
      tableData3: [
        {
          title: "阅读达到10分钟",
          additionalConditions: "一天内阅读满10分钟",
        },
        {
          title: "阅读达到30分钟",
          additionalConditions: "一天内阅读满30分钟",
        },
        {
          title: "阅读达到60分钟",
          additionalConditions: "一天内阅读满60分钟",
        },
        {
          title: "阅读达到90分钟",
          additionalConditions: "一天内阅读满90分钟",
        },
        {
          title: "阅读达到120分钟",
          additionalConditions: "一天内阅读满120分钟",
        },
        {
          title: "阅读达到180分钟",
          additionalConditions: "一天内阅读满180分钟",
        },
      ],
      tableData2: [
        {
          title: "1元提现",
        },
        {
          title: "填写邀请码",
        },
        {
          title: "有奖答题",
        },
        {
          title: "开通VIP",
        },
        {
          title: "首次充值货币",
        },
        {
          title: "添加书籍",
        },
        {
          title: "绑定手机号",
        },
        {
          title: "绑定QQ",
        },
        {
          title: "绑定微信",
        },
      ],
      tableData: [
        {
          title: "邀请好友",
        },
        {
          title: "每日分享",
        },
        {
          title: "阅读一本书",
        },
        {
          title: "评论一次",
        },
        {
          title: "幸运大转盘",
        },
        {
          title: "观看小视频",
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
      dialogVisible1: false,
      dialogVisible2: false,
      dialogVisible3: false,
      dialogVisible4: false,
      dialogVisible5: false
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
    openDialog(item) {
      if (item.row.title === "邀请好友" || item.row.title === "幸运大转盘") {
        this.dialogVisible2 = true;
      } else {
        this.dialogVisible1 = true;
      }
    },
    openDialog2(item) {
      if (item.row.title === "1元提现") {
        this.dialogVisible3 = true;
      } else {
        this.dialogVisible4 = true;
      }
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
.welfareTask {
  .el-table th {
    background-color: #f2f4f8;
  }
}
.welfareTaskHeader {
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
.welfareTaskBottom {
  margin: 20px 0 0;
}
.pagetitle {
  font-size: 16px;
  color: #3c3d40;
  white-space: normal;
  padding: 18px 0;
  font-weight: 400;
}
.welfareTask {
  width: 100%;
  position: relative;
  height: auto;
  background-color: #fff;
  min-height: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px;
  .welfareTask_header {
    border: 1px solid rgba(221, 221, 221, 1);
    width: 100%;
    position: relative;
    margin: 10px 0 20px;
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