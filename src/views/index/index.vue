<template>
  <div class="home_index">
    <navbar />
    <div class="sidebarContent">
      <sidebar ref="newSidebar" defaultActive="/allindex" :collapse="sidebarCollapse" @subMenuOpen="subMenuOpens" @subMenuClose="subMenuCloses"
        @activeChange="activeChanges" :treeData="sidebarData" />
    </div>
    <div class="mainContent flex flex-column transition" :style="{'paddingLeft': sidebarCollapse ? '64px' : '226px'}">
      <crumbs />
      <topTabbar />
      <div class="mainCenter flex1">
        <transition name="translation" mode="out-in">
          <router-view />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'index',
  data() {
    return {}
  },
  computed: {
    ...mapState(['sidebarCollapse', 'sidebarData', 'sideDefaultActive'])
  },
  watch: {
    sideDefaultActive(newval, oldval) {
      this.$refs.newSidebar.setAtindex(newval)
    }
  },
  mounted() {
    this.$store.commit("setSidebarData", { val: 'tl_home' });
    this.$router.push('/allindex')
  },
  methods: {
    subMenuOpens(index, path) {
      console.log('subMenuOpens', index, path)
    },
    subMenuCloses(index, path) {
      console.log('subMenuCloses', index, path)
    },
    activeChanges(index, path) {
      this.$router.push(index)
    }
  },
}
</script>

<style lang="scss" scoped>
.home_index {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: relative;
}
</style>