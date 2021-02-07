<template>
  <div class="OAOU_AdvertisingPosition">
    <div class="flex justify-between align-center">
      <div class="pagetitle">广告位</div>
      <div style="margin-right: 16px" @click="openPage('/OAOU_AdvertisingPositionList')" class="isbutton bt1">
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
  name: "OAOU_AdvertisingPosition",
  data() {
    return {
      value: "",
      imgShow: false,
      activeImg: "",
      atp_lists: [
        {
          val: "书城",
          imgurl:
            "https://axure-file.lanhuapp.com/04d970a8-e878-4388-a910-ec882398d440__d565b992943ad288daff7f744bad313d.png",
        },
        {
          val: "图文导航-免费页面",
          imgurl:
            "https://axure-file.lanhuapp.com/04d970a8-e878-4388-a910-ec882398d440__220cb0cc9d3272acb3aaa963fbb8da58.png",
        },
        {
          val: "图文导航-完结页面",
          imgurl:
            "https://axure-file.lanhuapp.com/04d970a8-e878-4388-a910-ec882398d440__f5facb0945be2fe8365c788f5df474d0.png",
        },
        {
          val: "图文导航-分类页面",
          imgurl:
            "https://axure-file.lanhuapp.com/04d970a8-e878-4388-a910-ec882398d440__a384c5b49a19aa2f102b96dd5ea6ca4c.png",
        },
        {
          val: "图文导航-榜单页面",
          imgurl:
            "https://axure-file.lanhuapp.com/04d970a8-e878-4388-a910-ec882398d440__97c62ffeb55213d4889977f5958e349e.png",
        },
        {
          val: "会员书库页面",
          imgurl:
            "https://axure-file.lanhuapp.com/04d970a8-e878-4388-a910-ec882398d440__fea9df80a3ad447c0bd214f51efe9470.png",
        },
        {
          val: "作品详情页",
          imgurl:
            "https://axure-file.lanhuapp.com/04d970a8-e878-4388-a910-ec882398d440__3ca0f4d72fdea7da590bb0804fcd66a5.png",
        },
        {
          val: "发现页",
          imgurl:
            "https://axure-file.lanhuapp.com/04d970a8-e878-4388-a910-ec882398d440__e5dff5c0cb1b29dc4fe9550e1d221bf7.png",
        },
        {
          val: "历史记录页",
          imgurl:
            "https://axure-file.lanhuapp.com/04d970a8-e878-4388-a910-ec882398d440__515d99777160b346f8cd0f2fc42e32df.png",
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
.OAOU_AdvertisingPosition {
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
.OAOU_AdvertisingPosition {
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