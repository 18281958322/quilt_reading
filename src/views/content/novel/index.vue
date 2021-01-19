<template>
  <div class="novel">
    <div class="all">
      <div class="row">
        <div class="layout-row">
          <div class="layout-title">
            <p>小说管理</p>
          </div>
          <div class="layout" style="padding: 0 0 20px 20px;">
            <el-tabs v-model="activeName">
              <el-tab-pane label="小说列表" name="first">
                <div class="list">
                  <el-checkbox-group v-model="checkboxGroup1" size="small">
                    <el-checkbox label="频道" border></el-checkbox>
                    <el-checkbox label="男频" border></el-checkbox>
                    <el-checkbox label="女频" border></el-checkbox>
                  </el-checkbox-group>
                </div>
                <div class="list">
                  <el-checkbox-group v-model="checkboxGroup1" size="small">
                    <el-checkbox label="分类" border></el-checkbox>
                    <el-checkbox label="全部" border></el-checkbox>
                    <el-checkbox label="玄幻奇幻" border></el-checkbox>
                    <el-checkbox label="军事历史" border></el-checkbox>
                    <el-checkbox label="穿越" border></el-checkbox>
                    <el-checkbox label="言情" border></el-checkbox>
                  </el-checkbox-group>
                </div>
                <div class="list">
                  <el-checkbox-group v-model="checkboxGroup1" size="small">
                    <el-checkbox label="连载" border></el-checkbox>
                    <el-checkbox label="全部" border></el-checkbox>
                    <el-checkbox label="连载中" border></el-checkbox>
                    <el-checkbox label="已完结" border></el-checkbox>
                  </el-checkbox-group>
                </div>
                <div class="list">
                  <el-checkbox-group v-model="checkboxGroup1" size="small">
                    <el-checkbox label="上线" border></el-checkbox>
                    <el-checkbox label="全部" border></el-checkbox>
                    <el-checkbox label="以上线" border></el-checkbox>
                    <el-checkbox label="以下线" border></el-checkbox>
                  </el-checkbox-group>
                </div>
                <div class="list">
                  <el-checkbox-group v-model="checkboxGroup1" size="small">
                    <el-checkbox label="铭感" border></el-checkbox>
                    <el-checkbox label="全部" border></el-checkbox>
                    <el-checkbox label="铭感" border></el-checkbox>
                    <el-checkbox label="不铭感" border></el-checkbox>
                  </el-checkbox-group>
                </div>
                <div class="list">
                  <el-checkbox-group v-model="checkboxGroup1" size="small">
                    <el-checkbox label="属性" border></el-checkbox>
                    <el-checkbox label="全部" border></el-checkbox>
                    <el-checkbox label="新书" border></el-checkbox>
                    <el-checkbox label="爽文" border></el-checkbox>
                    <el-checkbox label="精选" border></el-checkbox>
                    <el-checkbox label="大神" border></el-checkbox>
                  </el-checkbox-group>
                </div>
                <div class="list">
                  <el-checkbox-group v-model="checkboxGroup1" size="small">
                    <el-checkbox label="会员" border></el-checkbox>
                    <el-checkbox label="全部" border></el-checkbox>
                    <el-checkbox label="会员" border></el-checkbox>
                    <el-checkbox label="非会员" border></el-checkbox>
                  </el-checkbox-group>
                </div>
                <div class="list">
                  <el-checkbox-group v-model="checkboxGroup1" size="small">
                    <el-checkbox label="资费" border></el-checkbox>
                    <el-checkbox label="全部" border></el-checkbox>
                    <el-checkbox label="免费" border></el-checkbox>
                    <el-checkbox label="付费" border></el-checkbox>
                  </el-checkbox-group>
                </div>
                <div class="list">
                  <el-checkbox-group v-model="checkboxGroup1" size="small">
                    <el-checkbox label="20万字以下" border></el-checkbox>
                    <el-checkbox label="20-30万字" border></el-checkbox>
                    <el-checkbox label="30-50万字" border></el-checkbox>
                    <el-checkbox label="50-100万字" border></el-checkbox>
                    <el-checkbox label="100-200万字" border></el-checkbox>
                    <el-checkbox label="200以上" border></el-checkbox>
                  </el-checkbox-group>
                </div>
                <div class="list">
                  <el-checkbox-group v-model="checkboxGroup1" size="small">
                    <el-checkbox label="排序" border></el-checkbox>
                    <el-checkbox label="最近更新" border></el-checkbox>
                    <el-checkbox label="最多浏览" border></el-checkbox>
                    <el-checkbox label="最多收藏" border></el-checkbox>
                    <el-checkbox label="最多字数" border></el-checkbox>
                  </el-checkbox-group>
                </div>
                <div class="list">
                  <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%"
                    @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55">
                    </el-table-column>
                    <el-table-column prop="name" label="封面">
                    </el-table-column>
                    <el-table-column prop="name" label="类型/名称">
                    </el-table-column>
                    <el-table-column prop="name" label="频道">
                    </el-table-column>
                    <el-table-column prop="name" label="来源">
                    </el-table-column>
                    <el-table-column prop="name" label="章节价格">
                    </el-table-column>
                    <el-table-column label="操作">
                    </el-table-column>
                  </el-table>
                </div>
              </el-tab-pane>
              <el-tab-pane label="小说分类" name="second">小说分类</el-tab-pane>
              <el-tab-pane label="上传状态" name="third">上传状态</el-tab-pane>
              <el-tab-pane label="限免小说" name="fourth">限免小说</el-tab-pane>
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