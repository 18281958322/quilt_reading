<template>
  <div class="PushNotification">
    <div class="flex justify-between align-center">
      <div class="pagetitle">消息推送</div>
      <div class="flex align-center">
        <div
          @click="openPage('/auxiliaryPushNotification')"
          class="isbutton bt1"
        >
          辅助推送通道
        </div>
        <div
          @click="openPage('/addPushNotification')"
          style="margin: 0 0 0 10px"
          class="isbutton bt5"
        >
          新增消息推送
        </div>
      </div>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="消息推送" name="first">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column label="计划推送时间" width="80"> </el-table-column>
          <el-table-column prop="title" label="推送完成时间"></el-table-column>
          <el-table-column label="推送平台">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="标题">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="推送内容">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="推送对象">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="推送状态">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <a
                @click="openPage('/setPushNotification')"
                style="color: #00a5ff; font-size: 12px; margin-left: 4px"
                href="javascript:void(0)"
                >编辑</a
              >
              <a
                @click="open('确定删除该条推送消息么？')"
                style="color: #00a5ff; font-size: 12px; margin-left: 4px"
                href="javascript:void(0)"
                >删除</a
              >
              <a
                style="color: #00a5ff; font-size: 12px; margin-left: 4px"
                href="javascript:void(0)"
                >重发</a
              >
            </template>
          </el-table-column>
        </el-table>
        <div class="flex justify-between PushNotificationBottom align-center">
          <div @click="open('确定删除选中的推送消息么？')" class="isbutton bt0">
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
      </el-tab-pane>
      <el-tab-pane label="智能推送" name="second">
        <ul class="atp_list flex flex-wrap">
          <li
            v-for="(item, index) in atp_lists"
            :key="index"
            class="atpl_items flex flex-column justify-between"
          >
            <div class="flex justify-between">
              <span style="font-size: 13px; color: rgb(51, 51, 51);font-weight:bold">{{
                item.val
              }}</span>
              <el-switch v-model="value"> </el-switch>
            </div>
            <p style="font-size: 13px; color:#666">
              {{item.text}}            
            </p>
            <div
                @click="openImg(item.imgurl)"
                style="
                  cursor: pointer;
                  font-size: 14px;
                  color: rgb(0, 165, 255);
                "
                >查看示例</div
              >
          </li>
        </ul>
        <div @click.stop="imgShow = false" v-if="imgShow" class="imgDialog">
          <img :src="activeImg" alt="示例" />
        </div>
      </el-tab-pane>
    </el-tabs>
    <el-dialog title="编辑玩家" :visible.sync="openDialog" width="450px">
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
  name: "PushNotification",
  data() {
    return {
      tableData: [
        {
          title: "2020-12-5",
        },
        {
          title: "2020-12-5",
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
      atp_lists: [
        {
          val: "作品更新提醒",
          text: '',
          imgurl:
            "https://axure-file.lanhuapp.com/04d970a8-e878-4388-a910-ec882398d440__d0d613c86f04465ef737c977ad8863c3.png",
        },
        {
          val: "充值到账通知",
          text: '开启后，用户充值支付成功，到余额后，系统将给用户发送一条站内消息，显示在用户个人中心中',
          imgurl:
            "https://axure-file.lanhuapp.com/04d970a8-e878-4388-a910-ec882398d440__7229795c530da14a2a9fc3f856d5540e.png",
        },
        {
          val: "会员开通成功通知",
          text: '开启后，用户开通会员支付成功后，系统将给用户发送一条站内信息，显示在用户个人中心消息中',
          imgurl:
            "https://axure-file.lanhuapp.com/04d970a8-e878-4388-a910-ec882398d440__cae42e3333d0aa279edf9f1b6cd455da.png",
        },
        {
          val: "会员到期提醒",
          text: 'VIP用户会员到期日前一天，系统将给用户发送一条会员到期站内信息，显示在用户个人中心消息中',
          imgurl:
            "https://axure-file.lanhuapp.com/04d970a8-e878-4388-a910-ec882398d440__885901efdf31e34cfa031f7d8d25bce9.png",
        },
        {
          val: "提现申请成功通知",
          text: '用户提现需后台审核，用户申请提现后，会收到一条站内信息，显示在用户个人中心消息中',
          imgurl:
            "https://axure-file.lanhuapp.com/04d970a8-e878-4388-a910-ec882398d440__8aa08c3a393507eab4dc173cb5e3044a.png",
        },
        {
          val: "提现成功到账通知",
          text: '开启后，用户提现到账后，会收到一条到账通知，显示在用户个人中心消息中',
          imgurl:
            "https://axure-file.lanhuapp.com/04d970a8-e878-4388-a910-ec882398d440__8a17a23ba9dcffe27935d8ff38dd304e.png",
        },
        {
          val: "提现驳回通知",
          text: '开启后，用户提现被驳回后，会收到一条到账通知，显示在用户个人中心消息中',
          imgurl:
            "https://axure-file.lanhuapp.com/04d970a8-e878-4388-a910-ec882398d440__159eba4466576973c5cc10b6375cf207.png",
        },
        {
          val: "提现失败通知",
          text: '开启后，用户提现失败后，会收到一条到账通知，显示在用户个人中心消息中',
          imgurl:
            "https://axure-file.lanhuapp.com/04d970a8-e878-4388-a910-ec882398d440__7f70a6d5f0d2f338220c6dd045c5266f.png",
        },
      ],
      imgShow: false
    };
  },
  methods: {
    openImg(imgurl) {
      this.imgShow = true;
      this.activeImg = imgurl;
    },
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
.PushNotification {
  .el-table th {
    background-color: #f2f4f8;
  }
}
.PushNotificationHeader {
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
.PushNotificationBottom {
  margin: 20px 0 0;
}
.pagetitle {
  font-size: 16px;
  color: #3c3d40;
  white-space: normal;
  padding: 18px 0;
  font-weight: 400;
}
.PushNotification {
  width: 100%;
  position: relative;
  height: auto;
  background-color: #fff;
  min-height: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px;
  .imgDialog {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
    img {
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .atp_list {
    width: 100%;
    overflow: hidden;
    .atpl_items {
      margin: 16px;
      width: 420px;
      height: 136px;
      background-color: #f8fafc;
      border: none;
      border-radius: 10px;
      box-shadow: none;
      box-sizing: border-box;
      padding: 15px;
      & > div {
        width: 100%;
        white-space: nowrap;
        position: relative;
      }
    }
  }
}
</style>