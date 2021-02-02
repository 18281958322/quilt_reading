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
        }
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
                  padding: 5px 0;

                  p {
                    color: #606266;
                    font-size: 12px;
                  }
                }

                .cell-flex {
                  display: flex;
                  padding-left: 160px;
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