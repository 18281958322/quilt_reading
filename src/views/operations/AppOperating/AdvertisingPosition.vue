<template>
  <div class="AdvertisingPosition">
    <div class="flex justify-between align-center">
      <div class="pagetitle">广告位</div>
      <div style="margin-right: 16px" @click="openPage('/AdvertisingPositionList')" class="isbutton bt1">
        广告列表
      </div>
    </div>
    <ul class="atp_list flex flex-wrap">
      <li
        v-for="(item, index) in atp_lists"
        :key="index"
        class="atpl_items flex flex-column justify-between"
      >
        <div class="flex justify-between">
          <span style="font-size: 14px; color: rgb(51, 51, 51)">{{
            item.val
          }}</span>
          <el-switch v-model="value"> </el-switch>
        </div>
        <div class="flex justify-between">
          <span style="font-size: 14px; color: rgb(153, 153, 153)"
            >广告数：1</span
          >
          <span
            @click="openImg(item.imgurl)"
            style="cursor: pointer; font-size: 14px; color: rgb(0, 165, 255)"
            >查看示例</span
          >
        </div>
      </li>
    </ul>
    <div style="font-weight: bold" class="pagetitle">特殊广告位</div>
    <ul class="atp_list flex flex-wrap">
      <li
        v-for="(item, index) in atp_lists2"
        :key="index"
        class="atpl_items flex flex-column justify-between"
      >
        <div class="flex justify-between">
          <span style="font-size: 14px; color: rgb(51, 51, 51)">{{
            item.val
          }}</span>
          <el-switch v-model="value"> </el-switch>
        </div>
        <div class="flex justify-between">
          <span style="font-size: 14px; color: rgb(153, 153, 153)"
            >广告数：1</span
          >
          <span
            @click="openImg(item.imgurl)"
            style="cursor: pointer; font-size: 14px; color: rgb(0, 165, 255)"
            >查看示例</span
          >
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
  name: "AdvertisingPosition",
  data() {
    return {
      value: "",
      imgShow: false,
      activeImg: "",
      atp_lists: [
        {
          val: "书城",
          imgurl:
            "https://axure-file.lanhuapp.com/04d970a8-e878-4388-a910-ec882398d440__20b02af3238a3f68d15b3c49e733c4a0.png",
        },
        {
          val: "书城-免费书籍",
          imgurl:
            "https://axure-file.lanhuapp.com/04d970a8-e878-4388-a910-ec882398d440__43cdae6548a1d14254b28733c54d2127.png",
        },
        {
          val: "书城-完结书籍",
          imgurl:
            "https://axure-file.lanhuapp.com/04d970a8-e878-4388-a910-ec882398d440__3fe73a63708eaa5b1c16cda526282a45.png",
        },
        {
          val: "书城-分类书籍",
          imgurl:
            "https://axure-file.lanhuapp.com/04d970a8-e878-4388-a910-ec882398d440__534770709243da812ae22cfd0506aa4e.png",
        },
        {
          val: "书城-榜单页面",
          imgurl:
            "https://axure-file.lanhuapp.com/04d970a8-e878-4388-a910-ec882398d440__093166281fa8978fd2c06459a55aab46.png",
        },
        {
          val: "书城-会员书库列表",
          imgurl:
            "https://axure-file.lanhuapp.com/04d970a8-e878-4388-a910-ec882398d440__42e0b36fce6ff4b213edcdf13753e5eb.png",
        },
        {
          val: "作品详情页",
          imgurl:
            "https://axure-file.lanhuapp.com/04d970a8-e878-4388-a910-ec882398d440__4366405a4ec99e7a72041936a61e2c32.png",
        },
        {
          val: "发现页",
          imgurl:
            "https://axure-file.lanhuapp.com/04d970a8-e878-4388-a910-ec882398d440__eca2d823c81c3ac70500329175e7e7a1.png",
        },
        {
          val: "历史记录页",
          imgurl:
            "https://axure-file.lanhuapp.com/04d970a8-e878-4388-a910-ec882398d440__0c3bcb5eced2e608d987d939755c50a6.png",
        },
      ],
      atp_lists2: [
        {
          val: "播放页",
          imgurl:
            "https://axure-file.lanhuapp.com/04d970a8-e878-4388-a910-ec882398d440__99770e11b86f7ae4d585d76dd6523e55.png",
        },
        {
          val: "小说阅读器底部",
          imgurl:
            "https://axure-file.lanhuapp.com/04d970a8-e878-4388-a910-ec882398d440__146ffcd84bf8f4603e051dab8e3e0f44.png",
        },
        {
          val: "小说阅读页（免广告视频）",
          imgurl:
            "https://axure-file.lanhuapp.com/04d970a8-e878-4388-a910-ec882398d440__e08a313231151027d4fbec1b8f2b7002.png",
        },
        {
          val: "小说阅读页（每翻5页显示）",
          imgurl:
            "https://axure-file.lanhuapp.com/04d970a8-e878-4388-a910-ec882398d440__e08a313231151027d4fbec1b8f2b7002.png",
        },
        {
          val: "漫画阅读页底部",
          imgurl:
            "https://axure-file.lanhuapp.com/04d970a8-e878-4388-a910-ec882398d440__c25f527601f2b006b924440bf74046f2.png",
        },
        {
          val: "福利任务视频广告（福利任务-签到-大转盘）",
          imgurl:
            "https://axure-file.lanhuapp.com/04d970a8-e878-4388-a910-ec882398d440__d00a9c25e81ececbd674f91907a39b12.png",
        },
      ],
    };
  },
  methods: {
    openImg(imgurl) {
      this.imgShow = true;
      this.activeImg = imgurl;
    },
    openPage(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style lang="scss">
.AdvertisingPosition {
}
</style>

<style lang='scss' scoped>
.pagetitle {
  font-size: 16px;
  color: #3c3d40;
  white-space: normal;
  padding: 18px 0 18px 16px;
  font-weight: 400;
}
.AdvertisingPosition {
  width: 100%;
  position: relative;
  height: auto;
  background-color: #fff;
  min-height: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
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
      max-height: 90%;
      transform: translate(-50%, -50%);
    }
  }
  .atp_list {
    width: 100%;
    overflow: hidden;
    .atpl_items {
      margin: 16px;
      width: 360px;
      height: 106px;
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