<template>
  <div class="setup">
    <div class="content">
      <div class="row">
        <div class="layout">
          <div class="layout-cell">
            <div class="layout-border">
              <div class="bix">
                <p>
                  1、为了数据更方便对接，系统提供了一套接口用于对接数据</p>
                <p>2、考虑系统安全，接口调用需要授权key</p>
              </div>
              <div class="box">
                <p>当前key：1aa46341978026554e760a518316c1aa</p>
                <el-button size="small" type="danger">点击复制</el-button>
              </div>
            </div>
          </div>
          <div class="layout-cell">
            <el-button size="small" type="primary">重新生成密匙</el-button>
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