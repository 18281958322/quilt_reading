<template>
  <div class="WorkSpread flex">
    <div class="ws_left">
      <div class="title">魔尊十要</div>
      <div class="text">字数：2000000</div>
      <div class="text">失恋找乐子的陶宝睡了酒吧头牌，隔日扔了钱就跑了。两年后，她带着六个孩子回国。找工作，没想到两年前的头牌变成了KING集团的掌权人。是京都权势熏天掌生死大权的大人物。被采访，镜头前，俊美深沉的男人跷着二郎腿。“您觉得您最优秀的地方是哪里？外貌，才华，财富，权势，选一个？”“繁殖力。</div>
    </div>
    <div class="ws_right flex1">
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="date"
          label="章节序号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="操作">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      tableData: [{
          date: '1',
          name: '第1章  我苦于没有事情可写',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2',
          name: '第2章  八路也得吃饭啊！',
          address: '上海市普陀区金沙江路 1517 弄'
        }]
    }
  }
}
</script>

<style lang="scss">
.WorkSpread {
  width: 100%;
  position: relative;
  height: auto;
  background-color: #fff;
  min-height: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px;
  .ws_left {
    width: 250px;
    min-width: 250px;
    &>div{
      margin-top: 10px;
    }
    .title {
      text-align: left;
      font-size: 16px;
      font-weight: 400;
      color: #333333;
    }
    .text {
      text-align: left;
      font-size: 14px;
      font-weight: 400;
      color: #7F7F7F;
    }
  }
}
</style>