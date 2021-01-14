<template>
  <el-menu
    :background-color="backgroundColor"
    :text-color="textColor"
    :active-text-color="activeTextColor"
    :default-active="defaultActive"
    class="el-menu-vertical-demo"
    @select="menuChange"
    @open="handleOpen"
    @close="handleClose">
    <submenu v-for="item in treeData" :key="item.key" :subVal="item" />
  </el-menu>
</template>

<script>
/**
 * 侧边栏组件
 * @treeData 侧边栏数据，树形结构数组
 * @defaultActive 默认选中项,每个对象必须携带唯一标识 key
 * @backgroundColor 菜单的背景色（仅支持 hex 格式）
 * @textColor 菜单的文字颜色（仅支持 hex 格式）
 * @activeTextColor 当前激活菜单的文字颜色（仅支持 hex 格式）
 * @mode 模式 horizontal / vertical
 */
import submenu from './submenu'
export default {
    name: 'sidebar',
    components: { submenu },
    props: {
      treeData: {
        required: true,
        default: [],
        type: Array
      },
      defaultActive: {
        required: false,
        default: '',
        type: String
      },
      backgroundColor: {
        required: false,
        default: '#ffffff',
        type: String
      },
      textColor: {
        required: false,
        default: '#303133',
        type: String
      },
      activeTextColor: {
        required: false,
        default: '#409EFF',
        type: String
      },
      mode: {
        required: false,
        default: 'vertical',
        type: String
      }
    },
    methods: {
      //sub-menu 展开的回调
      handleOpen(index, keyPath) {
        this.$emit('subMenuOpen', index, keyPath)
      },
      //sub-menu 收起的回调
      handleClose(index, keyPath) {
        this.$emit('subMenuClose', index, keyPath)
      },
      //菜单激活回调
      menuChange(index, indexPath) {
        this.$emit('activeChange', index, indexPath)
      }
    }
}
</script>

<style>

</style>