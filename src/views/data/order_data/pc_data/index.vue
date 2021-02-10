<template>
  <div class="pc_data">
    <div class="content">
      <div class="row">
        <div class="layout">
          <div class="layout-cell">
            <div class="layout-pull">
              <div class="pull-left">
                <div class="cell-pull">
                  <div class="padd">
                    <p class="cell-color"></p>
                  </div>
                </div>
                <div class="cell-pull">
                  <p>交易概况趋势</p>
                </div>
                <div class="cell-pull">
                  <i class="el-icon-question"></i>
                </div>
              </div>
              <div class="pull-right">
                <div class="cell-pull">
                  <i class="el-icon-question"></i>
                </div>
                <div class="cell-pull">
                  <el-select style="width:100px;" v-model="value" placeholder="今日实时">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </div>
                <div class="cell-pull">
                  <el-date-picker style="width:145px;margin: 0 10px;" v-model="value1" type="date" placeholder="选择日期">
                  </el-date-picker>
                </div>
                <div class="cell-pull">
                  <div class="exportBox flex align-center">
                    <i class="el-icon-s-claim"></i>
                    <span>导出</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="layout-pull-item">
              <div class="row-img">
                <img src="../../../../assets/images/01.png" alt="">
                <p class="box-1">阅读人数</p>
                <p class="box-2">下单</p>
                <p class="box-3">支付</p>
                <p class="a-1">阅读下单转化率 0%</p>
                <p class="a-2">下单结算转化率 0%</p>
                <p class="a-3">阅读结算转化率 0%</p>
              </div>
              <div class="lay-text" style="background-color: #f3f7fe;">
                <div class="res">
                  <div class="box">
                    <p>阅读人数</p>
                    <i class="el-icon-question"></i>
                  </div>
                  <div class="box-1">
                    <p>2</p>
                  </div>
                </div>
              </div>
              <div class="lay-text" style="background-color: #f7fafe;">
                <div class="res">
                  <div class="box">
                    <p>下单人数</p>
                    <i class="el-icon-question"></i>
                  </div>
                  <div class="box-1">
                    <p>2</p>
                  </div>
                </div>
                <div class="res">
                  <div class="box">
                    <p>下单笔数</p>
                    <i class="el-icon-question"></i>
                  </div>
                  <div class="box-1">
                    <p>2</p>
                  </div>
                </div>
                <div class="res">
                  <div class="box">
                    <p>下单金额（元）</p>
                    <i class="el-icon-question"></i>
                  </div>
                  <div class="box-1">
                    <p>0.00</p>
                  </div>
                </div>
              </div>
              <div class="lay-text" style="background-color: #fbfcff;">
                <div class="res">
                  <div class="box">
                    <p>付款人数</p>
                    <i class="el-icon-question"></i>
                  </div>
                  <div class="box-1">
                    <p>2</p>
                  </div>
                </div>
                <div class="res">
                  <div class="box">
                    <p>付款笔数</p>
                    <i class="el-icon-question"></i>
                  </div>
                  <div class="box-1">
                    <p>2</p>
                  </div>
                </div>
                <div class="res">
                  <div class="box">
                    <p>付款金额（元）</p>
                    <i class="el-icon-question"></i>
                  </div>
                  <div class="box-1">
                    <p>0.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="layout-pull-data">
              <div class="box-all">
                <el-radio-group v-model="radio1" size="small">
                  <el-radio-button label="付费金额（元）"></el-radio-button>
                  <el-radio-button label="付费笔数"></el-radio-button>
                  <el-radio-button label="付费人数"></el-radio-button>
                  <el-radio-button label="下单金额（元）"></el-radio-button>
                  <el-radio-button label="下单人数"></el-radio-button>
                </el-radio-group>
              </div>
              <div class="box-all-item">
                <div id="mychart"></div>
              </div>
            </div>
          </div>
          <div class="layout-cell">
            <div class="layout-pull">
              <div class="pull-left">
                <div class="cell-pull">
                  <div class="padd">
                    <p class="cell-color"></p>
                  </div>
                </div>
                <div class="cell-pull">
                  <p>各渠道消费趋势</p>
                </div>
                <div class="cell-pull">
                  <i class="el-icon-question"></i>
                </div>
              </div>
              <div class="pull-right">
                <div class="cell-pull">
                  <i class="el-icon-question"></i>
                </div>
                <div class="cell-pull">
                  <el-select style="width:100px;" v-model="value" placeholder="今日实时">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </div>
                <div class="cell-pull">
                  <el-date-picker style="width:145px;margin: 0 10px;" v-model="value1" type="date" placeholder="选择日期">
                  </el-date-picker>
                </div>
                <div class="cell-pull">
                  <div class="exportBox flex align-center">
                    <i class="el-icon-s-claim"></i>
                    <span>导出</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="layout-cell">
            <div class="layout-pull">
              <div class="pull-left">
                <div class="cell-pull">
                  <div class="padd">
                    <p class="cell-color"></p>
                  </div>
                </div>
                <div class="cell-pull">
                  <p>APP应用付费分布</p>
                </div>
                <div class="cell-pull">
                  <i class="el-icon-question"></i>
                </div>
              </div>
              <div class="pull-right">
                <div class="cell-pull">
                  <i class="el-icon-question"></i>
                </div>
                <div class="cell-pull">
                  <el-select style="width:100px;" v-model="value" placeholder="今日实时">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </div>
                <div class="cell-pull">
                  <el-date-picker style="width:145px;margin: 0 10px;" v-model="value1" type="date" placeholder="选择日期">
                  </el-date-picker>
                </div>
                <div class="cell-pull">
                  <div class="exportBox flex align-center">
                    <i class="el-icon-s-claim"></i>
                    <span>导出</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="layout-cell">
            <div class="layout-pull">
              <div class="pull-left">
                <div class="cell-pull">
                  <div class="padd">
                    <p class="cell-color"></p>
                  </div>
                </div>
                <div class="cell-pull">
                  <p>地域分布</p>
                </div>
                <div class="cell-pull">
                  <i class="el-icon-question"></i>
                </div>
              </div>
              <div class="pull-right"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value1: '',
        value: '',
        radio1: '付费金额（元）',
      }
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  .pc_data {
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

                i {
                  line-height: 34px;
                  color: #7f7f7f;
                }
              }

              .pull-right {
                display: flex;

                .exportBox {

                  i {
                    line-height: 34px;
                    font-size: 18px;
                    color: #00a5ff;
                    margin-right: 2px;
                  }

                  span {
                    color: #00a5ff;
                  }
                }

                i {
                  line-height: 34px;
                  margin-right: 10px;
                  color: #7f7f7f;
                }
              }
            }

            .layout-pull-item {
              position: relative;
              margin: 20px 0;

              .row-img {
                width: 300px;
                height: 150px;
                position: absolute;
                top: 0;
                z-index: 1;
                right: 50px;

                img {
                  width: 100%;
                  height: 100%;
                }

                .box-1 {
                  position: absolute;
                  top: 16px;
                  right: 155px;
                  color: #fff;
                  z-index: 999;
                  font-size: 14px;
                }

                .box-2 {
                  position: absolute;
                  top: 64px;
                  right: 170px;
                  color: #fff;
                  z-index: 999;
                  font-size: 14px;
                }

                .box-3 {
                  position: absolute;
                  top: 114px;
                  right: 170px;
                  color: #fff;
                  z-index: 999;
                  font-size: 14px;
                }

                .a-1 {
                  position: absolute;
                  top: 30px;
                  right: 26px;
                  font-size: 12px;
                  text-align: center;
                  width: 48px;
                  color: #7f7f7f;
                }

                .a-2 {
                  position: absolute;
                  top: 86px;
                  right: 50px;
                  font-size: 12px;
                  text-align: center;
                  width: 48px;
                  color: #7f7f7f;
                }

                .a-3 {
                  position: absolute;
                  top: 70px;
                  right: -33px;
                  font-size: 12px;
                  text-align: center;
                  width: 48px;
                  color: #7f7f7f;
                }
              }

              .lay-text {
                height: 50px;
                width: 100%;
                display: flex;

                .res {
                  width: 200px;
                  line-height: 35px;

                  .box {
                    line-height: 35px;
                    display: flex;
                    font-size: 12px;
                    color: #7c7c7c;

                    p {
                      text-indent: 20px;
                    }

                    i {
                      line-height: 35px;
                      padding: 0 10px;
                      color: #7f7f7f;
                    }
                  }

                  .box-1 {
                    font-size: 14px;
                    text-indent: 22px;
                    font-weight: bold;
                    line-height: 4px;
                  }
                }
              }
            }

            .layout-pull-data {
              padding: 10px 10px;

              .box-all {
                padding: 10px 10px;
                border-top: 1px #dadada solid;
                border-bottom: 1px #dadada solid;
              }
            }
          }
        }
      }
    }
  }
</style>