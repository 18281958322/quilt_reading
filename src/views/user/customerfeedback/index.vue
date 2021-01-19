<template>
  <div class="customerfeedback">
    <div class="all">
      <div class="row">
        <div class="layout-row">
          <div class="layout-title">
            <p>用户反馈</p>
          </div>
          <div class="layout">
            <div class="layout-cell layout-pull">
              <el-input v-model="input" placeholder="UID/手机号/昵称"></el-input>
            </div>
            <div class="layout-cell layout-pull">
              <el-button type="primary">搜索</el-button>
            </div>
          </div>
          <div class="layout-data">
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="date" label="用户（UID）">
              </el-table-column>
              <el-table-column prop="name" label="反馈内容">
              </el-table-column>
              <el-table-column prop="address" label="联系方式">
              </el-table-column>
              <el-table-column prop="address" label="回复内容">
              </el-table-column>
              <el-table-column prop="address" label="反馈时间">
              </el-table-column>
              <el-table-column>
                <template slot-scope="scope">
                  <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="layout-data">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
              :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100"
              layout="total, sizes, prev, pager, next, jumper" :total="400">
            </el-pagination>
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