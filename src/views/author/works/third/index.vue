<template>
  <div class="third">
    <div class="layout">
      <el-select style="width:128px;" v-model="value" placeholder="全部状态">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
      <el-input style="width:168px;margin:0 10px;" v-model="input" placeholder="作品名/作家ID/笔名"></el-input>
      <el-button size="mini" type="primary">搜索</el-button>
    </div>
    <div class="layout">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" align="center" width="50" label="序号">
        </el-table-column>
        <el-table-column prop="name" label="书籍ID" align="center" width="120">
        </el-table-column>
        <el-table-column prop="name" label="封面" align="center" width="120">
        </el-table-column>
        <el-table-column prop="name" label="名称" align="center" width="120">
        </el-table-column>
        <el-table-column prop="name" label="章节数" align="center">
        </el-table-column>
        <el-table-column prop="name" label="作者笔名" align="center" width="120">
        </el-table-column>
        <el-table-column prop="name" label="责编" align="center" width="120">
        </el-table-column>
        <el-table-column prop="name" label="频道" align="center" width="120">
        </el-table-column>
        <el-table-column prop="name" label="字数" align="center" width="120">
        </el-table-column>
        <el-table-column prop="name" label="状态" align="center" width="120">
        </el-table-column>
        <el-table-column prop="name" label="创建时间" align="center" width="120">
        </el-table-column>
        <el-table-column prop="name" label="提交审核时间" align="center" width="120">
        </el-table-column>
        <el-table-column label="操作" fixed="right" align="center" width="50">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">审核</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="layout-page">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
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
        input: '',
        currentPage4: 4,
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .third {
    padding: 10px 0;

    .layout {
      display: flex;
    }

    .layout-page{
        display: flex;
        justify-content: center;
        padding: 20px 0
    }
  }
</style>