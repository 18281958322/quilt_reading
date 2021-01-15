
export default {
  name: 'index',
  data() {
    return {
      sidebarData: [
        {
          title: "用户列表",
          key: "s1",
          icon: "el-icon-user",
        },
        {
          title: "用户评论",
          key: "s2",
          icon: "el-icon-chat-dot-square",
        },
        {
          title: "用户反馈",
          key: "s3",
          icon: "el-icon-edit-outline",
        }
      ],
    }
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
    }
  }
}