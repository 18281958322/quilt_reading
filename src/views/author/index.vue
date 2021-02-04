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
              <el-button size="medium" @click="Notice = true" type="primary">新增公告</el-button>
            </div>
          </div>
          <div class="layout-center">
            <el-table tooltip-effect="dark" @selection-change="handleSelectionChange" ref="multipleTable" :data="tableData" style="width: 100%">
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
                  <el-button @click="seeClick(scope.row)" type="text" size="small">查看</el-button>
                  <el-button @click="editClick(scope.row)" type="text" size="small">编辑</el-button>
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
    <!-- 新增公告 -->
    <el-dialog title="提示" :visible.sync="Notice" width="30%" :before-close="handleClose">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="标题" prop="name" label-width="70px">
          <el-input style="width:300px" v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="内容" prop="desc" label-width="70px">
          <el-input style="width:300px" type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item label="状态" prop="resource" label-width="70px">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="已上线"></el-radio>
            <el-radio label="已下线"></el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <span slot="footer" style="display: flex;justify-content:center;" class="dialog-footer">
        <el-button size="mini" @click="Notice = false">取 消</el-button>
        <el-button size="mini" type="primary" @click="Notice = false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 查看 -->
    <el-dialog title="提示" :visible.sync="see" width="30%" :before-close="handleClose">
      <div class="arr">
          <p>{{seeTexe}}</p>
      </div>
      <span slot="footer" style="display: flex;justify-content:center;" class="dialog-footer">
        <el-button size="mini" type="primary" @click="see = false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 删除 -->
    <el-dialog title="提示" :visible.sync="deleteSync" width="30%" :before-close="handleClose">
      <div class="arr">
          <p>确定删除该公告么？</p>
      </div>
      <span slot="footer" style="display: flex;justify-content:center;" class="dialog-footer">
        <el-button size="mini" @click="deleteSync = false">取 消</el-button>
        <el-button size="mini" type="primary" @click="deleteSync = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" scoped>
  @import './style.scss';
</style>