<template>
  <div class="home">
    <div class="row">
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
          <div class="layout-cell" :class="activeClass == index ? 'active':''" v-for="(item,index) in list" :key="item.id" @click="clickall(item.id,index)">
            <div class="box">{{item.value}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" scoped>
  @import './style.scss';
</style>