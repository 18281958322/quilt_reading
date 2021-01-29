<template>
  <div class="setup">
    <div class="content">
      <div class="row">
        <div class="layout">
          <div class="layout-cell">
            <div class="data-title">
              <p>短信类型</p>
            </div>
            <el-select v-model="value" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select> 
          </div>
          <div class="layout-cell">
            <div class="data-title">
              <p>AccessKey ID</p>
            </div>
            <el-input style="width:268px;" v-model="input" placeholder="请输入内容"></el-input>
          </div>
          <div class="layout-cell">
            <div class="data-title">
              <p>AccessKey Secret</p>
            </div>
            <el-input style="width:268px;" v-model="input" placeholder="请输入内容"></el-input>
          </div>
          <div class="layout-cell">
            <div class="data-title">
              <p>阿里短信签名</p>
            </div>
            <el-input style="width:268px;" v-model="input" placeholder="请输入内容"></el-input>
          </div>
          <div class="layout-cell">
            <div class="data-title">
              <p>阿里短信模板CODE</p>
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