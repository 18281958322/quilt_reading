<template>
  <div class="author">
    <div class="all">
      <div class="row">
        <div class="layout">
          <div class="layout-float">
            <div class="layout-cell">
              <el-input v-model="input" placeholder="请输入内容"></el-input>
              <el-button size="medium" style="margin-left:10px;" type="primary">搜索</el-button>
            </div>
            <div class="layout-cell">
              <el-button  size="medium" type="primary">新增公告</el-button>
            </div>
          </div>
          <div class="layout-center">
            <el-table :data="tableData" style="width: 100%">
              <el-table-column align="center" type="index" label="序号" width="50">
              </el-table-column>
              <el-table-column prop="address" align="center" label="标题">
              </el-table-column>
              <el-table-column prop="address" align="center" label="内容">
              </el-table-column>
              <el-table-column prop="date" align="center" label="发布时间">
              </el-table-column>
              <el-table-column prop="date" align="center" label="展示顺序">
              </el-table-column>
              <el-table-column prop="name" align="center" label="状态">
              </el-table-column>
              <el-table-column prop="name" label="操作" align="center" width="200">
                <template slot-scope="scope">
                  <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
                  <el-button type="text" size="small">排序</el-button>
                  <el-button type="text" size="small">查看</el-button>
                  <el-button type="text" size="small">编辑</el-button>
                  <el-button type="text" size="small">下线</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="layout-center-page">
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