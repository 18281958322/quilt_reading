<template>
  <div class="remuneration">
    <div class="row">
      <div class="layout">
        <div class="layout-title">
          <el-select style="width:128px;" v-model="value" placeholder="全部时间">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
          <el-input style="width:128px;margin-left:10px;" v-model="input" placeholder="书籍ID/书籍名称"></el-input>
          <el-button style="margin:0 10px;" type="primary">搜索</el-button>
          <el-link underline type="primary">或</el-link>
          <el-select style="width:128px;margin:0 10px;" v-model="value" placeholder="自然月">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
          <el-date-picker style="width:128px;" v-model="value1" type="date" placeholder="选择日期">
          </el-date-picker>
          <el-input style="width:128px;margin:0 10px;" v-model="input" placeholder="书籍ID/书籍名称"></el-input>
          <el-button type="primary">搜索</el-button>
        </div>
        <div class="layout-div">
          <div class="layout-cell">
            <div class="layout-pull">
                <p>累计订阅/买断结算</p>
            </div>
            <div class="layout-pull">
                <p class="mou">￥200000</p>
            </div>
          </div>
          <div class="layout-cell">
            <div class="layout-pull">
                <p>累计奖励结算</p>
            </div>
            <div class="layout-pull">
                <p class="mou">￥1000</p>
            </div>
          </div>
          <div class="layout-cell">
            <div class="layout-pull">
                <p>累计三方订阅结算</p>
            </div>
            <div class="layout-pull">
                <p class="mou">￥2323</p>
            </div>
          </div>
          <div class="layout-cell">
            <div class="layout-pull">
                <p>累计实发合计</p>
            </div>
            <div class="layout-pull">
                <p class="mou">￥3988</p>
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
        value: '',
        value1: '',
        input: ''
      }
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  .remuneration {
    padding: 1% 5px;

    .row {
      background-color: #fff;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);

      .layout {
        padding: 10px 0px;

        .layout-title {
          padding: 10px 10px;
          display: flex;
        }

        .layout-div {
          display: flex;
          justify-content: space-around;

          .layout-cell {
            width: 23%;
            padding: 10px 0;
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
            
            .layout-pull{
                text-indent: 10%;
                color: #333333;

                .mou{
                    color: #2d6ada;
                    font-size: 20px;
                    padding: 20px 0;
                }
            }
          }
        }
      }
    }
  }
</style>