<template>
  <div class="crumbs" :style="`width: ${cw}`">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="item in crumbsData" :key="item.path" :to="{ path: item.path }">{{item.text}}</el-breadcrumb-item>
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
    },
  }
}
</script>

<style lang="scss">
  @keyframes fade-in {
    0% {
        opacity: 1;
        -ms-transform: translateX(0) scale(0.8);
        -moz-transform: translateX(0) scale(0.8);
        -webkit-transform: translateX(0) scale(0.8);
        transform: translateX(0) scale(0.8);
    }
    50% {
      opacity: 0.1;
      -ms-transform: translateX(100%) scale(1.2);
      -moz-transform: translateX(100%) scale(1.2);
      -webkit-transform: translateX(100%) scale(1.2);
      transform: translateX(100%) scale(1.2);
    }
    100% {
      opacity: 1;
      -ms-transform: translateX(0) scale(1);
      -moz-transform: translateX(0) scale(1);
      -webkit-transform: translateX(0) scale(1);
      transform: translateX(0) scale(1);
    }
  }

  @-webkit-keyframes fade-in {
    0% {
        opacity: 0.3;
        -ms-transform: translateX(0);
        -moz-transform: translateX(0);
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
    50% {
      opacity: 0.6;
      -ms-transform: translateX(100%);
      -moz-transform: translateX(100%);
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
    }
    100% {
      opacity: 1;
      -ms-transform: translateX(0);
      -moz-transform: translateX(0);
      -webkit-transform: translateX(0);
      transform: translateX(0);
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
      -webkit-animation: fade-in 0.5s ease;
      animation: fade-in 0.5s ease;
      -moz-animation: fade-in 0.5s ease;
    }
    .el-breadcrumb__item {
      -webkit-animation: fade-in 0.5s ease;
      animation: fade-in 0.5s ease;
      -moz-animation: fade-in 0.5s ease;
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