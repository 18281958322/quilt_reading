<template>
  <div class="navbar flex align-center justify-between">
    <div class="row-cell flex align-center justify-center">
      <img src="../../assets/logo.png" alt="" />
      <span>被窝读书</span>
    </div>
    <div class="navbar-right flex1">
      <sidebar
        ref="tabbarMenu"
        defaultActive="tl_home"
        :mode="'horizontal'"
        @subMenuOpen="subMenuOpens"
        @subMenuClose="subMenuCloses"
        @activeChange="activeChanges"
        :treeData="sidebarData"
      />
    </div>
    <div style="height: 100%" class="navRight flex align-center justify-center">
      <div
        style="cursor: pointer"
        @click="activeChanges('tl_MemberSystem')"
        :class="[
          'navRight_item',
          'flex',
          'flex-column',
          'justify-center',
          'align-center',
          $store.state.sidebarAllDataActiv === 'tl_MemberSystem'
            ? 'active'
            : '',
        ]"
      >
        <i class="el-icon-user"></i>
        <p>系统成员</p>
      </div>
      <el-dropdown style="margin: 0 30px 0 0">
        <div class="flex align-end">
          <div
            style="margin: 0; cursor: pointer"
            class="navRight_item flex flex-column justify-center align-center"
          >
            <i class="el-icon-user"></i>
            <p>admin</p>
          </div>
          <i class="el-icon-arrow-down"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
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
      dfat: "tl_user",
      sidebarData: [
        {
          // key: 菜单唯一标识; title: 菜单显示名称; icon: 菜单显示图标; children: 下级菜单
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
              key: "GeneralOperating",
              title: "通用运营",
            },
            {
              key: "AppOperating",
              title: "App运营",
            },
            {
              key: "OA_Operating",
              title: "公众号运营",
            },
            {
              key: "PC_Operating",
              title: "PC运营",
            },
          ],
        },
        // {
        //   key: "tl_distribution",
        //   title: "分销",
        // },
        {
          key: "tl_author",
          title: "作者",
        },
        {
          key: "tl_setup_item",
          title: "设置",
          children: [
            {
              key: "tl_setup",
              title: "通用设置",
            },
            {
              key: "tl_app",
              title: "APP设置",
            },
            {
              key: "tl_account",
              title: "公众号设置",
            },
            {
              key: "tl_pc",
              title: "PC设置",
            },
          ],
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
        this.dfat = to.meta.toplevel;
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
      // 默认打开路由;同时也是侧边栏默认选中的key
      let activePath = "";
      // 记录顶级导航当前选中项
      this.dfat = index;
      // 修改侧边栏数据
      this.$store.commit("setSidebarData", { val: index });
      // 判断当前顶级导航所展示的侧边菜单和默认打开路由
      switch (index) {
        case "tl_home":
          activePath = "/allindex";
          break;
        case "tl_data":
          activePath = "/user_data";
          break;
        case "tl_content":
          activePath = "/novel";
          break;
        case "tl_user":
          activePath = "/userlist";
          break;
        case "tl_author":
          activePath = "/author";
          break;
        // case "tl_distribution": activePath = '/ordersReceiveStatistics'; break
        case "tl_setup":
          activePath = "/basics";
          break;
        case "tl_app":
          activePath = "/goon";
          break;
        case "tl_account":
          activePath = "/sign";
          break;
        case "tl_pc":
          activePath = "/basics_item";
          break;
        case "GeneralOperating":
          activePath = "/GOHotHotWords";
          break;
        case "AppOperating":
          activePath = "/BootPage";
          break;
        case "OA_Operating":
          activePath = "/OAOU_AdvertisingPosition";
          break;
        case "PC_Operating":
          activePath = "/PCOU_AdvertisingPosition";
          break;
        case "data_data":
          activePath = "/PCOU_bottomNavigation";
          break;
        case "data_record":
          activePath = "/PCOU_bottomNavigation";
          break;
        case "tl_MemberSystem":
          activePath = "/roleMangement";
          break;
      }
      // 切换侧边栏选中项
      this.$store.commit("setSideDefaultActive", { val: activePath });
      // 默认页面打开
      this.$router.push(activePath);
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
  .navRight_item {
    margin-right: 30px;
    height: 80%;
    text-align: center;
    i {
      font-size: 20px;
    }
    p {
      font-size: 12px;
    }
  }
  .navRight_item.active {
    i {
      color: #409eff;
    }
    p {
      color: #409eff;
    }
  }
  .navRight_item:not(.active) {
    i {
      color: #333;
    }
    p {
      color: #333;
    }
  }
  .row-cell {
    width: 200px;
    height: 100%;
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