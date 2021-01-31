<template>
  <div class="ToPromoteLinks">
    <div class="pagetitle">推广链接</div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="小说" name="first">
        <ul class="customTabs">
          <li class="active">推广链接</li>
          <li>渠道推广链接</li>
        </ul>
        <div style="margin: 20px 0" class="flex align-center">
          <el-date-picker
            v-model="value1"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
          <el-select style="margin: 0 0 0 10px" v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-input style="margin: 0 0 0 10px" placeholder="推广名称" v-model="input" clearable>
          </el-input>
          <div style="margin: 0 0 0 10px" class="isbutton bt1">搜索</div>
        </div>
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="id"
            label="id"
            width="80">
          </el-table-column>
          <el-table-column
            label="推广链接">
            <template slot-scope="scope">
              <div style="color:#333;font-size:14px;margin-top:2px">推广名称：昭南文学【阮甜】书单强烈推荐txt1</div>
              <div style="color:#333;font-size:14px;margin-top:2px">https://mmbizurl.cn/s/bBh9kdUDr</div>
              <div style="color:#999999;font-size:12px;margin-top:2px">创建时间:2020-12-03 10:43:35</div>
            </template>
          </el-table-column>
          <el-table-column
            label="入口页面">
            <template slot-scope="scope">
              <div style="color:#333;font-size:13px;margin-top:2px">魔尊十要</div>
              <div style="color:#333;font-size:13px;margin-top:2px">第001章 穿越</div>
              <div style="color:#333;font-size:13px;margin-top:2px">关注章节：第10章</div>
            </template>
          </el-table-column>
          <el-table-column
            label="推广类型">
            <template slot-scope="scope">
              <div style="color:#333;font-size:13px;margin-top:2px">外推</div>
            </template>
          </el-table-column>
          <el-table-column
            label="点击数（PV）">
            <template slot-scope="scope">
              <div style="color:#333;font-size:13px;margin-top:2px">新增用户：0</div>
              <div style="color:#333;font-size:13px;margin-top:2px">关注用户：0</div>
              <div style="color:#333;font-size:13px;margin-top:2px">关注率：0.0%</div>
            </template>
          </el-table-column>
          <el-table-column
            label="用户数">
            <template slot-scope="scope">
              <div style="color:#333;font-size:13px;margin-top:2px">新增用户：0</div>
              <div style="color:#333;font-size:13px;margin-top:2px">关注用户：0</div>
              <div style="color:#333;font-size:13px;margin-top:2px">关注率：0.0%</div>
            </template>
          </el-table-column>
          <el-table-column
            label="累计充值">
            <template slot-scope="scope">
              <div style="color:#333;font-size:13px;margin-top:2px">充值金额：￥0.00</div>
              <div style="color:#333;font-size:13px;margin-top:2px">充值笔数：0</div>
            </template>
          </el-table-column>
          <el-table-column
            label="成本">
            <template slot-scope="scope">
              <div style="color:#333;font-size:13px;margin-top:2px">￥100.00</div>
            </template>
          </el-table-column>
          <el-table-column
            label="利润">
            <template slot-scope="scope">
              <div style="color:#333;font-size:13px;margin-top:2px">￥-100.00</div>
              <div style="color:#333;font-size:13px;margin-top:2px">回本率：0.0%</div>
            </template>
          </el-table-column>
          <el-table-column
            label="操作">
            <template slot-scope="scope">
              <a @click="openTpl_orderDetails" href="javascript:void(0)">订单明细</a>
              <a style="margin-left: 5px" href="javascript:void(0)">粉丝列表</a>
              <a style="margin-left: 5px" href="javascript:void(0)">删除</a>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="漫画" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="听书" name="third">角色管理</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "ToPromoteLinks",
  data() {
    return {
      value1: '',
      input: "",
      activeName: "first",
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
      tableData: [{
        id: '1',
      }]
    };
  },
  methods: {
    handleClick: function (val) {},
    openTpl_orderDetails() {
      this.$router.push('/tpl_orderDetails')
    }
  },
};
</script>

<style lang="scss">
.ToPromoteLinks {
  .el-table th {
    background-color: #f2f4f8;
  }
  .el-input {
    width: 190px;
  }
  .el-input__inner {
    height: 34px;
    line-height: 34px;
  }
  .el-input__icon {
    line-height: 34px;
  }
}
</style>

<style lang='scss' scoped>
.pagetitle {
  font-size: 16px;
  color: #3c3d40;
  white-space: normal;
  padding: 18px 0;
  font-weight: 400;
}
.ToPromoteLinks {
  width: 100%;
  position: relative;
  height: auto;
  background-color: #fff;
  min-height: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px;
  .customTabs {
    li:nth-child(n+2) {
      border-left: none;
    }
    li {
      display: inline-block;
      font-size: 13px;
      font-family: 'Arial Normal', 'Arial', sans-serif;
      font-weight: 400;
      font-style: normal;
      height: 30px;
      line-height: 30px;
      padding-left: 16px;
      padding-right: 16px;
      text-align: center;
    }
    li.active {
      color: #00a5ff;
      border: 1px solid #00a5ff
    }
    li:not(.active) {
      color: #333;
      border: 1px solid #aaaaaa
    }
  }
}
</style>