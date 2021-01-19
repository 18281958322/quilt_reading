<template>
  <div class="crumbs" :style="`width: ${cw}`">
    <el-breadcrumb separator-class="el-icon-arrow-right">
       <transition-group name="crumbAnimation">
         <el-breadcrumb-item v-for="item in crumbsData" :key="item.path" :to="{ path: item.path }">{{item.text}}</el-breadcrumb-item>
       </transition-group>
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
  .crumbAnimation-enter {
    opacity: 0;
    -ms-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    transform: translateX(-100%);
  }

  .crumbAnimation-enter-active {
    transition: all 1s;
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
    transition: all .4s;
  }

  .crumbAnimation-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
    position: absolute;
    opacity: 0;
    -ms-transform: translateX(100%);
    -moz-transform: translateX(100%);
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }

  .crumbs {
    .el-breadcrumb {
      font-size: 12px;
    }
    .el-breadcrumb{
      font-size: 13px;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
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
    background-color: #f5f6fa;
  }
</style>