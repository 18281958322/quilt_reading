<template>
  <ul class="topTabbar flex align-center">
    <li @click="switchActive(item)" v-for="item in tabBarList" :key="item.path"
      :class="['ttb_item', 'transition', { active: tabActive(item) }]">
      <span>{{ item.meta.title }}</span>
      <i @click.stop="closeHistory(item)" class="el-icon-close"></i>
    </li>
  </ul>
</template>

<script>
  import {
    mapState
  } from "vuex";
  export default {
    name: "topTabbar",
    computed: {
      topTabbarData() {
        return this.$route.matched.map((item) => {
          return {
            text: item.meta.title,
            path: item.path || "/"
          };
        });
      },
      ...mapState(["tabBarList", "sidebarAllDataActiv"]),
      tabActive() {
        return function (item) {
          return this.$route.path === item.path;
        };
      },
    },
    methods: {
      closeHistory: function (item) {
        this.$store.commit("setTabBarList", {
          val: item,
          type: "delete"
        });
      },
      switchActive(item) {
        if (this.sidebarAllDataActiv !== item.meta.toplevel) {
          this.$store.commit("setSidebarData", { val: item.meta.toplevel });
        }
        this.$store.commit("setSideDefaultActive", { val: item.path })
        this.$router.push(item.path);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .topTabbar {
    width: 100%;
    box-sizing: border-box;
    z-index: 997;
    height: 36px;
    line-height: 36px;
    margin: 3px 0 0;
    overflow-y: hidden;
    overflow-x: auto;
    // border-bottom: 1px #dadada solid;
    // background-color: #f5f6fa;
    white-space: nowrap;
    padding-left: 12px;
    background-color: #fff;
    -webkit-box-shadow: 2px 2px 8px rgba(218, 218, 218, 0.5);
    box-shadow: 2px 2px 8px rgba(218, 218, 218, 0.5);

    & .ttb_item:nth-child(n + 2) {
      margin-left: 12px;
    }

    .ttb_item.active {
      background-color: #1890ff;

      span {
        color: white;
      }

      .el-icon-close {
        color: white;
      }
    }

    .ttb_item:not(.active) {
      background-color: #ffffff;

      span {
        color: #303133;
      }

      .el-icon-close {
        color: #303133;
      }
    }

    .ttb_item:not(.active):hover {
      span {
        color: #409eff;
      }
    }

    .ttb_item {
      padding: 0 4px 0 8px;
      height: 25px;
      line-height: 25px;
      border: 1px solid #dedede;
      cursor: pointer;
      list-style: none;

      span {
        font-size: 12px;
      }

      .el-icon-close {
        font-size: 12px;
        margin-left: 4px;
        padding: 4px;
      }
    }
  }
</style>