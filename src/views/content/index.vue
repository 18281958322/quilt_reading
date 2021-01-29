<template>
  <div class="content-cell">
      <div class="content">
      <div class="row">
        <div class="layout">
          <div class="layout-cell">
            <div class="data-title">
              <p>QQ号</p>
            </div>
            <el-input style="width:268px;" v-model="input" placeholder="请输入内容"></el-input>
          </div>
          <div class="layout-cell">
            <div class="data-title">
              <p>邮箱</p>
            </div>
            <el-input style="width:268px;" v-model="input" placeholder="请输入内容"></el-input>
          </div>
          <div class="layout-cell">
            <div class="data-title">
              <p>电话</p>
            </div>
            <el-input style="width:268px;" v-model="input" placeholder="请输入内容"></el-input>
          </div>
          <div class="layout-cell">
            <div class="data-title">
              <p>公司名称</p>
            </div>
            <el-input style="width:268px;" v-model="input" placeholder="请输入内容"></el-input>
          </div>
          <div class="layout-cell">
            <div class="data-title">
              <p>微信</p>
            </div>
            <el-input style="width:268px;" v-model="input" placeholder="请输入内容"></el-input>
          </div>
          <div class="layout-cell">
            <el-button style="margin-left: 170px;" type="primary">保 存</el-button>
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