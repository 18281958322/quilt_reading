<template>
  <div class="comics">
    <div class="user-cell">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">内容</el-breadcrumb-item>
        <el-breadcrumb-item>漫画</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="all">
      <div class="row">
        <div class="layout-row">
          <div class="layout-title">
            <p>漫画</p>
          </div>
          <div class="layout">
            <div class="layout-cell" style="margin-right:5px;">
              <el-select style="width:148px" v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="layout-cell layout-pull">
              <el-select style="width:148px" v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="layout-cell layout-pull">
              <el-select style="width:148px" v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="layout-cell layout-pull">
              <el-input v-model="input" placeholder="UID/手机号/昵称"></el-input>
            </div>
            <div class="layout-cell layout-pull">
              <el-button type="primary">搜索</el-button>
            </div>
          </div>
          <div class="layout-data">
            <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%"
              @selection-change="handleSelectionChange">
              <el-table-column type="selection" width="55">
              </el-table-column>
              <el-table-column prop="name" label="昵称（UID）">
              </el-table-column>
              <el-table-column prop="name" label="手机号">
              </el-table-column>
              <el-table-column prop="name" label="性别">
              </el-table-column>
              <el-table-column prop="name" label="来源">
              </el-table-column>
              <el-table-column prop="name" label="市场渠道">
              </el-table-column>
              <el-table-column prop="name" label="是否会员">
              </el-table-column>
              <el-table-column prop="name" label="余额">
              </el-table-column>
              <el-table-column prop="name" label="现金">
              </el-table-column>
              <el-table-column prop="name" label="注册时间">
              </el-table-column>
              <el-table-column prop="name" label="状态">
              </el-table-column>
              <el-table-column prop="name" label="操作" width="200">
                <template slot-scope="scope">
                  <el-button @click="handleClick(scope.row)" type="text" size="small">开通会员</el-button>
                  <el-button type="text" size="small">充值</el-button>
                  <el-button type="text" size="small">编辑</el-button>
                  <el-button type="text" size="small">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div style="margin-top: 20px">
              <el-button type="danger" @click="toggleSelection([tableData[1], tableData[2]])">批量删除</el-button>
            </div>
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

<style>
.el-tabs{
  width: 100%;
}

.el-table{
  font-size: 13px;
}
.el-tabs__item{
  font-size: 13px;
}
.el-input{
  font-size: 13px;
}
</style>