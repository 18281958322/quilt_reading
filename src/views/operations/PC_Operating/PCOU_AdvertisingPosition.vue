<template>
  <div class="PCOU_AdvertisingPosition">
    <div class="flex justify-between align-center">
      <div class="pagetitle">广告位</div>
      <div style="margin-right: 16px" @click="openPage('/PCOU_AdvertisingPositionList')" class="isbutton bt1">
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
    <div @click.stop="imgShow = false" v-if="imgShow" class="imgDialog">
      <img :src="activeImg" alt="示例" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PCOU_AdvertisingPosition",
  data() {
    return {
      value: "",
      imgShow: false,
      activeImg: "",
      atp_lists: [
        {
          val: "首页",
          imgurl:
            "https://axure-file.lanhuapp.com/04d970a8-e878-4388-a910-ec882398d440__a285109d5a70484734fc8a9e53d325e9.png",
        },
        {
          val: "书库",
          imgurl:
            "https://axure-file.lanhuapp.com/04d970a8-e878-4388-a910-ec882398d440__304a9abf1c7ea654a803b976e2047e13.png",
        },
        {
          val: "榜单",
          imgurl:
            "https://axure-file.lanhuapp.com/04d970a8-e878-4388-a910-ec882398d440__ffa8d22e54b1102f15751e43458d3d71.png",
        },
        {
          val: "书籍详情页",
          imgurl:
            "https://axure-file.lanhuapp.com/04d970a8-e878-4388-a910-ec882398d440__8c1c0cad45e77b61449f830071439bc3.png",
        },
        {
          val: "小说阅读页",
          imgurl:
            "https://axure-file.lanhuapp.com/04d970a8-e878-4388-a910-ec882398d440__cc1eff80edf2a4828c06160b5b194d28.png",
        },
      ]
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
.PCOU_AdvertisingPosition {
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
.PCOU_AdvertisingPosition {
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