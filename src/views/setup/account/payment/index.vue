<template>
  <div class="payment">
    <div class="content">
      <div class="row">
        <div class="layout">
          <div class="layout-cell">
            <div class="data-title">
              <p>支付公众号ID</p>
            </div>
            <el-input style="width:268px;" v-model="input" placeholder="请输入内容"></el-input>
          </div>
          <div class="layout-cell">
            <div class="data-title">
              <p>支付公众号secret</p>
            </div>
            <el-input style="width:268px;" v-model="input" placeholder="请输入内容"></el-input>
          </div>
          <div class="layout-cell">
            <div class="data-title">
              <p>支付域名</p>
            </div>
            <el-input style="width:268px;" v-model="input" placeholder="请输入内容"></el-input>
          </div>
          <div class="layout-cell">
            <div class="data-title">
              <p>微信支付商户号</p>
            </div>
            <el-input style="width:268px;" v-model="input" placeholder="请输入内容"></el-input>
          </div>
          <div class="layout-cell">
            <div class="data-title">
              <p>微信支付api密钥</p>
            </div>
            <el-input style="width:268px;" v-model="input" placeholder="请输入内容"></el-input>
          </div>
          <el-divider></el-divider>
          <div class="layout-cell">
            <el-button style="margin-left: 170px;" type="primary">保 存</el-button>
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
        input: ''
      }
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  .payment {
    .content {
      padding: 10px 0;

      .row {
        background-color: #fff;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);

        .layout {
          padding: 20px 0;

          .layout-cell {
            display: flex;
            justify-content: left;
            padding: 10px 3%;

            .data-title {
              width: 105px;
              padding: 6px 0;
              text-align: right;
              margin-right: 20px;
            }
          }
        }
      }
    }
  }
</style>