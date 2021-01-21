<template>
  <div class="navbar flex align-center">
    <div class="row-cell flex align-center justify-center">
      <img src="../../assets/logo.png" alt="" />
      <span>被窝读书</span>
    </div>
    <div class="navbar-right flex1">
      <sidebar
        ref="tabbarMenu"
        defaultActive="tl_user"
        :mode="'horizontal'"
        @subMenuOpen="subMenuOpens"
        @subMenuClose="subMenuCloses"
        @activeChange="activeChanges"
        :treeData="sidebarData"
      />
    </div>
  </div>
</template>

<script>
/**
 * 导航栏组件
 */
export default {
  data() {
    return {
      activeClass: 0,
      dfat: 'tl_user',
      sidebarData: [
        {
          key: "tl_home",
          title: "首页",
        },
        {
          key: "tl_data",
          title: "数据",
        },
        {
          key: "tl_user",
          title: "用户",
        },
        {
          key: "tl_content",
          title: "内容",
        },
        {
          key: "tl_operations",
          title: "运营",
          children: [
            {
              key: "tl_op",
              title: "通用管理",
              // children: [
              //   {
              //     key: "tl_er",
              //     title: "App运营管理",
              //   },
              //   {
              //     key: "tl_ti",
              //     title: "公众号运营管理",
              //   },
              // ],
            },
          ],
        },
        {
          key: "tl_distribution",
          title: "分销",
        },
        {
          key: "tl_author",
          title: "作者",
        },
        {
          key: "tl_setup",
          title: "设置",
        },
      ],
    };
  },
  computed: {
    navActive() {
      return this.$route.meta.toplevel;
    },
  },
  watch: {
    $route(to, from) {
      if (this.dfat !== to.meta.toplevel) {
        this.dfat = to.meta.toplevel
        this.$refs.tabbarMenu.setAtindex(to.meta.toplevel);
      }
    },
  },
  methods: {
    subMenuOpens(index, path) {
      console.log("subMenuOpens", index, path);
    },
    subMenuCloses(index, path) {
      console.log("subMenuCloses", index, path);
    },
    activeChanges(index, path) {
      // console.log(index, path);
      this.dfat = index
      switch (index) {
        case "tl_content":
          this.$router.push("/novel");
          this.$store.commit("setSidebarData", {
            val: [
              //修改侧边栏数据
              {
                title: "小说",
                key: "/novel",
                icon: "el-icon-user",
              },
              {
                title: "漫画",
                key: "/comics",
                icon: "el-icon-chat-dot-square",
              },
              {
                title: "听书",
                key: "/books",
                icon: "el-icon-edit-outline",
              },
            ],
          });
          this.$store.commit("setSideDefaultActive", { val: "/novel" });
          break;
        case "tl_user":
          this.$router.push("/userlist");
          this.$store.commit("setSidebarData", {
            val: [
              //修改侧边栏数据
              {
                title: "用户列表",
                key: "/userlist",
                icon: "el-icon-user",
              },
              {
                title: "用户评论",
                key: "/usercomment",
                icon: "el-icon-chat-dot-square",
              },
              {
                title: "用户反馈",
                key: "/customerfeedback",
                icon: "el-icon-edit-outline",
              },
            ],
          });
          this.$store.commit("setSideDefaultActive", { val: "/userlist" });
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  z-index: 999;
  left: 0;
  right: 0;
  background-color: #ffffff;
  border-bottom: solid 1px #e6e6e6;
  box-shadow: 0px 0px 10px #dadada;
  .row-cell {
    width: 200px;
    img {
      width: 35px;
      height: 35px;
      margin-right: 12px;
    }
    span {
      font-size: 18px;
      color: #343434;
    }
  }
  .navbar-right {
  }
}
</style>