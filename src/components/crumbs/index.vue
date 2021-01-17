<template>
  <div class="crumbs" :style="`width: ${cw}`">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="(item, index) in crumbsData" :key="index" :to="{ path: item.path }">{{item.text}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
/**
 * 面包屑组件
 */
export default {
  name: 'crumbs',
  data() {
    return { cw: '200px' }
  },
  created() {
    window.addEventListener("resize", this.cw_disponse, false);
    this.cw_disponse()
  },
  methods: {
    cw_disponse() {
      let screen_w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
      this.cw = (screen_w - 201) + 'px'
    }
  },
  computed: {
    crumbsData() {
      return this.$route.matched.map(item => { return { text: item.meta.title, path: item.path || '/' } })
    }
  }
}
</script>

<style lang="scss">
  @keyframes fade-in {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @-webkit-keyframes fade-in {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @-moz-keyframes fade-in {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  .crumbs {
    .el-breadcrumb {
      font-size: 13px;
    }
    .el-breadcrumb{
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }
    .el-breadcrumb__inner.is-link {
      -webkit-animation: fade-in .2s;
      animation: fade-in 0.2s;
      animation-duration: .2s;
    }
    .el-breadcrumb__item {
      -webkit-animation: fade-in .2s;
      animation: fade-in 0.2s;
      animation-duration: .2s;
    }
  }
</style>

<style lang="scss" scoped>
  .crumbs {
    position: fixed;
    padding: 0 0 0 20px;
    box-sizing: border-box;
    z-index: 998;
    top: 61px;
    left: 201px;
    height: 40px;
    line-height: 40px;
    overflow-y: hidden;
    overflow-x: auto;
    display: block !important;
    border-bottom: 1px #dadada solid;
  }
</style>