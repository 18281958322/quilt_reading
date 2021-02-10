<template>
  <div class="novel">
    <div class="all">
      <div class="row">
        <div class="layout-row">
          <div class="layout" style="padding: 0 0 20px 20px;">
            <el-tabs v-model="activeName">
              <el-tab-pane label="听书列表" name="first">
                <ListofNovels></ListofNovels>
              </el-tab-pane>
              <el-tab-pane label="听书分类" name="second">
                <Classification></Classification>
              </el-tab-pane>
              <el-tab-pane label="大类别" name="majorall">
                <Major></Major>
              </el-tab-pane>
            </el-tabs>
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