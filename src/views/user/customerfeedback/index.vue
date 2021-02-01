<template>
  <div class="customerfeedback">
    <div class="all">
      <div class="row">
        <div class="layout-row">
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
              <el-table-column align="center" type="index" label="序号" width="50">
              </el-table-column>
              <el-table-column align="center" prop="name" label="用户（UID）">
              </el-table-column>
              <el-table-column align="center" prop="address" label="反馈内容">
              </el-table-column>
              <el-table-column align="center" prop="name" label="联系方式">
              </el-table-column>
              <el-table-column align="center" prop="address" label="回复内容">
              </el-table-column>
              <el-table-column align="center" prop="date" label="反馈时间">
              </el-table-column>
              <el-table-column align="center" label="操作">
                <template slot-scope="scope">
                  <el-button @click="replyClick(scope.row)" type="text" size="small">回复</el-button>
                  <el-button @click="delClick(scope.row)" type="text" size="small">删除</el-button>
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
    <!-- 回复 -->
    <el-dialog title="回复" :visible.sync="reply" width="50%" :before-close="handleClose">
      <div class="arr-data">
        <div class="arr-cell">
          <div class="data-pull">
            <p style="width:86px;font-size:13px;">用户（UID）</p>
          </div>
          <div class="data-pull">
            <p>张自忠</p>
          </div>
        </div>
        <div class="arr-cell">
          <div class="data-pull">
            <p style="width:86px;font-size:13px;">反馈内容</p>
          </div>
          <div class="data-pull">
            <p>然后，所有的人开始排座位，原本歪七扭八的座位被快速排好，
              地上的纸屑在一分钟之内被收的干干净净，一男一女两个值日生迅速起立，
              快步走到讲台动手擦起黑板，擦完后还自动打板擦，
              各种颜色的粉笔也被排好放在该放的位置。四个男生自动站起来，分别往讲台、
              右侧玻璃、墙角、置物柜等四个地方走去，快手快脚的把里头的怪东西丢进黑色塑胶袋内，
              绑好塑胶袋后，四个人回到座位。</p>
          </div>
        </div>
        <div class="arr-cell">
          <div class="data-pull">
            <p style="width:86px;font-size:13px;">问题截图</p>
          </div>
          <div class="data-pull">
            <div class="box-img">
              <img src="../../../assets/logo.png" alt="">
            </div>
          </div>
        </div>
        <div class="arr-cell">
          <div class="data-pull">
            <p style="width:86px;font-size:13px;">回复内容</p>
          </div>
          <div class="data-pull">
            <el-input type="textarea" style="width:550px;" :rows="2" placeholder="请输入内容" v-model="textarea">
            </el-input>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" type="primary" @click="reply = false">回 复</el-button>
        <el-button size="mini" @click="reply = false">取 消</el-button>
      </span>
    </el-dialog>
    <!-- 删除 -->
    <el-dialog title="删除" :visible.sync="del" width="30%" :before-close="handleClose">
      <span>确认删除该内容？</span>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="del = false">取 消</el-button>
        <el-button size="mini" type="primary" @click="del = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" scoped>
  @import './style.scss';
</style>