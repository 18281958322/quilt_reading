<template>
  <div class="works">
    <div class="row">
      <div class="layout">
        <el-tabs v-model="activeName">
          <el-tab-pane label="新书审核" name="first">
              <First></First>
          </el-tab-pane>
          <el-tab-pane label="上架审核" name="second">
              <Second></Second>
          </el-tab-pane>
          <el-tab-pane label="完结审核" name="third">
              <Third></Third>
          </el-tab-pane>
          <el-tab-pane label="章节审核" name="fourth">
              <Fourth></Fourth>
          </el-tab-pane>
          <el-tab-pane label="作品信息审核" name="allworks">
              <Allworks></Allworks>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import First from '@/views/author/works/first/index'; // 新书审核
import Second from '@/views/author/works/second/index'; // 上架审核
import Third from '@/views/author/works/third/index'; // 完结审核
import Fourth from '@/views/author/works/fourth/index'; // 章节审核
import Allworks from '@/views/author/works/allworks/index'; // 作品信息审核
  export default {
    data() {
      return {
        activeName: 'first'
      }
    },
    components:{
        'First': First,
        'Second': Second,
        'Third': Third,
        'Fourth': Fourth,
        'Allworks': Allworks
    }
  }
</script>

<style lang="scss" scoped>
  .works {

    .row {
      background-color: #fff;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);

      .layout {
        padding: 20px 10px;
      }
    }
  }
</style>