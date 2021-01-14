<template>
  <div class="user-cell">
    <Home></Home>
    <div class="index-cell">
      <div class="row">
        <div class="layout">
          <router-link class="box" exact to="/userlist">
            <i class="el-icon-user"></i>
            <p>用户列表</p>
          </router-link>
          <div class="bottom-cell"></div>
        </div>
        <div class="layout">
          <router-link class="box" to="/usercomment">
            <i class="el-icon-chat-dot-square"></i>
            <p>用户评论</p>
          </router-link>
        </div>
        <div class="layout">
          <router-link class="box" to="/customerfeedback">
            <i class="el-icon-edit-outline"></i>
            <p>用户反馈</p>
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