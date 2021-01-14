<template>
  <div class="content-cell">
    <Home></Home>
    <div class="index-cell">
      <div class="row">
        <div class="layout">
          <router-link class="box" exact to="/novel">
            <i class="el-icon-user"></i>
            <p>小说</p>
          </router-link>
          <div class="bottom-cell"></div>
        </div>
        <div class="layout">
          <router-link class="box" to="/comics">
            <i class="el-icon-chat-dot-square"></i>
            <p>漫画</p>
          </router-link>
        </div>
      </div>
      <div class="centent">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" scoped>
  @import './style.scss';
</style>