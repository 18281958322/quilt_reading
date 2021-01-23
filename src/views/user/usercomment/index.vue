<template>
  <div class="usercomment">
    <div class="all">
      <div class="row">
        <div class="layout-row">
          <div class="layout">
            <el-tabs v-model="activeName" style="width：1000px;" @tb-click="handleClick">
              <el-tab-pane label="用户评论" name="first">
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
                    <el-table-column align="center" type="index" label="序号">
                    </el-table-column>
                    <el-table-column align="center" prop="date" label="用户（UID）">
                    </el-table-column>
                    <el-table-column align="center" prop="name" label="作品名">
                    </el-table-column>
                    <el-table-column align="center" prop="address" label="内容">
                    </el-table-column>
                    <el-table-column align="center" prop="date" label="评论时间">
                    </el-table-column>
                    <el-table-column align="center" label="操作">
                      <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
                        <el-button type="text" size="small">封禁此用户</el-button>
                        <el-button type="text" size="small">通过</el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                </div>
                <div class="layout-data" style="margin-top:20px;">
                  <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                    :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper" :total="400">
                  </el-pagination>
                </div>
              </el-tab-pane>
              <el-tab-pane label="章节评论" name="second">
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
                    <el-table-column align="center" type="index" label="序号">
                    </el-table-column>
                    <el-table-column align="center" prop="date" label="用户（UID）">
                    </el-table-column>
                    <el-table-column align="center" prop="name" label="作品名">
                    </el-table-column>
                    <el-table-column align="center" prop="name" label="章节名">
                    </el-table-column>
                    <el-table-column align="center" prop="address" label="内容">
                    </el-table-column>
                    <el-table-column align="center" prop="date" label="评论时间">
                    </el-table-column>
                    <el-table-column align="center" label="操作">
                      <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
                        <el-button type="text" size="small">封禁此用户</el-button>
                        <el-button type="text" size="small">通过</el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                </div>
                <div class="layout-data" style="margin-top:20px;">
                  <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                    :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper" :total="400">
                  </el-pagination>
                </div>
              </el-tab-pane>
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