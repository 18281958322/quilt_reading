<template>
  <div class="GO_rankingList">
    <div class="flex align-center">
      <div class="pagetitle">排行榜</div>
      <el-tooltip
        class="item"
        effect="dark"
        content="先创建榜单频道，再在对应频道下创建榜单。"
        placement="right"
      >
        <i style="color: #d0d0d0;margin-left: 12px;font-size: 18px" class="el-icon-question"></i>
      </el-tooltip>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="榜单" name="first">
        <div
          style="margin: 0 0 20px"
          class="flex align-center GO_rankingListHeader justify-between"
        >
          <div class="flex">
						<el-select style="width:150px" v-model="value" placeholder="请选择">
							<el-option
								v-for="item in options"
								:key="item.value"
								:label="item.label"
								:value="item.value">
							</el-option>
						</el-select>
            <el-input style="margin:0px 0px 0px 10px;width:200px" placeholder="榜单名" v-model="input" clearable> </el-input>
            <div style="margin: 0 0 0 10px" class="isbutton bt1">搜索</div>
          </div>
          <div @click="openPage('/addRanking')" class="isbutton bt1">新增榜单</div>
        </div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column prop="id" label="榜单名称"> </el-table-column>
          <el-table-column label="榜单类型">
            <template slot-scope="scope"> </template>
          </el-table-column>
					 <el-table-column label="榜单内容">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="频道内容">
            <template slot-scope="scope"> </template>
          </el-table-column>
					<el-table-column label="描述">
            <template slot-scope="scope"> </template>
          </el-table-column>
					<el-table-column label="作品数">
            <template slot-scope="scope"> </template>
          </el-table-column>
					<el-table-column label="排序">
            <template slot-scope="scope"> </template>
          </el-table-column>
					<el-table-column label="状态">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <a
                style="color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
              >
                排序
              </a>
              <a
								@click="openPage('/setRanking')"
                style="color: #00a5ff; font-size: 12px; margin-left: 4px"
                href="javascript:void(0)"
                >编辑</a
              >
							<a
								@click="openPage('/rankingProduction')"
                style="margin-left: 4px; color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
                >榜单作品</a
              >
              <a
								@click="open('确定删除该榜单么？')"
                style="margin-left: 4px; color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
                >删除</a
              >
							<a
                style="margin-left: 4px; color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
                >下线</a
              >
            </template>
          </el-table-column>
        </el-table>
        <div class="flex justify-between GO_rankingListBottom align-center">
          <div @click="open('确定删除选中榜单么？')" class="isbutton bt0">批量删除</div>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
          >
          </el-pagination>
        </div>
      </el-tab-pane>
      <el-tab-pane label="榜单频道" name="second">
        <div
          style="margin: 0 0 20px"
          class="flex align-center GO_rankingListHeader justify-between"
        >
          <div class="flex">
						<el-select style="width:150px" v-model="value" placeholder="请选择">
							<el-option
								v-for="item in options"
								:key="item.value"
								:label="item.label"
								:value="item.value">
							</el-option>
						</el-select>
            <el-input style="margin:0px 0px 0px 10px;width:200px" placeholder="榜单频道名" v-model="input" clearable> </el-input>
            <div style="margin: 0 0 0 10px" class="isbutton bt1">搜索</div>
          </div>
          <div @click="addPD = true" class="isbutton bt1">新增榜单频道</div>
        </div>
        <el-table :data="tableData1" border style="width: 100%">
          <el-table-column label="榜单频道名"> </el-table-column>
          <el-table-column prop="id" label="频道内容">
          </el-table-column>
					 <el-table-column label="榜单数（点击查看）">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="频道内容">
            <template slot-scope="scope"> </template>
          </el-table-column>
					<el-table-column label="榜单数（点击查看）">
            <template slot-scope="scope"> </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <a
                style="color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
              >
                排序
              </a>
              <a
								@click="setPD = true"
                style="color: #00a5ff; font-size: 12px; margin-left: 4px"
                href="javascript:void(0)"
                >编辑</a
              >
              <a
								@click="open('确定删除该榜单么？')"
                style="margin-left: 4px; color: #00a5ff; font-size: 12px"
                href="javascript:void(0)"
                >删除</a
              >
            </template>
          </el-table-column>
        </el-table>
        <div class="flex justify-between GO_rankingListBottom align-center">
          <div @click="open('确定删除选中榜单么？')" class="isbutton bt0">批量删除</div>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
          >
          </el-pagination>
        </div>
      </el-tab-pane>
    </el-tabs>
		<el-dialog title="新增榜单频道" :visible.sync="addPD" width="600px">
      <el-form
        :model="form"
        :rules="rules"
        ref="ruleForm"
        label-width="90px"
        class="demo-ruleForm"
      >
        <el-form-item label="榜单频道名" prop="requireds">
          <el-input style="width: 300px" v-model="form.name"></el-input>
        </el-form-item>
				<el-form-item label="频道内容" prop="requireds">
          <el-radio-group v-model="form.resource" prop="requireds">
						<el-radio label="小说"></el-radio>
						<el-radio label="漫画"></el-radio>
						<el-radio label="听书"></el-radio>
					</el-radio-group>
        </el-form-item>
				<el-form-item label="设为默认频道">
          <el-switch v-model="form.delivery"></el-switch>
					<div style="color: #dedede;font-size:12px">开启后，从对应内容的首页点击"排行榜"，会直接跳转到对应榜单频道，每个内容仅有1个默认频道</div>
        </el-form-item>
				<el-form-item label="排序" prop="requireds">
          <el-input style="width: 300px" v-model="form.name"></el-input>
        </el-form-item>
        <el-from-item>
          <div class="flex justify-center">
            <div class="isbutton bt0">取消</div>
						<div style="margin: 0 0 0 12px"  class="isbutton bt1">确定</div>
          </div>
        </el-from-item>
      </el-form>
    </el-dialog>
		<el-dialog title="编辑榜单频道" :visible.sync="setPD" width="600px">
      <el-form
        :model="form"
        :rules="rules"
        ref="ruleForm"
        label-width="90px"
        class="demo-ruleForm"
      >
        <el-form-item label="榜单频道名" prop="requireds">
          <el-input style="width: 300px" v-model="form.name"></el-input>
        </el-form-item>
				<el-form-item label="频道内容" prop="requireds">
          <el-radio-group v-model="form.resource" prop="requireds">
						<el-radio label="小说"></el-radio>
						<el-radio label="漫画"></el-radio>
						<el-radio label="听书"></el-radio>
					</el-radio-group>
        </el-form-item>
				<el-form-item label="设为默认频道">
          <el-switch v-model="form.delivery"></el-switch>
					<div style="color: #dedede;font-size:12px">开启后，从对应内容的首页点击"排行榜"，会直接跳转到对应榜单频道，每个内容仅有1个默认频道</div>
        </el-form-item>
				<el-form-item label="排序" prop="requireds">
          <el-input style="width: 300px" v-model="form.name"></el-input>
        </el-form-item>
        <el-from-item>
          <div class="flex justify-center">
            <div class="isbutton bt0">取消</div>
						<div style="margin: 0 0 0 12px"  class="isbutton bt1">确定</div>
          </div>
        </el-from-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "GO_rankingList",
  data() {
    return {
      tableData: [
        {
          id: "1",
        },
			],
			tableData1: [
        {
          id: "小说（小说默认频道）",
				},
				{
          id: "漫画（漫画默认频道）",
				},
				{
          id: "听书（听书默认频道）",
				},
				{
          id: "小说",
				},
				{
          id: "漫画",
				},
				{
          id: "听说",
        },
      ],
      input: "",
      activeName: "first",
			currentPage4: 4,
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
			form: {
        name: "",
				region: "",
				resource: '',
				delivery: true
      },
      rules: {
        requireds: [{ required: true, message: "这是必填项", trigger: "blur" }],
			},
			addPD: false,
			setPD: false,
    };
  },
  methods: {
    handleClick: function () {},
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
		},
		openPage(val) {
			this.$router.push(val)
		},
		open(val = "") {
      this.$confirm(val, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>

<style lang="scss">
.GO_rankingList {
  .el-table th {
    background-color: #f2f4f8;
  }
}
.GO_rankingListHeader {
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
.GO_rankingListBottom {
  margin: 20px 0 0;
}
.pagetitle {
  font-size: 16px;
  color: #3c3d40;
  white-space: normal;
  padding: 18px 0;
  font-weight: 400;
}
.GO_rankingList {
  width: 100%;
  position: relative;
  height: auto;
  background-color: #fff;
  min-height: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px;
}
</style>