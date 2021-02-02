<template>
  <div class="operations">
    <div class="content">
      <div class="row">
        <div class="layout">
          <div class="layout-cell" style="margin-bottom:20px;">
            <div class="data-title">
              <p>存储方式</p>
            </div>
            <el-select v-model="value" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="layout-cell">
            <div class="data-title">
              <p>AccessKey ID</p>
            </div>
            <el-input style="width:368px;" v-model="input" placeholder="请输入内容"></el-input>
          </div> 
          <div class="layout-cell">
            <div class="data-title">
            </div>
            <div class="data-text" style="width:368px;">
              <p>AccessKey ID 和 AccessKey Secret 是您访问阿里云 API 的密钥</p>
            </div>
          </div>
          <div class="layout-cell" style="margin-bottom:20px;">
            <div class="data-title">
              <p>AccessKey Secret</p>
            </div>
            <el-input style="width:368px;" v-model="input" placeholder="请输入内容"></el-input>
          </div>
          <div class="layout-cell">
            <div class="data-title">
              <p>Bucket</p>
            </div>
            <el-input style="width:368px;" v-model="input" placeholder="请输入内容"></el-input>
          </div>
          <div class="layout-cell">
            <div class="data-title">
            </div>
            <div class="data-text" style="width:368px;">
              <p>阿里云OSS的Bucket名称</p>
            </div>
          </div>
          <div class="layout-cell">
            <div class="data-title">
              <p>Bucket 外网域名</p>
            </div>
            <el-input style="width:368px;" v-model="input" placeholder="请输入内容"></el-input>
          </div>
          <div class="layout-cell">
            <div class="data-title">
            </div>
            <div class="data-text" style="width:368px;">
              <p>Bucket 外网访问域名</p>
            </div>
          </div>
          <div class="layout-cell">
            <div class="data-title">
              <p>Bucket 内网域名</p>
            </div>
            <el-input style="width:368px;" v-model="input" placeholder="请输入内容"></el-input>
          </div>
          <div class="layout-cell">
            <div class="data-title">
            </div>
            <div class="data-text" style="width:368px;">
              <p>Bucket 内网访问域名</p>
            </div>
          </div>
          <el-divider></el-divider>
          <div class="layout-cell" style="margin-top:20px;">
            <el-button style="margin-left: 170px;" type="primary">保 存</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "operations",
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
        input: ''
      };
    },
    methods: {

    }
  };
</script>

<style lang='scss' scoped>
  .operations {
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
            padding: 0 3%;
            color: #333333;
            margin: 10px 0;

            .data-title {
              width: 150px;
              padding: 6px 0;
              text-align: right;
              margin-right: 20px;
            }

            .data-text{
              font-size: 12px;
            }
          }
        }
      }
    }
  }
</style>