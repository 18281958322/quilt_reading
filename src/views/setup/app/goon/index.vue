<template>
  <div class="goon">
    <div class="content">
      <div class="row">
        <div class="layout">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <!-- 功能开关 -->
            <div class="layout-cell">
              <div class="layout-pull">
                <div class="pull-left">
                  <div class="cell-pull">
                    <div class="padd">
                      <p class="cell-color"></p>
                    </div>
                  </div>
                  <div class="cell-pull">
                    <p>功能开关</p>
                  </div>
                </div>
              </div>
              <div class="data-item">
                <div class="cell-item">
                  <div class="cell-flex">
                    <el-switch style="margin-right: 10px" v-model="value1" inactive-text="充值开关">
                    </el-switch>
                    <el-switch style="margin-right: 10px" v-model="value1" inactive-text="会员开关">
                    </el-switch>
                    <el-switch style="margin-right: 10px" v-model="value1" inactive-text="提现开关">
                    </el-switch>
                    <el-switch style="margin-right: 10px" v-model="value1" inactive-text="AI朗读开关">
                    </el-switch>
                  </div>
                </div>
              </div>
            </div>
            <!-- 基础信息 -->
            <div class="layout-cell">
              <div class="layout-pull">
                <div class="pull-left">
                  <div class="cell-pull">
                    <div class="padd">
                      <p class="cell-color"></p>
                    </div>
                  </div>
                  <div class="cell-pull">
                    <p>基础信息</p>
                  </div>
                </div>
              </div>
              <div class="data-item">
                <div class="cell-item">
                  <el-form-item label="应用名称" prop="name" label-width="160px">
                    <el-input style="width:268px;" v-model="ruleForm.name"></el-input>
                  </el-form-item>
                  <el-form-item label="Logo" prop="name" label-width="160px">
                    <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/"
                      :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" multiple
                      :limit="3" :on-exceed="handleExceed" :file-list="fileList">
                      <el-button size="small" type="primary">点击上传</el-button>
                    </el-upload>
                  </el-form-item>
                </div>
              </div>
            </div>
            <!-- 货币设置 -->
            <div class="layout-cell">
              <div class="layout-pull">
                <div class="pull-left">
                  <div class="cell-pull">
                    <div class="padd">
                      <p class="cell-color"></p>
                    </div>
                  </div>
                  <div class="cell-pull">
                    <p>货币设置</p>
                  </div>
                </div>
              </div>
              <div class="data-item">
                <div class="cell-item">
                  <el-form-item label="【提现】货币名称" prop="name" label-width="160px">
                    <el-input style="width:268px;" v-model="ruleForm.name"></el-input>
                  </el-form-item>
                  <el-form-item label="货币提现比例 " prop="name" label-width="160px">
                    <el-input style="width:268px;" v-model="ruleForm.name"></el-input>
                  </el-form-item>
                  <el-form-item label="【提现】货币说明" prop="name" label-width="160px">
                    <el-input type="textarea" style="width:268px;" v-model="ruleForm.name"></el-input>
                  </el-form-item>
                </div>
              </div>
            </div>
            <!-- 支付说明 -->
            <div class="layout-cell">
              <div class="layout-pull">
                <div class="pull-left">
                  <div class="cell-pull">
                    <div class="padd">
                      <p class="cell-color"></p>
                    </div>
                  </div>
                  <div class="cell-pull">
                    <p>支付说明</p>
                  </div>
                </div>
              </div>
              <div class="data-item">
                <div class="cell-item">
                  <el-form-item label="活动形式" label-width="160px">
                    <el-input type="textarea" style="width:268px;" v-model="ruleForm.desc"></el-input>
                  </el-form-item>
                  <el-form-item label="活动形式" label-width="160px">
                    <el-input type="textarea" style="width:268px;" v-model="ruleForm.desc"></el-input>
                  </el-form-item>
                </div>
              </div>
            </div>
            <!-- 月票设置 -->
            <div class="layout-cell">
              <div class="layout-pull">
                <div class="pull-left">
                  <div class="cell-pull">
                    <div class="padd">
                      <p class="cell-color"></p>
                    </div>
                  </div>
                  <div class="cell-pull">
                    <p>月票设置</p>
                  </div>
                </div>
              </div>
              <div class="data-item">
                <div class="cell-item">
                  <div class="cell-flex">
                    <el-switch style="margin-right: 10px" v-model="value1" inactive-text="月票开关">
                    </el-switch>
                  </div>
                </div>
              </div>
            </div>
            <!-- 打赏设置 -->
            <div class="layout-cell">
              <div class="layout-pull">
                <div class="pull-left">
                  <div class="cell-pull">
                    <div class="padd">
                      <p class="cell-color"></p>
                    </div>
                  </div>
                  <div class="cell-pull">
                    <p>打赏设置</p>
                  </div>
                </div>
              </div>
              <div class="data-item">
                <div class="cell-item">
                  <div class="cell-flex">
                    <el-switch style="margin-right: 10px" v-model="value1" inactive-text="打赏开关">
                    </el-switch>
                  </div>
                  <el-form-item label="作品每月投票限制" prop="name" label-width="160px">
                    <el-input style="width:268px;" v-model="ruleForm.name"></el-input>
                  </el-form-item>
                  <el-form-item label="月票货币兑换比例" prop="name" label-width="160px">
                    <el-input style="width:268px;" v-model="ruleForm.name"></el-input>
                  </el-form-item>
                  <el-form-item label="月票选项" prop="name" label-width="160px">
                    <div class="time-text">
                      <p>选项名称为</p>
                      <el-input style="width:60px;margin: 0 10px;" v-model="input"></el-input>
                      <p>需投</p>
                      <el-input style="width:60px;margin: 0 10px;" v-model="input"></el-input>
                      <p>张月票</p>
                    </div>
                  </el-form-item>
                </div>
              </div>
            </div>
            <!-- 签到设置 -->
            <div class="layout-cell">
              <div class="layout-pull">
                <div class="pull-left">
                  <div class="cell-pull">
                    <div class="padd">
                      <p class="cell-color"></p>
                    </div>
                  </div>
                  <div class="cell-pull">
                    <p>签到设置</p>
                  </div>
                </div>
              </div>
              <div class="data-item">
                <div class="cell-item">
                  <el-form-item label="看视频奖励" label-width="160px">
                    <div class="time-text">
                      <p>签到后看视频再奖励</p>
                      <el-input style="width:60px;margin: 0 10px;" v-model="input"></el-input>
                      <p>金币</p>
                    </div>
                  </el-form-item>
                  <el-form-item label="连续签到奖励" label-width="160px">
                    <div class="time-text">
                      <p>连续签到</p>
                      <el-input style="width:60px;margin: 0 10px;" v-model="input"></el-input>
                      <p>天可获得</p>
                      <el-input style="width:60px;margin: 0 10px;" v-model="input"></el-input>
                      <p>金币</p>
                    </div>
                  </el-form-item>
                  <el-form-item label="补签要求" prop="name" label-width="160px">
                    <div class="time-text">
                      <p>补充需消耗</p>
                      <el-input style="width:60px;margin: 0 10px;" v-model="input"></el-input>
                      <p>金币</p>
                    </div>
                  </el-form-item>
                  <el-form-item label="看视频补签" label-width="160px">
                    <el-switch style="margin-right: 10px" v-model="value1">
                    </el-switch>
                  </el-form-item>
                  <el-form-item label="签到说明" label-width="160px">
                    <el-input type="textarea" style="width:268px;" v-model="ruleForm.desc"></el-input>
                  </el-form-item>
                  <el-form-item label="高级选项" label-width="160px">
                    <div class="caret-border" @click="dialogVisible = true">
                      <i class="el-icon-caret-top"></i>
                    </div>
                    <el-dialog center title="签到奖励设置" :visible.sync="dialogVisible" width="70%"
                      :before-close="handleClose">
                      <div class="dialog-box">
                        <div class="box" :class="isActive == index ?'item-box-active': ''"
                          @click="monClick(list.value,index)" v-for="(list,index) in mon" :key="index">
                          <div class="box-1">第{{list.item}}天</div>
                          <div class="box-1">+{{list.value}}金币</div>
                        </div>
                      </div>
                      <span slot="footer" class="dialog-footer">
                        <el-button type="primary" @click="dialogVisible = false">设置奖励</el-button>
                      </span>
                    </el-dialog>
                  </el-form-item>
                </div>
              </div>
            </div>
            <!-- 阅读倒计时奖励设置 -->
            <div class="layout-cell">
              <div class="layout-pull">
                <div class="pull-left">
                  <div class="cell-pull">
                    <div class="padd">
                      <p class="cell-color"></p>
                    </div>
                  </div>
                  <div class="cell-pull">
                    <p>阅读倒计时奖励设置</p>
                  </div>
                </div>
              </div>
              <div class="data-item">
                <div class="cell-item">
                  <el-form-item label="倒计时时长（秒）" prop="name" label-width="160px">
                    <el-input style="width:268px;" v-model="ruleForm.name"></el-input>
                  </el-form-item>
                  <el-form-item label="阅读倒计时奖励" prop="name" label-width="160px">
                    <div class="time-text">
                      <p>最低奖励</p>
                      <el-input style="width:60px;margin: 0 10px;" v-model="input"></el-input>
                      <p>金币，</p>
                      <p>最高奖励</p>
                      <el-input style="width:60px;margin: 0 10px;" v-model="input"></el-input>
                      <p>金币</p>
                    </div>
                  </el-form-item>
                  <el-form-item label="奖励上限时长（分钟）" prop="name" label-width="160px">
                    <el-input style="width:268px;" v-model="ruleForm.name"></el-input>
                  </el-form-item>
                  <el-form-item label="好友分成比率" prop="name" label-width="160px">
                    <el-input style="width:268px;" v-model="ruleForm.name"></el-input>
                  </el-form-item>
                </div>
              </div>
            </div>
            <!-- 新用户奖励设置 -->
            <div class="layout-cell">
              <div class="layout-pull">
                <div class="pull-left">
                  <div class="cell-pull">
                    <div class="padd">
                      <p class="cell-color"></p>
                    </div>
                  </div>
                  <div class="cell-pull">
                    <p>新用户奖励设置</p>
                  </div>
                </div>
              </div>
              <div class="data-item">
                <div class="cell-item">
                  <el-form-item label="新用户条件设置" prop="name" label-width="160px">
                    <div class="time-text">
                      <p>注册后</p>
                      <el-input style="width:60px;margin: 0 10px;" v-model="input"></el-input>
                      <p>天内得用户为新用户</p>
                    </div>
                  </el-form-item>
                  <el-form-item label="新用户注册奖励" prop="name" label-width="160px">
                    <el-input style="width:268px;" v-model="ruleForm.name"></el-input>
                  </el-form-item>
                </div>
              </div>
            </div>
            <!-- 提现设置 -->
            <div class="layout-cell">
              <div class="layout-pull">
                <div class="pull-left">
                  <div class="cell-pull">
                    <div class="padd">
                      <p class="cell-color"></p>
                    </div>
                  </div>
                  <div class="cell-pull">
                    <p>提现设置</p>
                  </div>
                </div>
              </div>
              <div class="data-item">
                <div class="cell-item">
                  <el-form-item label="每日提现次数限制" prop="name" label-width="160px">
                    <el-switch style="margin-right: 10px" v-model="value1" inactive-text="打赏开关">
                    </el-switch>
                    <div class="time-text">
                      <p>同一用户，一天可提现</p>
                      <el-input style="width:60px;margin: 0 10px;" v-model="input"></el-input>
                      <p>次</p>
                    </div>
                  </el-form-item>
                  <el-form-item label="自动打款开关" label-width="160px">
                    <el-switch style="margin-right: 10px" v-model="value1">
                    </el-switch>
                  </el-form-item>
                  <el-form-item label="自动打款金额限制" prop="name" label-width="160px">
                    <div class="time-text">
                      <p>提现超过</p>
                      <el-input style="width:60px;margin: 0 10px;" v-model="input"></el-input>
                      <p>元，需要人工审核</p>
                    </div>
                  </el-form-item>
                  <el-form-item label="提现规则" label-width="160px">
                    <el-input type="textarea" style="width:268px;" v-model="ruleForm.name"></el-input>
                  </el-form-item>
                  <el-form-item label="支付宝绑定说明" label-width="160px">
                    <el-input type="textarea" style="width:268px;" v-model="ruleForm.name"></el-input>
                  </el-form-item>
                </div>
              </div>
            </div>
            <!-- 邀请好友设置 -->
            <div class="layout-cell">
              <div class="layout-pull">
                <div class="pull-left">
                  <div class="cell-pull">
                    <div class="padd">
                      <p class="cell-color"></p>
                    </div>
                  </div>
                  <div class="cell-pull">
                    <p>邀请好友设置</p>
                  </div>
                </div>
              </div>
              <div class="data-item">
                <div class="cell-item">
                  <el-form-item label="邀请好友标题" prop="name" label-width="160px">
                    <el-input style="width:268px;" v-model="ruleForm.name"></el-input>
                  </el-form-item>
                  <el-form-item label="副标题" label-width="160px">
                    <el-input style="width:268px;" v-model="formLabelAlign.name"></el-input>
                  </el-form-item>
                  <el-form-item label="邀请好友奖励" prop="name" label-width="160px">
                    <div class="time-text">
                      <p>邀请好友第一天，好友阅读</p>
                      <el-input style="width:60px;margin: 0 10px;" v-model="input"></el-input>
                      <p>分钟，</p>
                      <p>奖励</p>
                      <el-input style="width:60px;margin: 0 10px;" v-model="input"></el-input>
                      <p>元</p>
                    </div>
                    <div class="time-text">
                      <p>邀请好友第二天，好友阅读</p>
                      <el-input style="width:60px;margin: 0 10px;" v-model="input"></el-input>
                      <p>分钟，</p>
                      <p>奖励</p>
                      <el-input style="width:60px;margin: 0 10px;" v-model="input"></el-input>
                      <p>元</p>
                    </div>
                    <div class="time-text">
                      <p>邀请好友第三天，好友阅读</p>
                      <el-input style="width:60px;margin: 0 10px;" v-model="input"></el-input>
                      <p>分钟，</p>
                      <p>奖励</p>
                      <el-input style="width:60px;margin: 0 10px;" v-model="input"></el-input>
                      <p>元</p>
                    </div>
                  </el-form-item>
                  <el-form-item label="邀请规则" prop="desc" label-width="160px">
                    <el-input type="textarea" style="width:268px;" v-model="ruleForm.desc"></el-input>
                  </el-form-item>
                </div>
              </div>
            </div>
            <!-- APP下载地址 -->
            <div class="layout-cell">
              <div class="layout-pull">
                <div class="pull-left">
                  <div class="cell-pull">
                    <div class="padd">
                      <p class="cell-color"></p>
                    </div>
                  </div>
                  <div class="cell-pull">
                    <p>APP下载地址</p>
                  </div>
                </div>
              </div>
              <div class="data-item">
                <div class="cell-item">
                  <el-form-item label="Android下载地址" label-width="160px">
                    <el-input style="width:268px;" v-model="formLabelAlign.name"></el-input>
                  </el-form-item>
                  <el-form-item label="iOS下载地址" label-width="160px">
                    <el-input style="width:268px;" v-model="formLabelAlign.name"></el-input>
                  </el-form-item>
                </div>
              </div>
            </div>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogVisible: false,
        isActive: -1,
        fileList: [{
            name: 'food.jpeg',
            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
          },
          {
            name: 'food2.jpeg',
            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
          }
        ],
        input: '',
        value1: true,
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [{
              required: true,
              message: '请输入活动名称',
              trigger: 'blur'
            },
            {
              min: 3,
              max: 5,
              message: '长度在 3 到 5 个字符',
              trigger: 'blur'
            }
          ],
          region: [{
            required: true,
            message: '请选择活动区域',
            trigger: 'change'
          }],
          date1: [{
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change'
          }],
          date2: [{
            type: 'date',
            required: true,
            message: '请选择时间',
            trigger: 'change'
          }],
          type: [{
            type: 'array',
            required: true,
            message: '请至少选择一个活动性质',
            trigger: 'change'
          }],
          resource: [{
            required: true,
            message: '请选择活动资源',
            trigger: 'change'
          }],
          desc: [{
            required: true,
            message: '请填写活动形式',
            trigger: 'blur'
          }]
        },
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        },
        mon: [{
          item: "1",
          value: "50"
        }, {
          item: "2",
          value: "20"
        }, {
          item: "3",
          value: "10"
        }, {
          item: "4",
          value: "10"
        }, {
          item: "5",
          value: "10"
        }, {
          item: "6",
          value: "25"
        }, {
          item: "7",
          value: "120"
        }, {
          item: "8",
          value: "100"
        }, {
          item: "第9天",
          value: "120"
        }, {
          item: "10",
          value: "100"
        }, {
          item: "11",
          value: "100"
        }, {
          item: "12",
          value: "50"
        }, {
          item: "13",
          value: "99"
        }, {
          item: "14",
          value: "99"
        }, {
          item: "15",
          value: "9"
        }, {
          item: "16",
          value: "900"
        }, {
          item: "17",
          value: "10"
        }, {
          item: "18",
          value: "10"
        }, {
          item: "19",
          value: "10"
        }, {
          item: "20",
          value: "10"
        }, {
          item: "21",
          value: "10"
        }, {
          item: "22",
          value: "10"
        }, {
          item: "23",
          value: "99"
        }, {
          item: "24",
          value: "120"
        }, {
          item: "25",
          value: "120"
        }, {
          item: "26",
          value: "10"
        }, {
          item: "27",
          value: "100"
        }, {
          item: "28",
          value: "100"
        }, {
          item: "29",
          value: "100"
        }, {
          item: "30",
          value: "999"
        }, ]
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      // 选择金币
      monClick(res, index) {
        // console.log(index, res)
        this.isActive = index;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .goon {
    .content {
      padding: 10px 0;

      .row {
        background-color: #fff;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);

        .layout {
          padding: 20px 0;

          .layout-cell {
            padding: 10px 0;

            .layout-pull {
              display: flex;
              padding: 0 10px;
              justify-content: space-between;

              .pull-left {
                display: flex;

                .cell-pull {
                  .padd {
                    padding: 6px 0;

                    .cell-color {
                      width: 3px;
                      padding: 10px 0;
                      background-color: #00a5ff;
                    }
                  }
                }

                p {
                  line-height: 34px;
                  padding: 0 10px;
                }
              }
            }

            .data-item {
              .cell-item {
                .time-text {
                  display: flex;

                  p {
                    color: #606266;
                    font-size: 12px;
                  }
                }

                .caret-border {
                  width: 15px;
                  height: 15px;
                  border: 1px #dadada solid;
                  text-align: center;
                  line-height: 15px;
                  margin: 10px 0;
                }

                .cell-flex {
                  display: flex;
                  padding-left: 160px;
                }

                .dialog-box {
                  display: flex;
                  flex-wrap: wrap;

                  .box {
                    padding: 5px;
                    text-align: center;
                    border: 1px #dadada solid;
                    border-radius: 5px;
                    font-size: 12px;
                    line-height: 20px;
                    width: 60px;
                    cursor: pointer;
                    margin: 10px;
                  }

                  .item-box-active {
                    padding: 5px;
                    text-align: center;
                    border: 1px #1f9fff solid;
                    border-radius: 5px;
                    font-size: 12px;
                    color: #1f9fff;
                    line-height: 20px;
                    width: 60px;
                    margin: 10px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>

<style>
  .el-switch__label * {
    font-size: 12px;
  }

  .el-switch__label.is-active {
    color: #303133;
  }

  .el-switch__label {
    color: #409EFF;
  }
</style>