<template>
  <div class="usercomment">
    <div class="usercomment-cell">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">用户</el-breadcrumb-item>
        <el-breadcrumb-item>用户评论</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="all">
      <div class="row">
        <div class="layout-row">
          <div class="layout-title">
            <p>用户评论</p>
          </div>
          <div class="layout" style="width：100%;">
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="用户管理" name="first">
                <div class="tabel">
                  <div class="idnex-box">
                    <el-select style="width: 148px;" v-model="value" placeholder="全部状态">
                      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                  </div>
                  <div class="idnex-box">
                    <el-select style="width: 148px;padding:0 10px;" v-model="value" placeholder="全部终端">
                      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                  </div>
                  <div class="idnex-box">
                    <el-input v-model="input" placeholder="请输入内容"></el-input>
                  </div>
                  <div class="idnex-box" style="padding:0 10px;">
                    <el-button type="primary">搜索</el-button>
                  </div>
                </div>
                <div class="cell-pull">
                  <el-table :data="tableData" style="width: 100%">
                    <el-table-column type="index" label="序号">
                    </el-table-column>
                    <el-table-column prop="date" label="用户（UID）">
                    </el-table-column>
                    <el-table-column prop="name" label="作品名">
                    </el-table-column>
                    <el-table-column prop="address" label="内容">
                    </el-table-column>
                    <el-table-column prop="address" label="评论时间">
                    </el-table-column>
                    <el-table-column>
                      <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
                        <el-button type="text" size="small">封禁此用户</el-button>
                        <el-button type="text" size="small">通过</el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                </div>
              </el-tab-pane>
              <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
            </el-tabs>
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