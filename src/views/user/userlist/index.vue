<template>
  <div class="userlist">
    <div class="all">
      <div class="row">
        <div class="layout-row">
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
              <el-table-column type="selection" align="center" width="50">
              </el-table-column>
              <el-table-column prop="name" align="center" label="昵称（UID）">
              </el-table-column>
              <el-table-column prop="name" align="center" label="手机号">
              </el-table-column>
              <el-table-column prop="name" align="center" label="性别">
              </el-table-column>
              <el-table-column prop="name" align="center" label="来源">
              </el-table-column>
              <el-table-column prop="name" align="center" label="市场渠道">
              </el-table-column>
              <el-table-column prop="name" align="center" label="是否会员">
              </el-table-column>
              <el-table-column prop="name" align="center" label="余额">
              </el-table-column>
              <el-table-column prop="name" align="center" label="现金">
              </el-table-column>
              <el-table-column prop="name" align="center" label="注册时间">
              </el-table-column>
              <el-table-column prop="name" align="center" label="状态">
              </el-table-column>
              <el-table-column prop="name" align="center" label="操作" width="200">
                <template slot-scope="scope">
                  <el-button @click="handleClick(scope.row)" type="text" size="small">开通会员</el-button>
                  <el-button @click="RechargeClick(scope.row)" type="text" size="small">充值</el-button>
                  <el-button @click="editClick()" type="text" size="small">编辑</el-button>
                  <el-button @click="DelClick(scope.row)" type="text" size="small">删除</el-button>
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
    <!-- 删除 -->
    <el-dialog title="提示" :visible.sync="Del" width="30%" :before-close="handleClose">
      <div class="opem-men">
        <p>你确定删除吗？</p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="Del = false">取 消</el-button>
        <el-button size="mini" type="primary" @click="Del = false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 开通会员 -->
    <el-dialog title="开通会员" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <div class="opem-men">
        <p>开通天数</p>
        <el-input v-model="input" style="margin-left:10px;width:268px;" placeholder="请输入内容"></el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="dialogVisible = false">取 消</el-button>
        <el-button size="mini" type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 充值 -->
    <el-dialog title="充值" :visible.sync="Recharge" width="30%" :before-close="handleClose">
      <div class="opem-men">
        <p style="line-height: 16px;">充值货币</p>
        <el-radio v-model="radio" style="margin-left:10px;" label="1">书币</el-radio>
        <el-radio v-model="radio" label="2">金币</el-radio>
      </div>
      <div class="opem-men">
        <p>充值数额</p>
        <el-input v-model="input" style="margin-left:10px;width:268px;" placeholder="请输入内容"></el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="Recharge = false">取 消</el-button>
        <el-button size="mini" type="primary" @click="Recharge = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" scoped>
  @import './style.scss';
</style>

<style>
  .el-dialog__footer {
    text-align: center;
  }
</style>