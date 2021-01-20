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

import { mapState } from "vuex";
export default {
  name: "sidebar",
  props: {
    treeData: {
      required: true,
      default: [],
      type: Array,
    },
    defaultActive: {
      required: false,
      default: "",
      type: String,
    },
    backgroundColor: {
      required: false,
      default: "#ffffff",
      type: String,
    },
    textColor: {
      required: false,
      default: "#303133",
      type: String,
    },
    activeTextColor: {
      required: false,
      default: "#409EFF",
      type: String,
    },
    mode: {
      required: false,
      default: "vertical",
      type: String,
    },
    collapse: {
      required: false,
      default: false,
      type: Boolean,
    }
  },
  methods: {
    //sub-menu 展开的回调
    handleOpen(index, keyPath) {
      this.$emit("subMenuOpen", index, keyPath);
    },
    //sub-menu 收起的回调
    handleClose(index, keyPath) {
      this.$emit("subMenuClose", index, keyPath);
    },
    //菜单激活回调
    menuChange(index, indexPath) {
      this.$emit("activeChange", index, indexPath);
    },
    createSideBarMenuItem (createElement, sv){
      const that = this
      if (sv.children && sv.children.length > 0) {
        return createElement(
          'el-submenu', { props: { index: sv.key }, key: sv.key },
          [
            createElement(
              'template', { slot: 'title' }, (function() {
                let tmpChilds = []
                if (sv.icon) {
                  tmpChilds.push(
                    createElement("i", {
                      class: sv.icon,
                    }),
                  )
                }
                tmpChilds.push(
                  createElement("span", {
                      domProps: {
                        innerHTML: sv.title,
                      },
                  })
                )
                return tmpChilds
              })()
            ),
            ...(function() {
              let tmpChilds2 = []
              for (let item of sv.children) {
                tmpChilds2.push(that.createSideBarMenuItem(createElement, item))
              }
              return tmpChilds2
            })()
          ]
        )
      } else {
        return createElement(
          "el-menu-item",
          {
            props: {
              index: sv.key,
            },
            key: sv.key,
          },
          (function() {
            let tmpChilds = []
            if (sv.icon) {
              tmpChilds.push(
                createElement("i", {
                  class: sv.icon,
                }),
              )
            }
            tmpChilds.push(
              createElement("span", {
                  domProps: {
                    innerHTML: sv.title,
                  },
                  slot: 'title'
              })
            )
            return tmpChilds
          })()
        )
      }
    }
  },
  render: function(createElement) {
    return createElement(
      "el-menu",
      {
        style: {
          border: "none",
        },
        props: {
          router: false,
          collapse: this.collapse,
          backgroundColor: this.backgroundColor,
          textColor: this.textColor,
          activeTextColor: this.activeTextColor,
          defaultActive: this.defaultActive,
          mode: this.mode,
          collapseTransition: true,
        },
        on: {
          select: this.menuChange,
          open: this.handleOpen,
          close: this.handleClose,
        },
        class: this.mode === 'vertical' ? ['el-menu-vertical-demo'] : []
      },
      this.treeData.map((item) => this.createSideBarMenuItem(createElement, item))
    )
  }
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 226px;
  min-height: 400px;
}
</style>