<template>
  <div class="row-title">
    <div class="row-cell">
      <div class="cell">
        <img src="../../assets/logo.png" alt="">
      </div>
      <div class="cell-1">
        <p>被窝读书</p>
      </div>
    </div>
    <div class="layout">
      <router-link
        :class="['layout-cell', { active: navActive(nav) }]"
        v-for="(nav, index) in list"
        :key="index"
        :to="nav.route"
      >
        <div class="box">{{nav.title}}</div>
      </router-link>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" scoped>
  @import './style.scss';
</style>