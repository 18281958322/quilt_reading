<template>
  <div class="tripartitepayment">
    <div class="content">
      <div class="row">
        <div class="layout">
          <div class="layout-cell">
            <div class="data-title">
              <p>App ID</p>
            </div>
            <el-input style="width:268px;" v-model="input" placeholder="请输入内容"></el-input>
          </div>
          <div class="layout-cell">
            <div class="data-title">
              <p>公钥</p>
            </div>
            <el-input type="textarea" style="width:268px;" v-model="input" placeholder="请输入内容"></el-input>
          </div>
          <div class="layout-cell">
            <div class="data-title">
              <p>私钥</p>
            </div>
            <el-input type="textarea" style="width:268px;" v-model="input" placeholder="请输入内容"></el-input>
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
  .tripartitepayment {
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
              width: 120px;
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