<template>
  <div class="OAM_IntelligentPush">
    <div class="pagetitle">编辑转盘活动</div>
    <ul class="atp_list flex flex-wrap">
      <li
        v-for="(item, index) in atp_lists"
        :key="index"
        class="atpl_items flex flex-column justify-between"
      >
        <div class="flex justify-between">
          <span
            style="font-size: 13px; color: rgb(51, 51, 51); font-weight: bold"
            >{{ item.val }}</span
          >
          <el-switch v-model="value"> </el-switch>
        </div>
        <p style="font-size: 13px; color: #666">
          {{ item.text }}
        </p>
        <div
          @click="openImg(item.imgurl)"
          style="cursor: pointer; font-size: 14px; color: rgb(0, 165, 255)"
        >
          查看示例
        </div>
      </li>
    </ul>
    <div @click.stop="imgShow = false" v-if="imgShow" class="imgDialog">
      <img :src="activeImg" alt="示例" />
    </div>
  </div>
</template>

<script>
export default {
  name: "OAM_IntelligentPush",
  data() {
    return {
      atp_lists: [
        {
          val: "签到图文推送",
          text: '开启后系统将向签到用户推送相应的客服消息。推送时间: 用户签到12小时后推送',
          imgurl:
            "https://axure-file.lanhuapp.com/04d970a8-e878-4388-a910-ec882398d440__2bc8b6aa742c7e67bbd608bab433addf.svg",
        },
        {
          val: "继续阅读提醒",
          text: '开启后系统将向昨日阅读过书籍，但今日未阅读过书籍的用户推送。推送时间: 每天晚上7点推送。',
          imgurl:
            "https://axure-file.lanhuapp.com/04d970a8-e878-4388-a910-ec882398d440__d4570efe50172812b65d3dd145ed0f43.svg",
        },
        {
          val: "未支付订单推送",
          text: '开启后，如果用户下单但未支付，30分钟后，系统会给他推送一条充值优惠的图文消息',
          imgurl:
            "https://axure-file.lanhuapp.com/04d970a8-e878-4388-a910-ec882398d440__2adafd2b3e513cd26263a2e01d98da6f.svg",
        },
        {
          val: "猜你喜欢推荐",
          text: '开启后系统将向最后一次阅读24小时之前的用户推送客服消息，推送时间：在用户最后一次阅读时间的24小时后推送',
          imgurl:
            "https://axure-file.lanhuapp.com/04d970a8-e878-4388-a910-ec882398d440__dc084227a659ddf5bb39e1a40700ee2e.svg",
        },
      ],
      imgShow: false,
      value: false
    };
  },
  methods: {
    openImg(imgurl) {
      this.imgShow = true;
      this.activeImg = imgurl;
    },
  },
};
</script>

<style lang="scss">
.OAM_IntelligentPush {
  .el-input {
    width: 400px;
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
.OAM_IntelligentPush {
  width: 100%;
  position: relative;
  height: auto;
  background-color: #fff;
  min-height: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px;
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
}
</style>