export default {
  name: 'contentView',
  data() {
    return {
      sidebarData: [
        {
          title: "小说",
          key: "/novel",
          icon: "el-icon-user",
        },
        {
          title: "漫画",
          key: "/comics",
          icon: "el-icon-chat-dot-square",
        },
        {
          title: "听书",
          key: "/books",
          icon: "el-icon-edit-outline",
        }
      ],
    }
  },
  mounted() {
    this.activeChanges('/novel')
  },
  methods: {
    subMenuOpens(index, path) {
      console.log('subMenuOpens', index, path)
    },
    subMenuCloses(index, path) {
      console.log('subMenuCloses', index, path)
    },
    activeChanges(index, path) {
      console.log('activeChanges', index, path)
      this.$router.push(index)
    }
  }
}