<template>
  <div class="crumbs flex align-center transition">
    <i @click="iconClick" class="iconfont iconshouqi transition"></i>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="flex1">
      <transition-group name="crumbAnimation">
        <el-breadcrumb-item v-for="item in crumbsData" :key="item.path">{{
          item.text
        }}</el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>

<script>
  /**
   * 面包屑组件
   */
  export default {
    name: "crumbs",
    data() {
      return {
        cw: "200px"
      };
    },
    created() {
      // window.addEventListener("resize", this.cw_disponse, false);
      // this.cw_disponse();
    },
    methods: {
      cw_disponse() {
        let screen_w =
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth;
        let sidebarWidth = this.$store.state.sidebarCollapse ? 64 : 226;
        this.cw = screen_w - sidebarWidth + "px";
      },
      iconClick() {
        this.$store.commit("setSidebarCollapse", {
          val: !this.$store.state.sidebarCollapse,
        });
        // this.cw_disponse();
      },
    },
    computed: {
      crumbsData() {
        return this.$route.matched.map((item) => {
          return {
            text: item.meta.title,
            path: item.path || "/"
          };
        });
      },
    },
  };
</script>

<style lang="scss">
  .el-breadcrumb__inner.is-link {
    font-weight: 700;
  }

  .crumbAnimation-enter {
    opacity: 0;
    -ms-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    transform: translateX(-100%);
  }

  .crumbAnimation-enter-active {
    transition: all 0.8s;
  }

  .crumbAnimation-enter-to {
    opacity: 1;
    -ms-transform: translateX(0px);
    -ms-transform: translateX(0px);
    transform: translateX(0px);
  }

  .crumbAnimation-leave {
    position: absolute;
    opacity: 1;
  }

  .crumbAnimation-leave-active {
    transition: all 0.4s;
  }

  .crumbAnimation-leave-to

  /* .slide-fade-leave-active for below version 2.1.8 */
    {
    position: absolute;
    opacity: 0;
    -ms-transform: translateX(100%);
    -moz-transform: translateX(100%);
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }

  .crumbs {
    .el-breadcrumb {
      font-size: 13px;
    }

    .el-breadcrumb {
      font-size: 13px;
      position: relative;
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-align: start;
      -ms-flex-align: start;
      -webkit-align-items: flex-start;
      align-items: flex-start;
      -webkit-box-orient: unset;
      -ms-flex-direction: column;
      -webkit-flex-direction: column;
      flex-direction: column;
    }
  }
</style>

<style lang="scss" scoped>
  .crumbs {
    width: 100%;
    box-sizing: border-box;
    z-index: 997;
    height: 40px;
    overflow-y: hidden;
    overflow-x: auto;
    // border-bottom: 1px #dadada solid;
    // background-color: #f5f6fa;
    white-space: nowrap;
    padding-left: 6px;
    background-color: #fff;
    -webkit-box-shadow: 2px 2px 8px rgba(218, 218, 218, 0.5);
    box-shadow: 2px 2px 8px rgba(218, 218, 218, 0.5);

    .iconfont {
      font-size: 12px;
      padding: 6px;
      margin-right: 6px;
      color: #000;
      cursor: pointer;
    }

    .iconfont:hover {
      opacity: 0.8;
    }
  }
</style>