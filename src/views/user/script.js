export default {
  name: 'userView',
  data() {
    return {
      sidebarData: [
        {
          title: "用户列表",
          key: "/userlist",
          icon: "el-icon-user",
        },
        {
          title: "用户评论",
          key: "/usercomment",
          icon: "el-icon-chat-dot-square",
        },
        {
          title: "用户反馈",
          key: "/customerfeedback",
          icon: "el-icon-edit-outline",
        }
      ],
    }
  },
  mounted() {
    this.activeChanges('/userlist')
  },
  methods: {
    subMenuOpens(index, path) {
      console.log('subMenuOpens', index, path)
    },
    subMenuCloses(index, path) {
      console.log('subMenuCloses', index, path)
    },
    activeChanges(index, path) {
      this.$router.push(index)
    }
  }
}