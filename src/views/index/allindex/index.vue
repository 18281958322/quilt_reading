<template>
  <div class="allindex">
    <div class="box">
      <div class="box-cell">
        <div class="box-title">
          <div class="box-col">
            <div class="box-pull all">
              <p>新增用户（UN）</p>
            </div>
            <div class="box-pull" style="margin-right: 10px;">
              <el-link type="primary">查看详情</el-link>
            </div>
          </div>
          <div class="box-col">
            <div class="box-pull">
              <div class="box-left">
                <div class="cell-pull">
                  <p>今日：</p>
                </div>
                <div class="cell-pull">
                  <p class="size-color">2100</p>
                </div>
              </div>
              <div class="box-left">
                <div class="cell-pull">
                  <p>较昨日：</p>
                </div>
                <div class="cell-pull">
                  <p>0.00%</p>
                </div>
              </div>
            </div>
            <div class="box-pull">
              <div class="box-left">
                <div class="cell-pull">
                  <i class="el-icon-question"></i>
                </div>
              </div>
              <div class="box-left">
                <div class="cell-pull">
                  <p>时间筛选：</p>
                </div>
                <div class="cell-pull">
                  <el-date-picker style="width:130px;" v-model="value1" type="date" placeholder="选择日期">
                  </el-date-picker>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="box-content">
          <div id="chartOne" style="width: 100%;height: 50vh;"></div>
        </div>
      </div>
      <div class="box-cell">
        <div class="box-title">
          <div class="box-col">
            <div class="box-pull all">
              <p>活跃用户（UN）</p>
            </div>
            <div class="box-pull" style="margin-right: 10px;">
              <el-link type="primary">查看详情</el-link>
            </div>
          </div>
          <div class="box-col">
            <div class="box-pull">
              <div class="box-left">
                <div class="cell-pull">
                  <p>今日：</p>
                </div>
                <div class="cell-pull">
                  <p class="size-color">2100</p>
                </div>
              </div>
              <div class="box-left">
                <div class="cell-pull">
                  <p>较昨日：</p>
                </div>
                <div class="cell-pull">
                  <p>0.00%</p>
                </div>
              </div>
            </div>
            <div class="box-pull">
              <div class="box-left">
                <div class="cell-pull">
                  <i class="el-icon-question"></i>
                </div>
              </div>
              <div class="box-left">
                <div class="cell-pull">
                  <p>时间筛选：</p>
                </div>
                <div class="cell-pull">
                  <el-date-picker style="width:130px;" v-model="value1" type="date" placeholder="选择日期">
                  </el-date-picker>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="box-content">
          <div id="chartTwo" style="width: 100%;height: 50vh;"></div>
        </div>
      </div>
      <div class="box-cell">
        <div class="box-title">
          <div class="box-col">
            <div class="box-pull all">
              <p>付费用户（UN）</p>
            </div>
            <div class="box-pull" style="margin-right: 10px;">
              <el-link type="primary">查看详情</el-link>
            </div>
          </div>
          <div class="box-col">
            <div class="box-pull">
              <div class="box-left">
                <div class="cell-pull">
                  <p>今日：</p>
                </div>
                <div class="cell-pull">
                  <p class="size-color">￥2100.05</p>
                </div>
              </div>
              <div class="box-left">
                <div class="cell-pull">
                  <p>较昨日：</p>
                </div>
                <div class="cell-pull">
                  <p>-20.00%</p>
                </div>
              </div>
            </div>
            <div class="box-pull">
              <div class="box-left">
                <div class="cell-pull">
                  <i class="el-icon-question"></i>
                </div>
              </div>
              <div class="box-left">
                <div class="cell-pull">
                  <p>时间筛选：</p>
                </div>
                <div class="cell-pull">
                  <el-date-picker style="width:130px;" v-model="value1" type="date" placeholder="选择日期">
                  </el-date-picker>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="box-content">
          <div id="chartThree" style="width: 100%;height: 50vh;"></div>
        </div>
      </div>
      <div class="box-cell">
        <div class="box-title">
          <div class="box-col">
            <div class="box-pull all">
              <p>付费金额（UN）</p>
            </div>
            <div class="box-pull" style="margin-right: 10px;">
              <el-link type="primary">查看详情</el-link>
            </div>
          </div>
          <div class="box-col">
            <div class="box-pull">
              <div class="box-left">
                <div class="cell-pull">
                  <p>今日：</p>
                </div>
                <div class="cell-pull">
                  <p class="size-color">2100</p>
                </div>
              </div>
              <div class="box-left">
                <div class="cell-pull">
                  <p>较昨日：</p>
                </div>
                <div class="cell-pull">
                  <p>0.00%</p>
                </div>
              </div>
            </div>
            <div class="box-pull">
              <div class="box-left">
                <div class="cell-pull">
                  <i class="el-icon-question"></i>
                </div>
              </div>
              <div class="box-left">
                <div class="cell-pull">
                  <p>时间筛选：</p>
                </div>
                <div class="cell-pull">
                  <el-date-picker style="width:130px;" v-model="value1" type="date" placeholder="选择日期">
                  </el-date-picker>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="box-content">
          <div id="chartfour" style="width: 100%;height: 50vh;"></div>
        </div>
      </div>
      <div class="box-cell">
        <div class="box-title">
          <div class="box-col">
            <div class="box-pull all">
              <p>TOP5作品排行</p>
            </div>
            <div class="box-pull" style="margin-right: 10px;">
              <el-link type="primary">查看详情</el-link>
            </div>
          </div>
          <div class="box-col">
            <div class="box-pull">
              <div class="box-left">
                <div class="cell-pull">
                  <p>今日：</p>
                </div>
                <div class="cell-pull">
                  <p class="size-color">2100</p>
                </div>
              </div>
              <div class="box-left">
                <div class="cell-pull">
                  <p>较昨日：</p>
                </div>
                <div class="cell-pull">
                  <p>0.00%</p>
                </div>
              </div>
            </div>
            <div class="box-pull">
              <div class="box-left">
                <div class="cell-pull">
                  <i class="el-icon-question"></i>
                </div>
              </div>
              <div class="box-left">
                <div class="cell-pull">
                  <p>时间筛选：</p>
                </div>
                <div class="cell-pull">
                  <el-date-picker style="width:130px;" v-model="value1" type="date" placeholder="选择日期">
                  </el-date-picker>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="box-content">
          <div id="chartfivie" style="width: 100%;height: 50vh;"></div>
        </div>
      </div>
      <div class="box-cell">
        <div class="box-title">
          <div class="box-col">
            <div class="box-pull all">
              <p>留存率（RR）</p>
            </div>
            <div class="box-pull" style="margin-right: 10px;">
              <el-link type="primary">查看详情</el-link>
            </div>
          </div>
          <div class="box-col">
            <div class="box-pull">
              <div class="box-left">
                <div class="cell-pull">
                  <p>次日：</p>
                </div>
                <div class="cell-pull">
                  <p class="size-color">55.2%</p>
                </div>
              </div>
              <div class="box-left">
                <div class="cell-pull">
                  <p>较昨日：</p>
                </div>
                <div class="cell-pull">
                  <p>-8.65%</p>
                </div>
              </div>
            </div>
            <div class="box-pull">
              <div class="box-left">
                <div class="cell-pull">
                  <i class="el-icon-question"></i>
                </div>
              </div>
              <div class="box-left">
                <div class="cell-pull">
                  <p>时间筛选：</p>
                </div>
                <div class="cell-pull">
                  <el-date-picker style="width:130px;" v-model="value1" type="date" placeholder="选择日期">
                  </el-date-picker>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="box-content">
          <div id="chartsix" style="width: 100%;height: 50vh;"></div>
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
.el-input__icon{
  line-height: 30px;
}
</style>