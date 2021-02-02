<template>
  <div class="data">
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
                <img src="../../assets/images/01.png" alt="">
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

<script src="./script.js"></script>

<style lang="scss" scoped>
  @import './style.scss';
</style>