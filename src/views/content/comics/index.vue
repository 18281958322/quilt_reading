<template>
  <div class="comics">
    <div class="layout-right">
      <el-button size="small" type="primary" @click="addNewnovels()" style="margin-left:10px;">新增漫画</el-button>
      <el-button size="small" type="primary" @click="chapter()">批量购买章节折扣</el-button>
    </div>
    <div class="list">
      <el-link :underline="false" style="margin-right:10px;">类别</el-link>
      <el-radio-group v-model="radio10" size="mini">
        <el-radio-button style="margin-right:10px;" label="全部"></el-radio-button>
        <el-radio-button style="margin-right:10px;border-left:1px solid #DCDFE6;" label="男生"></el-radio-button>
        <el-radio-button style="margin-right:10px;border-left:1px solid #DCDFE6;" label="女生"></el-radio-button>
        <el-radio-button style="margin-right:10px;border-left:1px solid #DCDFE6;" label="出版物"></el-radio-button>
      </el-radio-group>
    </div>
    <div class="list">
      <el-link :underline="false" style="margin-right:10px;">频道</el-link>
      <el-radio-group v-model="radio1" size="mini">
        <el-radio-button style="margin-right:10px;" label="全部"></el-radio-button>
        <el-radio-button style="margin-right:10px;border-left:1px solid #DCDFE6;" label="男频"></el-radio-button>
        <el-radio-button style="margin-right:10px;border-left:1px solid #DCDFE6;" label="女频"></el-radio-button>
      </el-radio-group>
    </div>
    <div class="list">
      <el-link :underline="false" style="margin-right:10px;">分类</el-link>
      <el-radio-group v-model="radio2" size="mini">
        <el-radio-button style="margin-right:10px;" label="全部"></el-radio-button>
        <el-radio-button style="margin-right:10px;border-left:1px solid #DCDFE6;" label="玄幻奇幻"></el-radio-button>
        <el-radio-button style="margin-right:10px;border-left:1px solid #DCDFE6;" label="军事历史"></el-radio-button>
        <el-radio-button style="margin-right:10px;border-left:1px solid #DCDFE6;" label="穿越"></el-radio-button>
        <el-radio-button style="margin-right:10px;border-left:1px solid #DCDFE6;" label="言情"></el-radio-button>
      </el-radio-group>
    </div>
    <div class="list">
      <el-link :underline="false" style="margin-right:10px;">连载</el-link>
      <el-radio-group v-model="radio3" size="mini">
        <el-radio-button style="margin-right:10px;" label="全部"></el-radio-button>
        <el-radio-button style="margin-right:10px;border-left:1px solid #DCDFE6;" label="连载中"></el-radio-button>
        <el-radio-button style="margin-right:10px;border-left:1px solid #DCDFE6;" label="已完结"></el-radio-button>
      </el-radio-group>
    </div>
    <div class="list">
      <el-link :underline="false" style="margin-right:10px;">上线</el-link>
      <el-radio-group v-model="radio4" size="mini">
        <el-radio-button style="margin-right:10px;" label="全部"></el-radio-button>
        <el-radio-button style="margin-right:10px;border-left:1px solid #DCDFE6;" label="以上线"></el-radio-button>
        <el-radio-button style="margin-right:10px;border-left:1px solid #DCDFE6;" label="以下线"></el-radio-button>
      </el-radio-group>
    </div>
    <div class="list">
      <el-link :underline="false" style="margin-right:10px;">铭感</el-link>
      <el-radio-group v-model="radio5" size="mini">
        <el-radio-button style="margin-right:10px;" label="全部"></el-radio-button>
        <el-radio-button style="margin-right:10px;border-left:1px solid #DCDFE6;" label="铭感"></el-radio-button>
        <el-radio-button style="margin-right:10px;border-left:1px solid #DCDFE6;" label="不铭感"></el-radio-button>
      </el-radio-group>
    </div>
    <div class="list">
      <el-link :underline="false" style="margin-right:10px;">属性</el-link>
      <el-radio-group v-model="radio6" size="mini">
        <el-radio-button style="margin-right:10px;" label="全部"></el-radio-button>
        <el-radio-button style="margin-right:10px;border-left:1px solid #DCDFE6;" label="新书"></el-radio-button>
        <el-radio-button style="margin-right:10px;border-left:1px solid #DCDFE6;" label="爽文"></el-radio-button>
        <el-radio-button style="margin-right:10px;border-left:1px solid #DCDFE6;" label="精选"></el-radio-button>
        <el-radio-button style="margin-right:10px;border-left:1px solid #DCDFE6;" label="大神"></el-radio-button>
      </el-radio-group>
    </div>
    <div class="list">
      <el-link :underline="false" style="margin-right:10px;">会员</el-link>
      <el-radio-group v-model="radio7" size="mini">
        <el-radio-button style="margin-right:10px;" label="全部"></el-radio-button>
        <el-radio-button style="margin-right:10px;border-left:1px solid #DCDFE6;" label="会员"></el-radio-button>
        <el-radio-button style="margin-right:10px;border-left:1px solid #DCDFE6;" label="非会员"></el-radio-button>
      </el-radio-group>
    </div>
    <div class="list">
      <el-link :underline="false" style="margin-right:10px;">资费</el-link>
      <el-radio-group v-model="radio8" size="mini">
        <el-radio-button style="margin-right:10px;" label="全部"></el-radio-button>
        <el-radio-button style="margin-right:10px;border-left:1px solid #DCDFE6;" label="免费"></el-radio-button>
        <el-radio-button style="margin-right:10px;border-left:1px solid #DCDFE6;" label="付费"></el-radio-button>
      </el-radio-group>
    </div>
    <div class="list">
      <el-link :underline="false" style="margin-right:10px;">字数</el-link>
      <el-radio-group v-model="radio9" size="mini">
        <el-radio-button style="margin-right:10px;" label="最近更新"></el-radio-button>
        <el-radio-button style="margin-right:10px;border-left:1px solid #DCDFE6;" label="最多浏览"></el-radio-button>
        <el-radio-button style="margin-right:10px;border-left:1px solid #DCDFE6;" label="最多收藏"></el-radio-button>
      </el-radio-group>
    </div>
    <el-divider></el-divider>
    <div class="list">
      <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column prop="name" align="center" label="封面">
        </el-table-column>
        <el-table-column prop="name" align="center" label="类型/名称">
        </el-table-column>
        <el-table-column prop="name" align="center" label="频道">
        </el-table-column>
        <el-table-column prop="name" align="center" label="来源">
        </el-table-column>
        <el-table-column prop="name" align="center" label="章节价格">
        </el-table-column>
        <el-table-column label="操作" align="center" width="180">
          <template slot-scope="scope">
            <el-button @click="chapterClick(scope.row)" type="text" size="small">章节管理</el-button>
            <el-button @click="editClick(scope.row)" type="text" size="small">编辑</el-button>
            <el-button @click="handleClick(scope.row)" type="text" size="small">下线</el-button>
            <el-button @click="editClick(scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection([tableData[1], tableData[2]])">设置价格</el-button>
      <el-button @click="toggleSelection()">设置会员</el-button>
      <el-button @click="toggleSelection()">取消会员</el-button>
      <el-button @click="toggleSelection()">批量上架</el-button>
      <el-button @click="toggleSelection()">批量下架</el-button>
      <el-button @click="toggleSelection()">批量删除</el-button>
    </div>
    <div class="layout-centent">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" scoped>
  @import './style.scss';
</style>

<style>
  .el-radio-button:first-child .el-radio-button__inner {
    border-radius: 0;
  }

  .el-radio-button:last-child .el-radio-button__inner {
    border-radius: 0;
  }
</style>